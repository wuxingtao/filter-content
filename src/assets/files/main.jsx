/**
 * @Desc: 中秋活动 - 对外活动
 * @Author: wu xingtgao
 * @Date: 2020/9/3
 */
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
        navigationBarTitleText: '跨越速运',
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
                            <Text className='kye_p kye_p_first'>亲爱的跨越伙伴们、朋友们：</Text>
                            <Text className='kye_p'>中秋逢国庆，家和国运兴。值此佳节来临，举国欢庆之际，我代表跨越速运集团向各位致以节日的问候和美好的祝愿。</Text>
                            <Text className='kye_p'>一直以来，跨越速运用汗水浇灌收获，以实干砥砺前行，通过技术与业务完美融合，以科技赋能催生新的发展活力。</Text>
                            <Text className='kye_p'>历经13年磨砺，跨越速运已经成长为能够在困难时向国家主动贡献力量的企业。</Text>
                            <Text className='kye_p'>未来，跨越速运愿与各位共荣共赢，于危机中育新机，于变局中开新局，用匠心做好产品，用诚心服务客户，广开市场，再创辉煌，一起迎接跨越更好的未来！</Text>
                            <Text className='kye_p'>最后再次祝愿大家佳节快乐，阖家幸福！</Text>
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
