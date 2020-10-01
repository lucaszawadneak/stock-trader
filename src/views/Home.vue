<template>
  <div class="main">
    <div>
      <h1>Trade and consult your stocks</h1>
      <b-alert show variant="primary">You can load or save your data!</b-alert>
      <b-alert show variant="secondary">Press end day to start a new day!</b-alert>
      <span>Your balance: R$100,00</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main > div {
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
