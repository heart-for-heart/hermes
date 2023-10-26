import { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import "./app.scss";
import { formatConversations } from "./constants/conversation";

function App({ children }: PropsWithChildren<any>) {


  useLaunch(() => {
    console.log("App launched.");
    console.log(formatConversations)
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
