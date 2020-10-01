<template>
  <div class="page">
    <div>
      <card header="BMW (5) - R$10,00" buttonLabel="Sell" />
      <card header="Google (5) - R$10,00" buttonLabel="Sell" />
      <card header="Apple (5) - R$10,00" buttonLabel="Sell" />
      <card header="Twitter (5) - R$10,00" buttonLabel="Sell" />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: { Card },
};
</script>

<style scoped>
.page > div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
