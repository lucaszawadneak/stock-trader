<template>
  <div class="page">
    <div>
      <card
        :header="`${item.name} (${item.owned})`"
        :money="item.price | money"
        buttonLabel="Sell"
        v-for="item in stocks"
        :key="item.name"
        :id="item.name"
        v-model.number="amount"
        @click="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Card from '../components/Card.vue';

export default {
  components: { Card },
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    ...mapActions(['sellStock']),
    handleSubmit(id) {
      if (this.amount > 0) {
        this.sellStock({ id, amount: this.amount });
        this.amount = 0;
      } else {
        this.$toasted.show('Stocks value must be higher than 0', { duration: 4000 });
        this.amount = 0;
      }
    },
  },
  computed: {
    stocks() {
      return this.$store.state.stocks;
    },
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
