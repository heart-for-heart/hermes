export enum DialogType {
  BusinessGroup = "businessGroup",
  Generator = "generator",
}

export enum ContentType {
  Link = "link",
  Image = "image",
  Text = "text",
  Video = "video",
  Button = 'button',
}

export const messageListMorning = [
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 09:00:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '下午好呀，我是小蜜，很高兴认识您！今天是 2023年10月27日，天气晴朗，是我们认识的第一天。'
      }
    ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 09:00:10',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '您知道吗，今天餐饮业有一个大新闻，您想知道吗？'
      }
    ]
  },
  {
    // name: '商家',
    // type: DialogType.BusinessGroup,
    // time: '2023-10-26 09:00:30',
    // avatar: 'https://ypll.xyz/assets/image_1693755149838_0.png',
    // contents: [
    //   {
    //     type: ContentType.Text,
    //     content: '可以'
    //   }
    // ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 09:00:50',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '抖音美团商战啦。昨天，“太二酸菜鱼”在抖音首次直播，售卖了1个亿的营业额呢。今天，在大众点评上就搜不到“太二”了。'
      }
    ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 09:02:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '您怎么看这件事呢，您有尝试过抖音直播吗？'
      }
    ]
  },
  {
    // name: '商家',
    // type: DialogType.BusinessGroup,
    // time: '2023-10-26 09:02:10',
    // avatar: 'https://ypll.xyz/assets/image_1693755149838_0.png',
    // contents: [
    //   {
    //     type: ContentType.Text,
    //     content: '我还没做过直播，也有人找我做过，但还在观望中，我们就是小店铺，怕接待不过来。'
    //   }
    // ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 09:03:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '是的呢，直播是给门店引流的好帮手，但是做之前呢，还是要做好门店接待的准备，给顾客留下好印象，顾客才会再次到店呢。'
      }
    ]
  },
  {
    // name: '商家',
    // type: DialogType.BusinessGroup,
    // time: '2023-10-26 09:04:10',
    // avatar: 'https://ypll.xyz/assets/image_1693755149838_0.png',
    // contents: [
    //   {
    //     type: ContentType.Text,
    //     content: '嗯嗯'
    //   }
    // ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 09:05:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '这个发给您，是本周的餐饮动态哦～很有趣的，您一定要看'
      }
    ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 09:05:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        title: '',
        subtitle: '',
        image: 'https://img.ypll.xyz/work/20231027000515.png',
        link: 'https://crm.zaihuiba.com', //
      }
    ]
  },
]




export const messageListMoon = [
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 13:00:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '亲爱的商户大人，中午的忙碌时光已经结束了，您今天的努力真是让人感到自豪！不知道您是否想要查看您的中午外卖订单的满意度呢？'
      }
    ]
  },
  {
    // name: '商家',
    // type: DialogType.BusinessGroup,
    // time: '2023-10-26 13:01:00',
    // avatar: 'https://ypll.xyz/assets/image_1693755149838_0.png',
    // contents: [
    //   {
    //     type: ContentType.Text,
    //     content: '噢，是的，我希望看一看客人们的评价。'
    //   }
    // ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 13:02:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '太好了！不过，在为您展示这些宝贵的反馈之前，我需要您的一点小小授权。只需确认您是本店的合法所有者或经理，就可以了。只要点击下面的授权按钮就可以完成授权哦，授权完成后，我们将为您立刻查找相关的评价。如果您还有其他需要，也随时告诉我哦！'
      }
    ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 13:02:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Button,
        content: '请授权',
      }
    ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 13:03:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '好的，授权成功。为您搜索到今日午餐时段有一条外卖差评哦。',
      }
    ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 13:04:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Image,
        url: 'https://img.ypll.xyz/work/img_v2_887ca1f4-e52e-4db0-a6ef-d1287e89831g.jpg',
      }
    ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 13:05:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '这条差评主要是针对米饭口感的，建议您这样回复：“亲爱的顾客您好，抱歉让您有了不好的消费体验，非常感谢您对我们的菜品的评价和关注，您的意见我们已收到，会尽快调整米饭口感。”'
      }
    ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 13:06:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '需要使用我们的助理服务，帮您回复差评吗，需要使用？'
      }
    ]
  },
  {
    // name: '商家',
    // type: DialogType.BusinessGroup,
    // time: '2023-10-26 13:07:00',
    // avatar: 'https://ypll.xyz/assets/image_1693755149838_0.png',
    // contents: [
    //   {
    //     type: ContentType.Text,
    //     content: '可以'
    //   }
    // ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 13:08:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '好的，请您授权。'
      }
    ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 13:08:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Button,
        content: '请授权'
      }
    ]
  },
  {
    name: '助手',
    type: DialogType.Generator,
    time: '2023-10-26 13:09:00',
    avatar: 'https://r.kezaihui.com/client/image/2023-05-19/ai-xiaohui-logo.png',
    contents: [
      {
        type: ContentType.Text,
        content: '授权成功。减掉10个金币。小蜜每天为您巡店～为您的业保驾护航。'
      }
    ]
  },
]