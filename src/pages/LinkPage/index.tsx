import { View, Image } from "@tarojs/components";
import React, { useEffect, useState } from "react";

import "./index.scss";

const LinkPage: React.FC = () => {
  return (
    <View className="link-page">
      <Image mode="widthFix" style={{width: '100vw' }} src="https://img.ypll.xyz/work/img_v2_05795e69-3317-4e14-8053-5bc2727645bg.png" />
    </View>
  );
};

export default LinkPage;
