<template>
  <div class="page">
    <transition-group enter-active-class="animated bounce" leave-active-class="animated shake">
      <card header="BMW (5) - R$10,00" buttonLabel="Sell" key="0" />
      <card header="Google (5) - R$10,00" buttonLabel="Sell" key="1" />
      <card header="Apple (5) - R$10,00" buttonLabel="Sell" key="2" />
      <card header="Twitter (5) - R$10,00" buttonLabel="Sell" key="3" />
    </transition-group>
    <button @click="visible = !visible">switch</button>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: { Card },
  data() {
    return {
      visible: false,
    };
  },
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
