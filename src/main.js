import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import swal from 'sweetalert';



Vue.config.productionTip = false
Vue.use(VueAxios, axios, sweetAlert)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')