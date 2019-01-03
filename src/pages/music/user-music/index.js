import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { get as getGlobalData } from '../../../global_data'

export default class Index extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            userMusic: '',
            userData: '',
            curNav: 'music',
        }
    }

    componentWillMount() {
        // Taro.showNavigationBarLoading()
        // Taro.showLoading({
        //     title: '加载中',
        // })
    }

    componentDidMount() {
        Taro.request({
            url:`http://134.175.224.127:7003/user/subcount`,
            header:{
                cookie:getGlobalData('_cookies'),
            },
        }).then(res=>{
            console.log(res);
            this.setState({userData: res.data })
            Taro.hideNavigationBarLoading()
            Taro.hideLoading()
        })

        Taro.request({
            url:`http://134.175.224.127:7003/user/playlist?uid=${getGlobalData('_userData').account.id}`,
            header:{
                cookie:getGlobalData('_cookies'),
            },
        }).then(res=>{
            this.setState({ userMusic: res.data })
        })
        // let userData = {
        //     "level": 9,
        //     "listenSongs": 8194,
        //     "userPoint": {
        //         "userId": 111736605,
        //         "balance": 1875,
        //         "updateTime": 1546418547575,
        //         "version": 10,
        //         "status": 1,
        //         "blockBalance": 0
        //     },
        //     "mobileSign": true,
        //     "pcSign": false,
        //     "profile": {
        //         "backgroundUrl": "http://p1.music.126.net/nDLFE733eJSDPiXT6qyeMg==/109951163764977246.jpg",
        //         "detailDescription": "",
        //         "followed": false,
        //         "description": "",
        //         "avatarImgIdStr": "1365593465472278",
        //         "userId": 111736605,
        //         "defaultAvatar": false,
        //         "avatarUrl": "https://p2.music.126.net/ElqljSFQEePTo_WuWhdDMg==/1365593465472278.jpg",
        //         "birthday": 819388800000,
        //         "city": 360200,
        //         "backgroundImgIdStr": "3275445145304100",
        //         "nickname": "-皆随你",
        //         "vipType": 11,
        //         "gender": 1,
        //         "accountStatus": 0,
        //         "province": 360000,
        //         "expertTags": null,
        //         "experts": {},
        //         "avatarImgId": 1365593465472278,
        //         "backgroundImgId": 3275445145304100,
        //         "djStatus": 0,
        //         "userType": 0,
        //         "mutual": false,
        //         "remarkName": null,
        //         "authStatus": 0,
        //         "signature": "你好，再见。",
        //         "authority": 0,
        //         "artistIdentity": [],
        //         "followeds": 15,
        //         "follows": 18,
        //         "cCount": 0,
        //         "blacklist": false,
        //         "eventCount": 2,
        //         "sDJPCount": 0,
        //         "allSubscribedCount": 0,
        //         "playlistCount": 3,
        //         "playlistBeSubscribedCount": 0,
        //         "sCount": 0
        //     },
        //     "peopleCanSeeMyPlayRecord": true,
        //     "bindings": [
        //         {
        //             "url": "",
        //             "expired": false,
        //             "expiresIn": 2147483647,
        //             "refreshTime": 1489821312,
        //             "userId": 111736605,
        //             "tokenJsonStr": "{\"countrycode\":\"\",\"cellphone\":\"15179816883\",\"hasPassword\":true}",
        //             "id": 2992699529,
        //             "type": 1
        //         },
        //         {
        //             "url": "http://weibo.com/u/5121041780",
        //             "expired": false,
        //             "expiresIn": 2647834,
        //             "refreshTime": 1544851951,
        //             "userId": 111736605,
        //             "tokenJsonStr": "{\"allow_all_act_msg\":false,\"favourites_count\":5,\"urank\":28,\"verified_trade\":\"\",\"weihao\":\"\",\"verified_source_url\":\"\",\"province\":\"36\",\"screen_name\":\"往复随安--\",\"id\":5121041780,\"geo_enabled\":true,\"like_me\":false,\"like\":false,\"verified_type\":-1,\"access_token\":\"2.00Eu3ZaF0Gg461b313b2c261XkWccE\",\"pagefriends_count\":2,\"domain\":\"WangzAIDenG\",\"following\":false,\"name\":\"往复随安--\",\"cover_image_phone\":\"http://ww1.sinaimg.cn/crop.0.0.640.640.640/9d44112bjw1f1xl1c10tuj20hs0hs0tw.jpg\",\"idstr\":\"5121041780\",\"follow_me\":false,\"friends_count\":56,\"credit_score\":80,\"gender\":\"m\",\"city\":\"2\",\"profile_url\":\"WangzAIDenG\",\"description\":\"你别对我笑，我怕以后得不到，又忘不掉。\",\"created_at\":\"Sun Apr 20 22:25:10 +0800 2014\",\"remark\":\"\",\"ptype\":0,\"verified_reason_url\":\"\",\"block_word\":0,\"uid\":\"5121041780\",\"avatar_hd\":\"http://tva3.sinaimg.cn/crop.0.0.540.540.1024/005AzmU4jw8exy06zkup1j30f00f0aai.jpg\",\"mbtype\":0,\"bi_followers_count\":40,\"scope\":\"follow_app_official_microblog\",\"user_ability\":2098176,\"cardid\":\"star_086\",\"verified_reason\":\"\",\"story_read_state\":-1,\"video_status_count\":0,\"mbrank\":0,\"lang\":\"zh-cn\",\"expires_in\":2647834,\"class\":1,\"remind_in\":\"2647834\",\"star\":0,\"allow_all_comment\":true,\"online_status\":0,\"verified\":false,\"profile_image_url\":\"http://tva3.sinaimg.cn/crop.0.0.540.540.50/005AzmU4jw8exy06zkup1j30f00f0aai.jpg\",\"block_app\":0,\"url\":\"\",\"avatar_large\":\"http://tva3.sinaimg.cn/crop.0.0.540.540.180/005AzmU4jw8exy06zkup1j30f00f0aai.jpg\",\"statuses_count\":21,\"vclub_member\":0,\"followers_count\":140,\"location\":\"江西 景德镇\",\"isRealName\":\"true\",\"insecurity\":{\"sexual_content\":false},\"verified_source\":\"\",\"status\":{\"created_at\":\"Fri Aug 17 13:19:41 +0800 2018\",\"id\":4273994595289816,\"idstr\":\"4273994595289816\",\"mid\":\"4273994595289816\",\"can_edit\":false,\"show_additional_indication\":0,\"text\":\"分享图片 http://t.cn/z8qV9aS\",\"textLength\":28,\"source_allowclick\":1,\"source_type\":1,\"source\":\"<a href=\\\"http://app.weibo.com/t/feed/2FgJ2C\\\" rel=\\\"nofollow\\\">荣耀9 美得有声有色</a>\",\"favorited\":false,\"truncated\":false,\"in_reply_to_status_id\":\"\",\"in_reply_to_user_id\":\"\",\"in_reply_to_screen_name\":\"\",\"pic_urls\":[{\"thumbnail_pic\":\"http://wx1.sinaimg.cn/thumbnail/005AzmU4ly1fucmljkmklj31hc0u07m6.jpg\"},{\"thumbnail_pic\":\"http://wx1.sinaimg.cn/thumbnail/005AzmU4ly1fucmlksovzj31hc0u04n5.jpg\"},{\"thumbnail_pic\":\"http://wx2.sinaimg.cn/thumbnail/005AzmU4ly1fucmlm5vg4j31hc0u0wxa.jpg\"},{\"thumbnail_pic\":\"http://wx4.sinaimg.cn/thumbnail/005AzmU4ly1fucmlms8uaj31hc0u0n8o.jpg\"},{\"thumbnail_pic\":\"http://wx2.sinaimg.cn/thumbnail/005AzmU4ly1fucmlnamg4j31hc0u0nan.jpg\"},{\"thumbnail_pic\":\"http://wx2.sinaimg.cn/thumbnail/005AzmU4ly1fucmlnr6f3j31hc0u0tjx.jpg\"},{\"thumbnail_pic\":\"http://wx2.sinaimg.cn/thumbnail/005AzmU4ly1fucmloai0zj31hc0u07mf.jpg\"},{\"thumbnail_pic\":\"http://wx4.sinaimg.cn/thumbnail/005AzmU4ly1fucmlph9ruj31hc0u0dtt.jpg\"},{\"thumbnail_pic\":\"http://wx1.sinaimg.cn/thumbnail/005AzmU4ly1fucmlzj7vzj31hc0u01f2.jpg\"}],\"thumbnail_pic\":\"http://wx1.sinaimg.cn/thumbnail/005AzmU4ly1fucmljkmklj31hc0u07m6.jpg\",\"bmiddle_pic\":\"http://wx1.sinaimg.cn/bmiddle/005AzmU4ly1fucmljkmklj31hc0u07m6.jpg\",\"original_pic\":\"http://wx1.sinaimg.cn/large/005AzmU4ly1fucmljkmklj31hc0u07m6.jpg\",\"geo\":null,\"is_paid\":false,\"mblog_vip_type\":0,\"annotations\":[{\"place\":{\"poiid\":\"B2094651D46AA4F44099\",\"title\":\"浦沿\",\"type\":\"checkin\"},\"client_mblogid\":\"3543c886-73d2-4873-b6f9-5db06e654b79\"},{\"mapi_request\":true}],\"picStatus\":\"0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1\",\"reposts_count\":0,\"comments_count\":0,\"attitudes_count\":0,\"pending_approval_count\":0,\"isLongText\":false,\"reward_exhibition_type\":0,\"hide_flag\":0,\"mlevel\":0,\"visible\":{\"type\":0,\"list_id\":0},\"biz_ids\":[100101],\"biz_feature\":4294967300,\"hasActionTypeCard\":0,\"darwin_tags\":[],\"hot_weibo_tags\":[],\"text_tag_tips\":[],\"mblogtype\":0,\"rid\":\"0\",\"userType\":0,\"more_info_type\":0,\"positive_recom_flag\":0,\"content_auth\":0,\"gif_ids\":\"\",\"is_show_bulletin\":2,\"comment_manage_info\":{\"comment_permission_type\":-1,\"approval_comment_type\":0}}}",
        //             "id": 2954098234,
        //             "type": 2
        //         },
        //         {
        //             "url": "",
        //             "expired": false,
        //             "expiresIn": 7776000,
        //             "refreshTime": 1542541155,
        //             "userId": 111736605,
        //             "tokenJsonStr": "{\"access_token\":\"623FB57E71CF019122BFE27EC97C8BD3\",\"refresh_token\":\"1A5EA26E8FE599CEC76C110CAC4CDBBA\",\"openid\":\"FB81A98364F4DB969A314FDD3C818169\",\"nickname\":\"往复随安。\",\"expires_in\":7776000}",
        //             "id": 52518414,
        //             "type": 5
        //         },
        //         {
        //             "url": "",
        //             "expired": true,
        //             "expiresIn": 7200,
        //             "refreshTime": 1543833468,
        //             "userId": 111736605,
        //             "tokenJsonStr": "{\"access_token\":\"16_d3zxKNY7dQMGpHPw0DH9hHUNDGgv_aNEB6M0BJhcUrg9j0zzPTPcmaADHqusIKK1uunuou6Rvcl5VIOJSGO0O28XcpusoOYc68nRHtrZBQQ\",\"refresh_token\":\"16_qYA8LF3OY7zZ1iQ5FfLqg8SOsWIw9_NbrFrPL8fApfFzeapjaS2aOuMwhoWSOIr0xyJLetNPyVCz4k25QxGM1YbaM7xH3BPkgX5HhQ8Ms3w\",\"unionid\":\"oZoefuMos2v4bnOuPYLORXDkEHAk\",\"openid\":\"okvmMjhSjqWlLdWw-KNtGBy0M4pw\",\"scope\":\"snsapi_userinfo\",\"nickname\":\"往复随安。\",\"expires_in\":7200}",
        //             "id": 6722911129,
        //             "type": 10
        //         },
        //         {
        //             "url": "",
        //             "expired": false,
        //             "expiresIn": 2147483647,
        //             "refreshTime": 1484285683,
        //             "userId": 111736605,
        //             "tokenJsonStr": "{\"email\":\"w1250407177@163.com\"}",
        //             "id": 2954091333,
        //             "type": 0
        //         }
        //     ],
        //     "adValid": false,
        //     "code": 200,
        //     "createTime": 1449642123824,
        //     "createDays": 1121
        // }
        // let userMusic = [{ "subscribers": [], "subscribed": false, "creator": { "defaultAvatar": false, "province": 360000, "authStatus": 0, "followed": false, "avatarUrl": "http://p1.music.126.net/ElqljSFQEePTo_WuWhdDMg==/1365593465472278.jpg", "accountStatus": 0, "gender": 1, "city": 360200, "birthday": 819388800000, "userId": 111736605, "userType": 0, "nickname": "-皆随你", "signature": "你好，再见。", "description": "", "detailDescription": "", "avatarImgId": 1365593465472278, "backgroundImgId": 3275445145304100, "backgroundUrl": "http://p1.music.126.net/N8uPfii-dB-NAJuEW63Dlw==/3275445145304100.jpg", "authority": 0, "mutual": false, "expertTags": null, "experts": null, "djStatus": 0, "vipType": 11, "remarkName": null, "avatarImgIdStr": "1365593465472278", "backgroundImgIdStr": "3275445145304100" }, "artists": null, "tracks": null, "updateTime": 1544768025782, "coverImgId": 19145795974749264, "trackCount": 19, "ordered": true, "coverImgUrl": "https://p1.music.126.net/6Pf5KrH3JTVlLDFvblXILQ==/19145795974749262.jpg", "createTime": 1449642098605, "highQuality": false, "playCount": 1624, "anonimous": false, "totalDuration": 0, "trackUpdateTime": 1544768025761, "privacy": 0, "newImported": false, "userId": 111736605, "specialType": 5, "commentThreadId": "A_PL_0_137136854", "adType": 0, "trackNumberUpdateTime": 1544768025651, "status": 0, "description": null, "tags": [], "subscribedCount": 0, "cloudTrackCount": 0, "name": "-皆随你喜欢的音乐", "id": 137136854, "coverImgId_str": "19145795974749262" }, { "subscribers": [], "subscribed": false, "creator": { "defaultAvatar": false, "province": 360000, "authStatus": 0, "followed": false, "avatarUrl": "http://p1.music.126.net/ElqljSFQEePTo_WuWhdDMg==/1365593465472278.jpg", "accountStatus": 0, "gender": 1, "city": 360200, "birthday": 819388800000, "userId": 111736605, "userType": 0, "nickname": "-皆随你", "signature": "你好，再见。", "description": "", "detailDescription": "", "avatarImgId": 1365593465472278, "backgroundImgId": 3275445145304100, "backgroundUrl": "http://p1.music.126.net/N8uPfii-dB-NAJuEW63Dlw==/3275445145304100.jpg", "authority": 0, "mutual": false, "expertTags": null, "experts": null, "djStatus": 0, "vipType": 11, "remarkName": null, "avatarImgIdStr": "1365593465472278", "backgroundImgIdStr": "3275445145304100" }, "artists": null, "tracks": null, "updateTime": 1542541164145, "coverImgId": 109951163468349800, "trackCount": 10, "ordered": false, "coverImgUrl": "https://p1.music.126.net/oqCyRo7wf1VupcsdXgUKGA==/109951163468349793.jpg", "createTime": 1540351921871, "highQuality": false, "playCount": 10, "anonimous": false, "totalDuration": 0, "trackUpdateTime": 1542797702651, "privacy": 0, "newImported": false, "userId": 111736605, "specialType": 0, "commentThreadId": "A_PL_0_2483276774", "adType": 0, "trackNumberUpdateTime": 1542541164145, "status": 0, "description": null, "tags": [], "subscribedCount": 0, "cloudTrackCount": 0, "name": "Pavonis - Piano Collection III", "id": 2483276774, "coverImgId_str": "109951163468349793" }, { "subscribers": [], "subscribed": false, "creator": { "defaultAvatar": false, "province": 360000, "authStatus": 0, "followed": false, "avatarUrl": "http://p1.music.126.net/ElqljSFQEePTo_WuWhdDMg==/1365593465472278.jpg", "accountStatus": 0, "gender": 1, "city": 360200, "birthday": 819388800000, "userId": 111736605, "userType": 0, "nickname": "-皆随你", "signature": "你好，再见。", "description": "", "detailDescription": "", "avatarImgId": 1365593465472278, "backgroundImgId": 3275445145304100, "backgroundUrl": "http://p1.music.126.net/N8uPfii-dB-NAJuEW63Dlw==/3275445145304100.jpg", "authority": 0, "mutual": false, "expertTags": null, "experts": null, "djStatus": 0, "vipType": 11, "remarkName": null, "avatarImgIdStr": "1365593465472278", "backgroundImgIdStr": "3275445145304100" }, "artists": null, "tracks": null, "updateTime": 1546339622264, "coverImgId": 109951163136237920, "trackCount": 58, "ordered": true, "coverImgUrl": "https://p1.music.126.net/a6hkJ568JnvsUJMERT8G5A==/109951163136237914.jpg", "createTime": 1539417183898, "highQuality": false, "playCount": 143, "anonimous": false, "totalDuration": 0, "trackUpdateTime": 1546390641401, "privacy": 0, "newImported": false, "userId": 111736605, "specialType": 0, "commentThreadId": "A_PL_0_2467219977", "adType": 0, "trackNumberUpdateTime": 1546339622264, "status": 0, "description": "", "tags": [], "subscribedCount": 0, "cloudTrackCount": 0, "name": "嚯嚯嚯", "id": 2467219977, "coverImgId_str": "109951163136237914" }, { "subscribers": [], "subscribed": false, "creator": { "defaultAvatar": false, "province": 360000, "authStatus": 0, "followed": false, "avatarUrl": "http://p1.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg", "accountStatus": 0, "gender": 0, "city": 360400, "birthday": -2209017600000, "userId": 260023764, "userType": 0, "nickname": "温柔的人也太棒了吧", "signature": "认清", "description": "", "detailDescription": "", "avatarImgId": 109951163414375250, "backgroundImgId": 3433774815230246, "backgroundUrl": "http://p1.music.126.net/TFCF5V4zpOuJFz-s8K-Alw==/3433774815230246.jpg", "authority": 0, "mutual": false, "expertTags": null, "experts": null, "djStatus": 0, "vipType": 0, "remarkName": null, "avatarImgIdStr": "109951163414375254", "backgroundImgIdStr": "3433774815230246", "avatarImgId_str": "109951163414375254" }, "artists": null, "tracks": null, "updateTime": 1537236218498, "coverImgId": 109951163093043680, "trackCount": 68, "ordered": false, "coverImgUrl": "https://p1.music.126.net/yTU-bvoh2mWqg7RPmEs1bg==/109951163093043682.jpg", "createTime": 1506901848298, "highQuality": false, "playCount": 246, "anonimous": false, "totalDuration": 0, "trackUpdateTime": 1544491311022, "privacy": 0, "newImported": false, "userId": 260023764, "specialType": 0, "commentThreadId": "A_PL_0_941262247", "adType": 0, "trackNumberUpdateTime": 1537236218498, "status": 0, "description": "", "tags": [], "subscribedCount": 1, "cloudTrackCount": 0, "name": "少女情怀总是诗", "id": 941262247, "coverImgId_str": "109951163093043682" }, { "subscribers": [], "subscribed": false, "creator": { "defaultAvatar": false, "province": 360000, "authStatus": 0, "followed": false, "avatarUrl": "http://p1.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg", "accountStatus": 0, "gender": 0, "city": 360400, "birthday": -2209017600000, "userId": 260023764, "userType": 0, "nickname": "温柔的人也太棒了吧", "signature": "认清", "description": "", "detailDescription": "", "avatarImgId": 109951163414375250, "backgroundImgId": 3433774815230246, "backgroundUrl": "http://p1.music.126.net/TFCF5V4zpOuJFz-s8K-Alw==/3433774815230246.jpg", "authority": 0, "mutual": false, "expertTags": null, "experts": null, "djStatus": 0, "vipType": 0, "remarkName": null, "avatarImgIdStr": "109951163414375254", "backgroundImgIdStr": "3433774815230246", "avatarImgId_str": "109951163414375254" }, "artists": null, "tracks": null, "updateTime": 1536994151927, "coverImgId": 109951163093037980, "trackCount": 33, "ordered": false, "coverImgUrl": "https://p1.music.126.net/rqANa-8UC_9RToWu9o8ftA==/109951163093037979.jpg", "createTime": 1506172291992, "highQuality": false, "playCount": 51, "anonimous": false, "totalDuration": 0, "trackUpdateTime": 1544421512414, "privacy": 0, "newImported": false, "userId": 260023764, "specialType": 0, "commentThreadId": "A_PL_0_930330172", "adType": 0, "trackNumberUpdateTime": 1536994151927, "status": 0, "description": null, "tags": [], "subscribedCount": 1, "cloudTrackCount": 0, "name": "一日看尽长安花", "id": 930330172, "coverImgId_str": "109951163093037979" }, { "subscribers": [], "subscribed": false, "creator": { "defaultAvatar": false, "province": 360000, "authStatus": 0, "followed": false, "avatarUrl": "http://p1.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg", "accountStatus": 0, "gender": 0, "city": 360400, "birthday": -2209017600000, "userId": 260023764, "userType": 0, "nickname": "温柔的人也太棒了吧", "signature": "认清", "description": "", "detailDescription": "", "avatarImgId": 109951163414375250, "backgroundImgId": 3433774815230246, "backgroundUrl": "http://p1.music.126.net/TFCF5V4zpOuJFz-s8K-Alw==/3433774815230246.jpg", "authority": 0, "mutual": false, "expertTags": null, "experts": null, "djStatus": 0, "vipType": 0, "remarkName": null, "avatarImgIdStr": "109951163414375254", "backgroundImgIdStr": "3433774815230246", "avatarImgId_str": "109951163414375254" }, "artists": null, "tracks": null, "updateTime": 1537937279763, "coverImgId": 109951163093041380, "trackCount": 37, "ordered": false, "coverImgUrl": "https://p1.music.126.net/FJquprx1qJEkSWt33v3T5g==/109951163093041372.jpg", "createTime": 1502327688635, "highQuality": false, "playCount": 204, "anonimous": false, "totalDuration": 0, "trackUpdateTime": 1544724233837, "privacy": 0, "newImported": false, "userId": 260023764, "specialType": 0, "commentThreadId": "A_PL_0_874507221", "adType": 0, "trackNumberUpdateTime": 1530790490401, "status": 0, "description": null, "tags": [], "subscribedCount": 1, "cloudTrackCount": 0, "name": "梨花院落溶溶夜", "id": 874507221, "coverImgId_str": "109951163093041372" }]
        // this.setState({ userMusic: userMusic, userData: userData })
    }

    changeTab(e) {
        this.setState({ curNav: e.target.dataset.nav })
    }

    toListPage(e){
        Taro.navigateTo({url:'../music-playlist/music-playlist?id='+e.target.dataset.id})
    }

    render() {
        const userData = this.state.userData
        const len = userData.profile && userData.profile.playlistCount
        const userMusic = this.state.userMusic
        return userData && (
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

                    <View class='lists'  onClick={this.toListPage}>
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

                        <View class='music-sub-title'>收藏的歌单({userMusic.length-len})</View>
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
        )
    }
}