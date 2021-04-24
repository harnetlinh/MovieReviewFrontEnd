
const state = {
  choosenMovie:''
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
