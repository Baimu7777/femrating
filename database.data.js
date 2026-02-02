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
    name: "钢铁部队w女兵篇",
    en: "강철부대W",
    score: 4,
    brief: "枪械是女人的浪漫",
    link: "https://www.douban.com/group/topic/474386542/"
  },{
    type: "影视",
    name: "反叛女人",
    en: "Riot Women",
    score: -39,
    brief: "打着反抗旗号的全女乐队却虐女从开头到结尾",
    link: "https://www.douban.com/group/topic/474410568/"
  },{
    type: "影视",
    name: "绝望写手",
    en: "Hacks",
    score: -52,
    brief: "别一看到双女主就夸女性友好行吗？ ",
    link: "https://www.douban.com/group/topic/474413327/"
  }
];
