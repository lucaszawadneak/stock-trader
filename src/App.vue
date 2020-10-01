<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: { Header },
};
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
}
.page > div {
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
