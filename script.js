/* ================================================
   TooGreen — script.js
   ================================================ */

/* ---- NAVBAR scroll effect ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---- Hamburger menu ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---- Active nav link ---- */
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

/* ---- Animated counters ---- */
function animateCounter(el, target, decimals = 0) {
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = target * ease;
    el.textContent = decimals > 0
      ? current.toFixed(decimals)
      : Math.round(current).toLocaleString('fr-FR');
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString('fr-FR');
  }
  requestAnimationFrame(update);
}

/* ---- Intersection Observer for animations ---- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    if (entry.target.classList.contains('feature-card')) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => entry.target.classList.add('visible'), delay);
    }
    if (entry.target.classList.contains('stat-num')) {
      animateCounter(entry.target, parseInt(entry.target.dataset.target));
    }
    if (entry.target.classList.contains('counter')) {
      const target = parseFloat(entry.target.dataset.target);
      animateCounter(entry.target, target, String(target).includes('.') ? 1 : 0);
    }
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.feature-card, .stat-num, .counter').forEach(el => observer.observe(el));

/* ================================================
   AI ASSISTANT — Anthropic API integration
   ================================================ */
const chatMessages = document.getElementById('chatMessages');
const chatInput    = document.getElementById('chatInput');
const sendBtn      = document.getElementById('sendBtn');

const conversationHistory = [];

const SYSTEM_PROMPT = `Tu es l'assistant IA de TooGreen, une plateforme française dédiée à l'écologie et au développement durable.

Ton rôle :
- Conseiller les utilisateurs sur les gestes écologiques du quotidien
- Répondre aux questions sur le tri des déchets, la mobilité verte, l'alimentation durable, l'énergie et l'habitat
- Donner des informations adaptées au contexte français (réglementation, collectivités, services disponibles en France)
- Encourager et motiver sans culpabiliser
- Être concis, bienveillant et pratique

Ton style :
- Réponds toujours en français
- Utilise occasionnellement des emojis verts (🌿 ♻️ 🌱 💚) mais sans en abuser
- Sois factuel et précis, cite des chiffres concrets quand tu en connais
- Propose toujours une action concrète à faire maintenant
- Garde tes réponses sous 3 paragraphes sauf si une liste est vraiment utile
- Tu t'appelles "l'Assistant TooGreen"

Si une question est hors sujet (pas liée à l'écologie/environnement/durabilité), ramène doucement la conversation vers ces thèmes en expliquant gentiment ton rôle.`;

function appendMessage(role, text) {
  const div = document.createElement('div');
  div.className = `message ${role === 'user' ? 'user-message' : 'bot-message'}`;
  if (role === 'assistant') {
    div.innerHTML = `
      <div class="message-avatar"><img src="logo.png" alt="TooGreen" /></div>
      <div class="message-bubble">${escapeHtml(text).replace(/\n/g, '<br>')}</div>
    `;
  } else {
    div.innerHTML = `<div class="message-bubble">${escapeHtml(text)}</div>`;
  }
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendTyping() {
  const div = document.createElement('div');
  div.className = 'message bot-message typing-indicator';
  div.id = 'typingIndicator';
  div.innerHTML = `
    <div class="message-avatar"><img src="logo.png" alt="" /></div>
    <div class="message-bubble">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

async function callAnthropicAPI(userMessage) {
  conversationHistory.push({ role: 'user', content: userMessage });

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: conversationHistory
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${response.status}`);
  }

  const data = await response.json();
  const assistantText = data.content
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('');

  conversationHistory.push({ role: 'assistant', content: assistantText });
  return assistantText;
}

async function sendMessage() {
  if (!chatInput || !sendBtn || !chatMessages) return;
  const text = chatInput.value.trim();
  if (!text || sendBtn.disabled) return;

  chatInput.value = '';
  sendBtn.disabled = true;
  appendMessage('user', text);
  appendTyping();

  document.querySelector('.chat-suggestions').style.display = 'none';

  try {
    const reply = await callAnthropicAPI(text);
    removeTyping();
    appendMessage('assistant', reply);
  } catch (err) {
    removeTyping();
    appendMessage('assistant',
      `🌿 Désolé, je rencontre une petite difficulté technique. Réessayez dans un instant !\n\n(${err.message})`
    );
    conversationHistory.pop();
    conversationHistory.pop();
  } finally {
    sendBtn.disabled = false;
    chatInput.focus();
  }
}

function sendSuggestion(btn) {
  if (!chatInput) return;
  chatInput.value = btn.textContent;
  sendMessage();
}

if (chatInput) {
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
}

/* ================================================
   PWA — Service Worker + Install Banner
   ================================================ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const banner = document.getElementById('installBanner');
  if (banner) banner.style.display = 'flex';
});

const installBtn = document.getElementById('installBtn');
if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    document.getElementById('installBanner').style.display = 'none';
  });
}

window.addEventListener('appinstalled', () => {
  const banner = document.getElementById('installBanner');
  if (banner) banner.style.display = 'none';
  deferredInstallPrompt = null;
});
