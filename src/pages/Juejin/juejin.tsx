import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
export default class MovieType extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            movies: [],
        }
    }

    componentWillMount() {
        Taro.showNavigationBarLoading()
    }

    onReachBottom() {
        Taro.showLoading({
            title: '加载中',
          })
        this.fetchDate();
    }

    fetchDate(selfUrl) {
        let self = this;
        Taro.request(
            {
                header: { 'content-type': 'application/xml' },
                url: 'http://127.0.0.1:7001/getJuejin?offset=1'
            }).then(res => {
                console.log(res);
                Taro.hideNavigationBarLoading()
                Taro.hideLoading()
            })
    }

    componentDidMount() {
        this.fetchDate()
    }

    render() {
        return (
            <View>
                <View id='movieType'>
                    
                </View>
            </View >
        )
    }
}

