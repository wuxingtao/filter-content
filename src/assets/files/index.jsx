/**
 * @Desc: 中秋活动 - 对内活动
 * @Author: wu xingtgao
 * @Date: 2020/9/3
 */
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
                        src={require('@assets/images/activity_zq_content_1.png')}
                    />
                    {/*<Image className='body_img w_full' mode='widthFix'*/}
                    {/*    src={`${IMG_BASE_URL}/midAutumn/activity_zq_content_1.png`}*/}
                    {/*/>*/}
                    <View className='kye__content p_a'>
                        <Image mode='widthFix' className='content_title_1'
                            src={require('@assets/images/activity_zq_title_1.png')}
                        />
                        {/*<Image mode='widthFix' className='content_title_1'*/}
                        {/*    src={`${IMG_BASE_URL}/midAutumn/activity_zq_title.png`}*/}
                        {/*/>*/}
                        <Text selectable>
                            <Text className='kye_p kye_p_first'>亲爱的跨越家人们:</Text>
                            <Text className='kye_p'>金秋送爽，丹桂飘香，又是一年中秋圆月时，祝跨越的家人们中秋快乐！</Text>
                            <Text className='kye_p'>今年是不容易也不平凡的一年，是危机，也是转机。在疫情的影响下，众多企业不堪重负，而跨越速运却逆流而上。我们经受了疫情带来的重重考验，承担了一个民族物流企业该有的社会责任与担当，同时我们内部的防疫工作在各位跨越家人的支持下，也做的相当到位，各位家人们都健健康康。</Text>
                            <Text className='kye_p'>今年，是跨越成立十三周年，百家合作的品牌联名为跨越庆生，这是合作企业对我们跨越服务的认可，也是对各位家人们工作付出的认可。十三周岁的跨越牵手东航，实现“客改货”与“客货包机”并行，第十三架包机入列，航空实力再跨越。乘新基建东风，跨越助力供应链复苏亮相央视。向大众证明了跨越的坚韧与强壮。</Text>
                            <Text className='kye_p'>跨越的今天，是每一位员工携手拼搏创造而来的；跨越的明天，也将由各位家人添光溢彩。跨越的每一步都走的稳健有力，家人们的付出我都心中了然，相信未来遇到任何的考验，只要我们携手并进，依然能跨越。</Text>
                            <Text className='kye_p'>最后，祝各位家人们中秋快乐，阖家欢乐！</Text>
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
