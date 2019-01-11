import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { get as getGlobalData } from '../../../global_data'
import {AtList,AtListItem} from '../../../components/taro-ui/dist/weapp/index'
import './index.scss'

export default class Index extends Component {

    config: Config = {
        navigationBarTitleText: '歌单详情'
    }
    constructor() {
        super(...arguments)
        this.state = {
            userData: {},
            userMusic:[],
            myList:[
                {icon:'iconfont icon-play-circle',text:'最近播放'},
                {icon:'iconfont icon-plus-download',text:'下载管理'},
                {icon:'iconfont icon-music',text:'我的电台'},
                {icon:'iconfont icon-star1',text:'我的收藏'},
            ],
        }
    }

    componentDidMount() {
        this.setState({ userData: getGlobalData('_userData') });
        Taro.request({
            url: 'https://www.easy-mock.com/mock/5bda694acd0e9e45c2074584/user/playlist',//`http://134.175.224.127:7003/user/playlist?uid=${getGlobalData('_userData').account.id}`,
            header: {
                cookie: getGlobalData('_cookies'),
            },
        }).then(res => {
            this.setState({ userMusic: res.data.playlist })
        })
    }

    render() {
        let userInfo = this.state.userData
        const userMusic = this.state.userMusic
        const len = userInfo.profile && userInfo.profile.playlistCount
        return (
            <View class='my-music'>
                <View class='user-info'>
                    <Image class='user-avator' src={userInfo.profile.avatarUrl} />
                    <Text class='user-name'>{userInfo.profile.nickname}</Text>
                    <Text class='open-vip'>开通会员</Text>
                </View>
                <View class='user-list'>
                    <AtList>
                        {this.state.myList.map((item) => {
                            return (
                                <View key={item.icon}>
                                    <AtListItem title={item.text} iconInfo={{ value: item.icon,type:'a'}} />
                                </View>
                            )
                        }
                        )}
                    </AtList>
                </View>
                {/* 音乐 */}
                <View id='music' class='lists' onClick={this.toListPage}>
                        <View class='music-sub-title'>
                            <Text>歌单({len})</Text>
                            <Text>累计听歌{userInfo.listenSongs}首</Text>
                        </View>
                        {userMusic && userMusic.slice(0, len).map(item => {
                            return (
                            <View class='list-music' key={item.id} data-id={item.id}>
                                <View><Image class='list-img' src={item.coverImgUrl} /></View>
                                <View class='list-info'>
                                    <View class='list-name'>{item.name}</View>
                                    <View class='list-count'>
                                        <Text>{item.trackCount}首，</Text>
                                        <Text>播放{item.playCount}次</Text>
                                    </View>
                                </View>
                            </View>)
                        })}

                        <View class='music-sub-title'>收藏的歌单({userMusic.length - len})</View>
                        {userMusic && userMusic.slice(len).map(item => {
                            return (
                            <View class='list-music' key={item.id} data-id={item.id} >
                                <View><Image class='list-img' src={item.coverImgUrl} /></View>
                                <View class='list-info'>
                                    <View class='list-name'>{item.name}</View>
                                    <View class='list-count'>
                                        <Text>{item.trackCount}首，</Text>
                                        <Text>播放{item.playCount}次</Text>
                                    </View>
                                </View>
                            </View>)
                        })}
                    </View>
                    {/* 音乐 */}
            </View>
        )
    }
}