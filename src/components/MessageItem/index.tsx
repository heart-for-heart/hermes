import { View, Image, Text, Video } from '@tarojs/components'

import React, { FC } from 'react'

import './index.scss'

const LinkCard = () => {
  return (
    <View className='link-card'>
      <View className='info'>
        <View className='title'>
          标题很长很长很长很长很好喝中扥很长很长很长很长很长很长
        </View>
        <View className='subtitle'>
          这是一条描述
          描述一大堆
          描述一大堆
          描述一大堆
          描述一大堆
          描述一大堆
          描述一大堆
          描述一大堆
          描述一大堆
          描述一大堆
          描述一大堆
          描述一大堆
          描述一大堆
          描述一大堆
        </View>
      </View>
      <Image className='image' mode='aspectFill' src='https://ypll.xyz/assets/image_1693755149838_0.png' />
    </View>
  )
}

 const MessageItem: FC<any> = ({ type, value, src }) => {
  return (
    <View className='message-item'>
      { type === 'text' && <Text className='text'>{value}</Text>}
      { type === 'image' && <Image className='image' mode='widthFix' src={src} />}
      { type === 'video' && <Video className='video' src={src} />}
      { type === 'link' && <LinkCard /> }
    </View>
  )

}

export default MessageItem
