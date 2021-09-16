function setConfig(target, pathRewrite) {
    return {
        target, // target host
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite,
        // router: {
        //     // when request.headers.host == 'dev.localhost:3000',
        //     // override target 'http://www.example.org' to 'http://localhost:8000'
        //     'dev.localhost:3000': 'http://localhost:8000',
        // },
    }
}

module.exports.setConfig = setConfig