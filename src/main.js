    import Vue from 'vue'
    import App from './App.vue'
    import router from './router'
    import 'bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import swal from 'sweetalert';
    import VueCookie from 'vue-cookie'
    import jquery from 'jquery'

    const base = axios.create({
        baseURL: "https://test.airtimeflip.com/api/v1/"
    });

    Vue.prototype.$http = base;
    Vue.config.productionTip = false
    Vue.use(VueAxios, axios, sweetAlert, VueCookie, jquery)

    new Vue({
        router,
        render: h => h(App)
    }).$mount('#app')