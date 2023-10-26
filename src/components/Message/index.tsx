import { View, Image } from '@tarojs/components'

import MessageItem from '@/components/MessageItem'

import './index.scss'

export default function Message({ type }) {
  return (
    <View className={`'message' ${type === 'generator' ? 'left' : 'right'}`}>
      <View className='avatar-wrapper'>
        <Image className='avatar' src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67' />
      </View>
      <View className='container'>
        <View className='name'>
          张三
        </View>
        <View className='message-list'>
          <MessageItem type='text' value='hello' />
          <MessageItem type='text' value='缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。' />
          <MessageItem type='image' src='https://ypll.xyz/assets/image_1693848242491_0.png' />
          <MessageItem type='video' src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' />
          <MessageItem type='link' />
        </View>
      </View>
    </View>
  )
}
