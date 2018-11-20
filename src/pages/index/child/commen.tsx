import Taro, { Component } from '@tarojs/taro'
import { View, Text, } from '@tarojs/components'
import './commen.scss'
export class Commen extends Component {
    render() {
        return (
            this.props.movies.slice(0, 8).map(item => {
                let rate = item.rate || item.rating.average
                return (
                    <View class="innerView">
                        <Image src={item.images.large || item.cover} style="background-image:url(../../img/temp.jpg)" alt="图片无法获取" />
                        <Text class="movieTitle">{item.title}</Text>
                        <Text class="movieRate">
                            <Text class="start">
                                { rate ? '评分：' + rate : '暂无评分'}
                            </Text>
                        </Text>
                    </View>
                )
            })
        )
    }
}

