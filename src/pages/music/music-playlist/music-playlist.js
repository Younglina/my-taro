import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import MusicList from '../../../components/musiclist'

export default class Index extends Component {

    config: Config = {
        navigationBarTitleText: '音乐'
    }
    constructor() {
        super(...arguments)
        this.state = {
            
        }
    }

    render(){
        return (
            <View>
                {/* this.$router.params.id &&  */}
                {<MusicList listId={this.$router.params.id} />}
            </View>
        )
    }
}