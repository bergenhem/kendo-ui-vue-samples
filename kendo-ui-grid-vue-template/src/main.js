import Vue from 'vue'
import App from './App.vue'

import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';

Vue.use(GridInstaller);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: {
    Grid
  }
}).$mount('#app')
