import { Button, Input, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";

import Message from "@/components/Message";
import { useEffect, useState } from "react";
import { messageListMorning, messageListMoon } from "@/constants/message";

import { DialogType, conversations } from "@/constants/conversation";
import { parseDialog } from "@/utils/parseDialog";

import "./index.scss";

const formatConversations = conversations.map((c) => parseDialog(c));
export default function ChatRoom() {
  const [currentMessageList, setCurrentMessageList] = useState<any>([]);
  const [curText, setCurText] = useState('')

  useLoad(() => {
    console.log("Page loaded.");

    // const messageList = Taro.getStorageSync('message_list')
    // if (!messageList) {
    //   Taro.setStorageSync('message_list', JSON.stringify([]))
    // }

    const params = Taro.getCurrentInstance()?.router?.params;
    const type = params?.type;

    if (type === "morning") {
      setCurrentMessageList([messageListMorning[0]]);
      console.log(messageListMorning)
    } else if (type === "afternoon") {
      setCurrentMessageList([messageListMorning[0]]);
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
            contents={item.contents ?? []}
          />
        ))}
      </View>
      <View className="footer-input">
        <Input
          className="input"
          onInput={(e) => {
          console.log(e)
          setCurText(e.target?.detail ?? '')
        }}
        />
        <Button className='button' onClick={() => {
          setCurrentMessageList(currentMessageList.concat([{ type: DialogType.BusinessGroup, content: {
            type: 'text',
            children:curText,
          }}]))
        }}
        >发送</Button>
      </View>
    </View>
  );
}
