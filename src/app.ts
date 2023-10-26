import { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import { conversations } from "./constants/conversation";
import { parseDialog } from "./utils/parseDialog";

import "./app.scss";

const formatConversations = conversations.map((c) => parseDialog(c));

function App({ children }: PropsWithChildren<any>) {


  useLaunch(() => {
    console.log("App launched.");
    console.log(formatConversations)
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
