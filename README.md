### 前言
前段时间用mpvue开发过一个仿网易云音乐的微信小程序([链接](https://github.com/lucaswww/my-project))，但似乎mpvue好像是不再维护了，偶然得知有个[Taro](https://nervjs.github.io/taro/docs/README.html)也可以开发小程序，但是用的是[React](https://react.docschina.org/docs/hello-world.html)，正好也想了解了解React所以开发了这个项目。[git地址](https://github.com/lucaswww/my-taro)
![](https://user-gold-cdn.xitu.io/2018/11/28/1675820ca6aac26e?w=258&h=258&f=jpeg&s=45801)现在这个版本还只有豆瓣电影的，发布成功以后发现正式环境和开发的好像有些东西还需要调一下(😅)
### 预览

![](https://user-gold-cdn.xitu.io/2018/11/29/1676014bb1117745?w=216&h=383&f=gif&s=1641827)
### Taro简介
Taro 是一套遵循 React 语法规范的 多端开发 解决方案。使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信小程序、H5、RN 等）运行的代码。(摘至[官网](https://nervjs.github.io/taro/docs/README.html))

### React
[React](https://react.docschina.org/docs/hello-world.html)的话跟着官网走一遍基本就能开发了，看了react以后还是觉得自己喜欢vue多一点(😂)

### 项目流程

```
npm install -g @tarojs/cli
taro init myApp
npm run dev:weapp
```

### 开发小程序注意事项
（摘自官网）若使用 微信小程序预览模式 ，则需下载并使用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=18112721)添加项目进行预览，此时需要注意微信开发者工具的项目设置
* 需要设置关闭 ES6 转 ES5 功能，开启可能报错
* 需要设置关闭上传代码时样式自动补全，开启可能报错
* 需要设置关闭代码压缩上传，开启可能报错   
还有一些其他问题需要注意的，[这里](https://nervjs.github.io/taro/docs/before-dev-remind.html)基本都指出了，我在实际开发中好像也没遇到过里面提及过的问题(😂)

### 开发相关
 app.js对应的就是小程序的app.json一些基本配置可以在这里完成，比如tarBar
 ```
 "tabBar": {
    "list": [
      {
        "text": "音乐",
        "pagePath": "pages/music/music",
        "iconPath": "./img/music.png",
        "selectedIconPath": "./img/music.png"
      },
      {
        "text": "电影",
        "pagePath": "pages/index/index",
        "iconPath": "./img/movie.png",
        "selectedIconPath": "./img/movie.png"
      }
    ]
  }
 ```
 #### 路由和传值

 ```
 //可使用Taro的
 Taro.navigateTo({url:'/pages/some?tag=tags'})
 //或者
 <Navigator url="/pages/some?tag=tags">更多</Navigator>
 //获取时使用
 this.$router.params.tag
 ```
 #### 引用iconfont
  
先去[iconfont](http://www.iconfont.cn/)官网选择你想要的icon，

![](https://user-gold-cdn.xitu.io/2018/11/2/166d3cc0398e3569?w=130&h=144&f=png&s=7982)
选择添加到你自己的项目
![](https://user-gold-cdn.xitu.io/2018/11/2/166d3ccb49b2334c?w=301&h=272&f=png&s=11194)
![](https://user-gold-cdn.xitu.io/2018/11/2/166d3cdb83b43cdf?w=575&h=299&f=png&s=26167)
复制上面的代码在浏览器里打开(前面记得加https:)，
然后在自己的项目中src目录下新建一个icon.scss名字随意css也行，复制在浏览器打开以后的内容粘贴进去，最后在app.tsc中import './icon.scss'   
使用`<Text class="iconfont icon-play-circle"></Text>`
 #### 父子组件
 在其他地方写好子组件后，父组件内直接
 import就行，传值的话直接在引用子组件时写入需要传递的数据即可
 ```
 <Child dataname={somedata} />
 //在子组件中使用
 this.props.dataname即可获取传递过来的数据
 ```
 #### 获取setState以后的值
 在开发过程中发现不能直接获取setState以后的值，因为 this.state 和 props 一定是异步更新的，所以不能在 setState 后马上拿到 state 的值，正确做法是
 ```
  this.setState({
    somedata: 1
  }, () => {
    // 在这个函数内你可以拿到 setState 之后的值
  })
 ```
