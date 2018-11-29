import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon, AtAvatar } from 'taro-ui'
export default class Index extends Component {

    config: Config = {
        navigationBarTitleText: '列表'
    }
    constructor() {
        super(...arguments)
        this.state = {
            data: [],
            baseUrl: 'https://timeline-merger-ms.juejin.im/v1/get_entry_by_hot_recomment',
        }
    }

    componentDidMount() {
        let self = this
        Taro.request({ url: this.state.baseUrl,data:{src:'web'} }).then(res => {
            console.log(res)
        })

        // Taro.request({ url: this.state.baseUrl + '/personalized' }).then(res => {
        //     self.setState({ recomMusicList: res.data.result.slice(0, 6) })
        // })
    }

    toListPage(e) {
        console.log(e.target)
    }

    render() {
        return (
            <View id='music'>
                <View>
                </View>
                <View class='iconGroup'>
                    <AtIcon value='edit' size='30'></AtIcon>
                    <AtIcon value='share' size='30'></AtIcon>
                    <AtIcon value='download' size='30'></AtIcon>
                    <AtIcon value='check-circle' size='30'></AtIcon>
                </View>
            </View >
        )
    }
}

