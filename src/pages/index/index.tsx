import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { HotMovie } from './child/HotMovie'
import { CanWatch } from './child/CanWatch'
import { New } from './child/New'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {
      hotMovie: [],
    }
  }

  componentDidMount() {
    // Taro.getUserInfo().then(res=>{
    //   console.log(res)
    // })
  }

  render() {
    return (
      <View>
        <View id="index">
        <View class="userInfo">
          <View class="userTitle">
            <open-data type="userAvatarUrl" lang="zh_CN"></open-data>
          </View>
          <View>
            <open-data type="userNickName" lang="zh_CN"></open-data>
          </View>
        </View>
          <View class="mainView">
            <View class="titleView">
              <Text>影院热映</Text>
              <Navigator url="">更多</Navigator>
            </View>
            <HotMovie></HotMovie>
          </View>

          <View  class="mainView">
            <View class="titleView">
              <Text>免费在线观看</Text>
              <Navigator url="#">更多</Navigator>
            </View>
            <CanWatch></CanWatch>
          </View>

          <View  class="mainView">
            <View class="titleView">
              <Text>新片速递</Text>
              <Navigator url="#">更多</Navigator>
            </View>
            <New></New>
          </View>

        </View>
      </View >
    )
  }
}

