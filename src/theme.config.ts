export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "小卡",
  /** your name */
  author: "xiaoka",
  /** website description */
  desc: "Rediscory the beauty of typography",
  /** your deployed domain */
  website: "https://xiaoka.online",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/xiaokaRepo",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "wechat",
      href: "https://r2.6490958.xyz/%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.JPG",
    }
  ],
  /** your header info */
  header: {
    wechat: "@xiaoka",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "小卡", path: "xiao-ka" },
  ],
  /** your comment provider */
  comments: {
    // disqus: {
    //   shortname: "typography-astro",
    // },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  }
}

