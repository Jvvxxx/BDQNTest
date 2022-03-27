import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CS
import axios from 'axios'
import vuex from 'vuex'
Vue.prototype.axios = axios
Vue.use(ElementUI);
Vue.use(vuex);
Vue.config.productionTip = false
Vue.use(iView)
axios.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么
        config.headers.Authorization = sessionStorage.getItem('token');
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
router.beforeEach((to, from, next) => {
    let isLogin = sessionStorage.getItem('token');
    console.log(isLogin)
    if (isLogin) {
        next();
    } else {
        if (to.path === '/login') {
            next();
        } else {
            next('/login')
        }
    }

})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')