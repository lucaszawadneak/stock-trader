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
</style>
