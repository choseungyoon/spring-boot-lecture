import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import { router } from './router/index.js';
Vue.config.productionTip = false

import GlobalComponent from './components/global-component'

// 컴포넌트를 Vue 인스턴스에 바인딩
Vue.component(GlobalComponent.name,GlobalComponent)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')