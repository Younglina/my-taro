import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { get as getGlobalData } from '../../../global_data'

export default class Index extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            comments: [],
            nowDate: new Date(),
            listInfo:{},
        }
    }

    componentWillMount() {
        Taro.showNavigationBarLoading()
        Taro.showLoading({
            title: '加载中',
        })
    }

    componentDidMount() {
        Taro.request({
            url:`http://134.175.224.127:7003/comment/playlist?id=${this.$router.params.id}`
        }).then(res=>{
            let cur = getGlobalData('currentList')
        // cur = {
        //     username:'爱吃巧克力的鹏先森',
        //     name:'生活不简单，亲爱的请勇敢一点',
        //     img:'http://p2.music.126.net/km6O4LveIqsoZa1DyRlZew==/109951163753633370.jpg'
        // }
        // let res = { "topComments": [], "hasMore": false, "hotComments": [{ "user": { "locationInfo": null, "vipRights": null, "userId": 1486851534, "nickname": "多爱词词一点", "authStatus": 0, "avatarUrl": "https://p3.music.126.net/Scwq1inSOabCc8A02pQksg==/109951163753689495.jpg", "experts": null, "vipType": 0, "userType": 0, "remarkName": null, "expertTags": null }, "beReplied": [], "pendantData": null, "showFloorComment": null, "status": 0, "commentLocationType": 0, "parentCommentId": 0, "decoration": {}, "repliedMark": false, "expressionUrl": null, "likedCount": 30, "liked": false, "commentId": 1340438550, "time": 1546004548017, "content": "喜欢啊 是清风 是朝露 是脸颊红红 是千万万人里再也装不下其他" }, { "user": { "locationInfo": null, "vipRights": null, "userId": 480632576, "nickname": "学会点到为止直到分开为止", "authStatus": 0, "avatarUrl": "https://p4.music.126.net/8WXOv-appPI1aZ-4qaRnhg==/109951163754348530.jpg", "experts": null, "vipType": 0, "userType": 0, "remarkName": null, "expertTags": null }, "beReplied": [], "pendantData": null, "showFloorComment": null, "status": 0, "commentLocationType": 0, "parentCommentId": 0, "decoration": {}, "repliedMark": false, "expressionUrl": null, "likedCount": 25, "liked": false, "commentId": 1340297831, "time": 1545996753803, "content": "我知道生活不易，但我只想绕着银河宇宙走，和星星碰个头." }, { "user": { "locationInfo": null, "vipRights": { "associator": { "vipCode": 100, "rights": true }, "musicPackage": null, "redVipAnnualCount": -1 }, "userId": 113164676, "nickname": "爱吃巧克力的鹏先森", "authStatus": 0, "avatarUrl": "https://p4.music.126.net/i_-okg7n1oER3-IK0THCpQ==/109951163754403743.jpg", "experts": null, "vipType": 11, "userType": 200, "remarkName": null, "expertTags": ["流行", "欧美"] }, "beReplied": [], "pendantData": { "id": 4000, "imageUrl": "http://p1.music.126.net/xE4CwIWXUkwvf-h9Jo5sQw==/109951163313111359.jpg" }, "showFloorComment": null, "status": 0, "commentLocationType": 0, "parentCommentId": 0, "decoration": {}, "repliedMark": false, "expressionUrl": null, "likedCount": 24, "liked": false, "commentId": 1326498738, "time": 1544754002496, "content": "生活不简单，亲爱的请勇敢一点。" }, { "user": { "locationInfo": null, "vipRights": null, "userId": 492461966, "nickname": "惊醒春山", "authStatus": 0, "avatarUrl": "https://p3.music.126.net/KBubl9mtDNf5y0Gk6Kaw3A==/109951163753561419.jpg", "experts": null, "vipType": 0, "userType": 0, "remarkName": null, "expertTags": null }, "beReplied": [], "pendantData": null, "showFloorComment": null, "status": 0, "commentLocationType": 0, "parentCommentId": 0, "decoration": {}, "repliedMark": false, "expressionUrl": null, "likedCount": 20, "liked": false, "commentId": 1340601080, "time": 1546015952088, "content": "没有谁的生活会一直完美，但无论什么时候，都要看着前方，满怀希望就会所向披靡。——《撒野》" }], "total": 4, "code": 200 }
            this.setState({ comments: res.data,listInfo: cur })
            Taro.setNavigationBarTitle({
                title: `评论(${res.data.total})`
            })
            Taro.hideNavigationBarLoading()
            Taro.hideLoading()
        })
    }

    formatDate(val) {
        const now = this.state.nowDate;
        const diffTime = (now - val)
        const diffHours = Math.floor(diffTime / 3600000)
        if (diffHours > 24) {
            return new Date(val).toLocaleDateString()
        } if (diffHours > 0) {
            let temp = (new Date(val).getHours()+'').padStart(2,'0') + ':' + (new Date(val).getMinutes()+'').padStart(2,'0');
            return diffHours < 12 ? temp : '昨天' + temp
        } else if (Math.floor(diffTime / 60000) > 0) {
            return parseInt(diffTime / 60000) + '分钟前'
        }
    }

    render() {
        const dataHot = this.state.comments.hotComments
        const dataNew = this.state.comments.comments
        const listInfo = this.state.listInfo
        return (
            <View class='cmt-main'>

                <View class='info-main'>
                    <View><Image class='info-img' src={listInfo.img} /></View>
                    <View class='info-right'>
                        <View class='info-name'>{listInfo.name}</View>
                        by <Text class='info-username'>{listInfo.username}</Text>
                    </View>
                </View>
                <View class='cmt-type'>精彩评论</View>
                {dataHot && dataHot.map(item => {
                    return (
                        <View key={item.commentId} class='cmt-list'>
                            <View><Image src={item.user.avatarUrl} class='cmt-avator' /></View>
                            <View class='cmt-top'>
                                <View class='cmt-user'>
                                    <View class='cmt-user-time'>
                                        <Text>{item.user.nickname}</Text>
                                        <View class='cmt-time'>{this.formatDate(item.time)}</View>
                                    </View>
                                    <View class='cmt-like'>
                                        <Text>{item.likedCount}</Text>
                                        <Text class='iconfont icon-like'></Text>
                                    </View>
                                </View>
                                <View class='cmt-content'>{item.content}</View>
                            </View>
                        </View>
                    )
                })
                }
                <View class='cmt-type'>最新评论({dataNew.length})</View>
                {dataNew && dataNew.map(item => {
                    return (
                        <View key={item.commentId} class='cmt-list'>
                            <View><Image src={item.user.avatarUrl} class='cmt-avator' /></View>
                            <View class='cmt-top'>
                                <View class='cmt-user'>
                                    <View class='cmt-user-time'>
                                        <Text>{item.user.nickname}</Text>
                                        <View class='cmt-time'>{this.formatDate(item.time)}</View>
                                    </View>
                                    <View class='cmt-like'>
                                        <Text>{item.likedCount}</Text>
                                        <Text class='iconfont icon-like'></Text>
                                    </View>
                                </View>
                                <View class='cmt-content'>{item.content}</View>
                            </View>
                        </View>
                    )
                })
                }
            </View>
        )
    }
}