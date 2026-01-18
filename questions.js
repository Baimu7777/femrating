/* questions.js — generated from "叙事书籍.docx".
   Contains three rating question sets: narrative, socsci, film. */

(function(){
  window.QUESTION_BANK = {
  "narrative": {
    "sectionOrder": [
      "作者/译者/出版社",
      "基础世界观",
      "女性角色刻画",
      "男性角色刻画",
      "其她"
    ],
    "questions": [
      {
        "id": "Q1",
        "section": "作者/译者/出版社",
        "title": "作者性别比",
        "spec": "全女+2，有非女参与-2，全非女-4 *说明：此处及后面所有非女指所有生理性别或心理性别未明确表示为女的角色，包括但不限于男性、跨性别、无性别",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": -2
          },
          {
            "label": "全非女",
            "value": -4
          }
        ]
      },
      {
        "id": "Q2",
        "section": "作者/译者/出版社",
        "title": "译者性别比",
        "spec": "全女+2，有非女参与-2，全非女-4",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": -2
          },
          {
            "label": "全非女",
            "value": -4
          }
        ]
      },
      {
        "id": "Q3",
        "section": "作者/译者/出版社",
        "title": "作者曾发表厌女言论、反对女权言论",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q4",
        "section": "作者/译者/出版社",
        "title": "译者曾发表厌女言论、反对女权言论",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q5",
        "section": "作者/译者/出版社",
        "title": "作者出版过非批判VGBTQ相关内容",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q6",
        "section": "作者/译者/出版社",
        "title": "女作者现实已阍或有性缘关系",
        "spec": "已阍或有男友-2，有女友-1，未知0，单身女性+1",
        "type": "single",
        "options": [
          {
            "label": "已阍或有男友",
            "value": -2
          },
          {
            "label": "有女友",
            "value": -1
          },
          {
            "label": "未知",
            "value": 0
          },
          {
            "label": "单身女性",
            "value": 1
          }
        ]
      },
      {
        "id": "Q7",
        "section": "作者/译者/出版社",
        "title": "出版社曾发表厌女言论、反对女权言论",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q8",
        "section": "作者/译者/出版社",
        "title": "书籍封面以男性为视觉中心(雄性生物、男性人物、男凝照片等)",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q9",
        "section": "作者/译者/出版社",
        "title": "翻译歪曲标题",
        "spec": "是-1，否0 *说明：如将“后悔成为母亲”翻译成“成为母亲的选择”",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q10",
        "section": "基础世界观",
        "title": "单主角性别",
        "spec": "女+4，非女-4",
        "type": "single",
        "options": [
          {
            "label": "女",
            "value": 4
          },
          {
            "label": "非女",
            "value": -4
          }
        ]
      },
      {
        "id": "Q11",
        "section": "基础世界观",
        "title": "若主角有核心团队，团队性别情况",
        "spec": "全女+2，女多于非女0，女、非女相等-1，女少于非女-2，全非女-3",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "女多于非女",
            "value": 0
          },
          {
            "label": "女、非女相等",
            "value": -1
          },
          {
            "label": "女少于非女",
            "value": -2
          },
          {
            "label": "全非女",
            "value": -3
          }
        ]
      },
      {
        "id": "Q12",
        "section": "基础世界观",
        "title": "全体角色女男比",
        "spec": "全女+2，女多于非女+1，女、非女相等0，女少于非女-1，全非女-2",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "女多于非女",
            "value": 1
          },
          {
            "label": "女、非女相等",
            "value": 0
          },
          {
            "label": "女少于非女",
            "value": -1
          },
          {
            "label": "全非女",
            "value": -2
          }
        ]
      },
      {
        "id": "Q13",
        "section": "基础世界观",
        "title": "存在跨性别角色",
        "spec": "主角团-2，背景角色-1，否0",
        "type": "single",
        "options": [
          {
            "label": "主角团",
            "value": -2
          },
          {
            "label": "背景角色",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q14",
        "section": "基础世界观",
        "title": "存在男同角色",
        "spec": "主角团-2，背景角色-1，否0",
        "type": "single",
        "options": [
          {
            "label": "主角团",
            "value": -2
          },
          {
            "label": "背景角色",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q15",
        "section": "基础世界观",
        "title": "存在辱女词、厌女词",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q16",
        "section": "基础世界观",
        "title": "女男存在刻板差异",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q17",
        "section": "基础世界观",
        "title": "主角团母父设定",
        "spec": "有母无父+1，有母有父或无母无父0，无母有父-1 *按人数情况叠加",
        "type": "single",
        "options": [
          {
            "label": "有母无父",
            "value": 1
          },
          {
            "label": "有母有父或无母无父",
            "value": 0
          },
          {
            "label": "无母有父",
            "value": -1
          }
        ]
      },
      {
        "id": "Q18",
        "section": "基础世界观",
        "title": "在非全女世界中，故事是否以宗族为核心、主角（团）是否最终在宗族之中或美化亲缘（家族血脉、虜点亲戚互助）、强调亲缘的重要性",
        "spec": "是-1 ，否、主角脱离宗族 0，明确反亲缘宗族+1",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否、主角脱离宗族",
            "value": 0
          },
          {
            "label": "明确反亲缘宗族",
            "value": 1
          }
        ]
      },
      {
        "id": "Q19",
        "section": "基础世界观",
        "title": "主角团是否含有性缘关系",
        "spec": "（多选叠加计算）含女且无+2，女同-1，女男-1，女单恋男-3，男同-3，不含女且无-3",
        "type": "multi",
        "options": [
          {
            "label": "含女且无",
            "value": 2
          },
          {
            "label": "女同",
            "value": -1
          },
          {
            "label": "女男",
            "value": -1
          },
          {
            "label": "女单恋男",
            "value": -3
          },
          {
            "label": "男同",
            "value": -3
          },
          {
            "label": "不含女且无",
            "value": -3
          }
        ]
      },
      {
        "id": "Q20",
        "section": "基础世界观",
        "title": "存在性缘关系时，性缘叙事占全剧情的比例",
        "spec": "（程度）-3~-1",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      },
      {
        "id": "Q21",
        "section": "基础世界观",
        "title": "含有性缘关系",
        "spec": "（多选）女比男小三岁以上-1，早阍早育-1，女性为未成年且批判性质-1，女性为未成年且非批判性质-5",
        "type": "multi",
        "options": [
          {
            "label": "女比男小三岁以上",
            "value": -1
          },
          {
            "label": "早阍早育",
            "value": -1
          },
          {
            "label": "女性为未成年且批判性质",
            "value": -1
          },
          {
            "label": "女性为未成年且非批判性质",
            "value": -5
          }
        ]
      },
      {
        "id": "Q22",
        "section": "基础世界观",
        "title": "存在纳入式生殖行为；",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q23",
        "section": "基础世界观",
        "title": "对纳入式生殖行为进行细致描写；",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q24",
        "section": "基础世界观",
        "title": "推广或倡导女权思想与行为",
        "spec": "是+2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q25",
        "section": "基础世界观",
        "title": "有性别战争内容",
        "spec": "女性获胜+1，女性没有获胜-1，没有提及0",
        "type": "single",
        "options": [
          {
            "label": "女性获胜",
            "value": 1
          },
          {
            "label": "女性没有获胜",
            "value": -1
          },
          {
            "label": "没有提及",
            "value": 0
          }
        ]
      },
      {
        "id": "Q26",
        "section": "基础世界观",
        "title": "存在宗教相关内容",
        "spec": "批判+1，非批评-1",
        "type": "single",
        "options": [
          {
            "label": "批判",
            "value": 1
          },
          {
            "label": "非批评",
            "value": -1
          }
        ]
      },
      {
        "id": "Q27",
        "section": "基础世界观",
        "title": "基础世界观厌女",
        "spec": "-3~3\n说明：仅当世界观为全女或默认女为第一性时可打正分。",
        "type": "scale",
        "min": -3,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q28",
        "section": "基础世界观",
        "title": "使用女本位词",
        "spec": "是+1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q29",
        "section": "女性角色刻画",
        "title": "女角色参与核心剧情",
        "spec": "是+1，否-1",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 1
          },
          {
            "label": "否",
            "value": -1
          }
        ]
      },
      {
        "id": "Q30",
        "section": "女性角色刻画",
        "title": "女角色剧情篇幅占比多于男角色",
        "spec": "~~~~没有男角色1；是0；否-1",
        "type": "single",
        "options": [
          {
            "label": "~~~~没有男角色",
            "value": 1
          },
          {
            "label": "是",
            "value": 0
          },
          {
            "label": "否",
            "value": -1
          }
        ]
      },
      {
        "id": "Q31",
        "section": "女性角色刻画",
        "title": "存在领导者角色时，性别数量对比",
        "spec": "全女 +2；女多于非女 +1；女、非女相等 0；女少于非女 -1；全非女 -2",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "女多于非女",
            "value": 1
          },
          {
            "label": "女、非女相等",
            "value": 0
          },
          {
            "label": "女少于非女",
            "value": -1
          },
          {
            "label": "全非女",
            "value": -2
          }
        ]
      },
      {
        "id": "Q32",
        "section": "女性角色刻画",
        "title": "女性角色年龄段丰富度",
        "spec": "幼年、少年、成年、中年、老年，各占1分，若仅有一项则为0 （0 ～+4）",
        "type": "single",
        "options": [
          {
            "label": "各占",
            "value": 1
          },
          {
            "label": "若仅有一项则为0 （0 ～",
            "value": 4
          }
        ]
      },
      {
        "id": "Q33",
        "section": "女性角色刻画",
        "title": "女角色形象设置丰富度",
        "spec": "（程度）0~2 *说明：包括体型、发型、肤色、职业等",
        "type": "scale",
        "min": 0,
        "max": 2,
        "step": 1
      },
      {
        "id": "Q34",
        "section": "女性角色刻画",
        "title": "主要女性角色个人能力",
        "spec": "（程度）0~2 *说明：如武力、智慧、敏锐等",
        "type": "scale",
        "min": 0,
        "max": 2,
        "step": 1
      },
      {
        "id": "Q35",
        "section": "女性角色刻画",
        "title": "女女关系多样化，如女性友谊、女性互动、女性对抗（不包括女同）",
        "spec": "（程度）0~3",
        "type": "scale",
        "min": 0,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q36",
        "section": "女性角色刻画",
        "title": "女角色高光时刻多于男角色",
        "spec": "没有男角色2；是0；否-2",
        "type": "single",
        "options": [
          {
            "label": "没有男角色",
            "value": 2
          },
          {
            "label": "是",
            "value": 0
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q37",
        "section": "女性角色刻画",
        "title": "存在女同关系时对其刻画",
        "spec": "（程度）-2~0",
        "type": "scale",
        "min": -2,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q38",
        "section": "女性角色刻画",
        "title": "含有女性传承的情节",
        "spec": "是+2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q39",
        "section": "女性角色刻画",
        "title": "女角色存在男性支持，妹兄、姐弟、师生等",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q40",
        "section": "女性角色刻画",
        "title": "含有驴竞行为",
        "spec": "是-1，否0 说明：*例如除了女主角外的女性形象刻板，以此突出女主角特殊",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q41",
        "section": "女性角色刻画",
        "title": "女性角色设置随意，如女性被去人格化命名：无名、仅用称谓/关系称呼、abb或x小x式命名",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q42",
        "section": "女性角色刻画",
        "title": "含有制度性剥削女性的情节，如闝倡、代孕、同妻、买卖婚姻、强迫婚育等",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q43",
        "section": "女性角色刻画",
        "title": "含有描写女性从外貌中得利、身材焦虑等内容",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q44",
        "section": "女性角色刻画",
        "title": "含有描写性自由、荡妇羞辱的内容",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q45",
        "section": "女性角色刻画",
        "title": "含有女角色软色情、擦边内容",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q46",
        "section": "女性角色刻画",
        "title": "含有虐女情节（包括性犯罪、着重描绘女人受苦惨状）",
        "spec": "-5~-3",
        "type": "scale",
        "min": -5,
        "max": -3,
        "step": 1
      },
      {
        "id": "Q47",
        "section": "女性角色刻画",
        "title": "性别认知障碍，如女扮男、自称哥或对女喊兄弟、buddy、guy等",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q48",
        "section": "女性角色刻画",
        "title": "含有女角色魅男、爱男、利男行为的情节（男包括男性亲属与陌生男性，如生育男性后代、帮扶兄弟、扶贫、有男人分享女角色胜利果实/成果/遗产等）",
        "spec": "（程度）-2~-5",
        "type": "scale",
        "min": -2,
        "max": -5,
        "step": 1
      },
      {
        "id": "Q49",
        "section": "女性角色刻画",
        "title": "含有与男相关的“弱女叙事”，包括但不限于哭丧、悲剧、徒劳等",
        "spec": "（程度）-2~0",
        "type": "scale",
        "min": -2,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q50",
        "section": "女性角色刻画",
        "title": "含有女性反抗/觉醒情节，如拒绝昏育规训、拒绝服弱役、拒绝男性控制、经济自立等",
        "spec": "成功反抗/觉醒为主线+3，有明确成功反抗行为或觉醒观点+2，无0，有反抗但苦楚/雄堕描写占比较大-1，过度渲染苦难且反抗篇幅很少-2，反抗失败-3",
        "type": "single",
        "options": [
          {
            "label": "成功反抗/觉醒为主线",
            "value": 3
          },
          {
            "label": "有明确成功反抗行为或觉醒观点",
            "value": 2
          },
          {
            "label": "无",
            "value": 0
          },
          {
            "label": "有反抗但苦楚/雄堕描写占比较大",
            "value": -1
          },
          {
            "label": "过度渲染苦难且反抗篇幅很少",
            "value": -2
          },
          {
            "label": "反抗失败",
            "value": -3
          }
        ]
      },
      {
        "id": "Q51",
        "section": "女性角色刻画",
        "title": "含有女性争权夺利的情节",
        "spec": "有正面描写+3，无描写0，有负面描写-3",
        "type": "single",
        "options": [
          {
            "label": "有正面描写",
            "value": 3
          },
          {
            "label": "无描写",
            "value": 0
          },
          {
            "label": "有负面描写",
            "value": -3
          }
        ]
      },
      {
        "id": "Q52",
        "section": "女性角色刻画",
        "title": "含有女角色死亡情节",
        "spec": "（多选题）被虐杀-4，被女杀-1，被男杀-2，为女牺牲-1，为男牺牲-2，意外死亡-1，自然死亡0",
        "type": "multi",
        "options": [
          {
            "label": "被虐杀",
            "value": -4
          },
          {
            "label": "被女杀",
            "value": -1
          },
          {
            "label": "被男杀",
            "value": -2
          },
          {
            "label": "为女牺牲",
            "value": -1
          },
          {
            "label": "为男牺牲",
            "value": -2
          },
          {
            "label": "意外死亡",
            "value": -1
          },
          {
            "label": "自然死亡",
            "value": 0
          }
        ]
      },
      {
        "id": "Q53",
        "section": "女性角色刻画",
        "title": "忽视女性困境，如美化伎女处境、美化拐卖、美化强暴等；",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q54",
        "section": "女性角色刻画",
        "title": "女角色有其她选择，却选择堕落",
        "spec": "是-1，否0 *说明：如在有其她选择的情况下进入伎女/被性剥削行业、在明显不具备养育的条件（战争末世等）坚持生育、回到暴力关系等",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q55",
        "section": "女性角色刻画",
        "title": "对女性生理周期（月经、更年期等）有描写",
        "spec": "有非负面描写+2，无描写0，有负面描写-2",
        "type": "single",
        "options": [
          {
            "label": "有非负面描写",
            "value": 2
          },
          {
            "label": "无描写",
            "value": 0
          },
          {
            "label": "有负面描写",
            "value": -2
          }
        ]
      },
      {
        "id": "Q56",
        "section": "女性角色刻画",
        "title": "对女性生理疾病（如乳腺结节、乳腺癌等）有描写",
        "spec": "非负面描写+1，无描写0，负面描写-1",
        "type": "single",
        "options": [
          {
            "label": "非负面描写",
            "value": 1
          },
          {
            "label": "无描写",
            "value": 0
          },
          {
            "label": "负面描写",
            "value": -1
          }
        ]
      },
      {
        "id": "Q57",
        "section": "女性角色刻画",
        "title": "对女性怀孕相关生理行为（生产、堕胎等）清晰呈现代价、风险、痛苦+2",
        "spec": "无描写0，美化、神圣化描写-2",
        "type": "single",
        "options": [
          {
            "label": "无描写",
            "value": 0
          },
          {
            "label": "美化、神圣化描写",
            "value": -2
          }
        ]
      },
      {
        "id": "Q58",
        "section": "男性角色刻画",
        "title": "男性角色参与核心剧情",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q59",
        "section": "男性角色刻画",
        "title": "男性角色年龄段丰富度",
        "spec": "幼年、少年、成年、中年、老年，若仅有一项则为0，两项为-2，每多一项-1，最高-5",
        "type": "single",
        "options": [
          {
            "label": "若仅有一项则为",
            "value": 0
          },
          {
            "label": "两项为",
            "value": -2
          },
          {
            "label": "每多一项",
            "value": -1
          },
          {
            "label": "最高",
            "value": -5
          }
        ]
      },
      {
        "id": "Q60",
        "section": "男性角色刻画",
        "title": "男角色形象设置丰富度",
        "spec": "（程度）-2~0",
        "type": "scale",
        "min": -2,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q61",
        "section": "男性角色刻画",
        "title": "主要男性角色个人能力",
        "spec": "（程度）-2~0 *说明：如武力、智慧、敏锐等",
        "type": "scale",
        "min": -2,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q62",
        "section": "男性角色刻画",
        "title": "男性角色有完整的成长线或高光或立体的塑造",
        "spec": "（程度）-2~0",
        "type": "scale",
        "min": -2,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q63",
        "section": "男性角色刻画",
        "title": "男男关系多样化",
        "spec": "（程度）-3~0",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q64",
        "section": "男性角色刻画",
        "title": "美化男性如母父对比、男性友情、男性深情等",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q65",
        "section": "男性角色刻画",
        "title": "含有男性生殖崇拜",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q66",
        "section": "男性角色刻画",
        "title": "含有父系传承情节，包括随父姓",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q67",
        "section": "男性角色刻画",
        "title": "含有夸大男性苦难的情节",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q68",
        "section": "男性角色刻画",
        "title": "男性角色获得更好待遇、结局等",
        "spec": "（程度）-3~0",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q69",
        "section": "男性角色刻画",
        "title": "男性掠夺女性生育能力或成果，如男性生育或产翁",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q70",
        "section": "男性角色刻画",
        "title": "含有污辱女性的言论或行为",
        "spec": "是且并非用于批判-2，是但用于批判讽刺-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是且并非用于批判",
            "value": -2
          },
          {
            "label": "是但用于批判讽刺",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q71",
        "section": "男性角色刻画",
        "title": "存在男性对女性的猥亵、黄段子",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q72",
        "section": "男性角色刻画",
        "title": "含有男角色死亡情节",
        "spec": "（多选题）被虐杀+2，被女杀+2，被男杀+1，意外死亡+1，自然死亡0",
        "type": "multi",
        "options": [
          {
            "label": "被虐杀",
            "value": 2
          },
          {
            "label": "被女杀",
            "value": 2
          },
          {
            "label": "被男杀",
            "value": 1
          },
          {
            "label": "意外死亡",
            "value": 1
          },
          {
            "label": "自然死亡",
            "value": 0
          }
        ]
      },
      {
        "id": "Q73",
        "section": "其她",
        "title": "文笔",
        "spec": "（程度）-2~2",
        "type": "scale",
        "min": -2,
        "max": 2,
        "step": 1
      },
      {
        "id": "Q74",
        "section": "其她",
        "title": "主观感受",
        "spec": "（程度）-2~2",
        "type": "scale",
        "min": -2,
        "max": 2,
        "step": 1
      },
      {
        "id": "Q75",
        "section": "其她",
        "title": "批判男性，但主要围绕性缘、男儿描写",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q76",
        "section": "其她",
        "title": "对非女（包括男性VGBTQ等退步人）持有擦亮眼态度",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q77",
        "section": "其她",
        "title": "对VGBTQ友好",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q78",
        "section": "其她",
        "title": "鼓吹女凝男自由",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q79",
        "section": "其她",
        "title": "女权男",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q80",
        "section": "其她",
        "title": "污名化女权，如使用人权或女男平等来代替女权",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q81",
        "section": "其她",
        "title": "认为政治倾向/阶级等大于性别",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      }
    ]
  },
  "socsci": {
    "sectionOrder": [
      "作者",
      "作品"
    ],
    "questions": [
      {
        "id": "Q1",
        "section": "作者",
        "title": "作者性别比",
        "spec": "全女+2，有非女参与-2，全非女-4",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": -2
          },
          {
            "label": "全非女",
            "value": -4
          }
        ]
      },
      {
        "id": "Q2",
        "section": "作者",
        "title": "译者性别比",
        "spec": "全女+2，有非女参与-2，全非女-4",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": -2
          },
          {
            "label": "全非女",
            "value": -4
          }
        ]
      },
      {
        "id": "Q3",
        "section": "作者",
        "title": "作者曾发表厌女言论、反对女权言论",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q4",
        "section": "作者",
        "title": "译者曾发表厌女言论、反对女权言论",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q5",
        "section": "作者",
        "title": "作者出版过非批判VGBTQ相关内容",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q6",
        "section": "作者",
        "title": "女作者现实已阍或有性缘关系",
        "spec": "已阍或有男友-2，有女友-1，未知0，单身女性+1",
        "type": "single",
        "options": [
          {
            "label": "已阍或有男友",
            "value": -2
          },
          {
            "label": "有女友",
            "value": -1
          },
          {
            "label": "未知",
            "value": 0
          },
          {
            "label": "单身女性",
            "value": 1
          }
        ]
      },
      {
        "id": "Q7",
        "section": "作者",
        "title": "出版社曾发表厌女言论、反对女权言论",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q8",
        "section": "作者",
        "title": "书籍封面以男性为视觉中心(雄性生物、男性人物、男凝照片等)",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q9",
        "section": "作者",
        "title": "翻译歪曲标题，如将“后悔成为母亲”翻译成“成为母亲的选择”",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q10",
        "section": "作品",
        "title": "使用女本位词",
        "spec": "是+2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q11",
        "section": "作品",
        "title": "存在辱女词、厌女词",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q12",
        "section": "作品",
        "title": "支持跨性别，污名化TERF",
        "spec": "是-2，未提及0，否+2",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": 2
          }
        ]
      },
      {
        "id": "Q13",
        "section": "作品",
        "title": "支持男同",
        "spec": "是-2，未提及0，否+2",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": 2
          }
        ]
      },
      {
        "id": "Q14",
        "section": "作品",
        "title": "鼓吹性自由",
        "spec": "是-2，未提及0，否+2",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": 2
          }
        ]
      },
      {
        "id": "Q15",
        "section": "作品",
        "title": "把纳入式生殖行为默认为性行为",
        "spec": "是-2，未提及0，否+2",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": 2
          }
        ]
      },
      {
        "id": "Q16",
        "section": "作品",
        "title": "列举正向事例时，涉及女男比",
        "spec": "全女+2，女比男多+1，女男相等0，男比女多-1，全男-2",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "女比男多",
            "value": 1
          },
          {
            "label": "女男相等",
            "value": 0
          },
          {
            "label": "男比女多",
            "value": -1
          },
          {
            "label": "全男",
            "value": -2
          }
        ]
      },
      {
        "id": "Q17",
        "section": "作品",
        "title": "列举负面事例时，涉及女男比",
        "spec": "全女-2，女比男多-1，女男相等0，男比女多+1，全男+2",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": -2
          },
          {
            "label": "女比男多",
            "value": -1
          },
          {
            "label": "女男相等",
            "value": 0
          },
          {
            "label": "男比女多",
            "value": 1
          },
          {
            "label": "全男",
            "value": 2
          }
        ]
      },
      {
        "id": "Q18",
        "section": "作品",
        "title": "介绍人体时，涉及女男比",
        "spec": "全女+2，女比男多+1，女男相等0，男比女多+1，全男+2",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "女比男多",
            "value": 1
          },
          {
            "label": "女男相等",
            "value": 0
          },
          {
            "label": "男比女多",
            "value": 1
          },
          {
            "label": "全男",
            "value": 2
          }
        ]
      },
      {
        "id": "Q19",
        "section": "作品",
        "title": "介绍动植物时，代入男性视角，如默认王为男性、贬低雌性夸赞雄性",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q20",
        "section": "作品",
        "title": "若涉及性别题材，性别倾向",
        "spec": "推崇女社+2，推崇母社/女尊+1，女男/男女平等-1，男尊-2",
        "type": "single",
        "options": [
          {
            "label": "推崇女社",
            "value": 2
          },
          {
            "label": "推崇母社/女尊",
            "value": 1
          },
          {
            "label": "女男/男女平等",
            "value": -1
          },
          {
            "label": "男尊",
            "value": -2
          }
        ]
      },
      {
        "id": "Q21",
        "section": "作品",
        "title": "作品整体推进或倡导基进女权思想与行动",
        "spec": "（程度）1~3",
        "type": "scale",
        "min": 1,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q22",
        "section": "作品",
        "title": "引用与凸显女性学者研究（含女性史料、女性口述、女性理论谱系）",
        "spec": "女作者为主+2，女男混合0，男性为主-2",
        "type": "single",
        "options": [
          {
            "label": "女作者为主",
            "value": 2
          },
          {
            "label": "女男混合",
            "value": 0
          },
          {
            "label": "男性为主",
            "value": -2
          }
        ]
      },
      {
        "id": "Q23",
        "section": "作品",
        "title": "过度推崇男性权威理论（例如弗洛伊德），缺少批判",
        "spec": "（程度）-3~-1",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      },
      {
        "id": "Q24",
        "section": "作品",
        "title": "性别高于政治倾向/阶级等",
        "spec": "是+2，未提及0，否-2",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q25",
        "section": "作品",
        "title": "点名父权制/男权结构，而不是用传统/文化/家庭等含糊其辞",
        "spec": "是+2，未提及0，否-2",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q26",
        "section": "作品",
        "title": "污名化女权，如使用人权或女男平等来代替女权",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q27",
        "section": "作品",
        "title": "为了叙事顺滑而美化压迫结构（美化阍育规训、母职惩罚、性别分工）",
        "spec": "是-2，未提及0，否-2",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q28",
        "section": "作品",
        "title": "把女男差异归因于天性/本能/生理注定（如绝对力量）",
        "spec": "是-2，未提及0，否-2",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q29",
        "section": "作品",
        "title": "美化拐卖、强暴、伎女处境、代孕等剥削女性行为",
        "spec": "（程度）-3~-1",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      },
      {
        "id": "Q30",
        "section": "作品",
        "title": "把阍育作为女性归宿，污名化反阍反育",
        "spec": "是-2，未提及0，否-2",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q31",
        "section": "作品",
        "title": "把男性样本/身体当作默认标准（人体、药物、心理、运动等）",
        "spec": "（程度）-3~-1",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      }
    ]
  },
  "film": {
    "sectionOrder": [
      "导演/编剧",
      "作品",
      "女性角色刻画",
      "男性角色刻画",
      "其她"
    ],
    "questions": [
      {
        "id": "Q1",
        "section": "导演/编剧",
        "title": "导演性别比",
        "spec": "全女+2，有非女参与0，全非女-2",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": 0
          },
          {
            "label": "全非女",
            "value": -2
          }
        ]
      },
      {
        "id": "Q2",
        "section": "导演/编剧",
        "title": "编剧性别比",
        "spec": "全女+2，有男参与0，全男-2",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有男参与",
            "value": 0
          },
          {
            "label": "全男",
            "value": -2
          }
        ]
      },
      {
        "id": "Q3",
        "section": "导演/编剧",
        "title": "导演曾发表厌女言论、反对女权言论",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q4",
        "section": "导演/编剧",
        "title": "编剧曾发表厌女言论、反对女权言论",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q5",
        "section": "导演/编剧",
        "title": "演员曾发表厌女言论、反对女权言论",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q6",
        "section": "导演/编剧",
        "title": "导演、编剧、演员曾陷入性骚扰、家暴等丑闻",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q7",
        "section": "导演/编剧",
        "title": "导演或编剧曾经作品中有非批判性VGBTQ内容；",
        "spec": "-1*（人数）",
        "type": "scale",
        "min": -10,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q8",
        "section": "作品",
        "title": "单主角叙事",
        "spec": "女+4，非女-4",
        "type": "single",
        "options": [
          {
            "label": "女",
            "value": 4
          },
          {
            "label": "非女",
            "value": -4
          }
        ]
      },
      {
        "id": "Q9",
        "section": "作品",
        "title": "多主角叙事",
        "spec": "全女+2；女多于非女 0；女、非女相等 -1；非女比女多 -2；全非女 -3",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "女多于非女",
            "value": 0
          },
          {
            "label": "女、非女相等",
            "value": -1
          },
          {
            "label": "非女比女多",
            "value": -2
          },
          {
            "label": "全非女",
            "value": -3
          }
        ]
      },
      {
        "id": "Q10",
        "section": "作品",
        "title": "有个人剧情的配角女男比例",
        "spec": "全女+2；女多于非女 0；女、非女相等 -1；非女比女多 -2；全非女 -3",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "女多于非女",
            "value": 0
          },
          {
            "label": "女、非女相等",
            "value": -1
          },
          {
            "label": "非女比女多",
            "value": -2
          },
          {
            "label": "全非女",
            "value": -3
          }
        ]
      },
      {
        "id": "Q11",
        "section": "作品",
        "title": "存在跨性别角色",
        "spec": "主角团-2，背景角色-1，否0",
        "type": "single",
        "options": [
          {
            "label": "主角团",
            "value": -2
          },
          {
            "label": "背景角色",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q12",
        "section": "作品",
        "title": "存在男同角色",
        "spec": "主角团-2，背景角色-1，否0",
        "type": "single",
        "options": [
          {
            "label": "主角团",
            "value": -2
          },
          {
            "label": "背景角色",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q13",
        "section": "作品",
        "title": "存在辱女词、厌女词",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q14",
        "section": "作品",
        "title": "女男存在刻板差异",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q15",
        "section": "作品",
        "title": "主角团母父设定",
        "spec": "有母无父+1，有母有父或无母无父0，无母有父-1 *按人数情况叠加",
        "type": "single",
        "options": [
          {
            "label": "有母无父",
            "value": 1
          },
          {
            "label": "有母有父或无母无父",
            "value": 0
          },
          {
            "label": "无母有父",
            "value": -1
          }
        ]
      },
      {
        "id": "Q16",
        "section": "作品",
        "title": "主角团是否含有性缘关系",
        "spec": "（多选叠加计算）含女且无+2，女同-1，女男-1，女单恋男-3，男同-3，不含女且无-3",
        "type": "multi",
        "options": [
          {
            "label": "含女且无",
            "value": 2
          },
          {
            "label": "女同",
            "value": -1
          },
          {
            "label": "女男",
            "value": -1
          },
          {
            "label": "女单恋男",
            "value": -3
          },
          {
            "label": "男同",
            "value": -3
          },
          {
            "label": "不含女且无",
            "value": -3
          }
        ]
      },
      {
        "id": "Q17",
        "section": "作品",
        "title": "存在性缘关系时，性缘叙事占全剧情的比例",
        "spec": "（程度）-3~-1",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      },
      {
        "id": "Q18",
        "section": "作品",
        "title": "含有性缘关系",
        "spec": "（多选）女比男小三岁以上-1，早阍早育-1，女性为未成年且批判性质-1，女性为未成年且非批判性质-5",
        "type": "multi",
        "options": [
          {
            "label": "女比男小三岁以上",
            "value": -1
          },
          {
            "label": "早阍早育",
            "value": -1
          },
          {
            "label": "女性为未成年且批判性质",
            "value": -1
          },
          {
            "label": "女性为未成年且非批判性质",
            "value": -5
          }
        ]
      },
      {
        "id": "Q19",
        "section": "作品",
        "title": "存在纳入式生殖行为；是-1，否0",
        "spec": "",
        "type": "single",
        "options": []
      },
      {
        "id": "Q20",
        "section": "作品",
        "title": "叙事推进者/关键视角（旁白、配乐、镜头凝视、叙事重心）性别",
        "spec": "全女+2；女多于男 +1；女男相等 0；男比女多 -1；全男 -2",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "女多于男",
            "value": 1
          },
          {
            "label": "女男相等",
            "value": 0
          },
          {
            "label": "男比女多",
            "value": -1
          },
          {
            "label": "全男",
            "value": -2
          }
        ]
      },
      {
        "id": "Q21",
        "section": "作品",
        "title": "配乐内容含有性缘关系",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q22",
        "section": "作品",
        "title": "在非全女世界中，故事是否以宗族为核心、主角（团）是否最终在宗族之中或美化亲缘（家族血脉、虜点亲戚互助）、强调亲缘的重要性",
        "spec": "是-1 ，否、主角脱离宗族 0，明确反亲缘宗族+1",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否、主角脱离宗族",
            "value": 0
          },
          {
            "label": "明确反亲缘宗族",
            "value": 1
          }
        ]
      },
      {
        "id": "Q23",
        "section": "作品",
        "title": "推广或倡导女权思想与行为",
        "spec": "是+2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q24",
        "section": "作品",
        "title": "存在宗教相关内容",
        "spec": "批判+1，非批评-1",
        "type": "single",
        "options": [
          {
            "label": "批判",
            "value": 1
          },
          {
            "label": "非批评",
            "value": -1
          }
        ]
      },
      {
        "id": "Q25",
        "section": "作品",
        "title": "基础世界观厌女",
        "spec": "-3~3\n说明：仅当世界观为全女或默认女为第一性时可打正分。",
        "type": "scale",
        "min": -3,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q26",
        "section": "女性角色刻画",
        "title": "女角色参与核心剧情",
        "spec": "是1，否-1",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 1
          },
          {
            "label": "否",
            "value": -1
          }
        ]
      },
      {
        "id": "Q27",
        "section": "女性角色刻画",
        "title": "女角色剧情篇幅占比多于男角色",
        "spec": "~~~~没有男角色1；是0；否-1",
        "type": "single",
        "options": [
          {
            "label": "~~~~没有男角色",
            "value": 1
          },
          {
            "label": "是",
            "value": 0
          },
          {
            "label": "否",
            "value": -1
          }
        ]
      },
      {
        "id": "Q28",
        "section": "女性角色刻画",
        "title": "存在领导者角色时，性别数量对比",
        "spec": "全女+2；女比男多1；女男相等0；男比女多-1；全男-2",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "女比男多",
            "value": 1
          },
          {
            "label": "女男相等",
            "value": 0
          },
          {
            "label": "男比女多",
            "value": -1
          },
          {
            "label": "全男",
            "value": -2
          }
        ]
      },
      {
        "id": "Q29",
        "section": "女性角色刻画",
        "title": "女性角色年龄段丰富度",
        "spec": "幼年、少年、成年、中年、老年，各占1分，若仅有一项则为0 （0 ～+4）",
        "type": "single",
        "options": [
          {
            "label": "各占",
            "value": 1
          },
          {
            "label": "若仅有一项则为0 （0 ～",
            "value": 4
          }
        ]
      },
      {
        "id": "Q30",
        "section": "女性角色刻画",
        "title": "女角色形象设置丰富度",
        "spec": "（程度）0~2 *说明：包括体型、发型、肤色、职业等",
        "type": "scale",
        "min": 0,
        "max": 2,
        "step": 1
      },
      {
        "id": "Q31",
        "section": "女性角色刻画",
        "title": "主要女性角色个人能力",
        "spec": "（程度）0~2 *说明：如武力、智慧、敏锐等",
        "type": "scale",
        "min": 0,
        "max": 2,
        "step": 1
      },
      {
        "id": "Q32",
        "section": "女性角色刻画",
        "title": "女角色外形设定，包括但不限于：服弱役、性化、幼化等",
        "spec": "（程度）-2~+2",
        "type": "scale",
        "min": -2,
        "max": 2,
        "step": 1
      },
      {
        "id": "Q33",
        "section": "女性角色刻画",
        "title": "女女关系多样化，如女性友谊、女性互动、女性对抗（不包括女同）",
        "spec": "（程度）0~+3",
        "type": "scale",
        "min": 0,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q34",
        "section": "女性角色刻画",
        "title": "女角色高光时刻多于男角色",
        "spec": "没有男角色2；是0；否-2",
        "type": "single",
        "options": [
          {
            "label": "没有男角色",
            "value": 2
          },
          {
            "label": "是",
            "value": 0
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q35",
        "section": "女性角色刻画",
        "title": "主要女角色拥有自己的事业",
        "spec": "是+2，无0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "无",
            "value": 0
          }
        ]
      },
      {
        "id": "Q36",
        "section": "女性角色刻画",
        "title": "存在女同关系时对其刻画",
        "spec": "（程度）-2~0",
        "type": "scale",
        "min": -2,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q37",
        "section": "女性角色刻画",
        "title": "含有女性传承的情节",
        "spec": "是+2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q38",
        "section": "女性角色刻画",
        "title": "含有女角色母亲描写",
        "spec": "较正面（尊重主角独立人格）+1，少量文字或过场描述0，母内容少或有矮化弱化倾向/着重于描写父女情-1",
        "type": "single",
        "options": [
          {
            "label": "较正面（尊重主角独立人格）",
            "value": 1
          },
          {
            "label": "少量文字或过场描述",
            "value": 0
          },
          {
            "label": "母内容少或有矮化弱化倾向/着重于描写父女情",
            "value": -1
          }
        ]
      },
      {
        "id": "Q39",
        "section": "女性角色刻画",
        "title": "女角色存在男性支持，妹兄、姐弟、师生等",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q40",
        "section": "女性角色刻画",
        "title": "含有女角色寻缅怀父、替父报仇的情节",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q41",
        "section": "女性角色刻画",
        "title": "含有驴竞行为",
        "spec": "是-1，否0 说明：*例如除了女主角外的女性形象刻板，以此突出女主角特殊",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q42",
        "section": "女性角色刻画",
        "title": "含有制度性剥削女性的情节，如闝倡、代孕、同妻、买卖婚姻、强迫婚育等",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q43",
        "section": "女性角色刻画",
        "title": "含有描写女性从外貌中得利、身材焦虑等内容",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q44",
        "section": "女性角色刻画",
        "title": "含有描写性自由/荡妇羞辱的内容",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q45",
        "section": "女性角色刻画",
        "title": "含有女角色软色情、擦边内容",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q46",
        "section": "女性角色刻画",
        "title": "含有虐女情节（包括性犯罪、着重描绘女人受苦惨状）",
        "spec": "-5~-3",
        "type": "scale",
        "min": -5,
        "max": -3,
        "step": 1
      },
      {
        "id": "Q47",
        "section": "女性角色刻画",
        "title": "性别认知障碍，如女扮男、自称哥或对女喊兄弟、buddy、guy等",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q48",
        "section": "女性角色刻画",
        "title": "含有女角色魅男、爱男、利男行为的情节（男包括男性亲属与陌生男性，如生育男性后代、帮扶兄弟、扶贫、有男人分享女角色胜利果实/成果/遗产等）",
        "spec": "（程度）-2~-5",
        "type": "scale",
        "min": -2,
        "max": -5,
        "step": 1
      },
      {
        "id": "Q49",
        "section": "女性角色刻画",
        "title": "含有与男相关的“弱女叙事”，包括但不限于哭丧、悲剧、徒劳等",
        "spec": "（程度）-2~0",
        "type": "scale",
        "min": -2,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q50",
        "section": "女性角色刻画",
        "title": "含有女性反抗/觉醒情节，如拒绝昏育规训、拒绝服弱役、拒绝男性控制、经济自立等",
        "spec": "成功反抗/觉醒为主线+3，有明确成功反抗行为或觉醒观点+2，无0，有反抗但苦楚/雄堕描写占比较大-1，过度渲染苦难且反抗篇幅很少-2，反抗失败-3",
        "type": "single",
        "options": [
          {
            "label": "成功反抗/觉醒为主线",
            "value": 3
          },
          {
            "label": "有明确成功反抗行为或觉醒观点",
            "value": 2
          },
          {
            "label": "无",
            "value": 0
          },
          {
            "label": "有反抗但苦楚/雄堕描写占比较大",
            "value": -1
          },
          {
            "label": "过度渲染苦难且反抗篇幅很少",
            "value": -2
          },
          {
            "label": "反抗失败",
            "value": -3
          }
        ]
      },
      {
        "id": "Q51",
        "section": "女性角色刻画",
        "title": "含有女性争权夺利的情节",
        "spec": "有正面描写+3，无描写0，有负面描写-3",
        "type": "single",
        "options": [
          {
            "label": "有正面描写",
            "value": 3
          },
          {
            "label": "无描写",
            "value": 0
          },
          {
            "label": "有负面描写",
            "value": -3
          }
        ]
      },
      {
        "id": "Q52",
        "section": "女性角色刻画",
        "title": "女主角无民族、国家、地域荣誉感",
        "spec": "是+2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q53",
        "section": "女性角色刻画",
        "title": "含有女角色死亡情节",
        "spec": "（多选题）被虐杀-4，被女杀-1，被男杀-2，为女牺牲-1，为男牺牲-2，意外死亡-1，自然死亡0",
        "type": "multi",
        "options": [
          {
            "label": "被虐杀",
            "value": -4
          },
          {
            "label": "被女杀",
            "value": -1
          },
          {
            "label": "被男杀",
            "value": -2
          },
          {
            "label": "为女牺牲",
            "value": -1
          },
          {
            "label": "为男牺牲",
            "value": -2
          },
          {
            "label": "意外死亡",
            "value": -1
          },
          {
            "label": "自然死亡",
            "value": 0
          }
        ]
      },
      {
        "id": "Q54",
        "section": "女性角色刻画",
        "title": "忽视女性困境，如美化伎女处境、美化拐卖、美化强暴等；",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q55",
        "section": "女性角色刻画",
        "title": "女角色有其她选择，却选择堕落",
        "spec": "是-1，否0 *说明：如在有其她选择的情况下进入伎女/被性剥削行业、在明显不具备养育的条件（战争末世等）坚持生育、回到暴力关系等",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q56",
        "section": "女性角色刻画",
        "title": "对女性生理周期（月经、更年期等）有描写",
        "spec": "有非负面描写+1，无描写0，有负面描写-1",
        "type": "single",
        "options": [
          {
            "label": "有非负面描写",
            "value": 1
          },
          {
            "label": "无描写",
            "value": 0
          },
          {
            "label": "有负面描写",
            "value": -1
          }
        ]
      },
      {
        "id": "Q57",
        "section": "女性角色刻画",
        "title": "对女性生理疾病（如乳腺结节、乳腺癌等）有描写",
        "spec": "非负面描写+1，无描写0，负面描写-1",
        "type": "single",
        "options": [
          {
            "label": "非负面描写",
            "value": 1
          },
          {
            "label": "无描写",
            "value": 0
          },
          {
            "label": "负面描写",
            "value": -1
          }
        ]
      },
      {
        "id": "Q58",
        "section": "女性角色刻画",
        "title": "对女性怀孕相关生理行为（生产、堕胎等）清晰呈现代价、风险、痛苦+1",
        "spec": "无描写0，美化、神圣化描写-1",
        "type": "single",
        "options": [
          {
            "label": "无描写",
            "value": 0
          },
          {
            "label": "美化、神圣化描写",
            "value": -1
          }
        ]
      },
      {
        "id": "Q59",
        "section": "男性角色刻画",
        "title": "男角色参与核心剧情",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q60",
        "section": "男性角色刻画",
        "title": "男性角色年龄段丰富度",
        "spec": "幼年、少年、成年、中年、老年，若仅有一项则为0，两项为-2，每多一项-1，最高-5",
        "type": "single",
        "options": [
          {
            "label": "若仅有一项则为",
            "value": 0
          },
          {
            "label": "两项为",
            "value": -2
          },
          {
            "label": "每多一项",
            "value": -1
          },
          {
            "label": "最高",
            "value": -5
          }
        ]
      },
      {
        "id": "Q61",
        "section": "男性角色刻画",
        "title": "男角色形象设置丰富度",
        "spec": "（程度）-2~0",
        "type": "scale",
        "min": -2,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q62",
        "section": "男性角色刻画",
        "title": "主要男性角色个人能力",
        "spec": "（程度）-2~0 *说明：如武力、智慧、敏锐等",
        "type": "scale",
        "min": -2,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q63",
        "section": "男性角色刻画",
        "title": "男性角色有完整的成长线或高光或立体的塑造",
        "spec": "（程度）-2~0",
        "type": "scale",
        "min": -2,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q64",
        "section": "男性角色刻画",
        "title": "男男关系多样化",
        "spec": "（程度）-3~0",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q65",
        "section": "男性角色刻画",
        "title": "美化男性如母父对比、男性友情、男性深情等",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q66",
        "section": "男性角色刻画",
        "title": "含有男性生殖崇拜",
        "spec": "是-5，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -5
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q67",
        "section": "男性角色刻画",
        "title": "含有父系传承的情节",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q68",
        "section": "男性角色刻画",
        "title": "含有夸大男性苦难的情节",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q69",
        "section": "男性角色刻画",
        "title": "男角色获得比女角色更好待遇、结局等",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q70",
        "section": "男性角色刻画",
        "title": "男性掠夺女性生育能力或成果，如男性生育或产翁",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q71",
        "section": "男性角色刻画",
        "title": "含有污辱女性的言论或行为",
        "spec": "是且非用于批判-5；是但用于批判-1；否0",
        "type": "single",
        "options": [
          {
            "label": "是且非用于批判",
            "value": -5
          },
          {
            "label": "是但用于批判",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q72",
        "section": "男性角色刻画",
        "title": "存在男性对女性的猥亵、黄段子",
        "spec": "是-5，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -5
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q73",
        "section": "男性角色刻画",
        "title": "含有男角色死亡情节",
        "spec": "（多选题）被虐杀+2，被女杀+2，被男杀+1，意外死亡+1，自然死亡0",
        "type": "multi",
        "options": [
          {
            "label": "被虐杀",
            "value": 2
          },
          {
            "label": "被女杀",
            "value": 2
          },
          {
            "label": "被男杀",
            "value": 1
          },
          {
            "label": "意外死亡",
            "value": 1
          },
          {
            "label": "自然死亡",
            "value": 0
          }
        ]
      },
      {
        "id": "Q74",
        "section": "其她",
        "title": "镜头语言：",
        "spec": "（多选）男凝镜头描画女性-2，镜头对准女性受害者-2，交配展示镜头-2，无意义展示天残器官-2，美化虐女镜头-2，其她不适的厌女镜头-2（可以自行补充）；",
        "type": "multi",
        "options": [
          {
            "label": "男凝镜头描画女性-2，镜头对准女性受害者-2，交配展示镜头-2，无意义展示天残器官-2，美化虐女镜头-2，其她不适的厌女镜头",
            "value": -2
          }
        ]
      },
      {
        "id": "Q75",
        "section": "其她",
        "title": "主观感受",
        "spec": "（程度）-2~2",
        "type": "scale",
        "min": -2,
        "max": 2,
        "step": 1
      },
      {
        "id": "Q76",
        "section": "其她",
        "title": "批判男性，但主要围绕性缘、男儿描写",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q77",
        "section": "其她",
        "title": "对非女（包括男性VGBTQ等退步人）持有擦亮眼态度",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q78",
        "section": "其她",
        "title": "对VGBTQ友好",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q79",
        "section": "其她",
        "title": "鼓吹女凝男自由",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q80",
        "section": "其她",
        "title": "女权男",
        "spec": "是-1，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q81",
        "section": "其她",
        "title": "污名化女权，如使用人权或女男平等来代替女权",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q82",
        "section": "其她",
        "title": "认为政治倾向/阶级等大于性别",
        "spec": "是-2，否0",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      }
    ]
  }
};

  // Legacy fallbacks
  window.QUESTIONS = (window.QUESTION_BANK.narrative||{}).questions || [];
  window.SECTION_ORDER = (window.QUESTION_BANK.narrative||{}).sectionOrder || [];
})();
