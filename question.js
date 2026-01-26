/* question.js — generated from 打分细则.md */
(function(){
    const QUESTION_SETS = {};
    QUESTION_SETS["narrative"] = {
    "SECTION_ORDER": [
      "创作者及传播环节",
      "作品世界观",
      "女性角色塑造",
      "男性角色塑造",
      "其她"
    ],
    "QUESTIONS": [
      {
        "id": "Q001",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "作者性别比",
        "note": "*说明：此处及后面所有非女指所有生理性别或心理性别未明确表示为女的角色，包括但不限于男性、跨性别、无性别",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": -4
          },
          {
            "label": "全非女",
            "value": -8
          }
        ]
      },
      {
        "id": "Q002",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "译者性别比",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": -4
          },
          {
            "label": "全非女",
            "value": -8
          }
        ]
      },
      {
        "id": "Q003",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "作者、译者曾发表厌女言论、反对女权言论",
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
        ],
        "countable": true
      },
      {
        "id": "Q004",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "作者出版过非批判VGBTQ相关内容",
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
        "id": "Q005",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "女作者现实已阍或有性缘关系",
        "type": "single",
        "options": [
          {
            "label": "单身女性",
            "value": 1
          },
          {
            "label": "未知",
            "value": 0
          },
          {
            "label": "有女友",
            "value": -1
          },
          {
            "label": "已阍或有男友",
            "value": -2
          }
        ]
      },
      {
        "id": "Q006",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "出版社有厌女前科",
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
        "id": "Q007",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "翻译歪曲标题",
        "note": "*说明：如将“后悔成为母亲”翻译成“成为母亲的选择”",
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
        "id": "Q008",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "封面、内插以男性为视觉中心(雄性生物、男性人物、男凝照片等)",
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
        "id": "Q009",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "单主角性别",
        "type": "single",
        "options": [
          {
            "label": "女",
            "value": 2
          },
          {
            "label": "非女",
            "value": -4
          }
        ]
      },
      {
        "id": "Q010",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "若主角有核心团队，团队性别比",
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
            "value": -3
          },
          {
            "label": "全非女",
            "value": -4
          }
        ]
      },
      {
        "id": "Q011",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "全体角色性别比",
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
        "id": "Q012",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "存在酷儿角色（多选）",
        "type": "multi",
        "options": [
          {
            "label": "男同",
            "value": -1
          },
          {
            "label": "跨性别",
            "value": -1
          },
          {
            "label": "其余酷儿情况",
            "value": -1
          },
          {
            "label": "无",
            "value": 0
          }
        ]
      },
      {
        "id": "Q013",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "女男存在刻板差异",
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
        "id": "Q014",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "在非全女世界中，强调宗族亲缘的重要性",
        "note": "*说明：以宗族为核心、主角（团）最终在宗族之中或美化亲缘（家族血脉、虜点亲戚互助）",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          },
          {
            "label": "脱离、反对亲缘宗族",
            "value": 1
          }
        ]
      },
      {
        "id": "Q015",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "存在宗教相关内容",
        "type": "single",
        "options": [
          {
            "label": "批判",
            "value": 1
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "非批判",
            "value": -1
          }
        ]
      },
      {
        "id": "Q016",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "支持VGBTQ",
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
        "id": "Q017",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "对非女（包括男性、VGBTQ等）持有擦亮眼态度",
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
        "id": "Q018",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "认同政治倾向/阶级等大于性别",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          },
          {
            "label": "批判",
            "value": 2
          }
        ]
      },
      {
        "id": "Q019",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "有性别战争内容",
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
        "id": "Q020",
        "section": "作品世界观",
        "bucket": "S5",
        "title": "推广或倡导女权思想与行为",
        "type": "single",
        "options": [
          {
            "label": "倡导",
            "value": 2
          },
          {
            "label": "提及但不深入",
            "value": 1
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "反对或污名化",
            "value": -2
          }
        ]
      },
      {
        "id": "Q021",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "使用女本位词",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "否",
            "value": 0
          },
          {
            "label": "使用辱女词",
            "value": -2
          }
        ]
      },
      {
        "id": "Q022",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "基础世界观厌女",
        "note": "*说明：仅当世界观为全女或默认女为第一性时可打正分",
        "type": "scale",
        "min": -3,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q023",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女性角色年龄段丰富度",
        "type": "single",
        "options": [
          {
            "label": "若仅有一项则为",
            "value": 0
          },
          {
            "label": "两项为",
            "value": 2
          },
          {
            "label": "每多一项",
            "value": 1
          },
          {
            "label": "最高",
            "value": 5
          }
        ]
      },
      {
        "id": "Q024",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女角色形象设置丰富度",
        "note": "*说明：包括体型、发型、肤色、职业等",
        "type": "scale",
        "min": 0,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q025",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "主要女性角色个人能力",
        "note": "*说明：如武力、智慧、敏锐等",
        "type": "scale",
        "min": 0,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q026",
        "section": "女性角色塑造",
        "bucket": "S1",
        "title": "女角色参与核心剧情",
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
        "id": "Q027",
        "section": "女性角色塑造",
        "bucket": "S1",
        "title": "女角色剧情篇幅占比多于男角色",
        "type": "single",
        "options": [
          {
            "label": "没有男角色",
            "value": 2
          },
          {
            "label": "是",
            "value": 1
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q028",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女角色高光时刻多于男角色",
        "type": "single",
        "options": [
          {
            "label": "没有男角色",
            "value": 2
          },
          {
            "label": "是",
            "value": 1
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q029",
        "section": "女性角色塑造",
        "bucket": "S5",
        "title": "女女关系多样化，如女性友谊、女性互动、女性对抗（不包括女同）",
        "type": "scale",
        "min": 0,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q030",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "主角团母父设定",
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
        ],
        "countable": true
      },
      {
        "id": "Q031",
        "section": "女性角色塑造",
        "bucket": "S5",
        "title": "含有女性传承的情节",
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
        "id": "Q032",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有女性争权夺利的情节",
        "type": "single",
        "options": [
          {
            "label": "有正面描写",
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
        "id": "Q033",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "存在领导者角色时，性别比",
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
        "id": "Q034",
        "section": "女性角色塑造",
        "bucket": "S5",
        "title": "含有女性反抗/觉醒情节",
        "note": "*说明：如拒绝阍育规训、拒绝服弱役、拒绝男性控制、经济自立等。若仅哭丧没有反抗，按失败算。",
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
        "id": "Q035",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女角色存在男性支持，妹兄、姐弟、师生等",
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
        "id": "Q036",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有女角色魅男、爱男、利男行为的情节",
        "note": "*说明：男包括男性亲属与陌生男性，如生育男性后代、帮扶兄弟、缅怀男性亲属、替男性亲属报仇、扶贫、有男人分享女角色胜利果实/成果/遗产等",
        "type": "scale",
        "min": -5,
        "max": -2,
        "step": 1
      },
      {
        "id": "Q037",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "主角团是否含有性缘关系（多选）",
        "type": "multi",
        "options": [
          {
            "label": "含女且无",
            "value": 3
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
        "id": "Q038",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "含有性缘关系（多选）",
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
          },
          {
            "label": "无",
            "value": 0
          }
        ]
      },
      {
        "id": "Q039",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "存在性缘关系时，性缘叙事占全剧情的比例",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      },
      {
        "id": "Q040",
        "section": "女性角色塑造",
        "bucket": "S5",
        "title": "存在女同关系时对其刻画",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      },
      {
        "id": "Q041",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "存在纳入式生殖行为",
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
        "id": "Q042",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "对纳入式生殖行为进行细致描写",
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
        "id": "Q043",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "对女性生理周期（月经、更年期等）有描写",
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
        "id": "Q044",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "对女性生理疾病（乳腺结节、乳腺癌等）有描写",
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
        "id": "Q045",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "对女性怀孕相关生理行为（生产、堕胎等）有描写",
        "type": "single",
        "options": [
          {
            "label": "清晰呈现代价、风险、痛苦+2无描写",
            "value": 0
          },
          {
            "label": "美化、神圣化描写",
            "value": -2
          }
        ]
      },
      {
        "id": "Q046",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女性角色符号化",
        "note": "*说明：例如冰箱里的女人、女性被去人格化命名：无名、仅用称谓/关系称呼、abb或x小x式命名",
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
        "id": "Q047",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有驴竞行为",
        "note": "*说明：例如除了女主角外的女性形象刻板，以此突出女主角特殊",
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
        "id": "Q048",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有虐女情节，包括性犯罪、着重描绘女人受苦惨状",
        "type": "scale",
        "min": -5,
        "max": -3,
        "step": 1
      },
      {
        "id": "Q049",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有女角色死亡情节（多选）",
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
        "id": "Q050",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "忽视女性困境，如美化伎女处境、美化拐卖、美化强暴等",
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
        "id": "Q051",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "把阍育作为女性归宿，污名化反阍反育",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": 1
          }
        ]
      },
      {
        "id": "Q052",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有女性外貌规训与身体商品化呈现（多选）",
        "type": "multi",
        "options": [
          {
            "label": "软色情",
            "value": -1
          },
          {
            "label": "擦边内容",
            "value": -1
          },
          {
            "label": "从外貌得利",
            "value": -1
          },
          {
            "label": "身材焦虑",
            "value": -1
          },
          {
            "label": "其她行为",
            "value": -1
          }
        ]
      },
      {
        "id": "Q053",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有制度性剥削女性的情节",
        "note": "*说明：如闝倡、代孕、同妻、买卖阍因、强迫阍育等",
        "type": "single",
        "options": [
          {
            "label": "非批判性情节",
            "value": -2
          },
          {
            "label": "批判性情节",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q054",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女角色有其她选择，却选择堕落",
        "note": "*说明：如在有其她选择的情况下进入伎女/被性剥削行业、在明显不具备养育的条件（战争末世等）坚持生育、回到暴力关系等",
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
        "id": "Q055",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "含有描写性自由、荡妇羞辱的内容（多选）",
        "type": "multi",
        "options": [
          {
            "label": "性自由",
            "value": -2
          },
          {
            "label": "荡妇羞辱",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q056",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "鼓吹女凝男自由",
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
        "id": "Q057",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "性别认知障碍，如女扮男、自称哥或对女喊兄弟、buddy、guy等",
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
        "id": "Q058",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男性角色参与核心剧情",
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
        "id": "Q059",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男性角色年龄段丰富度",
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
        "id": "Q060",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男角色形象设置丰富度",
        "note": "*说明：包括体型、发型、肤色、职业等",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q061",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "主要男性角色个人能力",
        "note": "*说明：如武力、智慧、敏锐等",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q062",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男性角色有完整的成长线或高光或立体的塑造",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q063",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男男关系多样化",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q064",
        "section": "男性角色塑造",
        "bucket": "S2",
        "title": "含有父系传承情节，包括随父姓",
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
        "id": "Q065",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "女权男",
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
        "id": "Q066",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "美化男性如母父对比、男性友情、男性深情等",
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
        "id": "Q067",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "存在男性对女性的污辱言论、猥亵、黄段子",
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
        "id": "Q068",
        "section": "男性角色塑造",
        "bucket": "S2",
        "title": "含有男性生殖崇拜",
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
        "id": "Q069",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "含有夸大男性苦难的情节",
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
        "id": "Q070",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男性掠夺女性生育能力或成果，如男性生育或产翁",
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
        "id": "Q071",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男性角色获得更好待遇、结局等",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q072",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "含有男角色死亡情节（多选）",
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
        "id": "Q073",
        "section": "其她",
        "bucket": "S7",
        "title": "文笔",
        "type": "scale",
        "min": -2,
        "max": 2,
        "step": 1
      },
      {
        "id": "Q074",
        "section": "其她",
        "bucket": "S7",
        "title": "主观感受",
        "type": "scale",
        "min": -2,
        "max": 2,
        "step": 1
      }
    ]
  };
    QUESTION_SETS["socsci"] = {
    "SECTION_ORDER": [
      "创作者及传播环节",
      "作品世界观",
      "女性角色塑造",
      "男性角色塑造",
      "其她"
    ],
    "QUESTIONS": [
      {
        "id": "Q001",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "作者性别比",
        "note": "*说明：此处及后面所有非女指所有生理性别或心理性别未明确表示为女的角色，包括但不限于男性、跨性别、无性别",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": -4
          },
          {
            "label": "全非女",
            "value": -8
          }
        ]
      },
      {
        "id": "Q002",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "译者性别比",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": -4
          },
          {
            "label": "全非女",
            "value": -8
          }
        ]
      },
      {
        "id": "Q003",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "作者、译者曾发表厌女言论、反对女权言论",
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
        ],
        "countable": true
      },
      {
        "id": "Q004",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "作者出版过非批判VGBTQ相关内容",
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
        "id": "Q005",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "女作者现实已阍或有性缘关系",
        "type": "single",
        "options": [
          {
            "label": "单身女性",
            "value": 1
          },
          {
            "label": "未知",
            "value": 0
          },
          {
            "label": "有女友",
            "value": -1
          },
          {
            "label": "已阍或有男友",
            "value": -2
          }
        ]
      },
      {
        "id": "Q006",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "出版社有厌女前科",
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
        "id": "Q007",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "翻译歪曲标题",
        "note": "*说明：如将“后悔成为母亲”翻译成“成为母亲的选择”",
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
        "id": "Q008",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "封面、内插以男性为视觉中心(雄性生物、男性人物、男凝照片等)",
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
        "id": "Q009",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "若涉及性别题材，性别倾向",
        "type": "single",
        "options": [
          {
            "label": "推崇女社",
            "value": 3
          },
          {
            "label": "推崇母社/女尊",
            "value": 1
          },
          {
            "label": "女男/男女平等",
            "value": -2
          },
          {
            "label": "男尊",
            "value": -3
          }
        ]
      },
      {
        "id": "Q010",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "列举正向事例时，涉及性别比",
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
        "id": "Q011",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "列举负面事例时，涉及性别比",
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
        "id": "Q012",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "介绍人体时（医学或心理学等方面），涉及性别比",
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
        "id": "Q013",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "介绍动植物时，代入男性视角",
        "note": "*说明：如默认王为男性、贬低雌性夸赞雄性",
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
        "id": "Q014",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "把男性样本/身体当作默认标准（人体、药物、心理、运动等）",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      },
      {
        "id": "Q015",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "把女男差异归因于天性/本能/生理注定（如绝对力量）",
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
        "id": "Q016",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "在非全女世界中，强调宗族亲缘的重要性",
        "note": "*说明：以宗族为核心、主角（团）最终在宗族之中或美化亲缘（家族血脉、虜点亲戚互助）",
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
        "id": "Q017",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "存在宗教相关内容",
        "type": "single",
        "options": [
          {
            "label": "批判",
            "value": 1
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "非批判",
            "value": -1
          }
        ]
      },
      {
        "id": "Q018",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "支持VGBTQ",
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
        "id": "Q019",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "对非女（包括男性、VGBTQ等）持有擦亮眼态度",
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
        "id": "Q020",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "认同政治倾向/阶级大于性别",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          },
          {
            "label": "批判",
            "value": 2
          }
        ]
      },
      {
        "id": "Q021",
        "section": "作品世界观",
        "bucket": "S5",
        "title": "推广或倡导女权思想与行为",
        "type": "single",
        "options": [
          {
            "label": "倡导",
            "value": 2
          },
          {
            "label": "提及但不深入",
            "value": 1
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "反对或污名化",
            "value": -2
          }
        ]
      },
      {
        "id": "Q022",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "使用女本位词",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "否",
            "value": 0
          },
          {
            "label": "使用辱女词",
            "value": -2
          }
        ]
      },
      {
        "id": "Q023",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "引用与凸显女性学者研究（含女性史料、女性口述、女性理论谱系）",
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
        "id": "Q024",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "对男性权威理论（理论或思想）的态度",
        "type": "scale",
        "min": -2,
        "max": 2,
        "step": 1
      },
      {
        "id": "Q025",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "点名父权制/男权结构，而不是用传统/文化/家庭等含糊其辞",
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
        "id": "Q026",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "批判父系母父制度",
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
            "label": "美化父系亲缘",
            "value": -2
          }
        ]
      },
      {
        "id": "Q027",
        "section": "作品世界观",
        "bucket": "S5",
        "title": "含有女性传承的情节",
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
        "id": "Q028",
        "section": "作品世界观",
        "bucket": "S3",
        "title": "含有女性争权夺利的情节",
        "type": "single",
        "options": [
          {
            "label": "有正面描写",
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
        "id": "Q029",
        "section": "作品世界观",
        "bucket": "S5",
        "title": "含有女性反抗/觉醒情节",
        "note": "*说明：如拒绝阍育规训、拒绝服弱役、拒绝男性控制、经济自立等。若仅哭丧没有反抗，按失败算。",
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
        "id": "Q030",
        "section": "作品世界观",
        "bucket": "S4",
        "title": "对女性生理周期（月经、更年期等）有描写",
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
        "id": "Q031",
        "section": "作品世界观",
        "bucket": "S4",
        "title": "对女性生理疾病（乳腺结节、乳腺癌等）有描写",
        "type": "single",
        "options": [
          {
            "label": "非负面描写",
            "value": 2
          },
          {
            "label": "无描写",
            "value": 0
          },
          {
            "label": "负面描写",
            "value": -2
          }
        ]
      },
      {
        "id": "Q032",
        "section": "作品世界观",
        "bucket": "S4",
        "title": "对女性怀孕相关生理行为（生产、堕胎等）有描写",
        "type": "single",
        "options": [
          {
            "label": "清晰呈现代价、风险、痛苦+1无描写",
            "value": 0
          },
          {
            "label": "美化、神圣化描写",
            "value": -2
          }
        ]
      },
      {
        "id": "Q033",
        "section": "作品世界观",
        "bucket": "S3",
        "title": "女角色存在男性支持，妹兄、姐弟、师生等",
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
        "id": "Q034",
        "section": "作品世界观",
        "bucket": "S4",
        "title": "鼓吹性自由",
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
            "label": "批判",
            "value": 2
          }
        ]
      },
      {
        "id": "Q035",
        "section": "作品世界观",
        "bucket": "S4",
        "title": "把纳入式生殖行为默认为性行为",
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
        "id": "Q036",
        "section": "作品世界观",
        "bucket": "S4",
        "title": "鼓吹女凝男自由",
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
        "id": "Q037",
        "section": "作品世界观",
        "bucket": "S6",
        "title": "女权男",
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
        "id": "Q038",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "忽视女性困境，如美化伎女处境、美化拐卖、美化强暴等",
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
        "id": "Q039",
        "section": "作品世界观",
        "bucket": "S3",
        "title": "美化拐卖、强暴、伎女处境、代孕等剥削女性行为",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      },
      {
        "id": "Q040",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "把阍育作为女性归宿，污名化反阍反育",
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
        "id": "Q041",
        "section": "作品世界观",
        "bucket": "S3",
        "title": "为了叙事顺滑而美化压迫结构（美化阍育规训、母职惩罚、性别分工等）",
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
        "id": "Q042",
        "section": "作品世界观",
        "bucket": "S6",
        "title": "美化男性如母父对比、男性友情、男性深情等",
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
        "id": "Q043",
        "section": "作品世界观",
        "bucket": "S6",
        "title": "存在男性对女性的污辱言论、猥亵、黄段子",
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
        "id": "Q044",
        "section": "作品世界观",
        "bucket": "S6",
        "title": "含有夸大男性苦难的情节",
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
        "id": "Q045",
        "section": "作品世界观",
        "bucket": "S6",
        "title": "男性掠夺女性生育能力或成果，如男性生育或产翁",
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
        "id": "Q046",
        "section": "其她",
        "bucket": "S7",
        "title": "主观感受",
        "type": "scale",
        "min": -2,
        "max": 2,
        "step": 1
      }
    ]
  };
    QUESTION_SETS["film"] = {
    "SECTION_ORDER": [
      "创作者及传播环节",
      "作品世界观",
      "女性角色塑造",
      "男性角色塑造",
      "其她"
    ],
    "QUESTIONS": [
      {
        "id": "Q001",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "导演性别比",
        "note": "*说明：此处及后面所有非女指所有生理性别或心理性别未明确表示为女的角色，包括但不限于男性、跨性别、无性别",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": -4
          },
          {
            "label": "全非女",
            "value": -8
          }
        ]
      },
      {
        "id": "Q002",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "编剧性别比",
        "type": "single",
        "options": [
          {
            "label": "全女",
            "value": 2
          },
          {
            "label": "有非女参与",
            "value": -4
          },
          {
            "label": "全非女",
            "value": -8
          }
        ]
      },
      {
        "id": "Q003",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "导演、编剧、演员曾发表厌女言论、反对女权言论",
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
        ],
        "countable": true
      },
      {
        "id": "Q004",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "导演、编剧、演员曾陷入性骚扰、家暴等丑闻",
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
        ],
        "countable": true
      },
      {
        "id": "Q005",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "导演、编剧或演员曾经作品中有非批判性VGBTQ内容",
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
        ],
        "countable": true
      },
      {
        "id": "Q006",
        "section": "创作者及传播环节",
        "bucket": null,
        "title": "海报设计以男性为视觉中心(雄性生物、男性人物、男凝照片等)",
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
        "id": "Q007",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "单主角叙事",
        "type": "single",
        "options": [
          {
            "label": "女",
            "value": 2
          },
          {
            "label": "非女",
            "value": -4
          }
        ]
      },
      {
        "id": "Q008",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "多主角叙事性别比",
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
            "value": -3
          },
          {
            "label": "全非女",
            "value": -4
          }
        ]
      },
      {
        "id": "Q009",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "有个人剧情的配角性别比",
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
        "id": "Q010",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "叙事推进者/关键视角（旁白、配乐、镜头凝视、叙事重心）性别比",
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
        "id": "Q011",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "存在酷儿角色（多选）",
        "type": "multi",
        "options": [
          {
            "label": "男同",
            "value": -1
          },
          {
            "label": "跨性别",
            "value": -1
          },
          {
            "label": "其余酷儿情况",
            "value": -1
          },
          {
            "label": "无",
            "value": 0
          }
        ]
      },
      {
        "id": "Q012",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "女男存在刻板差异",
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
        "id": "Q013",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "在非全女世界中，强调宗族亲缘的重要性",
        "note": "*说明：以宗族为核心、主角（团）最终在宗族之中或美化亲缘（家族血脉、虜点亲戚互助）",
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
        "id": "Q014",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "存在宗教相关内容",
        "type": "single",
        "options": [
          {
            "label": "批判",
            "value": 1
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "非批评",
            "value": -1
          }
        ]
      },
      {
        "id": "Q015",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "支持VGBTQ",
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
        "id": "Q016",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "对非女（包括男性、VGBTQ等）持有擦亮眼态度",
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
        "id": "Q017",
        "section": "作品世界观",
        "bucket": "S2",
        "title": "认同政治倾向/阶级等大于性别",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -2
          },
          {
            "label": "否",
            "value": 0
          },
          {
            "label": "批判",
            "value": 2
          }
        ]
      },
      {
        "id": "Q018",
        "section": "作品世界观",
        "bucket": "S5",
        "title": "推广或倡导女权思想与行为",
        "type": "single",
        "options": [
          {
            "label": "倡导",
            "value": 2
          },
          {
            "label": "提及但不深入",
            "value": 1
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "反对或污名化",
            "value": -2
          }
        ]
      },
      {
        "id": "Q019",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "使用女本位词",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": 2
          },
          {
            "label": "否",
            "value": 0
          },
          {
            "label": "使用辱女词",
            "value": -2
          }
        ]
      },
      {
        "id": "Q020",
        "section": "作品世界观",
        "bucket": "S1",
        "title": "基础世界观厌女",
        "note": "*说明：仅当世界观为全女或默认女为第一性时可打正分。",
        "type": "scale",
        "min": -3,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q021",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女性角色年龄段丰富度",
        "type": "single",
        "options": [
          {
            "label": "若仅有一项则为",
            "value": 0
          },
          {
            "label": "两项为",
            "value": 2
          },
          {
            "label": "每多一项",
            "value": 1
          },
          {
            "label": "最高",
            "value": 5
          }
        ]
      },
      {
        "id": "Q022",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女角色形象设置丰富度",
        "note": "*说明：包括体型、发型、肤色、职业等",
        "type": "scale",
        "min": 0,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q023",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女角色外形设定",
        "note": "*说明：考虑包括但不限于：服弱役、性化、幼化等",
        "type": "scale",
        "min": -3,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q024",
        "section": "女性角色塑造",
        "bucket": null,
        "title": "主要女性角色个人能力",
        "note": "*说明：如武力、智慧、敏锐等",
        "type": "scale",
        "min": 0,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q025",
        "section": "女性角色塑造",
        "bucket": "S1",
        "title": "女角色参与核心剧情",
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
        "id": "Q026",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "主要女角色拥有自己的事业",
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
        "id": "Q027",
        "section": "女性角色塑造",
        "bucket": "S1",
        "title": "女角色剧情篇幅占比多于男角色",
        "type": "single",
        "options": [
          {
            "label": "没有男角色",
            "value": 2
          },
          {
            "label": "是",
            "value": 1
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q028",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女角色高光时刻多于男角色",
        "type": "single",
        "options": [
          {
            "label": "没有男角色",
            "value": 2
          },
          {
            "label": "是",
            "value": 1
          },
          {
            "label": "否",
            "value": -2
          }
        ]
      },
      {
        "id": "Q029",
        "section": "女性角色塑造",
        "bucket": "S5",
        "title": "女女关系多样化，如女性友谊、女性互动、女性对抗（不包括女同）",
        "type": "scale",
        "min": 0,
        "max": 3,
        "step": 1
      },
      {
        "id": "Q030",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "主角团母父设定",
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
        ],
        "countable": true
      },
      {
        "id": "Q031",
        "section": "女性角色塑造",
        "bucket": "S5",
        "title": "含有女性传承的情节",
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
        "id": "Q032",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有女性争权夺利的情节",
        "type": "single",
        "options": [
          {
            "label": "有正面描写",
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
        "id": "Q033",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "存在领导者角色时，性别数量对比",
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
        "id": "Q034",
        "section": "女性角色塑造",
        "bucket": "S5",
        "title": "含有女性反抗/觉醒情节",
        "note": "*说明：如拒绝阍育规训、拒绝服弱役、拒绝男性控制、经济自立等。若仅哭丧没有反抗，按失败算。",
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
        "id": "Q035",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女角色存在男性支持，妹兄、姐弟、师生等",
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
        "id": "Q036",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有女角色魅男、爱男、利男行为的情节",
        "note": "*说明：男包括男性亲属与陌生男性，如生育男性后代、帮扶兄弟、缅怀男性亲属、替男性亲属报仇、扶贫、有男人分享女角色胜利果实/成果/遗产等",
        "type": "scale",
        "min": -5,
        "max": -2,
        "step": 1
      },
      {
        "id": "Q037",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "主角团是否含有性缘关系（多选）",
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
        "id": "Q038",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "含有性缘关系（多选）",
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
        "id": "Q039",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "存在性缘关系时，性缘叙事占全剧情的比例",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      },
      {
        "id": "Q040",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "配乐含有性缘内容",
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
        "id": "Q041",
        "section": "女性角色塑造",
        "bucket": "S5",
        "title": "存在女同关系时对其刻画",
        "type": "scale",
        "min": -3,
        "max": -1,
        "step": 1
      },
      {
        "id": "Q042",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "存在纳入式生殖行为",
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
        "id": "Q043",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "对女性生理周期（月经、更年期等）有描写",
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
        "id": "Q044",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "对女性生理疾病（乳腺结节、乳腺癌等）有描写",
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
        "id": "Q045",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "对女性怀孕相关生理行为（生产、堕胎等）有描写",
        "type": "single",
        "options": [
          {
            "label": "清晰呈现代价、风险、痛苦+1无描写",
            "value": 0
          },
          {
            "label": "美化、神圣化描写",
            "value": -2
          }
        ]
      },
      {
        "id": "Q046",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女性角色符号化",
        "note": "*说明：例如冰箱里的女人、女性被去人格化命名：无名、仅用称谓/关系称呼、abb或x小x式命名",
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
        "id": "Q047",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有驴竞行为",
        "note": "*说明：例如除了女主角外的女性形象刻板，以此突出女主角特殊",
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
        "id": "Q048",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有虐女情节（包括性犯罪、着重描绘女人受苦惨状）",
        "type": "scale",
        "min": -5,
        "max": -3,
        "step": 1
      },
      {
        "id": "Q049",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有女角色死亡情节（多选）",
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
        "id": "Q050",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "忽视女性困境，如美化伎女处境、美化拐卖、美化强暴等",
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
        "id": "Q051",
        "section": "女性角色塑造",
        "bucket": "S2",
        "title": "把阍育作为女性归宿，污名化反阍反育",
        "type": "single",
        "options": [
          {
            "label": "是",
            "value": -1
          },
          {
            "label": "未提及",
            "value": 0
          },
          {
            "label": "否",
            "value": 1
          }
        ]
      },
      {
        "id": "Q052",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有女性外貌规训与身体商品化呈现（多选）",
        "type": "multi",
        "options": [
          {
            "label": "软色情",
            "value": -1
          },
          {
            "label": "擦边内容",
            "value": -1
          },
          {
            "label": "从外貌得利",
            "value": -1
          },
          {
            "label": "身材焦虑",
            "value": -1
          },
          {
            "label": "其她行为",
            "value": -1
          }
        ]
      },
      {
        "id": "Q053",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "含有制度性剥削女性的情节",
        "note": "*说明：如闝倡、代孕、同妻、买卖阍因、强迫阍育等",
        "type": "single",
        "options": [
          {
            "label": "非批判性情节",
            "value": -2
          },
          {
            "label": "批判性情节",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q054",
        "section": "女性角色塑造",
        "bucket": "S3",
        "title": "女角色有其她选择，却选择堕落",
        "note": "*说明：如在有其她选择的情况下进入伎女/被性剥削行业、在明显不具备养育的条件（战争末世等）坚持生育、回到暴力关系等",
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
        "id": "Q055",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "含有描写性自由、荡妇羞辱的内容（多选）",
        "type": "multi",
        "options": [
          {
            "label": "性自由-2荡妇羞辱",
            "value": -1
          },
          {
            "label": "否",
            "value": 0
          }
        ]
      },
      {
        "id": "Q056",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "鼓吹女凝男自由",
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
        "id": "Q057",
        "section": "女性角色塑造",
        "bucket": "S4",
        "title": "性别认知障碍，如女扮男、自称哥或对女喊兄弟、buddy、guy等",
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
        "id": "Q058",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男性角色参与核心剧情",
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
        "id": "Q059",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男性角色年龄段丰富度",
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
        "id": "Q060",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男角色形象设置丰富度",
        "note": "*说明：包括体型、发型、肤色、职业等",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q061",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "主要男性角色个人能力",
        "note": "*说明：如武力、智慧、敏锐等",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q062",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男性角色有完整的成长线或高光或立体的塑造",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q063",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男男关系多样化",
        "type": "scale",
        "min": -3,
        "max": 0,
        "step": 1
      },
      {
        "id": "Q064",
        "section": "男性角色塑造",
        "bucket": "S2",
        "title": "含有父系传承情节，包括随父姓",
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
        "id": "Q065",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "女权男",
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
        "id": "Q066",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "美化男性如母父对比、男性友情、男性深情等",
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
        "id": "Q067",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "存在男性对女性的污辱言论、猥亵、黄段子",
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
        "id": "Q068",
        "section": "男性角色塑造",
        "bucket": "S2",
        "title": "含有男性生殖崇拜",
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
        "id": "Q069",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "含有夸大男性苦难的情节",
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
        "id": "Q070",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男性掠夺女性生育能力或成果，如男性生育或产翁",
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
        "id": "Q071",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "男角色获得更好待遇、结局等",
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
        "id": "Q072",
        "section": "男性角色塑造",
        "bucket": "S6",
        "title": "含有男角色死亡情节（多选）",
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
        "id": "Q073",
        "section": "其她",
        "bucket": "S7",
        "title": "厌女镜头（多选）",
        "type": "multi",
        "options": [
          {
            "label": "男凝镜头描画女性",
            "value": -2
          },
          {
            "label": "镜头对准女性受害者",
            "value": -2
          },
          {
            "label": "交配展示镜头",
            "value": -2
          },
          {
            "label": "无意义展示天残器官",
            "value": -2
          },
          {
            "label": "美化虐女镜头",
            "value": -2
          }
        ]
      },
      {
        "id": "Q074",
        "section": "其她",
        "bucket": "S7",
        "title": "镜头语言（多选）",
        "type": "multi",
        "options": [
          {
            "label": "女角色成功的关键镜头聚焦女性本人",
            "value": 2
          },
          {
            "label": "女角色展现攻击性或掌控欲的镜头",
            "value": 2
          }
        ]
      },
      {
        "id": "Q075",
        "section": "其她",
        "bucket": "S7",
        "title": "主观感受",
        "type": "scale",
        "min": -3,
        "max": 3,
        "step": 1
      }
    ]
  };
    window.QUESTION_SETS = QUESTION_SETS;
  
    // Buckets for right-side summary (creator section is shown separately in UI)
    window.SCORE_BUCKET_LABELS = {
    "S1": "性别政治与人口结构",
    "S2": "反男权结构",
    "S3": "女性主体性与独立",
    "S4": "身体政治与生命体验",
    "S5": "女性联结与反抗",
    "S6": "男性角色反向考察",
    "S7": "其她"
  };
  
    window.TAG_PRESETS = [
    "全男主角",
    "VGBTQ友好",
    "支持身体剥削",
    "情色合法化",
    "男凝严重",
    "美化虐女",
    "雌竞",
    "荡妇羞辱"
  ];
  })();