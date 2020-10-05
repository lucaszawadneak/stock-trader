import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stocks: [
      {
        name: 'BMW',
        price: 110,
        owned: 0,
      },
      {
        name: 'Google',
        price: 110,
        owned: 0,
      },
      {
        name: 'Apple',
        price: 250,
        owned: 0,
      },
      {
        name: 'Twitter',
        price: 12,
        owned: 0,
      },
    ],
    balance: 10000,
  },
  mutations: {
    buy(state, { index, amount }) {
      state.stocks[index].owned += amount;
    },
    sell(state, { index, amount }) {
      state.stocks[index].owned -= amount;
    },
    addToBalance(state, payload) {
      state.balance += payload;
    },
    subFromBalance(state, payload) {
      state.balance -= payload;
    },
    newPrice(state, { index, price }) {
      state.stocks[index].price += price;
    },
    setNewData(state, payload) {
      state.stocks = payload;
    },
  },
  actions: {
    buyStock(context, payload) {
      const { id, amount } = payload;
      const index = this.state.stocks.findIndex((item) => item.name === id);

      if (index >= 0) {
        const newPayload = { amount, index };
        const subValue = this.state.stocks[index].price * amount;

        context.commit('buy', newPayload);
        context.commit('subFromBalance', subValue);
      }
    },
    sellStock(context, payload) {
      const { id, amount } = payload;
      const index = this.state.stocks.findIndex((item) => item.name === id);

      if (index >= 0) {
        const newPayload = { amount, index };
        const addValue = this.state.stocks[index].price * amount;

        context.commit('sell', newPayload);
        context.commit('addToBalance', addValue);
      }
    },
    endDay(context) {
      this.state.stocks.forEach((item, index) => {
        let stockPrice = Math.floor((Math.random() * item.price) / 3);
        stockPrice *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

        context.commit('newPrice', { price: stockPrice, index });
      });
    },
    async getData(context) {
      const response = await Vue.prototype.$http.get('data.json');
      if (response.data) {
        context.commit('setNewData', response.data.stocks);
        Vue.toasted.show('Data loaded successfully!', {
          duration: 3000,
          position: 'top-center',
          theme: 'outline',
        });
      }

      return response;
    },
    async setData() {
      const response = await Vue.prototype.$http.put('data.json', this.state);

      if (response.status === 200) {
        Vue.toasted.show('Changes stored successfully!', {
          duration: 3000,
          position: 'top-center',
          theme: 'outline',
        });
      }

      return response;
    },
  },
});
