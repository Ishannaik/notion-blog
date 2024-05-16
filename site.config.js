const CONFIG = {
  // profile setting (required)
  profile: {
    name: "ishannaik",
    image: "/vagabond.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Full Stack Developer",
    bio: "I develop everything using node.",
    email: "ishannaik7@gmail.com",
    linkedin: "ishannaik7",
    github: "ishannaik",
    instagram: "ishannaik7",
  },
projects: [
    {
        name: "Carrd",
        href: "https://ishannaik.carrd.co/"
    },
    {
        name: "Cloakbin",
        href: "https://cloakbin.com"
    },
    {
        name: "Brainwave",
        href: "https://brainwaveaiapp.vercel.app/"
    },
    {
        name: "Linktree",
        href: "https://linktr.ee/ishannaik"
    },
    {
        name: "AI Intelligent Camera",
        href: "https://github.com/Ishannaik/AI-Intelligent-Camera"
    },
    {
        name: "PDF To Audiobook Converter",
        href: "https://github.com/Ishannaik/PDF-To-Audiobook-converter"
    },
    {
        name: "URL Shortener",
        href: "https://github.com/Ishannaik/UrlShortner"
    },
    {
        name: "Notion Blog",
        href: "https://github.com/Ishannaik/notion-blog"
    },
    {
        name: "Manufacturing Defect Detection",
        href: "https://github.com/Ishannaik/Manufacturing-Defect-Detection"
    },
    
  ],
  // blog setting (required)
  blog: {
    title: "Ishan Naik's Blog",
    description: "welcome to Ishan Naik's Blog!",
    theme:"auto",
  },

  // CONFIG configration (required)
  link: "https://ishan-blog.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 300, // revalidate time for [slug], index
}

module.exports = { CONFIG }
