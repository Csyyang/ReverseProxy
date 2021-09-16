const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const { setConfig } = require('./util.js')
const https = require('https')
const fs = require('fs')
const path = require('path')

const app = express()

// 代理配置
const photoOption = setConfig('http://localhost:8080', {
    '^/photo': ''
})
const phtotProxy = createProxyMiddleware(photoOption);
app.use('/photo', phtotProxy);

// https 配置
const HTTPS_OPTOIN = {
    key: fs.readFileSync(path.resolve(__dirname, './https/2_yangyangcsy.cn.key'), 'utf8'),
    cert: fs.readFileSync(path.resolve(__dirname,'./https/1_yangyangcsy.cn_bundle.crt'), 'utf8')
  };

https.createServer(HTTPS_OPTOIN, app).listen(443);

// app.listen(80)