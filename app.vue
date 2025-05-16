<script setup>
</script>

<template>
  <div class="wrapper">
    <h3>Still cooking...</h3>
    <img alt="Under Construction" src="./assets/b.gif" class="logo" />
    <div class="body">
      <p>Interested in exploring a partnership or discussing a business idea?</p>
      <a href="https://calendly.com/henry-ok/30min" target="_blank" class="cta-button">
        Book a free 30-minute call
      </a>
    </div>
    <div class="footer">
      <p>© chokostudio</p>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: #F4F6F8;
}

.wrapper {
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F4F6F8;
  text-align: center;
  padding: 20px;
}

h3 {
  color: #6478B3;
  font-size: 2.2rem;
  margin-bottom: 20px;
}

.logo {
  display: block;
  height: 260px;
  border-radius: 20px;
  margin-bottom: 20px;
  object-fit: cover;
}

.body {
  max-width: 500px;
  margin: 20px auto;
  color: #333;
  font-size: 1.1rem;
  line-height: 1.6;
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.cta-button {
  display: inline-block;
  margin-top: 16px;
  padding: 10px 20px;
  background-color: #6478B3;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #4b5f91;
}

.footer {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

.footer p {
  color: #777;
  font-size: 0.9rem;
}
</style>
