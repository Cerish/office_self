import axios from 'axios'
export default {
    ajax(uri, type, params) {
        if(type === 'get' && params) {
            if(uri.indexOf('?') === -1) {
                uri = uri + '?'
            } else if(uri.lastIndexOf('&') !== uri.length -1) {
                uri = uri + '&'
            }
            for(let k in params) {
                uri = uri + k + '=' + window.encodeURIComponent(params[k]) + '&';
            }
        }
        return axios[type](uri, params)
    }
}