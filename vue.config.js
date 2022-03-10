// 在使用vue-cli3创建项目后，因为webpack的配置均被隐藏了，当你需要覆盖原有的配置时，
// 则需要在项目的根目录下，新建vue.config.js文件，来配置新的配置。
module.exports = {
    // publicPath: '/src/assets/',
    // publicPath: process.env.NODE_ENV === 'production' ? "././" : "./",
    // publicPath: '../',
    devServer: {
        host: 'localhost',//自定义域名
        port: 8099//自定义端口
        // proxy: {
        //     '/src': {
        //         target: 'http://localhost:8099/src/assets/',
        //         ws: true,
        //         changOrigin: true,
        //         pathRewrite: {
        //             '^/src': ''
        //         }
        //     }
        // }
    },
}