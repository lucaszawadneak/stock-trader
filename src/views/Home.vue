<template>
  <div class="page">
    <div>
      <h1>Trade and consult your stocks</h1>
      <b-alert show variant="primary">You can load or save your data!</b-alert>
      <b-alert show variant="secondary">Press end day to start a new day!</b-alert>
      <span>Your balance: {{ balance | money }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    balance() {
      return this.$store.state.balance;
    },
  },
};
</script>

<style scoped></style>
