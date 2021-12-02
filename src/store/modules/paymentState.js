const payementState = ({
  namespaced: true,
  state: {
    stipePK: process.env.VUE_APP_STRIPE_PK,
    product: null,
  },
  mutations: {
    SET_PRODUCT_DATA(state, product) {
      const keysToUpdate = Object.keys(product);
      keysToUpdate.forEach((key) => {
        state[key] = product[key];
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
      commit('SET_PRODUCT_DATA', { product: null });
    },
  },
  modules: {
  },
  getters: {
  },
});

export default payementState;
