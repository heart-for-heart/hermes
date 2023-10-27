import { Button, Input, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";

import Message from "@/components/Message";
import { useEffect, useState } from "react";
import { messageListMorning, messageListMoon } from "@/constants/message";

import { DialogType, conversations } from "@/constants/conversation";
import { parseDialog } from "@/utils/parseDialog";

import "./index.scss";

const getChat = async (message: string) => {
  const { data } = await Taro.request({
    url: "https://bomb.zaihuiba.com/chat/",
    method: "POST",
    data: {
      message,
      business: '凑凑火锅',
      district: '长风大悦城',
      category: '火锅',
      style: '传统中式',
      price: '200',
      dishes: '',
    },
    header: {
      "Content-Type": "application/json",
    },
  });

  console.log("message", data.message);
};

export default function ChatRoom() {
  const [currentMessageList, setCurrentMessageList] = useState<any>([]);
  const [curText, setCurText] = useState('')

  useLoad(() => {
    console.log("Page loaded.");
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

    getChat("你是谁？你在哪？你可以做什么？");
  });

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
