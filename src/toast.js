import 'izitoast/dist/css/iziToast.min.css'
import iZtoast from 'izitoast'
import router from '../src/router/index'

const toast = {
    error: (message, title = '') => {
        return iZtoast.error({
            title: title,
            message: message,
            position: 'bottomRight',
            onClosing: function() {
                console.log("callback fechou!");
                // this.$router.push({ name: 'login', query: { redirect: '/path' } });
            }
        });
    },
    loginerror: (message, title = '') => {
        return iZtoast.error({
            title: title,
            message: message,
            position: 'bottomRight',
            onClosing: function() {
                console.log("callback fechou!");
                // this.$router.push({ name: 'login', query: { redirect: '/path' } });
            }
        });
    },
    Regsuccess: (message, title = 'Registration Successful! Check your email to verify account') => {
        return iZtoast.success({
            title: title,
            message: message,
            position: 'bottomRight',

        });
    },

    loginsuccess: (message, title = 'Registration Successful! Check your email to verify account') => {
        return iZtoast.success({
            title: title,
            message: message,
            position: 'bottomRight',

        });
    }
};

export default toast;