const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const { setConfig } = require('./util.js')

const app = express()

const photoOption = setConfig('http://localhost:8080', {
    '^/photo': ''
})

const phtotProxy = createProxyMiddleware(photoOption);
app.use('/photo', phtotProxy);
app.listen(80)