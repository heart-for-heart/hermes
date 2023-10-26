import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Welcome() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Welcome !</Text>
    </View>
  )
}
