import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text,ScrollView } from '@tarojs/components'

import { AtList, AtListItem, } from "../../../components/taro-ui/dist/weapp/index"
import './index.scss'

export default class Index extends Component {

    config: Config = {
        navigationBarTitleText: '歌单详情'
    }
    constructor() {
        super(...arguments)
        this.state = {
            curNav:'followed',
            followed:{},
            follower:{},
        }
    }
    componentDidMount(){
        // Taro.request({
        //     url:'http://134.175.224.127:7003/user/follows?uid=111736605',
        // }).then(res=>{
            let res = {data:{"follow":[{"py":"Ah-la-la-la","time":0,"userId":355812427,"nickname":"Ah-la-la-la","remarkName":null,"avatarUrl":"http://p2.music.126.net/jdnx_jziGVnby6R_BYeZRg==/18733479115900594.jpg","authStatus":0,"userType":0,"gender":1,"mutual":true,"expertTags":null,"experts":null,"follows":9,"followeds":5,"accountStatus":0,"vipType":10,"followed":true,"signature":"这个人很懒，什么都不想略略略","vipRights":{"associator":null,"musicPackage":{"vipCode":220,"rights":true},"redVipAnnualCount":-1},"blacklist":false,"eventCount":0,"playlistCount":7},{"py":"sgdxyh","time":0,"userId":92009679,"nickname":"时光的小印痕","remarkName":null,"avatarUrl":"http://p2.music.126.net/psv8m-7SFguCajZYVdT7UA==/1395280268190590.jpg","authStatus":0,"userType":0,"gender":1,"mutual":true,"expertTags":null,"experts":null,"follows":34,"followeds":18,"accountStatus":0,"vipType":0,"followed":true,"signature":null,"vipRights":null,"blacklist":false,"eventCount":0,"playlistCount":5},{"py":"wrdrytblb","time":0,"userId":260023764,"nickname":"温柔的人也太棒了吧","remarkName":null,"avatarUrl":"http://p2.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg","authStatus":0,"userType":0,"gender":0,"mutual":true,"expertTags":null,"experts":null,"follows":27,"followeds":23,"accountStatus":0,"vipType":0,"followed":true,"signature":"认清","vipRights":null,"blacklist":false,"eventCount":0,"playlistCount":7},{"py":"d1v1ngY","time":0,"userId":269590685,"nickname":"d1v1ngY","remarkName":null,"avatarUrl":"http://p2.music.126.net/-aCamxzxYcPttZV3kDLfug==/18634523069357012.jpg","authStatus":0,"userType":0,"gender":1,"mutual":true,"expertTags":null,"experts":null,"follows":9,"followeds":10,"accountStatus":0,"vipType":0,"followed":true,"signature":"介绍","vipRights":null,"blacklist":false,"eventCount":3,"playlistCount":8},{"py":"wzth","time":0,"userId":300634560,"nickname":"无状态黄","remarkName":null,"avatarUrl":"http://p2.music.126.net/NWtZ_mXi35QAXruP-T7GRw==/109951163034015594.jpg","authStatus":0,"userType":0,"gender":1,"mutual":true,"expertTags":null,"experts":null,"follows":9,"followeds":9,"accountStatus":0,"vipType":0,"followed":true,"signature":"我开始接受自己是并且一直是个平凡人了","vipRights":null,"blacklist":false,"eventCount":0,"playlistCount":2},{"py":"kxbl","time":0,"userId":79013534,"nickname":"快下班啦","remarkName":null,"avatarUrl":"http://p2.music.126.net/YvcFVdkx-BdehnAOa8lelA==/109951163767945571.jpg","authStatus":0,"userType":0,"gender":1,"mutual":true,"expertTags":null,"experts":null,"follows":84,"followeds":33,"accountStatus":0,"vipType":0,"followed":true,"signature":"I’mma pull up with that stick and hit your motherfuckin door","vipRights":null,"blacklist":false,"eventCount":37,"playlistCount":6},{"py":"virpirma","time":0,"userId":106266721,"nickname":"virpirm安","remarkName":null,"avatarUrl":"http://p2.music.126.net/Tdv_BWafl56scSPNuTOpXA==/109951163057616216.jpg","authStatus":0,"userType":0,"gender":2,"mutual":true,"expertTags":null,"experts":null,"follows":5,"followeds":11,"accountStatus":0,"vipType":0,"followed":true,"signature":"不动声色，不痛不痒","vipRights":null,"blacklist":false,"eventCount":16,"playlistCount":6},{"py":"xndg111","time":0,"userId":277332201,"nickname":"仙女的狗111","remarkName":null,"avatarUrl":"http://p2.music.126.net/puVwPu9QVewuuuMzX99WgQ==/18733479116103399.jpg","authStatus":0,"userType":0,"gender":1,"mutual":false,"expertTags":null,"experts":null,"follows":1,"followeds":5,"accountStatus":0,"vipType":11,"followed":true,"signature":"一个名概括一生 余娟娟","vipRights":{"associator":{"vipCode":100,"rights":true},"musicPackage":null,"redVipAnnualCount":-1},"blacklist":false,"eventCount":0,"playlistCount":5},{"py":"yylxms","time":0,"userId":9003,"nickname":"云音乐小秘书","remarkName":null,"avatarUrl":"http://p2.music.126.net/3izpdkVvIPM0s3YZ2pnlaw==/109951163068642813.jpg","authStatus":1,"userType":10,"gender":0,"mutual":false,"expertTags":null,"experts":null,"follows":427,"followeds":99999,"accountStatus":0,"vipType":11,"followed":true,"signature":"网易云音乐是6亿人都在使用的音乐平台，致力于帮助用户发现音乐惊喜，帮助音乐人实现梦想。\n客服@云音乐客服 在线时间：9：00 - 24：00，如您在使用过程中遇到任何问题，欢迎私信咨询，我们会尽快回复。\n如果仍然不能解决您的问题，请邮件我们：\n用户：ncm5990@163.com\n音乐人：yyr599@163.com","vipRights":{"associator":{"vipCode":100,"rights":true},"musicPackage":null,"redVipAnnualCount":1},"blacklist":false,"eventCount":5632,"playlistCount":78},{"py":"yjym","time":0,"userId":78905899,"nickname":"樱井莜木","remarkName":null,"avatarUrl":"http://p2.music.126.net/laJ4Lq4AudYC_2gmEyvWKw==/109951163117659075.jpg","authStatus":0,"userType":200,"gender":0,"mutual":false,"expertTags":["日语","ACG","轻音乐"],"experts":null,"follows":218,"followeds":115868,"accountStatus":0,"vipType":11,"followed":true,"signature":"你们别在私信和评论里问我是不是日本的了，我是中国人！Chinese！","vipRights":{"associator":{"vipCode":100,"rights":true},"musicPackage":null,"redVipAnnualCount":-1},"blacklist":false,"eventCount":499,"playlistCount":41},{"py":"yyj","time":0,"userId":51602310,"nickname":"一一井","remarkName":null,"avatarUrl":"http://p2.music.126.net/z8GXVRYa0zEgtHBacmJxag==/7741661371309973.jpg","authStatus":0,"userType":0,"gender":2,"mutual":true,"expertTags":null,"experts":null,"follows":35,"followeds":7,"accountStatus":0,"vipType":0,"followed":true,"signature":"雨会下 雨会停 这是不变的定义","vipRights":null,"blacklist":false,"eventCount":56,"playlistCount":9},{"py":"jl","time":0,"userId":334310904,"nickname":"锦零","remarkName":null,"avatarUrl":"http://p2.music.126.net/cfPxDJqCJgaRqQVR8vhY1A==/109951163136397251.jpg","authStatus":1,"userType":4,"gender":2,"mutual":false,"expertTags":null,"experts":null,"follows":2,"followeds":441339,"accountStatus":0,"vipType":11,"followed":true,"signature":"微博：锦零ovo","vipRights":{"associator":{"vipCode":100,"rights":true},"musicPackage":null,"redVipAnnualCount":1},"blacklist":false,"eventCount":18,"playlistCount":4},{"py":"LIUyunTingG_","time":0,"userId":274846708,"nickname":"LIUyunTingG_","remarkName":null,"avatarUrl":"http://p2.music.126.net/S3HrjssA_XLTqMCFOVCWZg==/109951163777017724.jpg","authStatus":0,"userType":0,"gender":2,"mutual":false,"expertTags":null,"experts":null,"follows":0,"followeds":3,"accountStatus":0,"vipType":0,"followed":true,"signature":"是谁太勇敢 说喜欢离别╮(╯▽╰)╭","vipRights":null,"blacklist":false,"eventCount":0,"playlistCount":3},{"py":"fafafafaer","time":0,"userId":19570392,"nickname":"fafafafaer","remarkName":null,"avatarUrl":"http://p2.music.126.net/3aBS-5MbmtCR4Ax0MbTm9w==/109951163032972993.jpg","authStatus":1,"userType":4,"gender":2,"mutual":false,"expertTags":null,"experts":null,"follows":3,"followeds":1484579,"accountStatus":0,"vipType":11,"followed":true,"signature":"无","vipRights":{"associator":{"vipCode":100,"rights":true},"musicPackage":null,"redVipAnnualCount":1},"blacklist":false,"eventCount":89,"playlistCount":32},{"py":"ssz","time":0,"userId":135214753,"nickname":"双笙子","remarkName":null,"avatarUrl":"http://p2.music.126.net/DOm76SPCQKRbQT9Y9uhwrA==/109951163717598478.jpg","authStatus":1,"userType":4,"gender":2,"mutual":false,"expertTags":null,"experts":null,"follows":19,"followeds":2458593,"accountStatus":0,"vipType":0,"followed":true,"signature":"合作相关戳助理qq：3402829394/echo、5ing：双笙，bilibili：双笙子/初心不负/商业合作 联系微信： DaDuMusic 联系邮箱： dadumusic@foxmail.com","vipRights":null,"blacklist":false,"eventCount":30,"playlistCount":8},{"py":"ReusYep","time":0,"userId":134636931,"nickname":"ReusYep","remarkName":null,"avatarUrl":"http://p2.music.126.net/2-WjKnevAQ0wGthefHx-HA==/109951163589634858.jpg","authStatus":0,"userType":0,"gender":1,"mutual":true,"expertTags":null,"experts":null,"follows":29,"followeds":27,"accountStatus":0,"vipType":11,"followed":true,"signature":"我经过你的凛冽 也最懂你的密切","vipRights":{"associator":{"vipCode":100,"rights":true},"musicPackage":null,"redVipAnnualCount":-1},"blacklist":false,"eventCount":0,"playlistCount":7},{"py":"xxzny","time":0,"userId":128632924,"nickname":"晓晓之楠音","remarkName":null,"avatarUrl":"http://p2.music.126.net/BoYa47Rzx1VYDxG7qTjpcA==/3284241238095492.jpg","authStatus":0,"userType":0,"gender":2,"mutual":true,"expertTags":null,"experts":null,"follows":6,"followeds":5,"accountStatus":0,"vipType":0,"followed":true,"signature":"生于忧患，死于安乐","vipRights":null,"blacklist":false,"eventCount":2,"playlistCount":12},{"py":"cll","time":0,"userId":120049291,"nickname":"茶理理","remarkName":null,"avatarUrl":"http://p2.music.126.net/Ct1IZrAw7il4-MlMZOczxA==/18719185464789663.jpg","authStatus":1,"userType":4,"gender":2,"mutual":false,"expertTags":null,"experts":{"1":"音乐原创视频达人"},"follows":9,"followeds":406584,"accountStatus":0,"vipType":11,"followed":true,"signature":"【微博/B站 - 茶理理理子 space.bilibili.com/684169】【合作请加助理: 1740358002】","vipRights":{"associator":{"vipCode":100,"rights":true},"musicPackage":null,"redVipAnnualCount":1},"blacklist":false,"eventCount":33,"playlistCount":7},{"py":"xymzxhn","time":0,"userId":103633891,"nickname":"下一秒丶喜欢你","remarkName":null,"avatarUrl":"http://p2.music.126.net/gYostcWVWjRjeFxynEVjBw==/109951163422010370.jpg","authStatus":0,"userType":0,"gender":1,"mutual":true,"expertTags":null,"experts":null,"follows":7,"followeds":2,"accountStatus":0,"vipType":11,"followed":true,"signature":"","vipRights":{"associator":{"vipCode":100,"rights":true},"musicPackage":null,"redVipAnnualCount":-1},"blacklist":false,"eventCount":1,"playlistCount":11}],"touchCount":0,"more":false,"code":200}}
            this.setState({followed:res.data.follow})
        // })

            let follower = {data:{
                "newCount": 0,
                "code": 200,
                "more": false,
                "followeds": [
                    {
                        "py": "zwzdn825",
                        "time": 1542092966899,
                        "followed": false,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": false,
                        "userId": 1464965974,
                        "nickname": "只为找到你825",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 0,
                        "expertTags": null,
                        "experts": null,
                        "follows": 1986,
                        "followeds": 57,
                        "signature": "只为找到你",
                        "vipRights": null,
                        "eventCount": 0,
                        "playlistCount": 2
                    },
                    {
                        "py": "Ah-la-la-la",
                        "time": 1540456552697,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 10,
                        "mutual": true,
                        "userId": 355812427,
                        "nickname": "Ah-la-la-la",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/jdnx_jziGVnby6R_BYeZRg==/18733479115900594.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 1,
                        "expertTags": null,
                        "experts": null,
                        "follows": 9,
                        "followeds": 5,
                        "signature": "这个人很懒，什么都不想略略略",
                        "vipRights": {
                            "associator": null,
                            "musicPackage": {
                                "vipCode": 220,
                                "rights": true
                            },
                            "redVipAnnualCount": -1
                        },
                        "eventCount": 0,
                        "playlistCount": 7
                    },
                    {
                        "py": "sgdxyh",
                        "time": 1539919360110,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": true,
                        "userId": 92009679,
                        "nickname": "时光的小印痕",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/psv8m-7SFguCajZYVdT7UA==/1395280268190590.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 1,
                        "expertTags": null,
                        "experts": null,
                        "follows": 34,
                        "followeds": 18,
                        "signature": null,
                        "vipRights": null,
                        "eventCount": 0,
                        "playlistCount": 5
                    },
                    {
                        "py": "yyj",
                        "time": 1533653724962,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": true,
                        "userId": 51602310,
                        "nickname": "一一井",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/z8GXVRYa0zEgtHBacmJxag==/7741661371309973.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 2,
                        "expertTags": null,
                        "experts": null,
                        "follows": 35,
                        "followeds": 7,
                        "signature": "雨会下 雨会停 这是不变的定义",
                        "vipRights": null,
                        "eventCount": 56,
                        "playlistCount": 9
                    },
                    {
                        "py": "xxzny",
                        "time": 1531967565951,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": true,
                        "userId": 128632924,
                        "nickname": "晓晓之楠音",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/BoYa47Rzx1VYDxG7qTjpcA==/3284241238095492.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 2,
                        "expertTags": null,
                        "experts": null,
                        "follows": 6,
                        "followeds": 5,
                        "signature": "生于忧患，死于安乐",
                        "vipRights": null,
                        "eventCount": 2,
                        "playlistCount": 12
                    },
                    {
                        "py": "linay",
                        "time": 1499574579078,
                        "followed": false,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": false,
                        "userId": 74100331,
                        "nickname": "lina园",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/Mri5TAFwmCEaOp51l3h_6Q==/18684001092335404.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 0,
                        "expertTags": null,
                        "experts": null,
                        "follows": 102,
                        "followeds": 10,
                        "signature": "注定远翔",
                        "vipRights": null,
                        "eventCount": 137,
                        "playlistCount": 1
                    },
                    {
                        "py": "wjqh",
                        "time": 1497200125316,
                        "followed": false,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": false,
                        "userId": 374666772,
                        "nickname": "无尽铅华",
                        "remarkName": null,
                        "avatarUrl": "http://p2.music.126.net/YDEjwQX9NRfHNfm53VGpDg==/18556457743691657.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 0,
                        "expertTags": null,
                        "experts": null,
                        "follows": 6,
                        "followeds": 2,
                        "signature": null,
                        "vipRights": null,
                        "eventCount": 0,
                        "playlistCount": 8
                    },
                    {
                        "py": "dxcn",
                        "time": 1490626110848,
                        "followed": false,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": false,
                        "userId": 271260028,
                        "nickname": "冬雪春泥",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 0,
                        "expertTags": null,
                        "experts": null,
                        "follows": 2,
                        "followeds": 1,
                        "signature": null,
                        "vipRights": null,
                        "eventCount": 0,
                        "playlistCount": 2
                    },
                    {
                        "py": "ReusYep",
                        "time": 1488246543092,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 11,
                        "mutual": true,
                        "userId": 134636931,
                        "nickname": "ReusYep",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/2-WjKnevAQ0wGthefHx-HA==/109951163589634858.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 1,
                        "expertTags": null,
                        "experts": null,
                        "follows": 29,
                        "followeds": 27,
                        "signature": "我经过你的凛冽 也最懂你的密切",
                        "vipRights": {
                            "associator": {
                                "vipCode": 100,
                                "rights": true
                            },
                            "musicPackage": null,
                            "redVipAnnualCount": -1
                        },
                        "eventCount": 0,
                        "playlistCount": 7
                    },
                    {
                        "py": "kxbl",
                        "time": 1481702355841,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": true,
                        "userId": 79013534,
                        "nickname": "快下班啦",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/YvcFVdkx-BdehnAOa8lelA==/109951163767945571.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 1,
                        "expertTags": null,
                        "experts": null,
                        "follows": 84,
                        "followeds": 33,
                        "signature": "I’mma pull up with that stick and hit your motherfuckin door",
                        "vipRights": null,
                        "eventCount": 37,
                        "playlistCount": 6
                    },
                    {
                        "py": "xymzxhn",
                        "time": 1480040485015,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 11,
                        "mutual": true,
                        "userId": 103633891,
                        "nickname": "下一秒丶喜欢你",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/gYostcWVWjRjeFxynEVjBw==/109951163422010370.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 1,
                        "expertTags": null,
                        "experts": null,
                        "follows": 7,
                        "followeds": 2,
                        "signature": "",
                        "vipRights": {
                            "associator": {
                                "vipCode": 100,
                                "rights": true
                            },
                            "musicPackage": null,
                            "redVipAnnualCount": -1
                        },
                        "eventCount": 1,
                        "playlistCount": 11
                    },
                    {
                        "py": "d1v1ngY",
                        "time": 1467855472109,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": true,
                        "userId": 269590685,
                        "nickname": "d1v1ngY",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/-aCamxzxYcPttZV3kDLfug==/18634523069357012.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 1,
                        "expertTags": null,
                        "experts": null,
                        "follows": 9,
                        "followeds": 10,
                        "signature": "介绍",
                        "vipRights": null,
                        "eventCount": 3,
                        "playlistCount": 8
                    },
                    {
                        "py": "wzth",
                        "time": 1467855335627,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": true,
                        "userId": 300634560,
                        "nickname": "无状态黄",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/NWtZ_mXi35QAXruP-T7GRw==/109951163034015594.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 1,
                        "expertTags": null,
                        "experts": null,
                        "follows": 9,
                        "followeds": 9,
                        "signature": "我开始接受自己是并且一直是个平凡人了",
                        "vipRights": null,
                        "eventCount": 0,
                        "playlistCount": 2
                    },
                    {
                        "py": "virpirma",
                        "time": 1465738229763,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": true,
                        "userId": 106266721,
                        "nickname": "virpirm安",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/Tdv_BWafl56scSPNuTOpXA==/109951163057616216.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 2,
                        "expertTags": null,
                        "experts": null,
                        "follows": 5,
                        "followeds": 11,
                        "signature": "不动声色，不痛不痒",
                        "vipRights": null,
                        "eventCount": 16,
                        "playlistCount": 6
                    },
                    {
                        "py": "wrdrytblb",
                        "time": 1459344638502,
                        "followed": true,
                        "accountStatus": 0,
                        "vipType": 0,
                        "mutual": true,
                        "userId": 260023764,
                        "nickname": "温柔的人也太棒了吧",
                        "remarkName": null,
                        "avatarUrl": "http://p1.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "gender": 0,
                        "expertTags": null,
                        "experts": null,
                        "follows": 27,
                        "followeds": 23,
                        "signature": "认清",
                        "vipRights": null,
                        "eventCount": 0,
                        "playlistCount": 7
                    }
                ]
            }
        }
            this.setState({follower:follower.data.followeds})
    }
    changeTab(e) {
        this.setState({curNav: e.target.dataset.nav});
    }
    // handleScroll(event){
    //     console.log(event.detail.scrollLeft,event.detail.scrollWidth/3);
    //     if(event.detail.scrollLeft<=event.detail.scrollWidth/3){
    //         this.setState({curNav:'followed'})
    //     }else if( event.detail.scrollLeft>=event.detail.scrollWidth/3){
    //         this.setState({curNav:'follower'})
    //     }
    // }
    render(){
        let followed = this.state.followed;
        let follower = this.state.follower;
        return (
            <View>
                <View class='user-nav' onClick={this.changeTab}>
                    <Text data-nav='followed' class={`${this.state.curNav == 'followed' ? 'active' : ''}`}>关注</Text>
                    <Text data-nav='follower' class={`${this.state.curNav == 'follower' ? 'active' : ''}`}>粉丝</Text>
                </View>
                <ScrollView 
                  scrollIntoView={this.state.curNav} 
                //   onScroll={this.handleScroll}
                  scroll-x scroll-with-animation  class='user-scroll-view'
                >
                    <View id='followed'>
                        <AtList>
                            {followed && followed.map(item=>{
                               return( <View key={item.userId}>
                                    <AtListItem title={item.nickname} thumb={item.avatarUrl} note={item.signature} arrow='list' />
                                </View>
                                )
                            })}
                        </AtList>
                    </View>
                    <View id='follower'>
                        <AtList>
                            {follower && follower.map(item=>{
                               return( <View key={item.userId}>
                                    <AtListItem title={item.nickname} thumb={item.avatarUrl} note={item.signature} arrow='list' />
                                </View>
                                )
                            })}
                        </AtList>
                    </View>
                </ScrollView>
            </View>
        )
    }
}