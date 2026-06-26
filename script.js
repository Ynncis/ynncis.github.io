const translations = {
  zh: {
    brand: "吳聿耘",
    navAbout: "關於我",
    navStory: "音樂軌跡",
    navContact: "聯絡我",
    heroEyebrow: "粉彩系音樂電子名片",
    heroName: "吳聿耘",
    heroLead: "用二胡與高胡，把日常裡柔軟的光，拉成可以被聽見的故事。",
    tagMusic: "音樂創作",
    tagErhu: "二胡",
    tagGaohu: "高胡",
    tagHealth: "醫學人文",
    ctaContact: "聯絡我",
    ctaStory: "看音樂軌跡",
    marqueeOne: "二胡演奏者",
    marqueeTwo: "音樂與醫學",
    marqueeThree: "柔和但閃亮",
    aboutEyebrow: "About",
    aboutTitle: "關於我",
    aboutBody: "吳聿耘是一位喜歡把音樂、觀察與人文感受交織在一起的創作者。她擅長二胡與高胡，喜歡從傳統弦樂的細膩聲線中，找出像粉彩一樣溫柔但有層次的表達。",
    factFocus: "核心興趣",
    factFocusValue: "音樂相關、民族弦樂、編曲靈感",
    factMood: "個人風格",
    factMoodValue: "柔和、細膩、帶一點舞台光感",
    factMotto: "一句話",
    factMottoValue: "讓每個音符都保留心跳的溫度。",
    timelineEyebrow: "Journey",
    timelineTitle: "成長與音樂軌跡",
    schoolOne: "立人國小",
    schoolOneTitle: "第一次把舞台當成朋友",
    schoolOneBody: "在校園活動裡接觸表演，開始對旋律、節奏與掌聲後的安靜著迷。",
    schoolTwo: "曉明女中",
    schoolTwoTitle: "練習把專注變成穩定",
    schoolTwoBody: "國高中時期持續累積樂器技巧，也學會在課業與興趣之間安排自己的節奏。",
    schoolThree: "台北醫學大學",
    schoolThreeTitle: "讓醫學視角遇見音樂人文",
    schoolThreeBody: "在專業學習之外，持續探索音樂如何陪伴情緒、記憶與生活中的細節。",
    featureEyebrow: "Highlights",
    featureTitle: "更多關於聿耘",
    cardOneTitle: "聲音色彩收藏家",
    cardOneBody: "她會把城市裡的雨聲、咖啡店的杯盤聲、練琴房的泛音，都記成下一段旋律的素材。",
    cardTwoTitle: "舞台前很安靜，音樂裡很閃亮",
    cardTwoBody: "個性溫柔慢熱，表演時卻能用弓法與音色做出明亮的轉折。",
    cardThreeTitle: "喜歡把傳統重新上色",
    cardThreeBody: "擅長把二胡與高胡的古典音質，放進現代、清透、帶粉彩感的編曲想像。",
    contactEyebrow: "Contact",
    contactTitle: "聯絡我",
    contactBody: "歡迎邀約演出、合作企劃，或單純分享你最近喜歡的一首歌。",
    footer: "© 2026 吳聿耘。以音樂與粉彩光影製作。"
  },
  en: {
    brand: "Wu Yu-Yun",
    navAbout: "About",
    navStory: "Journey",
    navContact: "Contact",
    heroEyebrow: "Pastel music calling card",
    heroName: "Wu Yu-Yun",
    heroLead: "She turns the soft light of everyday life into stories you can hear through erhu and gaohu.",
    tagMusic: "Music",
    tagErhu: "Erhu",
    tagGaohu: "Gaohu",
    tagHealth: "Medical humanities",
    ctaContact: "Contact Me",
    ctaStory: "See Journey",
    marqueeOne: "Erhu performer",
    marqueeTwo: "Music & medicine",
    marqueeThree: "Soft but electric",
    aboutEyebrow: "About",
    aboutTitle: "About Me",
    aboutBody: "Wu Yu-Yun is a creator who blends music, observation, and humanistic sensitivity. Skilled in erhu and gaohu, she looks for gentle, layered expression inside the delicate voice of traditional strings.",
    factFocus: "Focus",
    factFocusValue: "Music, Chinese strings, arrangement ideas",
    factMood: "Style",
    factMoodValue: "Soft, detailed, with a hint of stage glow",
    factMotto: "Motto",
    factMottoValue: "Let every note keep the warmth of a heartbeat.",
    timelineEyebrow: "Journey",
    timelineTitle: "Growth & Music Path",
    schoolOne: "Li-Ren Elementary School",
    schoolOneTitle: "Meeting the stage for the first time",
    schoolOneBody: "School events introduced her to performance and sparked a fascination with melody, rhythm, and the quiet after applause.",
    schoolTwo: "Stella Matutina Girls' High School",
    schoolTwoTitle: "Turning focus into steadiness",
    schoolTwoBody: "During junior and senior high school, she kept building technique while learning how to balance study and passion.",
    schoolThree: "Taipei Medical University",
    schoolThreeTitle: "Where medicine meets musical humanity",
    schoolThreeBody: "Beyond professional study, she explores how music can accompany emotion, memory, and the small details of life.",
    featureEyebrow: "Highlights",
    featureTitle: "More About Yu-Yun",
    cardOneTitle: "Collector of sonic colors",
    cardOneBody: "Rain in the city, cups in a cafe, and overtones in a practice room all become seeds for her next melody.",
    cardTwoTitle: "Quiet before the stage, radiant in music",
    cardTwoBody: "Gentle and slow to warm up, she creates bright turns through bowing, tone, and phrasing.",
    cardThreeTitle: "Recoloring tradition",
    cardThreeBody: "She imagines classical erhu and gaohu textures inside modern, airy, pastel-toned arrangements.",
    contactEyebrow: "Contact",
    contactTitle: "Contact Me",
    contactBody: "Open to performance invitations, creative collaborations, or a simple exchange of favorite songs.",
    footer: "© 2026 Wu Yu-Yun. Crafted with music and pastel light."
  }
};

const state = {
  lang: localStorage.getItem("lang") || "zh",
  theme: localStorage.getItem("theme") || "light"
};

const langToggle = document.querySelector("#langToggle");
const themeToggle = document.querySelector("#themeToggle");
const cursorOrb = document.querySelector(".cursor-orb");
const translatable = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  translatable.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[lang][key] || node.textContent;
  });
  langToggle.textContent = lang === "zh" ? "EN" : "中";
  localStorage.setItem("lang", lang);

  if (window.gsap) {
    gsap.fromTo("[data-i18n]", { y: 10, opacity: 0.35 }, {
      y: 0,
      opacity: 1,
      duration: 0.45,
      ease: "power2.out",
      stagger: 0.01
    });
  }
}

function setTheme(theme) {
  state.theme = theme;
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

langToggle.addEventListener("click", () => {
  setLanguage(state.lang === "zh" ? "en" : "zh");
});

themeToggle.addEventListener("click", () => {
  setTheme(state.theme === "light" ? "dark" : "light");
});

setLanguage(state.lang);
setTheme(state.theme);

window.addEventListener("mousemove", (event) => {
  if (!window.gsap) {
    cursorOrb.style.left = `${event.clientX}px`;
    cursorOrb.style.top = `${event.clientY}px`;
    return;
  }

  gsap.to(cursorOrb, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.6,
    ease: "power3.out"
  });
});

document.querySelectorAll(".magnetic").forEach((item) => {
  item.addEventListener("mousemove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    if (window.gsap) {
      gsap.to(item, { x: x * 0.18, y: y * 0.18, duration: 0.25, ease: "power2.out" });
    }
  });

  item.addEventListener("mouseleave", () => {
    if (window.gsap) {
      gsap.to(item, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, 0.35)" });
    }
  });
});

if (window.gsap) {
  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.from(".site-header", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".hero-copy > *", {
    y: 34,
    opacity: 0,
    duration: 0.85,
    ease: "power3.out",
    stagger: 0.08
  });

  gsap.from(".portrait-card", {
    scale: 0.82,
    rotate: -5,
    opacity: 0,
    duration: 1.1,
    ease: "elastic.out(1, 0.7)"
  });

  gsap.to("h1", {
    backgroundPosition: "100% 50%",
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".note", {
    y: -24,
    x: 12,
    rotate: 10,
    opacity: 0.72,
    duration: 2.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.35
  });

  gsap.to(".orbit-one", { rotate: 360, duration: 16, repeat: -1, ease: "none" });
  gsap.to(".orbit-two", { rotate: -360, duration: 20, repeat: -1, ease: "none" });
  gsap.to(".instrument .bow", {
    rotate: -10,
    transformOrigin: "80% 50%",
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.utils.toArray(".reveal").forEach((element) => {
    const revealOptions = {
      y: 60,
      opacity: 0,
      rotateX: 8,
      duration: 0.9,
      ease: "power3.out"
    };

    if (window.ScrollTrigger) {
      revealOptions.scrollTrigger = {
        trigger: element,
        start: "top 84%"
      };
    }

    gsap.from(element, revealOptions);
  });

  gsap.utils.toArray(".feature-card").forEach((card, index) => {
    gsap.to(card, {
      y: index % 2 === 0 ? -14 : 14,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.25
    });
  });
}

const canvas = document.querySelector("#sparkCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
}

function createParticles() {
  const count = Math.min(90, Math.floor(window.innerWidth / 14));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 3.8 + 1.2,
    speed: Math.random() * 0.7 + 0.2,
    drift: Math.random() * 0.6 - 0.3,
    hue: ["#ff9fca", "#aad9ff", "#b7eadc", "#c8b8ff", "#ffc4a8"][Math.floor(Math.random() * 5)]
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((particle) => {
    particle.y -= particle.speed;
    particle.x += particle.drift;

    if (particle.y < -10) {
      particle.y = window.innerHeight + 10;
      particle.x = Math.random() * window.innerWidth;
    }

    ctx.beginPath();
    ctx.fillStyle = particle.hue;
    ctx.globalAlpha = 0.42;
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

resizeCanvas();
createParticles();
drawParticles();
