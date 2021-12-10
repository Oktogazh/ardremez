import axios from 'axios';

const payementState = ({
  namespaced: true,
  state: {
    prices: null,
    product: null,
  },
  mutations: {
    RESET_PRODUCT_DATA(state, { prices, product }) {
      state.prices = prices;
      state.product = product;
    },
    SET_PRICES(state, prices) {
      state.prices = prices;
    },
    SET_PRODUCT_DATA(state, { product }) {
      state.product = {};
      const keysToUpdate = Object.keys(product);
      keysToUpdate.forEach((key) => {
        state.product[key] = product[key];
      });
      localStorage.setItem('paymentData', JSON.stringify(product));
    },
  },
  actions: {
    startCheckout({ commit }, product) {
      commit('SET_PRODUCT_DATA', product);
    },
    endCheckout({ commit }) {
      localStorage.removeItem('paymentData');
      commit('RESET_PRODUCT_DATA', { prices: null, product: null });
    },
    async loadPrices({ commit, rootState, state }) {
      const { _id } = state.product;
      const prices = await axios.get(`${rootState.api}/api/prices/${_id}`)
        .then((res) => res.data.prices.data);
      commit('SET_PRICES', prices);
    },
  },
  modules: {
  },
  getters: {
  },
});

export default payementState;
