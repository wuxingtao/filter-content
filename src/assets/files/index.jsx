import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { IMG_BASE_URL } from '@constants'
import './index.scss'

class VideoPage extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    config = {
        navigationBarTitleText: 'title',
    }

    static options = {
        addGlobalClass: true
    }

    render () {
        return (
            <View className='page__container'>
                <View className='page__header'>
                    <Image mode='widthFix' className='header_img w_full' src={`${IMG_BASE_URL}/midAutumn/activity_zq_header.png`} />
                </View>
                <View className='kye__body p_r'>
                    <Image className='body_img w_full' mode='widthFix'
                        src={require('@assets/images/activity_zq_content_1.png')}
                    />
                    <View className='kye__content p_a'>
                        <Image mode='widthFix' className='content_title_1'
                            src={require('@assets/images/activity_zq_title_1.png')}
                        />
                        <Text selectable>
                            <Text className='kye_p kye_p_first'>9月1日，“千古风流人物——故宫博物院藏苏轼主题书画特展”在故宫文华殿开展。展览通过78件（套）文物精品，勾勒出一个生动而立体的苏轼形象，带领观众回到苏轼所处的那个文化昌盛、群星璀璨的时代。</Text>
                            <Text className='kye_p'>“十三五”期间，进出口银行累计开出跨境非融资保函金额超过2400亿元</Text>
                            <Text className='kye_p'>据介绍，进出口银行非融资性保函不仅为国内企业增信，越速运却逆流而上。我们经受了疫情带来的重重考验，承担了一个民族物流企业该有的社会责任与担当，同时我们内部的防疫工作在各位跨越家人的支持下，也做的相当到位，各位家人们都健健康康。</Text>
                            <Text className='kye_p'>今年上半年，在疫情对全球经济冲击下，进出口银行跨境非融资</Text>
                            <Text className='kye_p'>为国内航运市场首个超大型乙烷运输船建造项目出口提供担保，帮助企业在航</Text>
                            <Text className='kye_p'>在海外认可度高</Text>
                        </Text>
                    </View>
                </View>
                <View className='kye__footer t_a_c m_t_14'>
                    <Image mode='widthFix' className='footer_img'
                        src={`${IMG_BASE_URL}/midAutumn/activity_zq_footer.png`}
                    />
                </View>

            </View>
        )
    }

}

export default VideoPage
