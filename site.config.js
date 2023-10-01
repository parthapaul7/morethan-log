const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Partha Paul",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Sasta Scientist",
    bio: "I Post about sitty science thories",
    email: "pparthapaul11@gmail.com",
    linkedin: "parthapaul7",
    github: "parthapaul7",
    instagram: "",
  },
  projects: [
    {
      name: `Technecium`,
      href: "partha.vercel.app",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Technecium",
    description: "welcome to technecium infos",
  },

  // CONFIG configration (required)
  link: "https://technecium.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "", // The link to generate OG image, don't end with a slash

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
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
