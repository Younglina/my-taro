import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtSlider } from 'taro-ui';
import './index.scss';

export default class Index extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            playing: '',
            isPlaying: true,
            playTime: 0,
        }
    }

    componentDidMount() {
        this.setPlay();
    };

    setPlay(index = 0) {
        let temp = setInterval(() => {
            this.setState({ playTime: ++index })
        }, 1000);
        this.setState({ playing: temp })
    }

    togglePlay() {
        this.setState({isPlaying:!this.state.isPlaying});
        if (this.state.isPlaying) {
            clearInterval(this.state.playing);
        }
        else { this.setPlay(this.state.playTime) };
    }
    render() {
        return (
            <View class='play-main'>
                <View class='bg-img' style='background-image:url(https://p2.music.126.net/uwF73BxhvWiR-Kxn0wGe0g==/109951162927951204.jpg)'></View>
                <View class={this.state.isPlaying?'play-img-view':'play-img-view stop-anim'}>
                    <View class={this.state.isPlaying?'play-img-before':'play-img-before stop-anim'}>
                        <View class='play-cic'></View>
                        <View class='play-cic2'></View>
                        <View class='play-cic3'></View>
                    </View>
                    <Image class='play-img' src='https://p2.music.126.net/uwF73BxhvWiR-Kxn0wGe0g==/109951162927951204.jpg' />
                </View>
                <View class='icon-view'>
                    <Text class='iconfont icon-heart'></Text>
                    <Text class='iconfont icon-plus-download'></Text>
                    <Text class='iconfont icon-pinglun'></Text>
                    <Text class='iconfont icon-menu2'></Text>
                </View>
                <View class='play-slider-view'>
                    <View>{this.state.playTime}</View>
                    <View class='play-slider'><AtSlider activeColor='white' backgroundColor='gainsboro' min={0} value={this.state.playTime} blockSize={12} max={60}></AtSlider></View>
                    <View>03:02</View>
                </View>
                <View class='icon-view'>
                    <Text class='iconfont icon-icon-1'></Text>
                    <Text class='iconfont icon-shangyishoushangyige'></Text>
                    {this.state.isPlaying?
                    <Text class='iconfont icon-zanting' onClick={this.togglePlay}></Text>:
                    <Text class='iconfont icon-bofang' onClick={this.togglePlay}></Text>
                    }
                    <Text class='iconfont icon-xiayigexiayishou'></Text>
                    <Text class='iconfont icon-yinleliebiao'></Text>

                </View>
            </View>
        )
    }
}