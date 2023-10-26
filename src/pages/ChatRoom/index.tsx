import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

import Message from '@/components/Message'

import './index.scss'

export default function ChatRoom() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='chat-room'>
      <View className='container'>
        <Message type='generator' />
        <Message />
      </View>
    </View>
  )
}
