# project-SPH

#### 介绍
vue项目实战--尚硅谷

#### 软件架构
vue  webpack axios less scss node 等等


#### 笔记
###day 1
1)要求
1.1：每一天老师书写代码务必三遍
1.2:node + webpack + VScode + 谷歌浏览器 + git
1.3:数组的方法 + promise + await + async + 模块化........

2)脚手架使用
2: vue init webpack 项目的名字
3|4：vue create 项目名称
脚手架目录:public + assets文件夹区别
node_modules:放置项目依赖的地方
public:一般放置一些共用的静态资源，打包上线的时候，public文件夹里面资源原封不动打包到dist文件夹里面
src：程序员源代码文件夹
  -----assets文件夹：经常放置一些静态资源（图片），assets文件夹里面资源webpack会进行打包为一个模块（js文件夹里面）
  -----components文件夹:一般放置非路由组件（或者项目共用的组件）
        App.vue 唯一的根组件
        main.js 入口文件【程序最先执行的文件】
        babel.config.js:babel配置文件
        package.json：看到项目描述、项目依赖、项目运行指令
        README.md:项目说明文件


3)脚手架下载下来的项目稍微配置一下
3.1:浏览器自动打开
        在package.json文件中
        "scripts": {
         "serve": "vue-cli-service serve --open",
          "build": "vue-cli-service build",
          "lint": "vue-cli-service lint"
        },



3.2关闭eslint校验工具
创建vue.config.js文件：需要对外暴露
module.exports = {
   lintOnSave:false,
}
3.3 src文件夹的别名的设置
因为项目大的时候src（源代码文件夹）：里面目录会很多，找文件不方便，设置src文件夹的别名的好处，找文件会方便一些
创建jsconfig.json文件
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"
            ]
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}


4:项目上传GIT
微信小程序实战课的时候，会带着大家玩耍的
注意:前面基础课程当中，创建分支、处理冲突等等
https://gitee.com/jch1011/shangpinhui_0607.git






5）路由的配置
vue-router
路由分为KV

node平台（并非语言）
对于后台而言:K即为URL地址   V即为相应的中间件
http://localhost:8080/0607
app.get("/0607",(res,req)=>{
   res.send('我是祖国的老花骨朵');
});


前端路由:
K即为URL（网络资源定位符）
V即为相应的路由组件


5.1路由的一个分析
确定项目结构顺序:上中下 -----只有中间部分的V在发生变化，中间部分应该使用的是路由组件
2个非路由组件|四个路由组件
两个非路由组件：Header 、Footer
路由组件:Home、Search、Login（没有底部的Footer组件，带有二维码的）、Register（没有底部的Footer组件，带二维码的）

5.2安装路由
 cnpm install --save vue-router 
--save:可以让你安装的依赖，在package.json文件当中进行记录
5.3创建路由组件【一般放在views|pages文件夹】
5.4配置路由，配置完四个路由组件





6)创建非路由组件（2个：Header、Footer）

非路由组件使用分为几步:
第一步：定义
第二步：引入
第三步：注册
第四步:使用

非路由组件的结构的搭建：
前台项目的结构与样式不需要自己写的，老师准备好了
辉洪老师静态页面：
结构 + 样式 +图片资源

项目采用的less样式,浏览器不识别less语法，需要一些loader进行处理，把less语法转换为CSS语法

1：安装less less-loader@5
切记less-loader安装5版本的，不要安装在最新版本，安装最新版本less-loader会报错，报的错误setOption函数未定义

2:需要在style标签的身上加上lang="less",不添加样式不生效






7)路由的跳转
路由的跳转就两种形式：声明式导航（router-link：务必要有to属性）
                    编程式导航push||replace
编程式导航更好用：因为可以书写自己的业务逻辑





面试题：v-show与v-if区别?
v-show:通过样式display控制
v-if：通过元素上树与下树进行操作
面试题:开发项目的时候，优化手段有哪些?
1:v-show|v-if
2:按需加载
8)首页|搜索底部是有Footer组件，而登录注册是没有Footer组件
Footer组件显示|隐藏，选择v-show|v-if
路由元信息



9）路由传参
params参数：路由需要占位，程序就崩了，属于URL当中一部分
query参数：路由不需要占位，写法类似于ajax当中query参数
路由传递参数先关面试题
     1:路由传递参数（对象写法）path是否可以结合params参数一起使用?
     不可以：不能这样书写，程序会崩掉
     2:如何指定params参数可传可不传? 
     3:params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
     4:如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题
     5: 路由组件能不能传递props数据?
     

###day 2
犯的错误:
1:项目阶段，左侧菜单目录，只能有项目文件夹
2:联想电脑安装node_modules依赖包的时候，经常丢包。npm install --save axios --force
3：单词错误
4：路由理解
KV：K--->URL  V---->相应的组件
配置路由：
     ------路由组件
     -----router--->index.js
                  import Vue  from 'vue';
                  import VueRouter from 'vue-router';
                  //使用插件
                  Vue.use(VueRouter);
                  //对外暴露VueRouter类的实例
                  export default new VueRouter({
                       routes:[
                            {
                                 path:'/home',
                                 component:Home
                            }
                       ]
                  })
    ------main.js   配置项不能瞎写


$router:进行编程式导航的路由跳转
this.$router.push|this.$router.replace
$route:可以获取路由的信息|参数
this.$route.path
this.$route.params|query
this.$route.meta


1)编程式导航路由跳转到当前路由(参数不变), 多次执行会抛出NavigationDuplicated的警告错误?
注意:编程式导航（push|replace）才会有这种情况的异常，声明式导航是没有这种问题，因为声明式导航内部已经解决这种问题。
这种异常，对于程序没有任何影响的。
为什么会出现这种现象:
由于vue-router最新版本3.5.2，引入了promise，当传递参数多次且重复，会抛出异常，因此出现上面现象,
第一种解决方案：是给push函数，传入相应的成功的回调与失败的回调
第一种解决方案可以暂时解决当前问题，但是以后再用push|replace还是会出现类似现象，因此我们需要从‘根’治病；



2)将Home组件的静态组件拆分
2.1静态页面（样式）
2.2拆分静态组件
2.3发请求获取服务器数据进行展示
2.4开发动态业务
拆分组件：结构+样式+图片资源
一共要拆分为七个组件








3)axios二次封装
AJAX:客户端可以'敲敲的'向服务器端发请求，在页面没有刷新的情况下，实现页面的局部更新。
XMLHttpRequest、$、fetch、axios
跨域:如果多次请求协议、域名、端口号有不同的地方，称之为跨域
JSONP、CROS、代理
2.1:工作的时候src目录下的API文件夹，一般关于axios二次封装的文件
2.2进度条：nprogress模块实现进度条功能
工作的时候，修改进度条的颜色，修改源码样式.bar类名的




4)vuex:今晚务必vuex复习一下
vuex:Vue官方提供的一个插件，插件可以管理项目共用数据。
vuex：书写任何项目都需要vuex？
项目大的时候，需要有一个地方‘统一管理数据’即为仓库store
Vuex基本使用:

​     

### day 3
1:重写push与replace方法
工作的时候想处理掉，不想处理对于你的程序没有任何影响
function push(){
    return new Promise(resolve,reject){

    }

}


2:axios二次封装
-----API：关于请求相关的（axios）
请求、响应拦截器----nprogress进度条


3:vuex
当项目比较大，组件通信数据比较复杂，这种情况在使用vuex

Vuex是插件，通过vuex仓库进行存储项目的数据



1)vuex模块式开发【modules】
由于项目体积比较大，你向服务器发请求的接口过多，服务器返回的数据也会很多，如果还用以前的方式存储数据，导致vuex中的state数据格式比较复杂。采用vuex模块式管理数据。
Vuex核心概念:state、actions、mutations、getters、modules

{
    state：{
         a:1,
         b:2,
         c:[],
         d:{}
    }
}

//模块式开发
{
    state:{
        home:{a:1},
        search:{},
        detail:{}
    }
}


2)商品分类三级联动展示动态数据

以前基础课程的时候，发请求操作如下：在组件的mounted中书写axios.get||post,获取到数据存储到组件的data当中进行使用


你们写项目的时候发请求在哪里发呀？
mounted|created:都可以

mounted：模板已经变为真是DOM【只不过没有数据，显示空白】，因为ajax是异步，需要时间的。
created：稍微好那么一丢丢（不算啥）




3)商品分类数据猜想？

[
    {
        id:1,categoryName:'图书',
        child:[
             {id:3.14,
              categoryName:'影像'，
              child:[
                   {id:4,categoryName:'华为'}
              ]
             }
        ]
    }
]


4)完成动态展示商品分类的数据






5)完成一级分类的背景效果
第一种解决方案：CSS  hover 怎么接单怎么来





6)完成动态展示2|3联动结构




7)演示卡顿现象


8)函数防抖与节流*******面试题

正常：事件触发非常频繁，而且每一次的触发，回调函数都要去执行（如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿）

防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发,只会执行最后一次

节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发

今晚需要把防抖与节流的原理，通过JS实现【闭包 + 延迟器】





9)优化项目。
v-if|v-show
按需加载
函数防抖与节流
按需加载:对于loadsh插件，它里面封装的函数功能很多
import _ from lodash 相当于把全部功能引入进来，但是我们只是需要节流。





10)路由的跳转与传参

第一种声明式导航:为什么使用router-link组件的时候，会出现卡顿那？
router-link是一个组件：相当于VueComponent类的实例对象，一瞬间
new VueComponent很多实例（1000+），很消耗内存，因此导致卡顿。






第二种编程式导航:push|replace

三级分类由于使用router-link的时候，会出现卡顿现象，因此采用编程式导航。

路由跳转的时候【home->search】：需要进行路由传递参数【分类的名字、一、二、三级分类的id】


this.$router.push()

{ 
 name:'search',
 query:{
    categoryName:'电子书',
    category2Id:4
 }
}



###day 4

作业:利用过渡动画transiton，封装一个抽屉的效果。



1:课堂注意
出现一些项目中的提问的问题：比如 OK    1
                         比如：NO    2

2：线上授课
上课的时候如果收到社区人员通知做核酸，和老师说一声！
有任何困难和老说说一声
微信群+添加老师微信+学习问题及时与老师沟通
每一天的上课视频，老师会上传百度网盘





3)复习一下
三级联动业务:
3.1前面基础课程当中v-for很少使用index，以后在写项目的时候，index索引值切记加上
3.2防抖与节流【面试经常出现】
3.3vuex可以模块式开发
vuex经常用的套路是state、mutations、actions、getters、modules



1)搜索模块中的三级联动与过渡动画


1.1在home模块当中，使用了一个功能三级联动功能---->[typeNav]
1.2在search模块当中，也使用三级联动的功能------->[typeNav]
1.3注意的事项
注意1：以后在开发项目的时候，如果发现某一个组件在项目当中多个地方出现频繁的使用
咱们经常把这类的组件注册为全局组件。
注册全局组件的好处是什么那：只需要注册一次，可以在程序任意地方使用

注意2:咱们经常把项目中共用的全局组件放置于components里面，以后需要注意，
项目当中全局组件（共用的组件）一般放置于components文件夹中

注意3：全局组件只需要注册一次，就可以在项目当中任意的地方使用，注册全局组件一般是在入口文件注册。



2)组件name属性的作用?
2.1开发者工具中可以看见组件的名字
2.2注册全局组件的时候，可以通过组件实例获取相应组件的名字




3)TypeNav组件业务分析?
3.1三级联动在home模块正常显示
3.2三级联动在search一会显示、一会隐藏 ---解决方案：通过一个响应式属性控制三级联动显示与隐藏
3.3开发的时候的出现问题：在home模块下不应该出现显示与隐藏的效果
3.4现在这个问题【三级联动：本身在search模块应该有显示与隐藏的业务】 ，但是在home模块下不应该出现显示与隐藏的业务
说白了：你需要让三级联动组件知道谁在用它。
3.5:通过$route让组件区分在那个模块下
以后在功的时候，如果出现某一个组件要区分当前在哪一个模块中【home、search】，通过$route路由信息区分
3.6路由跳转的时候，相应的组件会把重新销毁与创建----【kepp-alive】





4)过渡效果
最早接触的时候:CSS3
Vue当中也有过渡动画效果---transition内置组件完成
4.1:注意1,在Vue当中，你可以给 （某一个节点）|（某一个组件）添加过渡动画效果
但是需要注意，节点|组件务必出现v-if|v-show指令才可以使用。




5)TypeNav三级联动性能优化?
项目：home切换到search或者search切换到home，你会发现一件事情，组件在频繁的向服务器发请求，
获取三级联动的数据进行展示。

项目中如果频繁的向服务器发请求，很好性能的，因此咱们需要进行优化。


5.1为什么会频繁的向服务器发请求获取三级联动的数据那?

因为路由跳转的时候，组件会进行销毁的【home组件的created：在向vuex派发action，因此频繁的获取三级联动的数据】
只需要发一次请求，获取到三级联动的数据即可，不需要多次。
最终解决方案：在App.



5.2:项目性能优化手段有哪些？
v-if|v-show选择
按需加载          lodash、ant
防抖与节流
请求次数优化




6)开发listContainer|Floor组件业务？
接下来需要开发listContainer与floor组件
场景:开发项目，产品经理画出原型，前端与后端人员需要介入（开发项目），
leader（老大）刚开完会，前端与后端负责哪些模块，后端人员（....开发服务器），
前端人员【项目起步、开发静态页面、查分静态组件】，回首一看回台‘哥哥’，接口没有写好，
向这种情况，前端人员可以mock一些数据【前端程序员自己模拟的一些假的接口】，当中工作中项目上线，需要把mock
数据变为后台哥哥给的接口数据替换。


6.1mock数据。
注意：因为后台老师没有给我们写好其他接口【老师们特意的：因为就是想练习mock数据】
但是项目中mock数据，你就把他当中真实接口数据用就行。

注意：mock（模拟数据）数据需要使用到mockjs模块，可以帮助我们模拟数据。
注意：mockjs【并非mock.js mock-js】
http://mockjs.com/  官方地址

mock官网一句话：晚上练习的时候，如果网速可以，看看mock的官网，看看语法规则；
生成随机数据，拦截 Ajax 请求
mock官网当中这句话的理解：
模拟的数据一般：对象、数组
{
    'a|1-10':'我爱你'
}
拦截ajax请求：请求发布出去【浏览器会进行拦截：笨想，因为服务器】，只是项目当中本地自己玩耍数据。


第一步:安装依赖包mockjs

第二部：在src文件夹下创建一个文件夹，文件夹mock文件夹。

第三步:准备模拟的数据
把mock数据需要的图片放置于public文件夹中！
比如:listContainer中的轮播图的数据
[
   {id:1,imgUrl:'xxxxxxxxx'}, 
   {id:2,imgUrl:'xxxxxxxxx'}, 
   {id:3,imgUrl:'xxxxxxxxx'}, 
]

第四步：在mock文件夹中创建一个server.js文件
注意：在server.js文件当中对于banner.json||floor.json的数据没有暴露，但是可以在server模块中使用。
对于webpack当中一些模块：图片、json，不需要对外暴露，因为默认就是对外暴露。


第五步:通过mock模块模拟出数据

通过Mock.mock方法进行模拟数据


第六步:回到入口文件，引入serve.js
mock需要的数据|相关mock代码页书写完毕，关于mock当中serve.js需要执行一次，
如果不执行，和你没有书写一样的。



第七步:在API文件夹中创建mockRequest【axios实例：baseURL:'/mock'】
专门获取模拟数据用的axios实例。

在开发项目的时候：切记，单元测试，某一个功能完毕，一定要测试是否OK




7）存储数据，存储于vuex
7.1:书写静态页面
7.2：拆分组件
7.3：获取服务器数据
7.4：展示数据
7.5：开发动态业务




8)swiper基本的使用？

8.1:swiper可以在移动端使用？还是PC端使用？
答：swiper移动端可以使用，pc端也可以使用。

8.2:swiper常用于哪些场景？
常用的场景即为轮播图----【carousel:轮播图】
swiper最新版本为7版本的，项目当中使用的是5版本

https://www.swiper.com.cn/ 官网地址


###day 5
------作业：
晚上翻看一下swiperAPI

项目第四天:重要的事情
1:mockjs模块实现模拟数据
---对于将来实际工作的时候，后台没有准备好接口（服务器没有开发出来），前端工程师可以利用mock技术，
实现模拟数据，将来项目上线（后台真实接口）写好了，替换为真实接口即可。
---对于咱们而言，后台老师确实没有给首页中轮播这部分的接口，mock数据，你可以当中一个真实接口就行了。
上线的时候，对于mock数据对于项目而言没有任何影响。

对于项目而言:真实的接口 /api/xxxx    模拟的数据/mock/xxxx
模拟数据JSON：没有空格，最好使用格式化插件进行格式化。


2:swiper插件。
提醒:当年学习过移动端视口、rem、高清图等等。
swiper插件：可以在移动端、PC端都可以使用，这个插件经常可以快速开发轮播图。
前端开发:轮播图、分页器、日历。


Swiper使用步骤：
第一步：引入依赖包【swiper.js|swiper.css】
第二步:静态页面中结构必须完整【container、wrap、slider】，类名不能瞎写
第三步:初始化swiper实例


*************************************************************************************


1:swiper在Vue项目中使用 （开发ListContainer组件【首页banner图片】）
提示：卸载插件，你可以不用删除node_modules文件夹，可以使用npm uninstall xxxx进行卸载
1.1swiper安装到项目当中

1.2在相应的组件引入swiper.js|swiper.css 

但是需要注意，home模块很多组件都使用到swiper.css,没必要在每一个组件内部都引入样式一次，
只需要在入口文件引入一次即可。

1.3:初始化swiper实例在哪里书写?
初始化swiper实例之前，页面中的节点（结构）务必要有，
对于Vue一个组件而言，mounted[组件挂载完毕：相应的结构不就有了吗]
mounted-->组件挂载完毕

1.4动态效果为什么没有出来？
Swiper需要获取到轮播图的节点DOM，才能给swiper轮播添加动态效果，
因为没有获取到节点。

1.5第一种解决方案，延迟器（不是完美的解决方案）
同学的想法：都不是完美的【错误的想法】
created里面：created执行与mounted执行，时间差可能2ms，白扯
updated里面：如果组件有很多响应式（data），只要有一个属性值发生变化updated还会再次执行，再次初始化实例。

总结：第一种解决方案可以通过延迟器（异步）去解决问题，
但是这种解决方案存在风险（无法确定用户请求到底需要多长时间），因此没办法确定
延迟器时间。




2:Swiper在Vue项目中使用完美解决方案
第一种解决方案问题出现在哪里：v-for,在遍历来自于Vuex（数据:通过ajax向服务器发请求，存在异步）

watch:监听属性，watch可以检测到属性值的变化，当属性值发生变化的时候，可以出发一次。

Vuex当中的仓库数据bannerList（组件在使用）：
bannerList仓库数据有没有发生过变化？
一定是有的：bannerList初始值空数组，当服务器的数据返回以后，它的bannerList存储的属性值会发生变化【变为服务器返回的数据】
组件实例在使用仓库中的bannerList，组件的这个属性bannerList一定是发生过变化，watch可以监听到。


组件实例的一个方法:$nextTick
this.$nextTick(()=>{

})
nextTick官网解释:
在下次DOM更新, 循环结束之后,执行延迟回调。在 修改数据之后 立即使用这个方法，获取更新后的DOM。
注意：组件实例的$nextTick方法，在工作当中经常使用，经常结合第三方插件使用，获取更新后的DOM节点


总结:
1:Swiper插件工作的是很常用（今晚把API、基本使用方法）看看
2:组件实例的$nextTick方法。
在下次DOM更新, 循环结束之后,执行延迟回调。在 修改数据之后 立即使用这个方法，获取更新后的DOM





3)开发Floor组件
开发Floor组件：Floor组件它被复用的（重复使用两次）

3.1:Floor组件获取mock数据，发请求的action书写在哪里?
派发action应该是在父组件的组件挂载完毕生命周期函数中书写，因为父组件需要通知Vuex发请求，父组件
获取到mock数据，通过v-for遍历 生成多个floor组件，因此达到复用作用。


3.2:父组件派发action，通知Vuex发请求，Home父组件获取仓库的数据，通过v-for遍历出多个Floor组件


3.3v-for|v-show|v-if|这些指令可以在自定义标签（组件）的身上使用



3.4组件间通信******面试必问的东西
props:父子
插槽:父子
自定义事件:子父
全局事件总线$bus:万能
pubsub:万能
Vuex:万能
$ref:父子通信
3.5为什么在Floor组件的mounted中初始化SWiper实例轮播图可以使用.
因为父组件的mounted发请求获取Floor组件，当父组件的mounted执行的时候。
Floor组件结构可能没有完整，但是服务器的数据回来以后Floor组件结构就一定是完成的了
，因此v-for在遍历来自于服务器的数据，如果服务器的数据有了，Floor结构一定的完整的。
否则，你都看不见Floor组件



4)carousel全局组件
如果项目当中出现类似的功能，且重复利用，封装为全局组件----【不封装也可以】

为了封装全局的轮播图组件:让Floor与listContainer组件中的代码一样，如果一样完全可以独立出来
封装为一个全局组件。




最终:今天项目当中那部分业务有问题（没明白的）  ----1

    项目业务逻辑OK的   -------------------------2




#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
