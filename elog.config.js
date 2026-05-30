const useToken = Boolean(process.env.YUQUE_TOKEN)

module.exports = {
  write: {
    platform: useToken ? 'yuque' : 'yuque-pwd',
    yuque: {
      token: process.env.YUQUE_TOKEN,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: false,
      onlyPublished: true,
    },
    'yuque-pwd': {
      username: process.env.YUQUE_USERNAME,
      password: process.env.YUQUE_PASSWORD,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      linebreak: false,
      onlyPublic: false,
      onlyPublished: true,
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './source/_posts',
      filename: 'title',
      format: 'markdown',
      formatExt: '.md',
    },
  },
  image: {
    enable: true,
    platform: 'local',
    local: {
      outputDir: './source/images',
      prefixKey: '/images',
      pathFollowDoc: false,
    },
  },
}
