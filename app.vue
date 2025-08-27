<script setup>
import { onMounted, ref } from 'vue'

const typedText = ref('')
const fullText = 'Mostly coding, watching Arsenal games or brainstorming ideas.'
const cursorVisible = ref(true)

onMounted(() => {
  let index = 0
  const typeWriter = () => {
    if (index < fullText.length) {
      typedText.value += fullText.charAt(index)
      index++
      setTimeout(typeWriter, 80)
    }
  }
  setTimeout(typeWriter, 500)
  
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 500)
})
</script>

<template>
  <div class="wrapper">
    <div class="grid-bg"></div>
    <div class="content">
      <header class="header">
        <h1 class="name">Henry C.O</h1>
        <p class="title">Senior Software Engineer</p>
        <div class="typing-container">
          <span class="typed-text">{{ typedText }}</span>
          <span class="cursor" :class="{ visible: cursorVisible }">_</span>
        </div>
      </header>
      
      <main class="main-content">
        <div class="card">
          <div class="card-header">
            <span class="terminal-prompt">&gt;</span>
            <span class="terminal-text">about.me</span>
          </div>
          
          <p class="bio">
            Exploring innovative solutions at the intersection of technology and business.
            Ready to collaborate on your next breakthrough project.
          </p>
          
          <div class="actions">
            <a href="https://henryokonkwo.hashnode.dev/" target="_blank" class="btn btn-primary">
              <span class="btn-text">Visit Blog</span>
              <span class="btn-arrow">→</span>
            </a>
            <a href="https://github.com/chokonaira" target="_blank" class="btn btn-secondary">
              <span class="btn-text">GitHub</span>
              <span class="btn-arrow">→</span>
            </a>
            <a href="https://calendly.com/henry-ok/30min" target="_blank" class="btn btn-secondary">
              <span class="btn-text">Schedule Call</span>
              <span class="btn-arrow">→</span>
            </a>
          </div>
          
          <div class="skills">
            <span class="skill">Full Stack</span>
            <span class="skill">Native Apps</span>
            <span class="skill">AI/ML</span>
          </div>
        </div>
      </main>
      
      <footer class="footer">
        <span class="footer-text">© 2024 chokostudio</span>
        <span class="footer-divider">•</span>
        <span class="footer-version">v2.0.1</span>
      </footer>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #1a1a1a;
  --text-secondary: #6c757d;
  --accent-primary: #0066cc;
  --accent-secondary: #007bff;
  --border-color: rgba(0, 102, 204, 0.1);
  --font-mono: 'SF Mono', 'Fira Code', 'Courier New', monospace;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
}

body {
  font-family: var(--font-sans);
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow-x: hidden;
  line-height: 1.6;
}

.wrapper {
  min-height: 100vh;
  position: relative;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
}

.grid-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 102, 204, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 102, 204, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  opacity: 0.5;
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.name {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.title {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: var(--accent-primary);
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-family: var(--font-mono);
}

.typing-container {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  color: var(--text-secondary);
  min-height: 1.5rem;
  font-family: var(--font-mono);
}

.typed-text {
  color: var(--text-secondary);
}

.cursor {
  color: var(--accent-primary);
  font-weight: 400;
  opacity: 0;
  transition: opacity 0.1s;
}

.cursor.visible {
  opacity: 1;
}

.main-content {
  width: 100%;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.terminal-prompt {
  color: var(--accent-primary);
  font-weight: 600;
}

.terminal-text {
  color: var(--text-secondary);
}

.bio {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
}

.actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  flex: 1;
  min-width: 150px;
  padding: 0.875rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  font-family: var(--font-mono);
}

.btn-primary {
  background: var(--accent-primary);
  color: #ffffff;
}

.btn-primary:hover {
  background: transparent;
  color: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border-color: rgba(0, 0, 0, 0.2);
}

.btn-secondary:hover {
  border-color: var(--text-primary);
  transform: translateY(-2px);
}

.btn-arrow {
  transition: transform 0.2s ease;
}

.btn:hover .btn-arrow {
  transform: translateX(4px);
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill {
  padding: 0.375rem 0.875rem;
  background: var(--bg-secondary);
  border: 1px solid rgba(0, 102, 204, 0.2);
  color: var(--accent-primary);
  border-radius: 4px;
  font-size: 0.85rem;
  font-family: var(--font-mono);
  transition: all 0.2s ease;
}

.skill:hover {
  background: rgba(0, 102, 204, 0.1);
  border-color: var(--accent-primary);
}

.footer {
  position: absolute;
  bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

.footer-divider {
  color: rgba(108, 117, 125, 0.4);
}

.footer-version {
  color: var(--accent-primary);
  opacity: 0.7;
}

/* Responsive Design */
@media (max-width: 768px) {
  .content {
    padding: 1.5rem;
  }
  
  .header {
    margin-bottom: 2rem;
  }
  
  .name {
    font-size: 2.5rem;
  }
  
  .title {
    font-size: 1.1rem;
  }
  
  .card {
    padding: 2rem 1.5rem;
  }
  
  .actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    min-width: unset;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 2rem;
  }
  
  .title {
    font-size: 1rem;
  }
  
  .typing-container {
    font-size: 0.85rem;
  }
  
  .card {
    padding: 1.5rem;
  }
  
  .bio {
    font-size: 0.95rem;
  }
  
  .btn {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }
  
  .skill {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
  }
  
  .footer {
    font-size: 0.75rem;
  }
}

@media (min-width: 1440px) {
  .content {
    max-width: 1000px;
  }
  
  .name {
    font-size: 4.5rem;
  }
  
  .title {
    font-size: 1.5rem;
  }
}
</style>