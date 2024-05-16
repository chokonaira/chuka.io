<script setup>
</script>

<template>
  <div class="wrapper">
    <h3>Still cooking...</h3>
    <img alt="Under Construction" src="./assets/b.gif" class="logo" />
    <div class="footer">
      <p>© chokostudio</p>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #EAEFF3;
}
h3 {
  text-align: center;
  color: #8393D1;
  font-size: 2rem;
  margin-bottom: 20px;
}
.logo {
  display: block;
  height: 300px;
  border-radius: 50%;
}
.footer {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  padding-bottom: 10px;
}
.footer p {
  color: black;
}
</style>
