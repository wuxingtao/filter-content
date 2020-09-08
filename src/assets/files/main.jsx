import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { IMG_BASE_URL } from '@constants'
import './index.scss'

class VideoUser extends Component {
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
                        src={`${IMG_BASE_URL}/midAutumn/activity_zq_content.png`}
                    />
                    <View className='kye__content p_a'>
                        <Image mode='widthFix' className='content_title'
                            src={`${IMG_BASE_URL}/midAutumn/activity_zq_title.png`}
                        />
                        <Text selectable>
                            <Text className='kye_p kye_p_first'>我的观点概括起来就是一句话：既要重视资源、环境，更要重视生态系统。其理由主要有</Text>
                            <Text className='kye_p'>人与自然是生命共同体。在地球生物圈中，包括人类在内的所有生物都需要资源和环境的支撑，而满</Text>
                            <Text className='kye_p'>从自然生态系统对人类的服务功能看，生态系统与资源、环境是“一体两用”的关系。如果只重视资源、环境，而不重视生态系统，势必导致生态系统退化，使人类失去生存家</Text>
                            <Text className='kye_p'>中共十八大和中共十九大报告和党中央国务院的一系列文件，都高度重视自然生态系统的保护</Text>
                            <Text className='kye_p'>“绿水青山就是金山银山”。就是说，良好的自然生态系统是人和社会持续发展的根本基础，只要维护和提升自然生态系统的质量和稳定性</Text>
                            <Text className='kye_p'>“统筹山水林田天湖草系统治理”。就是说，地球生物圈是个统一的整体，圈内各生态系统是相互依存</Text>
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

export default VideoUser
