import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "东方犬明湖 文档站",
  description: "DogeLake Docs",
  port: 29039,

  theme,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
     
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
