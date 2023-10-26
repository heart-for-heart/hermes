export enum DialogType {
  BusinessGroup = "businessGroup",
  Generator = "generator",
}
export enum ContentType {
  Link = "link",
  Image = "image",
  Text = "text",
  Video = "video",
}
export interface ContentItem {
  type: ContentType;
  children: React.ReactNode;
}

export interface DialogItem {
  type: DialogType;
  content: ContentItem[];
}

export const Speakers = {
  [DialogType.BusinessGroup]: ["商户"],
  [DialogType.Generator]: ["小蜜", "助手"],
};
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

const conversations = [
  `助手：下午好呀，我是小蜜，很高兴认识您！今天是{{日期}}，天气{{天气}}，是我们认识的第一天。
  商户：想
  助手：抖音美团商战啦。昨天，“太二酸菜鱼”在抖音首次直播，售卖了1个亿的营业额呢。今天，在大众点评上就搜不到“太二”了。
  商户：我还没做过直播，也有人找我做过，但还在观望中，我们就是小店铺，怕接待不过来。
  助手：是的呢，直播是给门店引流的好帮手，但是做之前呢，还是要做好门店接待的准备，给顾客留下好印象，顾客才会再次到店呢。
  商户：嗯嗯
  助手：这个发给您，是本周的餐饮动态哦～很有趣的，您一定要看`,
  `助手：下午好呀，我是小蜜，很高兴认识您！今天是{{日期}}，天气{{天气}}，是我们认识的第一天。
助手：您知道吗，今天餐饮业有一个大新闻，您想知道吗？
商户：可以
助手：抖音美团商战啦。昨天，“太二酸菜鱼”在抖音首次直播，售卖了1个亿的营业额呢。今天，在大众点评上就搜不到“太二”了。
助手：您怎么看这件事呢，您有尝试过抖音直播吗？
商户：我还没做过直播，也有人找我做过，但还在观望中，我们就是小店铺，怕接待不过来。
助手：是的呢，直播是给门店引流的好帮手，但是做之前呢，还是要做好门店接待的准备，给顾客留下好印象，顾客才会再次到店呢。
商户：嗯嗯
助手：这个发给您，是本周的餐饮动态哦～很有趣的，您一定要看
助手：链接🔗
//商户点开观看
//页面掉下金币奖励`,
];

export const formatConversations = conversations.map((c) => parseDialog(c));

export const GifSoures = [{
  name: '不想动',
  src: '../../gifs/7628.GIF',
},{
  name: '再见',
  src: '../../gifs/7629.GIF',
},{
  name: '膜拜',
  src: '../../gifs/7630.GIF',
},{
  name: '摇头',
  src: '../../gifs/7631.GIF',
},{
  name: '开心',
  src: '../../gifs/7632.GIF',
},{
  name: '飞翔',
  src: '../../gifs/7633.GIF',
}]
