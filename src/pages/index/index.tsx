import { Button, View } from "@tarojs/components"
import React, { useEffect, useState } from "react"

import TextTyper from "@/components/TextTyper"

import "./index.scss"
import Taro from "@tarojs/taro"

const Index: React.FC = () => {
  const [showFirst, setShowFirst] = useState(true)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)

  const text = [
    "您好，我是您的门店管家～",
    "您可以叫我小蜜",
    "接下来由我带您开启一段餐饮门店经营之旅",
  ]

  useEffect(() => {
    setTimeout(() => {
      setShowSecond(true)
    }, 1500)

    setTimeout(() => {
      setShowThird(true)
    }, 2500)
  }, [])

  const handleClickJourney = () => {
    Taro.navigateTo({ url: 'pages/options/options' })
  }

  return (
    <View className="index-page">
      <View className="dialog-box">
        {showFirst && text[0] && <TextTyper value={text[0]} />}
        {showSecond && text[1] && <TextTyper value={text[1]} />}
        {showThird && text[2] && <TextTyper value={text[2]} />}
      </View>
      <Button
        type="primary"
        className="begin-journey"
        onClick={handleClickJourney}
      >
        开启旅程
      </Button>
    </View>
  )
}

export default Index
