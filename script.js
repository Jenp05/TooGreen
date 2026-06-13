/* ========================================
   TooGreen — Global JavaScript
   - Header scroll effect
   - Burger menu
   - Language switcher (FR/EN)
   - FAQ accordion
   - Scroll reveal animations
   ======================================== */

/* ---------- Translations ---------- */
const i18n = {
  fr: {
    badge: "La finance verte, enfin accessible",
    h1a: "Investissez.", h1b: " Protégez.", h1c: "La planète vous remercie.",
    herosub: "TooGreen réunit portefeuille vert, calculateur d'empreinte carbone, conseil responsable et assistant IA écologique en une seule plateforme.",
    cta1: "Commencer gratuitement", cta2: "Calculer mon empreinte →",
    social: "Rejoignez +2 000 investisseurs responsables",
    press: "Vu dans la presse",
    "feat-eye": "Tout en un", "feat-title": "Votre écosystème vert, complet",
    "feat-sub": "Quatre outils puissants pour agir sur votre empreinte financière et environnementale.",
    bc1t: "Portefeuille Vert", bc1d: "Investissez dans des actions et ETF sélectionnés pour leur impact positif sur l'environnement. Suivez vos performances et votre score d'impact en temps réel.", bc1cta: "Découvrir →",
    bc2t: "Empreinte Carbone", bc2d: "Quiz interactif pour calculer votre empreinte CO₂ et obtenir des recommandations personnalisées.", bc2cta: "Calculer →",
    bc3t: "Conseil Responsable", bc3d: "Particuliers et entreprises : nos experts vous accompagnent vers une consommation durable.", bc3cta: "Nos offres →",
    bc4t: "Assistant IA Écologie", bc4d: "Posez vos questions à notre IA spécialisée en écologie. Premier essai gratuit, puis inscription rapide.", bc4cta: "Essayer →",
    bc5t: "Score d'impact", bc5d: "Chaque action compte. Visualisez en un coup d'œil l'impact écologique de vos investissements et de votre mode de vie.",
    stat1: "Investisseurs actifs", stat2: "Actifs gérés de façon responsable", stat3: "CO₂ évité grâce à nos membres", stat4: "Note moyenne utilisateurs",
    "how-eye": "Comment ça marche", "how-title": "Vert et simple, en 3 étapes",
    s1t: "Créez votre compte", s1d: "Inscription gratuite en moins de 2 minutes. Aucune carte bancaire requise pour commencer.",
    s2t: "Évaluez votre impact", s2d: "Calculez votre empreinte carbone et analysez votre portefeuille grâce à notre score écologique.",
    s3t: "Agissez & investissez", s3d: "Suivez nos recommandations, investissez dans des actifs verts et faites la différence concrètement.",
    "testi-eye": "Témoignages", "testi-title": "Ils ont choisi le vert",
    t1: '"TooGreen m\'a permis de réorienter tout mon portefeuille vers des actifs durables sans y passer des heures. Le score éco est une vraie révélation."',
    t1r: "Ingénieure, Lyon",
    t2: '"Le calculateur d\'empreinte carbone est bluffant. En 5 minutes j\'ai su où agir en priorité. Simple, visuel, efficace."',
    t2r: "Chef de projet, Paris",
    t3: '"En tant que dirigeante de PME, le conseil responsable de TooGreen nous a aidés à réduire notre bilan carbone de 30 % en 6 mois."',
    t3r: "CEO, Bordeaux",
    "faq-title": "Questions fréquentes",
    fq1: "TooGreen est-il gratuit ?", fa1: "Oui ! L'accès de base (calcul d'empreinte, portefeuille limité, 1 essai IA) est entièrement gratuit. Des plans premium débloquent des fonctionnalités avancées.",
    fq2: "Comment sont sélectionnés les actifs verts ?", fa2: "Nos experts analysent les actifs selon des critères ESG stricts (Environnement, Social, Gouvernance), en excluant les entreprises fossiles, armement et tabac. Seuls les meilleurs de leur catégorie entrent dans notre sélection.",
    fq3: "Le calcul d'empreinte carbone est-il précis ?", fa3: "Notre outil s'appuie sur les données de l'ADEME et des facteurs d'émission reconnus au niveau européen. Le résultat est une estimation fiable basée sur vos habitudes réelles.",
    fq4: "Mes données sont-elles protégées ?", fa4: "Absolument. TooGreen est hébergé en Europe et respecte scrupuleusement le RGPD. Vos données ne sont jamais revendues à des tiers. Vous pouvez les supprimer à tout moment.",
    fq5: "Le conseil responsable est-il adapté aux entreprises ?", fa5: "Oui, nous proposons des offres spécifiques pour les TPE, PME et grands groupes : bilan carbone réglementaire, stratégie RSE, formation des équipes et accompagnement à la certification.",
    "cta-title": "Prêt à investir pour la planète ?", "cta-sub": "Rejoignez des milliers d'investisseurs responsables. Gratuit, sans engagement.",
    "cta-btn1": "Créer mon compte gratuit", "cta-btn2": "Parler à un expert",
    "team-eye": "L'équipe", "team-title": "L'équipe derrière TooGreen", "team-sub": "Trois fondateurs passionnés d'écologie et de finance.",
    bio1: "Visionnaire de la finance verte, Jean-Paul croit que chaque euro investi peut changer le monde.",
    bio2: "Expert en finance durable, Gabriel structure les modèles d'impact pour que la rentabilité et l'écologie convergent.",
    bio3: "Architecte de la plateforme, Umar développe les outils IA et data qui permettent de mesurer et réduire votre impact.",
    "footer-desc": "La plateforme de référence pour investir et vivre de façon plus verte. Finance durable, empreinte carbone, conseil IA.",
    fc1: "Plateforme", fcp1: "Portefeuille Vert", fcp2: "Empreinte Carbone", fcp3: "Conseil Responsable", fcp4: "Assistant IA",
    fc2: "Légal", fcl1: "Mentions légales", fcl2: "Politique de confidentialité", fcl3: "CGU", fcl4: "Cookies",
    fc3: "Suivez-nous",
    copy: "© 2026 TooGreen. Tous droits réservés.",
    frlang: "🇫🇷 Français",
  },
  en: {
    badge: "Green finance, finally accessible",
    h1a: "Invest.", h1b: " Protect.", h1c: "The planet thanks you.",
    herosub: "TooGreen brings together a green portfolio, carbon footprint calculator, responsible advice, and an eco AI assistant — all in one platform.",
    cta1: "Start for free", cta2: "Calculate my footprint →",
    social: "Join 2,000+ responsible investors",
    press: "As seen in",
    "feat-eye": "All in one", "feat-title": "Your complete green ecosystem",
    "feat-sub": "Four powerful tools to act on your financial and environmental footprint.",
    bc1t: "Green Portfolio", bc1d: "Invest in stocks and ETFs selected for their positive environmental impact. Track your performance and impact score in real time.", bc1cta: "Explore →",
    bc2t: "Carbon Footprint", bc2d: "Interactive quiz to calculate your CO₂ footprint and get personalized recommendations.", bc2cta: "Calculate →",
    bc3t: "Responsible Advisory", bc3d: "Individuals and businesses: our experts guide you toward sustainable consumption.", bc3cta: "Our plans →",
    bc4t: "Eco AI Assistant", bc4d: "Ask our ecology-specialized AI anything. First try free, then quick sign-up.", bc4cta: "Try it →",
    bc5t: "Impact Score", bc5d: "Every action counts. See your investments' ecological impact at a glance.",
    stat1: "Active investors", stat2: "Assets responsibly managed", stat3: "CO₂ avoided by our members", stat4: "Average user rating",
    "how-eye": "How it works", "how-title": "Green and simple, in 3 steps",
    s1t: "Create your account", s1d: "Free sign-up in under 2 minutes. No credit card required to start.",
    s2t: "Assess your impact", s2d: "Calculate your carbon footprint and analyze your portfolio with our eco score.",
    s3t: "Act & invest", s3d: "Follow our recommendations, invest in green assets, and make a concrete difference.",
    "testi-eye": "Testimonials", "testi-title": "They chose green",
    t1: '"TooGreen let me shift my entire portfolio to sustainable assets without spending hours on it. The eco score is a real eye-opener."',
    t1r: "Engineer, Lyon",
    t2: '"The carbon footprint calculator is amazing. In 5 minutes I knew exactly where to act first. Simple, visual, effective."',
    t2r: "Project manager, Paris",
    t3: '"As a SMB CEO, TooGreen\'s responsible advice helped us cut our carbon footprint by 30% in 6 months."',
    t3r: "CEO, Bordeaux",
    "faq-title": "Frequently asked questions",
    fq1: "Is TooGreen free?", fa1: "Yes! Basic access (footprint calculator, limited portfolio, 1 AI trial) is completely free. Premium plans unlock advanced features.",
    fq2: "How are green assets selected?", fa2: "Our experts analyze assets using strict ESG criteria (Environmental, Social, Governance), excluding fossil fuel, arms, and tobacco companies. Only the best-in-class make our selection.",
    fq3: "Is the carbon footprint calculation accurate?", fa3: "Our tool is based on ADEME data and EU-recognized emission factors. The result is a reliable estimate based on your actual habits.",
    fq4: "Is my data protected?", fa4: "Absolutely. TooGreen is hosted in Europe and fully compliant with GDPR. Your data is never sold to third parties and can be deleted at any time.",
    fq5: "Is responsible advisory available for businesses?", fa5: "Yes, we offer plans for SMBs and large enterprises: regulatory carbon reporting, CSR strategy, team training, and certification support.",
    "cta-title": "Ready to invest for the planet?", "cta-sub": "Join thousands of responsible investors. Free, no commitment.",
    "cta-btn1": "Create my free account", "cta-btn2": "Talk to an expert",
    "team-eye": "The team", "team-title": "The team behind TooGreen", "team-sub": "Three founders passionate about ecology and finance.",
    bio1: "A green finance visionary, Jean-Paul believes every euro invested can change the world.",
    bio2: "A sustainable finance expert, Gabriel builds impact models where profitability and ecology converge.",
    bio3: "Platform architect, Umar develops the AI and data tools to measure and reduce your impact.",
    "footer-desc": "The reference platform for greener investing and living. Sustainable finance, carbon footprint, AI advisory.",
    fc1: "Platform", fcp1: "Green Portfolio", fcp2: "Carbon Footprint", fcp3: "Responsible Advisory", fcp4: "AI Assistant",
    fc2: "Legal", fcl1: "Legal notice", fcl2: "Privacy policy", fcl3: "Terms of use", fcl4: "Cookies",
    fc3: "Follow us",
    copy: "© 2026 TooGreen. All rights reserved.",
    frlang: "🇫🇷 Français",
  }
};

/* ---------- State ---------- */
let currentLang = localStorage.getItem('tg-lang') || 'fr';

/* ---------- Apply translations ---------- */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('tg-lang', lang);
  document.documentElement.lang = lang;

  const dict = i18n[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Update lang button label
  const btn = document.getElementById('currentLang');
  if (btn) btn.textContent = lang.toUpperCase();

  // Update active state in dropdown
  document.querySelectorAll('[data-lang]').forEach(a => {
    a.classList.toggle('active', a.dataset.lang === lang);
  });
}

/* ---------- Header scroll ---------- */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 40
      ? 'rgba(8,11,8,0.96)'
      : 'rgba(8,11,8,0.82)';
  }, { passive: true });
}

/* ---------- Burger / mobile menu ---------- */
function initBurger() {
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ---------- Language switcher ---------- */
function initLang() {
  const sel = document.getElementById('langSelect');
  const btn = document.getElementById('langBtn');
  if (!sel || !btn) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    sel.classList.toggle('open');
  });

  document.addEventListener('click', () => sel.classList.remove('open'));

  // Dropdown links
  document.querySelectorAll('[data-lang]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      applyLang(a.dataset.lang);
      sel.classList.remove('open');
    });
  });

  // Footer lang links
  document.querySelectorAll('[data-lang-footer]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      applyLang(a.dataset['lang-footer'] || a.dataset.langFooter);
    });
  });

  // Apply on load
  applyLang(currentLang);
}

/* ---------- FAQ Accordion ---------- */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ---------- Carbon Quiz Engine ---------- */
window.QuizEngine = (function() {
  // Categories & weights (kg CO2e per year)
  const questions = [
    {
      id: 'transport',
      q_fr: 'Quel est votre principal moyen de transport ?',
      q_en: 'What is your main mode of transport?',
      sub_fr: 'Choisissez celui que vous utilisez le plus souvent',
      sub_en: 'Choose the one you use most often',
      options: [
        { icon: '✈️', fr: 'Avion (fréquent)', en: 'Plane (frequent)', value: 4500 },
        { icon: '🚗', fr: 'Voiture thermique', en: 'Petrol/diesel car', value: 2200 },
        { icon: '🚌', fr: 'Transports en commun', en: 'Public transport', value: 300 },
        { icon: '🚲', fr: 'Vélo / marche', en: 'Bike / walking', value: 30 },
      ]
    },
    {
      id: 'logement',
      q_fr: 'Quel est votre type de logement ?',
      q_en: 'What type of housing do you live in?',
      sub_fr: 'Incluant le chauffage et l\'eau chaude',
      sub_en: 'Including heating and hot water',
      options: [
        { icon: '🏠', fr: 'Grande maison (gaz/fioul)', en: 'Large house (gas/oil)', value: 3200 },
        { icon: '🏡', fr: 'Maison moyenne', en: 'Average house', value: 2000 },
        { icon: '🏢', fr: 'Appartement', en: 'Apartment', value: 1000 },
        { icon: '⚡', fr: 'Logement tout électrique', en: 'All-electric home', value: 400 },
      ]
    },
    {
      id: 'alimentation',
      q_fr: 'Quel est votre régime alimentaire ?',
      q_en: 'What is your diet?',
      sub_fr: 'L\'alimentation représente 25% de l\'empreinte moyenne',
      sub_en: 'Diet accounts for 25% of the average footprint',
      options: [
        { icon: '🥩', fr: 'Viande tous les jours', en: 'Meat every day', value: 2500 },
        { icon: '🍗', fr: 'Viande quelques fois/sem.', en: 'Meat a few times/week', value: 1500 },
        { icon: '🥗', fr: 'Flexitarien / peu de viande', en: 'Flexitarian / little meat', value: 900 },
        { icon: '🌱', fr: 'Végétarien / vegan', en: 'Vegetarian / vegan', value: 500 },
      ]
    },
    {
      id: 'conso',
      q_fr: 'Comment décririez-vous votre consommation ?',
      q_en: 'How would you describe your consumption habits?',
      sub_fr: 'Vêtements, électronique, mobilier...',
      sub_en: 'Clothing, electronics, furniture...',
      options: [
        { icon: '🛍️', fr: 'J\'achète beaucoup, souvent neuf', en: 'I buy a lot, often new', value: 2000 },
        { icon: '🛒', fr: 'Consommation moyenne', en: 'Average consumption', value: 1200 },
        { icon: '♻️', fr: 'J\'achète d\'occasion', en: 'I buy second-hand', value: 600 },
        { icon: '🔧', fr: 'Minimaliste / je répare', en: 'Minimalist / I repair', value: 200 },
      ]
    },
    {
      id: 'energie',
      q_fr: 'Quelle est votre consommation d\'énergie à la maison ?',
      q_en: 'What is your home energy consumption?',
      sub_fr: 'Électricité, gaz, chauffage...',
      sub_en: 'Electricity, gas, heating...',
      options: [
        { icon: '🔥', fr: 'Très élevée (> 200 kWh/m²)', en: 'Very high (> 200 kWh/m²)', value: 1800 },
        { icon: '💡', fr: 'Moyenne (100-200 kWh/m²)', en: 'Average (100-200 kWh/m²)', value: 1000 },
        { icon: '🌿', fr: 'Économe (50-100 kWh/m²)', en: 'Low (50-100 kWh/m²)', value: 500 },
        { icon: '☀️', fr: 'Très économe / solaire', en: 'Very low / solar', value: 150 },
      ]
    },
  ];

  let current = 0;
  const answers = {};
  let lang = 'fr';

  function init(containerEl, resultEl, langGetter) {
    if (!containerEl) return;
    lang = langGetter ? langGetter() : 'fr';
    render(containerEl, resultEl, langGetter);
  }

  function render(containerEl, resultEl, langGetter) {
    lang = langGetter ? langGetter() : currentLang;
    const total = questions.length;

    let html = `
      <div class="quiz-progress"><div class="quiz-progress-bar" id="qBar" style="width:${(current/total)*100}%"></div></div>
    `;

    questions.forEach((q, i) => {
      const isActive = i === current;
      const qText  = lang === 'en' ? q.q_en  : q.q_fr;
      const subText = lang === 'en' ? q.sub_en : q.sub_fr;
      html += `<div class="quiz-step ${isActive ? 'active' : ''}" data-step="${i}">
        <div class="quiz-q">${qText}</div>
        <div class="quiz-sub">${subText}</div>
        <div class="quiz-options">`;
      q.options.forEach((opt, j) => {
        const label = lang === 'en' ? opt.en : opt.fr;
        const sel = answers[q.id] === j ? 'selected' : '';
        html += `<button class="quiz-opt ${sel}" data-q="${i}" data-opt="${j}" data-val="${opt.value}">
          <span class="quiz-opt-icon">${opt.icon}</span>
          <span>${label}</span>
        </button>`;
      });
      html += `</div>
        <div class="quiz-nav">
          ${i > 0 ? `<button class="btn btn-ghost" id="qPrev">← ${lang==='en'?'Back':'Retour'}</button>` : '<span></span>'}
          <button class="btn btn-primary" id="qNext" ${answers[q.id] === undefined ? 'disabled style="opacity:.4;cursor:not-allowed"' : ''}>${i === total-1 ? (lang==='en'?'See my result':'Voir mon résultat') : (lang==='en'?'Next →':'Suivant →')}</button>
        </div>
      </div>`;
    });

    containerEl.innerHTML = html;

    // Bind option clicks
    containerEl.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const qi = parseInt(btn.dataset.q);
        const oi = parseInt(btn.dataset.opt);
        const val = parseInt(btn.dataset.val);
        const qId = questions[qi].id;
        answers[qId] = oi;
        answers[qId + '_val'] = val;

        containerEl.querySelectorAll(`.quiz-opt[data-q="${qi}"]`).forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        const nextBtn = document.getElementById('qNext');
        if (nextBtn) { nextBtn.disabled = false; nextBtn.style.opacity = '1'; nextBtn.style.cursor = 'pointer'; }
      });
    });

    // Next
    const nextBtn = document.getElementById('qNext');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (current < total - 1) {
          current++;
          render(containerEl, resultEl, langGetter);
        } else {
          showResult(resultEl, langGetter);
        }
      });
    }

    // Prev
    const prevBtn = document.getElementById('qPrev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (current > 0) { current--; render(containerEl, resultEl, langGetter); }
      });
    }
  }

  function showResult(resultEl, langGetter) {
    lang = langGetter ? langGetter() : currentLang;
    if (!resultEl) return;

    // Sum all values
    const total = Object.keys(answers)
      .filter(k => k.endsWith('_val'))
      .reduce((acc, k) => acc + answers[k], 0);

    const totalTons = (total / 1000).toFixed(1);
    const frAvg = 9.2;
    const pct = Math.min(100, Math.round((total / (frAvg * 1000)) * 100));

    // Color feedback
    let color = '#22C55E', level_fr = 'Excellent !', level_en = 'Excellent!', advice_fr, advice_en;
    if (total > 12000) {
      color = '#EF4444'; level_fr = 'Très élevée'; level_en = 'Very high';
      advice_fr = 'Votre empreinte est bien au-dessus de la moyenne. Commencez par réduire les transports et votre alimentation.';
      advice_en = 'Your footprint is well above average. Start by reducing transport and dietary impact.';
    } else if (total > 8000) {
      color = '#F97316'; level_fr = 'Au-dessus de la moyenne'; level_en = 'Above average';
      advice_fr = 'Quelques changements dans vos habitudes peuvent faire une vraie différence. Visez d\'abord les déplacements.';
      advice_en = 'Some habit changes can make a real difference. Focus on travel first.';
    } else if (total > 4000) {
      color = '#EAB308'; level_fr = 'Dans la moyenne'; level_en = 'Average';
      advice_fr = 'Vous êtes dans la moyenne française. Quelques ajustements alimentaires et énergétiques vous mèneront plus loin.';
      advice_en = 'You\'re around the French average. Some dietary and energy adjustments will take you further.';
    } else {
      advice_fr = 'Bravo ! Votre empreinte est bien inférieure à la moyenne. Continuez sur cette lancée et inspirez votre entourage.';
      advice_en = 'Great job! Your footprint is well below average. Keep it up and inspire those around you.';
    }

    const circumference = 2 * Math.PI * 54;
    const dashoffset = circumference - (pct / 100) * circumference;

    resultEl.innerHTML = `
      <div class="result-ring">
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="var(--bg-card-2)" stroke-width="10"/>
          <circle cx="60" cy="60" r="54" fill="none" stroke="${color}" stroke-width="10"
            stroke-dasharray="${circumference}" stroke-dashoffset="${dashoffset}"
            stroke-linecap="round" style="transition:stroke-dashoffset 1.2s ease"/>
        </svg>
        <div class="result-ring-text">
          <div class="result-ring-value">${totalTons}</div>
          <div class="result-ring-unit">t CO₂/an</div>
        </div>
      </div>
      <h2 class="display-md" style="margin-bottom:10px">${lang==='en'?level_en:level_fr}</h2>
      <p style="color:var(--text-secondary);margin-bottom:8px;max-width:500px;margin-left:auto;margin-right:auto">
        ${lang==='en'?advice_en:advice_fr}
      </p>
      <p style="font-size:.85rem;color:var(--text-muted);margin-bottom:32px">
        ${lang==='en'?`French average: ${frAvg} t CO₂/year`:`Moyenne française : ${frAvg} t CO₂/an`}
      </p>
      <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
        <a href="conseil.html" class="btn btn-primary btn-lg">${lang==='en'?'Get advice →':'Obtenir des conseils →'}</a>
        <button class="btn btn-outline btn-lg" onclick="location.reload()">${lang==='en'?'Redo the quiz':'Refaire le quiz'}</button>
      </div>
    `;
    resultEl.style.display = 'block';
    resultEl.parentElement.querySelector('.quiz-container').style.display = 'none';
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return { init };
})();

/* ---------- Chat / AI Assistant ---------- */
window.ChatEngine = (function() {
  let freeUsed = false;
  let signedIn = false;

  const botReplies_fr = [
    "Excellente question ! Réduire votre empreinte commence par l'alimentation : adopter un régime à base de plantes peut économiser jusqu'à 1,5 t CO₂ par an.",
    "Les énergies renouvelables sont au cœur de la transition. Des ETF comme le iShares Global Clean Energy offrent une exposition diversifiée avec un bon score ESG.",
    "La rénovation énergétique de votre logement peut réduire votre consommation de 30 à 50 %. Des aides comme MaPrimeRénov' existent en France.",
    "Investir dans des obligations vertes (green bonds) est un moyen concret de financer des projets à impact positif tout en bénéficiant d'un rendement stable.",
    "Le covoiturage et les transports doux (vélo électrique, train) sont les leviers les plus efficaces pour réduire l'empreinte transport, souvent le poste n°1.",
  ];
  const botReplies_en = [
    "Great question! Reducing your footprint starts with diet: adopting a plant-based approach can save up to 1.5 t CO₂ per year.",
    "Renewable energy is at the heart of the transition. ETFs like iShares Global Clean Energy offer diversified exposure with a strong ESG score.",
    "Energy renovation of your home can cut consumption by 30–50%. Various government subsidies are available depending on your country.",
    "Investing in green bonds is a concrete way to finance positive-impact projects while earning a stable return.",
    "Carpooling and soft transport (electric bike, train) are the most effective levers to reduce transport footprint, often the #1 emission source.",
  ];

  let replyIndex = 0;

  function init() {
    const input   = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');
    const msgs    = document.getElementById('chatMessages');
    const gate    = document.getElementById('emailGate');
    const gateForm = document.getElementById('gateForm');

    if (!input || !sendBtn) return;

    function sendMessage() {
      const text = input.value.trim();
      if (!text) return;

      if (!freeUsed) {
        addMsg(msgs, text, 'user');
        input.value = '';
        setTimeout(() => {
          const replies = currentLang === 'en' ? botReplies_en : botReplies_fr;
          addMsg(msgs, replies[replyIndex % replies.length], 'bot');
          replyIndex++;
          freeUsed = true;
          if (gate) setTimeout(() => gate.classList.add('visible'), 800);
        }, 700);
      } else if (signedIn) {
        addMsg(msgs, text, 'user');
        input.value = '';
        setTimeout(() => {
          const replies = currentLang === 'en' ? botReplies_en : botReplies_fr;
          addMsg(msgs, replies[replyIndex % replies.length], 'bot');
          replyIndex++;
        }, 700);
      } else {
        if (gate) gate.scrollIntoView({ behavior: 'smooth' });
      }
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

    if (gateForm) {
      gateForm.addEventListener('submit', e => {
        e.preventDefault();
        signedIn = true;
        if (gate) {
          gate.innerHTML = `<div style="text-align:center;padding:32px">
            <div style="font-size:2rem;margin-bottom:16px">✅</div>
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:8px">${currentLang==='en'?'You\'re in!':'Vous êtes inscrit !'}</h3>
            <p style="color:var(--text-secondary);font-size:.9rem">${currentLang==='en'?'Continue the conversation freely.':'Continuez la conversation librement.'}</p>
          </div>`;
        }
      });
    }
  }

  function addMsg(container, text, sender) {
    if (!container) return;
    const div = document.createElement('div');
    div.className = `msg ${sender}`;
    div.innerHTML = `
      <div class="msg-av">${sender === 'bot' ? '🌿' : 'Moi'}</div>
      <div class="msg-text">${text}</div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  return { init };
})();

/* ---------- Init on DOM ready ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initBurger();
  initLang();
  initFaq();
  initReveal();

  // Page-specific inits
  const quizContainer = document.getElementById('quizContainer');
  const quizResult    = document.getElementById('quizResult');
  if (quizContainer) {
    QuizEngine.init(quizContainer, quizResult, () => currentLang);
  }

  ChatEngine.init();
});
