// database.data.js
// 在这里维护你的“数据库”条目：只需要改这个文件即可新增/修改/删除数据。
// 字段：type / name / en / score / brief / link
// - type: 类型（例如：叙事书籍 / 社科书籍 / 影视）
// - name: 中文名
// - en: 英文名（可空）
// - score: 分数（数字；也可用字符串，但建议数字）
// - brief: 简评（可空）
// - link: 作品链接（可空；例如豆瓣/Goodreads/IMDb等）

window.DB_ITEMS = window.DB_ITEMS || [
  {
    type: "影视",
    name: "示例条目",
    en: "Sample Entry",
    score: 0,
    brief: "这是一个示例。你可以在 database.data.js 里新增更多对象。",
    link: ""
  }
];
