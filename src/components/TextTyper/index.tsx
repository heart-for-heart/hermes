import { Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

const TextTyper = ({ value, onTyperComplete }) => {
  const [text, setText] = useState("");

  function typeWriter(t, speed, callback) {
    let textIndex = 0;

    const interval = setInterval(function () {
      if (textIndex < t.length) {
        const currentText = t.substring(0, textIndex + 1);
        if (callback) {
          callback(currentText);
        }
        textIndex++;
      } else {
        onTyperComplete && onTyperComplete(true)
        clearInterval(interval); // 停止定时器
      }
    }, speed);
  }

  useEffect(() => {
    if (value) {
      typeWriter(value, 50, (currentText) => {
        setText(currentText);
      });
    }
  }, [value]);

  return <Text>{text}</Text>;
};

export default TextTyper;
