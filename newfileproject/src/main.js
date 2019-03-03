import Vue from 'vue'
import App from './App.vue';

import DialogBox from './components/DialogBox';
import store from './store/index';
import VueRouter from 'vue-router';
Vue.config.productionTip = false;
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

  export const router=new VueRouter({
    mode:'history',
    routes:[
   
      // {path:'/dialog/:teamId', component: DialogBox},
      {path:'/dialog/:id', name:'Dialog',props:true, component: DialogBox},

    ]
  });

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
