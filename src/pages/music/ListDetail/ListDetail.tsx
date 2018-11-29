import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Index extends Component {

    config: Config = {
        navigationBarTitleText: '列表'
    }
    constructor() {
        super(...arguments)
        this.state = {
            firstMv: [],
            baseUrl: 'http://47.100.49.193:3000',
           
        }
    }

    componentDidMount() {
        let self = this 
        // Taro.request({ url: this.state.baseUrl + '/mv/first' }).then(res => {
        //     self.setState({ firstMv: res.data.data.slice(0, 8) })
        // })

        // Taro.request({ url: this.state.baseUrl + '/personalized' }).then(res => {
        //     self.setState({ recomMusicList: res.data.result.slice(0, 6) })
        // })
    }

    toListPage(e){
        console.log(e.target)
    }

    render() {
        return (
            <View id="music">
               
            </View >
        )
    }
}

