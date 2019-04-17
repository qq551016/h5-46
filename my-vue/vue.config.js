module.exports = {
    devServer:{
        proxy:{
            '/': {
                target: 'http://open.douyucdn.cn',
                ws: false,
                changeOrigin: true
            },
        }
    }
}