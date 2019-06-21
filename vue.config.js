// const proxy_url = 'http://192.168.3.142:5001';
const proxy_url = 'http://192.168.3.142:8881';


module.exports = {
    lintOnSave: 'error',
    devServer: {
        proxy: {
            "/api": {
                target: proxy_url,
                changOrigin: true,
                pathRewrite: {
                    "^/api": "/api"
                }
            }
        }
    }
}