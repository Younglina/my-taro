import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import { set as setGlobalData } from './global_data'

import './app.scss'
import './icon.scss'
class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   * 
   * 'pages/Juejin/juejin',
      'pages/GitHub/Trending/trending',
      'pages/index/index',
      'pages/MovieDetail/movieDetail',
      'pages/MovieType/MovieType',
      'pages/Juejin/detail/detail',
   */
  config: Config = {
    pages: [
      'pages/music/music',
      'pages/music/top-playlist/index',
      'pages/music/highquality-playlist/index',

      'pages/music/user-music/index',
      'pages/music/day-recom/index',
      'pages/music/playing/index',
      'pages/music/comment/index',
      
      'pages/music/music-playlist/music-playlist',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      // navigationStyle: 'custom',
    },
    tabBar: {
      list : [
        // {text:'GitHub', pagePath:'pages/GitHub/Trending/trending',iconPath:'./img/github.png',selectedIconPath:'./img/github.png'},
        // {text:'掘金', pagePath:'pages/Juejin/juejin',iconPath:'./img/movie.png',selectedIconPath:'./img/movie.png'},
        // {text:'Movie', pagePath:'pages/index/index',iconPath:'./img/movie.png',selectedIconPath:'./img/movie.png'},
        {text:'musice', pagePath:'pages/music/music',iconPath:'./img/movie.png',selectedIconPath:'./img/movie.png'},
        {text:'musice', pagePath:'pages/music/user-music/index',iconPath:'./img/movie.png',selectedIconPath:'./img/movie.png'},
      ]
    }
  }

  // componentDidMount () {
  //   Taro.request({
  //     url:'http://134.175.224.127:7003/login/cellphone?phone=&password='
  //   }).then(res=>{
  //     setGlobalData('_cookies',res.header['set-cookie'])
  //     setGlobalData('_userData',res.data)
  //   })
  // }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
