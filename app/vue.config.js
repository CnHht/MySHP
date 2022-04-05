module.exports = {
    lintOnSave:false,

    //解决跨域问题：代理服务器配置
    devServer: {
        proxy: {
            //请求服务器地址时出现api启用代理服务器
            '/api': {
                target: 'http://39.98.123.211',
                //如果你不想始终传递 /api ，则需要重写路径：pathRewrite: {'^/api' : ''}
            }
        }
    }
}