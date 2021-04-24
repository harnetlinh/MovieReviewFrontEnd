import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueGapi from 'vue-gapi';
import Vuex from 'vuex';
import store from '@/store';

Vue.use(VueGapi, {
  apiKey: 'AIzaSyCphUx80bSGN3C2ssHILuKnUWizSqoQm0c',//process.env.API_KEY,
  clientId: '308550789612-jedjabmbfdgrfi53h62skq1bbvqr9dre.apps.googleusercontent.com',//process.env.CLIENT_ID,
  // discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  scope: 'https://www.googleapis.com/auth/userinfo.profile',
})
Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
