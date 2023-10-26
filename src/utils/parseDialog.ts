import { ContentType, DialogItem, DialogType, Speakers } from "@/constants/conversation";

export const parseDialog = (dialogString: string): DialogItem[] => {
  const lines = dialogString.split("\n");
  let result: DialogItem[] = [];

  let currentType = DialogType.Generator;
  let currentContent;

  for (const line of lines) {
    const parts = line.split("：");

    if (Speakers[DialogType.Generator].find((v) => parts[0].includes(v))) {
      // Dialogue line, e.g., "助手：下午好呀，我是小蜜..."
      currentType = DialogType.Generator;
    } else {
      // Business response, e.g., "商户：噢，是的..."
      currentType = DialogType.BusinessGroup;
    }

    currentContent = parts[1] ?? "";
    if (currentContent.includes("链接")) {
      result.push({
        type: currentType,
        content: [
          {
            type: ContentType.Link,
            children: currentContent,
          },
        ],
      });
    } else {
      result.push({
        type: currentType,
        content: [
          {
            type: ContentType.Text,
            children: currentContent,
          },
        ],
      });
    }
  }

  return result;
};
