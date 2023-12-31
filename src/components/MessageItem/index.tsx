import { View, Image, Text, Video } from '@tarojs/components'
import { DialogType } from '@/constants/conversation'

import React, { FC, useEffect } from 'react'
import TextTyper from '../TextTyper'

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

 const MessageItem: FC<any> = ({ type, value, src, dialogType, onTyperComplete }) => {
  return (
    <View className='message-item'>
      { type === 'text' &&
        <View className='text'>
          {dialogType === DialogType.BusinessGroup ? <Text>{value}</Text> : <TextTyper value={value} onTyperComplete={onTyperComplete} />}
        </View>}
      { type === 'image' && <Image className='image' mode='widthFix' src={src} />}
      { type === 'video' && <Video className='video' src={src} />}
      { type === 'link' && <LinkCard /> }
      { type === 'emo' && <View className='emo' style={{
        background: `center no-repeat url('${src}')`,
        backgroundSize: '100% auto',
      }}
      /> }
    </View>
  )

}

export default MessageItem
