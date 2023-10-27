import { View, Image } from "@tarojs/components";

import MessageItem from "@/components/MessageItem";
import { DialogType } from "@/constants/conversation";

import "./index.scss";

export default function Message({ type, avatar, name, contents }) {
  return (
    <View className={`'message' ${type === DialogType.Generator ? "left" : "right"}`}>
      <View className="avatar-wrapper">
        <Image className="avatar" src={avatar} />
      </View>
      <View className="container">
        <View className="name">{name}</View>
        <View className="message-list">
          {contents.map(c => <MessageItem value={c.content} key={c.content} type={c.type} />)}
        </View>
      </View>
    </View>
  );
}
