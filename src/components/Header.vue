<template>
  <div class="main">
    <div class="nav">
      <h1 @click="navigateHome">StockTrader</h1>
      <button @click="navigateHome">
        HOME
      </button>
      <button @click="() => this.$router.push('/portfolio')">
        PORTFOLIO
      </button>
      <button @click="() => this.$router.push('/stocks')">
        STOCKS
      </button>
    </div>
    <div class="actions">
      <button @click="endDay">
        END DAY
      </button>
      <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
        <template v-slot:button-content>
          <button>
            SAVE / LOAD
          </button>
        </template>
        <b-dropdown-item href="#" @click="set">Save</b-dropdown-item>
        <b-dropdown-item href="#" @click="get">Load</b-dropdown-item>
      </b-dropdown>
      <span>BALANCE: {{ balance | money }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['endDay', 'getData', 'setData']),
    navigateHome() {
      this.$router.push('/');
    },
    get() {
      this.getData();
    },
    set() {
      this.setData();
    },
  },
  computed: {
    balance() {
      return this.$store.state.balance;
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  z-index: 1;
}

.nav {
  display: flex;
  align-items: center;
}

h1 {
  font-size: 18px;
  margin: 0px 10px;
  cursor: pointer;
}

button {
  border: 0px;
  outline: 0;
  height: 60px;
  padding: 0px 10px;
  background-color: #fff;
  transition: 300ms;
  font-weight: bold;
  font-size: 14px;
}

span {
  text-align: center;
  margin: 10px;
  font-size: 14px;
}

button:hover {
  background-color: #ddd;
}
</style>
