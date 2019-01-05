import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { get as getGlobalData, set as setGlobalData } from '../../../global_data'
import { AtInput, AtForm } from 'taro-ui'

import './index.scss'

export default class Index extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            userMusic: '',
            userData: '',
            curNav: 'music',
            phone: '',
            password: '',
        }
    }

    componentWillMount() {
        // Taro.showNavigationBarLoading()
        // Taro.showLoading({
        //     title: '加载中',
        // })
    }

    componentDidMount() {
        this.showPanl(getGlobalData('_cookies'));
    }

    changeTab(e) {
        this.setState({ curNav: e.target.dataset.nav })
    }

    showPanl(cookies) {
        console.log(cookies);
        if (cookies) {
            Taro.request({
                url: `http://134.175.224.127:7003/user/detail?uid=${getGlobalData('_userData').account.id}`,
                header: {
                    cookie: getGlobalData('_cookies'),
                },
            }).then(res => {
                this.setState({ userData: res.data })
                Taro.hideNavigationBarLoading()
                Taro.hideLoading()
            })

            Taro.request({
                url: `http://134.175.224.127:7003/user/playlist?uid=${getGlobalData('_userData').account.id}`,
                header: {
                    cookie: getGlobalData('_cookies'),
                },
            }).then(res => {
                this.setState({ userMusic: res.data.playlist })
            })
        }
    }

    toListPage(e) {
        Taro.navigateTo({ url: '../music-playlist/music-playlist?id=' + e.target.dataset.id })
    }
    handleChange(type, e) {
        type == 'phone' ? this.setState({ 'phone': e }) : this.setState({ 'password': e })
    }
    login() {
        Taro.request({
            url: `http://134.175.224.127:7003/login/cellphone?phone=${this.state.phone}&password=${this.state.password}`
        }).then(res => {
            setGlobalData('_cookies', res.header['set-cookie'])
            setGlobalData('_userData', res.data)
            this.showPanl(res.header['set-cookie']);
        })

    }
    render() {
        const userData = this.state.userData
        const len = userData.profile && userData.profile.playlistCount
        const userMusic = this.state.userMusic
        return userData ? (
            <View class='user-main' style={`background-image:url(${userData.profile.backgroundUrl});`}>
                <View class='user-info'>
                    <View><Image class='user-avator' src={userData.profile.avatarUrl} /></View>
                    <View class='user-info-item'>
                        <Text class='user-name'>{userData.profile.nickname}</Text>

                        <Text class='user-level'>Lv.{userData.level}</Text>
                    </View>
                    <View class='user-info-item'>{userData.profile.signature}</View>
                    <View class='user-info-item'>
                        <Text>关注 {userData.profile.follows}</Text>
                        <Text class='user-shu'>|</Text>
                        <Text>粉丝 {userData.profile.followeds}</Text>
                    </View>
                </View>

                <View class='user-music'>
                    <View class='user-nav' onClick={this.changeTab}>
                        <Text data-nav='music' class={`${this.state.curNav == 'music' ? 'active' : ''}`}>音乐 {userMusic.length}</Text>
                        <Text data-nav='active' class={`${this.state.curNav == 'active' ? 'active' : ''}`}>动态 {userData.profile.eventCount}</Text>
                        <Text data-nav='about' class={`${this.state.curNav == 'about' ? 'active' : ''}`}>关于我</Text>
                    </View>

                    <View class='lists' onClick={this.toListPage}>
                        <View class='music-sub-title'>
                            <Text>歌单({len})</Text>
                            <Text>累计听歌{userData.listenSongs}首</Text>
                        </View>
                        {userMusic.slice(0, len).map(item => {
                            return (<View class='list-music' key={item.id} data-id={item.id}>
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
                        {userMusic.slice(len).map(item => {
                            return (<View class='list-music' key={item.id} data-id={item.id} >
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
                </View>
            </View>
        ) : (
                <View class='log-form'>
                    <Image class='bg-img' src='../../../img/login.jpeg' />
                    <View class='log'>
                        <Text class='iconfont icon-erji'></Text>
                    </View>
                    <AtForm>
                        <AtInput
                          name='phone'
                          title='手机号'
                          type='number'
                          placeholder='手机号'
                          value={this.state.phone}
                          onChange={this.handleChange.bind(this, 'phone')}
                        />

                        <AtInput
                          name='password'
                          title='密码'
                          type='password'
                          placeholder='密码'
                          value={this.state.password}
                          onChange={this.handleChange.bind(this, 'password')}
                        />
                    </AtForm>
                    <View class='login-btn' onClick={this.login}>登陆</View>
                </View>
            )
    }
}