export const themeData = JSON.parse("{\"encrypt\":{},\"author\":{\"name\":\"DogeLake\"},\"logo\":\"/image/logo.png\",\"repo\":\"Tanya7z/DogeLakeDocs\",\"docsDir\":\"src\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"主页\",\"icon\":\"home\",\"link\":\"/\"},{\"text\":\"基础篇\",\"link\":\"/basic/\"},{\"text\":\"指令篇\",\"link\":\"/command/\"},{\"text\":\"世界篇\",\"link\":\"/world/\"},{\"text\":\"物品篇\",\"link\":\"/item/\"},{\"text\":\"实体篇\",\"link\":\"/entity/\"},{\"text\":\"模组篇\",\"link\":\"/addon/\"},{\"text\":\"插件篇\",\"link\":\"/plugin/\"},{\"text\":\"蓝图\",\"link\":\"/blueprint/\",\"icon\":\"list\"},{\"text\":\"官网\",\"icon\":\"fab fa-internet-explorer\",\"link\":\"https://www.dogelake.fun\"}],\"sidebar\":{\"/basic/\":\"structure\",\"/blueprint/\":\"structure\"}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
