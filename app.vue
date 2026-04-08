<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const typedText = ref('')
const fullText = 'Currently shipping WalletGate, Docgate, and Sprevia.'
const cursorVisible = ref(true)
const mounted = ref(false)
let cursorInterval = null

onMounted(() => {
  mounted.value = true

  let index = 0
  const typeWriter = () => {
    if (index < fullText.length) {
      typedText.value += fullText.charAt(index)
      index++
      setTimeout(typeWriter, 60)
    }
  }
  setTimeout(typeWriter, 800)

  cursorInterval = setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 530)
})

onUnmounted(() => {
  if (cursorInterval) clearInterval(cursorInterval)
})

const currentYear = new Date().getFullYear()

const projects = [
  {
    name: 'Docgate',
    tagline: 'AI Document Understanding for European Residents',
    desc: 'Upload any official document - government letters, tax notices, contracts - and get a clear explanation in your language with deadlines, action items, and reply drafts. Supports 8 countries and 21 languages.',
    stack: ['Next.js', 'TypeScript', 'Claude API', 'IndexedDB', 'PWA', 'Stripe'],
    status: 'Live',
    links: [
      { label: 'Website', url: 'https://www.docgate.app' }
    ],
    image: 'https://docgate.app/opengraph-image?1d3a61b585a48b38'
  },
  {
    name: 'Sprevia',
    tagline: 'AI-Powered Language Learning Platform',
    desc: 'Adaptive German language learning with AI speaking practice, spaced repetition, TELC exam prep, and structured daily sessions. Tracks progress across all language skills.',
    stack: ['React', 'Node.js', 'AI/NLP', 'Spaced Repetition', 'Speech Recognition'],
    status: 'Live',
    links: [
      { label: 'Website', url: 'https://www.sprevia.com' }
    ],
    image: 'https://sprevia.com/opengraph-image?e8b116d450370d59'
  },
  {
    name: 'WalletGate',
    tagline: 'EUDI Wallet Verification API for Developers',
    desc: 'A developer-first API that lets any app integrate EU Digital Identity Wallet verification. Supports age checks, identity verification, and residency - all compliant with eIDAS 2.0 and OpenID4VP.',
    stack: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'OpenID4VP', 'Stripe', 'Redis'],
    status: 'Live',
    links: [
      { label: 'Website', url: 'https://www.walletgate.app' },
      { label: 'Docs', url: 'https://docs.walletgate.app' },
      { label: 'Demo', url: 'https://demo.walletgate.app' },
      { label: 'npm', url: 'https://www.npmjs.com/package/@walletgate/eudi' }
    ],
    image: 'https://www.walletgate.app/og-image.png'
  },
  {
    name: 'Gatewise',
    tagline: 'Shopify Age Verification & Compliance Plugin',
    desc: 'A Shopify app that enforces age verification at checkout for regulated products - alcohol, CBD, vape, gaming. Produces audit-ready compliance evidence and is built to be EUDI-ready.',
    stack: ['Remix', 'Shopify CLI', 'Polaris', 'WebAssembly', 'GraphQL'],
    status: 'In Dev',
    links: [
      { label: 'Part of WalletGate', url: 'https://www.walletgate.app' }
    ]
  }
]

const certs = [
  { title: 'Model Context Protocol: Advanced Topics', org: 'Anthropic', date: 'Mar 2026', url: 'https://verify.skilljar.com/c/ock7vcoc8w39' },
  { title: 'Claude Code in Action', org: 'Anthropic', date: 'Mar 2026', url: 'https://verify.skilljar.com/c/ohxjktefyg2s' },
  { title: 'Vue.js Senior Developer II', org: 'Vue School', date: 'Aug 2024', url: 'https://certificates.dev/vuejs/certificates/9cc23661-2ce2-4b0e-8f53-3c794321e019' }
]

const posts = [
  {
    title: 'Why Docgate Matters',
    tags: ['AI', 'Document Analysis', 'Europe'],
    date: 'Apr 7, 2026',
    read: '7 min',
    url: 'https://www.docgate.app/blog/why-docgate-matters'
  },
  {
    title: 'Age Gates Without the Privacy Risk: How Selective Disclosure Changes Online Verification',
    tags: ['age-verification', 'selective-disclosure', 'GDPR'],
    date: 'Feb 22, 2026',
    read: '7 min',
    url: 'https://www.walletgate.app/blog/age-gates-without-privacy-risk-selective-disclosure'
  },
  {
    title: 'The End of Passport Selfies: How EUDI Wallets Are Set to Replace Legacy KYC',
    tags: ['EUDI Wallet', 'KYC', 'Identity Verification'],
    date: 'Feb 12, 2026',
    read: '11 min',
    url: 'https://www.walletgate.app/blog/end-of-passport-selfies-eudi-wallets-replace-kyc'
  },
  {
    title: "Verify a User's Age in 3 API Calls: A Developer's Guide to EUDI Wallets",
    tags: ['tutorial', 'age-verification', 'SDK'],
    date: 'Feb 10, 2026',
    read: '11 min',
    url: 'https://www.walletgate.app/blog/verify-age-3-api-calls-eudi-wallets'
  },
  {
    title: 'Why Every EU Business Needs an EUDI Strategy Before 2027',
    tags: ['eIDAS 2.0', 'EU Compliance', 'Digital Identity'],
    date: 'Feb 2026',
    read: '8 min',
    url: 'https://www.walletgate.app/blog/eudi-strategy-before-2027'
  },
  {
    title: 'OpenID4VP in Production: The End-to-End Integration Checklist',
    tags: ['OpenID4VP', 'EUDI', 'Developer Guide'],
    date: 'Feb 2026',
    read: '10 min',
    url: 'https://www.walletgate.app/blog/openid4vp-production-checklist'
  },
  {
    title: 'Nuxt 2 → Nuxt 3: What I Actually Did and Why It Finally Worked',
    tags: ['Nuxt', 'Vue.js', 'Migration'],
    date: '2026',
    read: '',
    url: 'https://chuka.blog/nuxt-2-nuxt-3-what-i-actually-did-and-why-it-finally-worked'
  }
]

const recommendations = [
  { quote: 'The successful build, customer success and subsequent acquisition of Kormoon would not have been possible without the diligence, care and skill of Henry. His world class skills would be a vital asset to the technology scene.', author: 'Paul McCormack', role: 'Dir of Product, Salesforce ·Founder, Kormoon Ltd' },
  { quote: 'Henry is a dedicated, skilled, and innovative professional. He led the modernization of our frontend - upgrading from Vue2 to Vue3, migrating to Pinia, and raising test coverage to 56%. I wholeheartedly recommend him.', author: 'Daniel Henze', role: 'VP of Engineering · ArtNight' },
  { quote: 'Henry took on a team leadership role quickly after starting, becoming a trusted member of the team. He was always communicative and proactive. I would jump at the chance to bring him onto any software team.', author: 'James Suchy', role: 'CTO, Quantum Battery Labs · formerly MD at 8th Light' },
  { quote: 'Henry contributed to several mobile and web applications for global clients. He initiated and grew our community of engineers in Rwanda and led technology engagements with speakers from all over the globe.', author: 'Robert Rugamba', role: 'Managing Director ·One World Coders Rwanda' },
  { quote: 'I worked with Henry in a mentor-mentee capacity where we collaborated on different projects. He excelled at both tasks by delivering high quality, working code in a timely manner and under specific time constraints. He was also a very effective communicator. I would strongly and without hesitation recommend Henry to any company considering him.', author: 'Makis Otman', role: 'Director, Modest Owl Ltd · Senior Software Engineer, Sona' },
  { quote: 'I personally mentored Henry to coding. He came onboard with absolutely no knowledge of computer science, but since then has acquired a lot of valuable skills. I have been mentoring students on web development since 2013, but Henry is one of the most outstanding students I have seen over time because he came from an entirely different background of Banking/Accounting, and persisted to shifting it through.', author: 'Edwin Okonkwo', role: 'Senior Software Engineer · AI Agents' },
]
</script>

<template>
  <div class="page" :class="{ visible: mounted }">
    <div class="layout">
      <!-- Nav -->
      <nav class="nav">
        <a href="#" class="nav-logo" @click.prevent="window.scrollTo({ top: 0, behavior: 'smooth' })">h.o</a>
        <div class="nav-links">
          <a href="#projects">projects</a>
          <a href="#writing">writing</a>
          <a href="#credentials">certs</a>
          <a href="#testimonials">testimonials</a>
        </div>
      </nav>

      <!-- Hero -->
      <section class="hero">
        <h1 class="hero-name">Henry Okonkwo</h1>
        <p class="hero-role">Senior Software Engineer</p>
        <div class="hero-typing" aria-label="Currently shipping WalletGate, Docgate, and Sprevia.">
          <span class="prompt" aria-hidden="true">~$</span>
          <span class="typed">{{ typedText }}</span>
          <span class="blinker" :class="{ on: cursorVisible }" aria-hidden="true">|</span>
        </div>
      </section>

      <!-- About -->
      <section class="about">
        <p class="about-text">
          I build products people actually need — identity verification,
          AI document understanding, and language learning. Based in Berlin,
          7 years shipping production software.
        </p>
        <div class="stack">
          <span v-for="tag in ['Full Stack', 'Frontend', 'Artificial Intelligence']" :key="tag">{{ tag }}</span>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="section">
        <div class="section-header">
          <span class="section-label">Personal Projects</span>
          <h2 class="section-title">Things I've built</h2>
        </div>

        <div class="projects-grid">
          <div v-for="project in projects" :key="project.name" class="project-card">
            <div v-if="project.image" class="project-img">
              <img :src="project.image" :alt="project.name" loading="lazy" />
            </div>
            <div v-else class="project-img project-img-placeholder">
              <span>{{ project.name }}</span>
            </div>
            <div class="project-body">
              <div class="project-top">
                <h3>{{ project.name }}</h3>
                <span class="badge" :class="project.status === 'Live' ? 'badge-live' : 'badge-dev'">{{ project.status }}</span>
              </div>
              <p class="project-tagline">{{ project.tagline }}</p>
              <p class="project-desc">{{ project.desc }}</p>
              <div class="project-stack">
                <span v-for="t in project.stack" :key="t">{{ t }}</span>
              </div>
              <div class="project-links">
                <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener">{{ link.label }} <span class="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Writing -->
      <section id="writing" class="section">
        <div class="section-header">
          <span class="section-label">Writing</span>
          <h2 class="section-title">Recent posts</h2>
        </div>

        <div class="posts-list">
          <a v-for="post in posts.slice(0, 5)" :key="post.url" :href="post.url" target="_blank" rel="noopener" class="post-row">
            <div class="post-info">
              <span class="post-title">{{ post.title }}</span>
              <div class="post-meta">
                <span class="post-date">{{ post.date }}</span>
                <span class="post-sep">·</span>
                <span class="post-read">{{ post.read }} read</span>
              </div>
              <div class="post-tags">
                <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
            <span class="arrow">↗</span>
          </a>
        </div>
        <a href="https://chuka.blog" target="_blank" rel="noopener" class="view-all">
          View all posts <span class="arrow">→</span>
        </a>
      </section>

      <!-- Certifications -->
      <section id="credentials" class="section">
        <div class="section-header">
          <span class="section-label">Credentials</span>
          <h2 class="section-title">Certifications</h2>
        </div>

        <div class="certs-list">
          <a v-for="cert in certs" :key="cert.title" :href="cert.url" target="_blank" rel="noopener" class="cert-row">
            <div class="cert-info">
              <span class="cert-title">{{ cert.title }}</span>
              <span class="cert-meta">{{ cert.org }} · {{ cert.date }}</span>
            </div>
            <span class="arrow">→</span>
          </a>
        </div>
      </section>

      <!-- Recommendations -->
      <section id="testimonials" class="section">
        <div class="section-header">
          <span class="section-label">Testimonials</span>
          <h2 class="section-title">What people say</h2>
        </div>

        <div class="rec-grid">
          <div v-for="rec in recommendations" :key="rec.author" class="rec-card">
            <p class="rec-quote">"{{ rec.quote }}"</p>
            <div class="rec-footer">
              <span class="rec-author">{{ rec.author }}</span>
              <span class="rec-role">{{ rec.role }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section class="section section-contact">
        <div class="section-header">
          <span class="section-label">Connect</span>
          <h2 class="section-title">Get in touch</h2>
        </div>
        <div class="contact-links">
          <a href="mailto:henry@chuka.io">henry@chuka.io</a>
          <a href="https://calendly.com/henry-ok/30min" target="_blank" rel="noopener">Schedule a call</a>
          <a href="https://github.com/chokonaira" target="_blank" rel="noopener">GitHub</a>
          <a href="https://linkedin.com/in/henry-okonkwo" target="_blank" rel="noopener">LinkedIn</a>
          <span class="contact-location">Berlin, Germany</span>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <span>© {{ currentYear }} Henry Okonkwo</span>
      </footer>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #ffffff;
  --bg-card: #ffffff;
  --border: #ebebeb;
  --border-hover: #d4d4d4;
  --text: #171717;
  --text-2: #525252;
  --text-3: #a3a3a3;
  --accent: #171717;
  --green: #22c55e;
  --orange: #f97316;
  --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --mono: 'JetBrains Mono', 'SF Mono', monospace;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.page {
  min-height: 100vh;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.page.visible { opacity: 1; }

.layout {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ---- Nav ---- */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  animation: fadeIn 0.5s ease both;
}

.nav-logo {
  font-family: var(--mono);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  letter-spacing: -0.02em;
  text-decoration: none;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 1.25rem;
}

.nav-links a {
  font-family: var(--mono);
  font-size: 0.8125rem;
  color: var(--text-2);
  text-decoration: none;
  transition: color 0.15s;
}
.nav-links a:hover { color: var(--text); }

/* ---- Hero ---- */
.hero {
  padding: 3.5rem 0 2.5rem;
  animation: fadeUp 0.5s ease 0.1s both;
}

.hero-name {
  font-size: clamp(2.5rem, 7vw, 3.75rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.hero-role {
  font-family: var(--mono);
  font-size: 0.9375rem;
  color: var(--text-3);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.hero-typing {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.9375rem;
  color: var(--text-2);
}

.prompt { color: var(--text-3); user-select: none; }
.blinker { color: var(--text); opacity: 0; transition: opacity 0.08s; }
.blinker.on { opacity: 1; }

/* ---- About ---- */
.about {
  padding: 2rem 0;
  border-top: 1px solid var(--border);
  animation: fadeUp 0.5s ease 0.2s both;
}

.about-text {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--text-2);
  margin-bottom: 1.25rem;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.stack span {
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 100px;
  color: var(--text-2);
  transition: all 0.15s;
}
.stack span:hover {
  border-color: var(--text);
  color: var(--text);
}

/* ---- Sections ---- */
.section {
  padding: 2.5rem 0;
  border-top: 1px solid var(--border);
  animation: fadeUp 0.5s ease 0.3s both;
}

.section-header { margin-bottom: 1.5rem; }

.section-label {
  font-family: var(--mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-3);
  margin-bottom: 0.25rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

/* ---- Projects ---- */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.project-card:hover {
  border-color: var(--border-hover);
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
}

.project-img {
  height: 160px;
  overflow: hidden;
  background: #fafafa;
  border-bottom: 1px solid var(--border);
}
.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.3s ease;
}
.project-card:hover .project-img img { transform: scale(1.02); }

.project-img-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-3);
  letter-spacing: -0.02em;
}

.project-body { padding: 1.125rem 1.25rem 1.25rem; }

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}
.project-top h3 {
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.badge {
  font-family: var(--mono);
  font-size: 0.625rem;
  font-weight: 500;
  padding: 0.15rem 0.5rem;
  border-radius: 100px;
}
.badge-live { background: #f0fdf4; color: var(--green); }
.badge-dev { background: #fff7ed; color: var(--orange); }

.project-tagline {
  font-size: 0.9375rem;
  color: var(--text-3);
  margin-bottom: 0.5rem;
}

.project-desc {
  font-size: 0.9375rem;
  color: var(--text-2);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}
.project-stack span {
  font-family: var(--mono);
  font-size: 0.6875rem;
  padding: 0.15rem 0.4rem;
  border-radius: 3px;
  background: #fafafa;
  color: var(--text-2);
  border: 1px solid var(--border);
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.project-links a {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.15s;
}
.project-links a:hover { color: var(--text-2); }
.arrow { font-size: 0.75rem; }

/* ---- Writing ---- */
.posts-list {
  display: flex;
  flex-direction: column;
}

.post-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  color: var(--text);
  transition: background 0.15s;
}
.post-row:first-child { border-top: 1px solid var(--border); }
.post-row:hover { background: #fafafa; }
.post-row:hover .arrow { transform: translate(2px, -2px); }

.post-info { display: flex; flex-direction: column; gap: 0.25rem; }

.post-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-family: var(--mono);
  font-size: 0.6875rem;
  color: var(--text-3);
}

.post-sep { opacity: 0.4; }

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 0.125rem;
}

.post-tags span {
  font-family: var(--mono);
  font-size: 0.5625rem;
  padding: 0.125rem 0.375rem;
  border-radius: 3px;
  background: #fafafa;
  color: var(--text-3);
  border: 1px solid var(--border);
}

.post-row .arrow {
  color: var(--text-3);
  font-size: 0.875rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
  transition: transform 0.15s;
}

.view-all {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-3);
  text-decoration: none;
  transition: color 0.15s;
}
.view-all:hover { color: var(--text); }
.view-all .arrow { transition: transform 0.15s; }
.view-all:hover .arrow { transform: translateX(3px); }

/* ---- Certifications ---- */
.certs-list {
  display: flex;
  flex-direction: column;
}

.cert-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  color: var(--text);
  transition: background 0.15s;
}
.cert-row:first-child { border-top: 1px solid var(--border); }
.cert-row:hover { background: #fafafa; }
.cert-row:hover .arrow { transform: translateX(3px); }

.cert-info { display: flex; flex-direction: column; gap: 0.125rem; }
.cert-title { font-size: 0.9375rem; font-weight: 500; }
.cert-meta { font-family: var(--mono); font-size: 0.6875rem; color: var(--text-3); }

.cert-row .arrow {
  color: var(--text-3);
  font-size: 0.8125rem;
  transition: transform 0.15s;
}

/* ---- Recommendations ---- */
.rec-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.rec-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rec-quote {
  font-size: 0.875rem;
  color: var(--text-2);
  line-height: 1.65;
  font-style: italic;
  margin-bottom: 1rem;
}

.rec-footer { border-top: 1px solid var(--border); padding-top: 0.75rem; }
.rec-author { font-size: 0.875rem; font-weight: 600; display: block; }
.rec-role { font-size: 0.75rem; color: var(--text-3); }

/* ---- Contact ---- */
.section-contact { padding-bottom: 1.5rem; }

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  align-items: center;
}

.contact-links a {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  transition: color 0.15s;
}
.contact-links a:hover { color: var(--text-2); }

.contact-location {
  font-size: 0.9375rem;
  color: var(--text-3);
}

/* ---- Footer ---- */
.footer {
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
  font-family: var(--mono);
  font-size: 0.6875rem;
  color: var(--text-3);
}

/* ---- Animations ---- */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ---- Responsive ---- */

@media (max-width: 380px) {
  .layout { padding: 0 1rem; }
  .nav { padding: 1.25rem 0; }
  .nav-links { gap: 0.75rem; }
  .nav-links a { font-size: 0.6875rem; }
  .hero { padding: 2rem 0 1.5rem; }
  .hero-name { font-size: 1.75rem; }
  .hero-role { font-size: 0.75rem; margin-bottom: 1rem; }
  .hero-typing { font-size: 0.6875rem; }
  .about-text { font-size: 0.875rem; }
  .section { padding: 1.75rem 0; }
  .section-title { font-size: 1.125rem; }
  .projects-grid { grid-template-columns: 1fr; }
  .project-img { height: 120px; }
  .project-body { padding: 0.875rem 1rem 1rem; }
  .project-top h3 { font-size: 0.875rem; }
  .project-desc { font-size: 0.75rem; }
  .project-links a { font-size: 0.75rem; }
  .rec-grid { grid-template-columns: 1fr; }
  .rec-card { padding: 1rem; }
  .rec-quote { font-size: 0.875rem; }
  .cert-title { font-size: 0.8125rem; }
  .cert-meta { font-size: 0.625rem; }
  .contact-links { gap: 0.375rem 1rem; }
  .contact-links a { font-size: 0.75rem; }
}

@media (min-width: 381px) and (max-width: 640px) {
  .layout { padding: 0 1.25rem; }
  .nav { padding: 1.5rem 0; }
  .nav-links { gap: 1rem; }
  .nav-links a { font-size: 0.6875rem; }
  .hero { padding: 2.5rem 0 1.75rem; }
  .hero-name { font-size: 2rem; }
  .hero-role { font-size: 0.75rem; }
  .hero-typing { font-size: 0.75rem; }
  .about-text { font-size: 0.9375rem; }
  .section { padding: 2rem 0; }
  .projects-grid { grid-template-columns: 1fr; }
  .project-img { height: 140px; }
  .rec-grid { grid-template-columns: 1fr; }
  .rec-quote { font-size: 0.875rem; }
}

@media (min-width: 641px) and (max-width: 1023px) {
  .layout { max-width: 620px; }
  .hero { padding: 3rem 0 2rem; }
}

@media (min-width: 1024px) {
  .layout { max-width: 680px; }
}

@media (hover: none) and (pointer: coarse) {
  .cert-row { min-height: 52px; }
  .nav-links a { padding: 0.25rem 0; }
  .project-links a { padding: 0.25rem 0; }
}

/* ---- Selection ---- */
::selection {
  background: rgba(23, 23, 23, 0.08);
  color: var(--text);
}
</style>
