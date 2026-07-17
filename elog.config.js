module.exports = {
  write: {
    platform: 'notion',
    notion: {
      token: process.env.NOTION_TOKEN,
      databaseId: process.env.NOTION_DATABASE_ID,
      filter: true, // 只同步 status 属性为「已发布」的文章（等价于原语雀 onlyPublished）
      sorts: false, // 默认按文档创建时间倒序，不影响同步
      catalog: false, // 不按目录分类，所有文章平铺到 _posts（与原语雀配置一致）
      limit: 3, // Notion API 较慢，并发数保持默认；卡住可降到 1
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './source/_posts',
      filename: 'title',
      format: 'markdown',
      frontMatter: {
        // 0.12.0+ 支持。只输出下列字段到 md 的 front-matter，忽略数据库里其他属性
        enable: true,
        include: ['title', 'date', 'updated', 'tags', 'categories', 'cover', 'description'],
      },
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
