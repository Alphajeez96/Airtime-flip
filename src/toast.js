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

    loginsuccess: (message, title = 'Logded in Successfully!') => {
        return iZtoast.success({
            title: title,
            message: message,
            position: 'bottomRight',

        });
    }
};

export default toast;