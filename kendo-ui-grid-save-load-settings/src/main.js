import Vue from 'vue'
import App from './App.vue'

import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
import { Button, ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'

Vue.use(ButtonsInstaller)
Vue.use(GridInstaller);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
