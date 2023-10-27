import { Button, Input, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";

import Message from "@/components/Message";
import { useEffect, useState } from "react";
import { messageListMorning, messageListMoon } from "@/constants/message";

import { DialogType, conversations } from "@/constants/conversation";
import { parseDialog } from "@/utils/parseDialog";

import "./index.scss";

const getChat = async (message: string, option) => {
  const { data } = await Taro.request({
    url: "https://bomb.zaihuiba.com/chat/",
    method: "POST",
    data: {
      ...option,
      message,
    },
    header: {
      "Content-Type": "application/json",
    },
  });

  console.log("message", data.message);
};

export default function ChatRoom() {
  const [currentMessageList, setCurrentMessageList] = useState<any>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const [curText, setCurText] = useState("");
  const [isInputCompleted, setIsInputCompleted] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isTyperComplete, setisTyperComplete] = useState(false)
  const [option, setOption] = useState({
    business: "凑凑火锅",
    district: "长风大悦城",
    category: "火锅",
    style: "传统中式",
    price: "200",
    dishes: "",
  });

  useLoad(() => {
    setTimeout(() => {
      setCurrentMessageList([messageListMorning[0]]);
      setCurrentMessageIndex(0);
    }, 500)

  });

  useEffect(() => {
    if (isInputCompleted || !isBreak && isTyperComplete && !isInputCompleted) {
      console.log('连续推送')
      let cur = currentMessageIndex + 1;
      if (currentMessageIndex > messageListMorning.length || !messageListMorning[cur]?.contents?.length) {
        // 走gpt
        return
      }
      if (Object.values(messageListMorning[cur]).length) {
        setCurrentMessageList(
          currentMessageList.concat([messageListMorning[cur]])
        );
        setCurrentMessageIndex(cur);
        setCurText("");
        setIsInputCompleted(false);
        if (cur + 1 < messageListMorning.length && !Object.values(messageListMorning?.[cur + 1]).length) {
          setCurrentMessageIndex(cur + 1);
          setIsBreak(true);
          return
        }
        setIsBreak(false);
      } else {
        setIsBreak(true);
        setIsInputCompleted(false);
      }
    }
  }, [isBreak, isTyperComplete, currentMessageList, isInputCompleted]);

  console.log(currentMessageIndex, isBreak, 'isBreak', 'isTyperComplete', isTyperComplete, 'isInputCompleted', isInputCompleted)

  useEffect(() => {
    Taro.getStorage({
      key: "option",
      success: ({ data }) => {
        const op = JSON.parse(data);
        getChat("请给出关于火锅店的宣传文案", op).then((res) => {
          console.log("chat-option", res);
        });
      },
    });
  }, []);

  return (
    <View className="chat-room">
      <View className="list-container">
        {currentMessageList.map((item, index) => (
          <Message
            key={index}
            type={item.type}
            avatar={item.avatar}
            name={item.name}
            contents={item.contents ?? []}
            onTyperComplete={(v) => {
              setCurrentMessageList(
                currentMessageList.map((v) => {
                  if (v.contents === item.contents) {
                    v.isTyperComplete = true;
                    return v
                  }
                  return v
                })
              );
              setisTyperComplete(v)
            }}
          />
        ))}
      </View>
      <View className="footer-input">
        <Input
          className="input"
          value={curText}
          onInput={(e) => {
            console.log(e);
            setCurText(e.target?.detail ?? "");
          }}
        />
        <Button
          className="button"
          onClick={() => {
            setCurrentMessageList(
              currentMessageList.concat([
                {
                  type: DialogType.BusinessGroup,
                  content: {
                    type: "text",
                    children: curText,
                  },
                },
              ])
            );
          }}
        >
          发送
        </Button>
      </View>
    </View>
  );
}
