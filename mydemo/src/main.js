import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router' //引入路由
import less from 'less'
import dataV from '@jiaminghi/data-view'
import VueThermometer from 'vuejs-thermometer'
import '@/assets/less/index.less'
import '@/assets/iconfont/iconfont.css'
import '@/assets/less/myElementStyle.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// window.jQuery = $;
// window.$ = $;

Vue.config.productionTip = false
// console.log($)
// 设置浏览器标题
Vue.directive('title', {
  inserted: function (el, binding) {
    binding
    document.title = el.dataset.title
  }
})
Vue.use(less).use(dataV).use(ElementUI).use(VueThermometer).use(VueAxios,axios)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
