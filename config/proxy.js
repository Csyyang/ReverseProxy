const { setConfig } = require('../util.js')
const { createProxyMiddleware } = require('http-proxy-middleware')

// 代理配置
const photoOption = setConfig('http://localhost:8080', {
    '^/photo': ''
})
const photoProxy = createProxyMiddleware(photoOption);


const vue3BlogOption = setConfig('http://localhost:8081', {
    '^/vue3Blog': ''
})
const vue3BlogProxy = createProxyMiddleware(vue3BlogOption)


module.exports = {
    photoProxy,
    vue3BlogProxy
}