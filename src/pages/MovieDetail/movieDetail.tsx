import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './movieDetail.scss'

export default class Index extends Component {

    config: Config = {
        navigationBarTitleText: '详情'
    }
    constructor() {
        super(...arguments)
        this.state = {
            hotMovie: []
        }
    }


    componentWillMount() {
        // Taro.request({url:'https://api.douban.com/v2/movie/subject/'+26942674}).then(res=>{
        //     console.log(res)
        // })
    }

    thisClick(e){
        console.log(e)
    }

    render() {
        return (
            <View id="detail" onClick={this.thisClick}>
                <Text data-id="1">111</Text>
                <Text data-id="2">121</Text>
                <Text data-id="3">131</Text>
            </View>
        )
    }
}

