<template>
  <div id="app">
    <Header />
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: { Header },
};
</script>

<style>
#app {
  overflow: hidden;
}
button,
span,
h1 {
  font-family: 'Roboto', sans-serif;
}

.page > div {
  margin-top: 40px;
  width: 100%;
  max-width: 1200px;
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
}

@keyframes slideIn {
  from {
    transform: translateX(-80px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateX(80px);
    opacity: 0;
  }
}

.fade-enter-active {
  animation: slideIn 500ms ease;
}

.fade-leave-active {
  animation: slideOut 500ms ease;
}
</style>
