const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require('path')
const { photoProxy, vue3BlogProxy }  = require('./config/proxy.js')

const app = express()


app.get('/',function(req,res) {
  res.redirect('/vue3Blog#/')
})

app.use('/photo', photoProxy);
app.use('/vue3Blog', vue3BlogProxy);

// https 配置
const HTTPS_OPTOIN = {
    key: fs.readFileSync(path.resolve(__dirname, './https/2_yangyangcsy.cn.key'), 'utf8'),
    cert: fs.readFileSync(path.resolve(__dirname,'./https/1_yangyangcsy.cn_bundle.crt'), 'utf8')
  };

https.createServer(HTTPS_OPTOIN, app).listen(443);

// app.listen(80)