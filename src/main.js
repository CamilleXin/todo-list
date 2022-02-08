import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vuetify from './plugins/vuetify'


Vue.prototype.$axios  = axios;
Vue.config.productionTip = false


new Vue({
  vuetify,
  render: h => h(App),
  icons: {
    iconfont: 'mdisvg'
  }
}).$mount('#app')
