
const state = {
  choosenMovie:'',
  currentNumber:0,
  getNumber: 20,
};

const mutations = {
  SET_MOVIE: (state, movie) => {
      console.log(movie);
    state.choosenMovie = movie;
  },
  
};

const actions = {
  setChoosenMovie({ commit }, movie) {
    commit('SET_MOVIE', movie);
  },

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
