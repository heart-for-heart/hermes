import { View} from "@tarojs/components"
import React, { useEffect, useState } from "react"

import "./index.scss"

const Index: React.FC = () => {
  // TODO：需要加loading状态
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    // <HuiLoader loading={loading}>
      <View className="index-page">
        <View className="dialog-box">
          <View className="first-line">您好，我是您的门店管家～</View>
          <View className="second-line">您可以叫我小蜜</View>
          <View className="third-line">
            接下来由我代您开启一段餐饮门店经营之旅
          </View>
        </View>
      </View>
    // </HuiLoader>
  )
}

export default Index
