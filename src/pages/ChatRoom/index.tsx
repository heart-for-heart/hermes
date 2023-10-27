import { View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";

import Message from "@/components/Message";
import { useEffect, useState } from "react";
import { messageListMorning, messageListMoon } from "@/constants/message";

import "./index.scss";

export default function ChatRoom() {
  const [currentMessageList, setCurrentMessageList] = useState<any>([]);

  useLoad(() => {
    console.log("Page loaded.");

    // const messageList = Taro.getStorageSync('message_list')
    // if (!messageList) {
    //   Taro.setStorageSync('message_list', JSON.stringify([]))
    // }

    const params = Taro.getCurrentInstance()?.router?.params;
    const type = params?.type;

    if (type === "morning") {
      setCurrentMessageList(messageListMorning);
    } else if (type === "moon") {
      setCurrentMessageList(messageListMoon);
    } else {
      setCurrentMessageList([]);
    }
  });

  // useEffect(() => {
  //   const messageList = Taro.getStorageSync('message_list')
  //   if (messageList) {
  //     setCurrentMessageList(messageList)
  //   }

  //   // 隔几秒主动询问
  //   setTimeout(() => {

  //   }, 1000);
  // }, [])

  return (
    <View className="chat-room">
      <View className="container">
        {currentMessageList.map((item, index) => (
          <Message
            key={index}
            type={item.type}
            avatar={item.avatar}
            name={item.name}
            contents={item.contents}
            onComplete={res => {
              console.log('res', res)
            }}
          />
        ))}
      </View>
    </View>
  );
}
