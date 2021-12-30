# mock-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
build文件夹里面是对 webpack 开发和打包的相关设置，包括入口文件、输出文件、使用的模块等；
webpack支持全局安装和本地安装，官方推荐是本地安装
输入命令：npm install webpack --save-dev
webpack 4+ 版本，还需要安装 CLI ，输入命令：npm install webpack webpack-cli --save-dev
我们注意下项目中文件夹下package.json文件，打开文件，可以看到我们之前用npm安装过的文件都会出现在这里
可以查看教程：
https://blog.csdn.net/weixin_43365369/article/details/89187125（webpack.config.js说明）
https://blog.csdn.net/lgd1917/article/details/105838912（vue.config.js说明）

### 关于vue.config.js和wenpack.config.js文件

新版vue/cli用的是vue.config.js配置文件，且文件是可选的；旧版vue-cli用的是webpack.config.js文件。
vue-cli3的所有的配置项都在vue.config.js的文件中进行配置
vue.config.js和webpack.config.js文件的区别：
https://blog.csdn.net/weixin_45634433/article/details/118965411

### 关于package.json的脚本命令
package.json文件中script下的命令是用来配置连接文件的，例如
"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
就是连接到build/webpack.dev.conf.js文件。

由于我们打包时，系统默认是找webpack.config.js文件的配置，所以这里我们要在package.json文件里添加指定配置，例如：
"dev": "webpack --mode=development --config ./build/prod.config.js",
"build": "webpack --mode=production",
"server": "webpack-dev-server --open --config ./build/dev.config.js"
其中 --mode和--config后面是各自的模块

### vue/cli3 引入jquery
https://www.cnblogs.com/lyt0207/p/12060155.html
如果是在main.js中引入组件就用Vue.use()来注册，如果是引入方法就写在Vue.prototype上，例如Vue.prototype$ = $;然后调用就要用this.$来调用。

### webpack
1、安装完webpack后再卸载，启动项目时就会报错，可能是因为本来就已经安装了webpack，再次安装会导致版本不匹配。
<!-- 在使用vue-cli3创建项目后，因为webpack的配置均被隐藏了，当你需要覆盖原有的配置时，则需要在项目的根目录下，新建vue.config.js文件，来配置新的配置。 -->
2、安装jquery后在main.js引入$,设置Vue.prototype.$ = $; 就可以正常使用this.$()了，vue.config.js配置文件有没有都可以。。。
vue.config.js 是一个可选的配置文件，如果项目的根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。已经自动加载了吗？启动项目时会。

### 引入jquery
安装完jquery后，在main.js引入$，然后设置window.jQuery = $;和window.$ = $;就可以用了......无语
这是因为import $ from 'jquery'后，还没有把$注册到全局中，比如ElementUI要用use来注册，类似jquery的是变量就要变成window的全局变量或者Vue.prototype原型上的变量。

### 实现过程
1、初始化表格自适应高度：初始化界面时在created周期中计算父级元素的高度；

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).