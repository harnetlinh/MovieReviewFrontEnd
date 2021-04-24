import Cookies from 'js-cookie';

function getID() {
    const user_id = Cookies.get('id');
    if (user_id) {
      return user_id;
    }else{
        return '';
    }
  }
function getGmail() {
    const getGmail = Cookies.get('gmail');
    if (getGmail) {
        return getGmail;
    }else{
        return '';
    }
}
function getFullName() {
    const getFullName = Cookies.get('full_name');
    if (getFullName) {
        return getFullName;
    }else{
        return '';
    }
}
function getAvatar() {
    const getAvatar = Cookies.get('avatar');
    if (getAvatar) {
        return getAvatar;
    }else{
        return '';
    }
}
const state = {
  id: getID(),
  gmail: getGmail(),
  full_name: getFullName(),
  avatar: getAvatar(),
};

const mutations = {
  SET_ID: (state, id) => {
    state.id = id;
    Cookies.set('id', id);
  },
  SET_GMAIL: (state, gmail) => {
    state.gmail = gmail;
    Cookies.set('gmail', gmail);
  },
  SET_FULL_NAME: (state, full_name) => {
    state.full_name = full_name;
    Cookies.set('full_name', full_name);
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
    Cookies.set('avatar', avatar);
  },
};

const actions = {
  setUserInfo({ commit }, user_info) {
    commit('SET_ID', user_info.FS);
    commit('SET_GMAIL', user_info.Qt);
    commit('SET_FULL_NAME', user_info.Te);
    commit('SET_AVATAR', user_info.yJ);
  },
  removeUserInfo({ commit }) {
      console.log("OK");
    commit('SET_ID', '');
    commit('SET_GMAIL', '');
    commit('SET_FULL_NAME', '');
    commit('SET_AVATAR', '');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
