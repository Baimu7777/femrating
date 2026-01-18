/* Question bank for 4-part site:
   - Narrative books (叙事书籍)
   - Social science / non-fiction books (社科书籍)
   - Film/TV (影视)

   Each rating page sets window.PAGE_CONFIG.questionSet to:
   "narrative" | "socsci" | "film"
*/

(function(){
  const NONFEMALE_NOTE = "此处及后面所有“非女”指所有生理性别或心理性别未明确表示为女的角色/作者/参与者，包括但不限于男性、跨性别、无性别。";

  const BANK = {
    narrative: {
      sectionOrder: ["作者", "基础世界观", "女性角色刻画", "男性角色刻画", "其她"],
      sectionNotes: {
        "作者": [NONFEMALE_NOTE],
        "基础世界观": ["基础世界观的‘正分’仅建议在：世界观为全女或默认女为第一性时使用（按你的规则）。"]
      },
      questions: [
        // ===== 作者 =====
        { id:"N-A1", section:"作者", title:"作者性别比", type:"single", options:[
          {label:"全女", value:2},
          {label:"有非女参与", value:-2},
          {label:"全非女", value:-4}
        ]},
        { id:"N-A2", section:"作者", title:"译者性别比", type:"single", options:[
          {label:"全女", value:2},
          {label:"有非女参与", value:-2},
          {label:"全非女", value:-4}
        ]},
        { id:"N-A3", section:"作者", title:"作者曾发表厌女言论、反对女权言论", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-A4", section:"作者", title:"译者曾发表厌女言论、反对女权言论", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-A5", section:"作者", title:"作者出版过非批判男同相关内容", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-A6", section:"作者", title:"女作者现实已阍或有性缘关系", type:"single", options:[
          {label:"已阍或有男友", value:-2},
          {label:"有女友", value:-1},
          {label:"未知", value:0},
          {label:"单身女性", value:1}
        ]},
        { id:"N-A7", section:"作者", title:"出版社曾发表厌女言论、反对女权言论", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-A8", section:"作者", title:"书籍封面含有男性 ego（男大头、无意义男凝照片等）", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-A9", section:"作者", title:"翻译歪曲标题", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ], note:"例如将《后悔成为母亲》翻译成《成为母亲的选择》。" },

        // ===== 作品｜基础世界观 =====
        { id:"N-W1", section:"基础世界观", title:"单主角性别", type:"single", options:[
          {label:"女", value:2},
          {label:"非女", value:-2}
        ]},
        { id:"N-W2", section:"基础世界观", title:"若主角有核心团队，团队性别情况", type:"single", options:[
          {label:"全女", value:2},
          {label:"女多于非女", value:1},
          {label:"女、非女相等", value:0},
          {label:"女少于非女", value:-1},
          {label:"全非女", value:-2}
        ]},
        { id:"N-W3", section:"基础世界观", title:"全体角色女男比", type:"single", options:[
          {label:"全女", value:2},
          {label:"女多于非女", value:1},
          {label:"女、非女相等", value:0},
          {label:"女少于非女", value:-1},
          {label:"全非女", value:-2}
        ]},
        { id:"N-W4", section:"基础世界观", title:"存在跨性别角色", type:"single", options:[
          {label:"主角团", value:-2},
          {label:"背景角色", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-W5", section:"基础世界观", title:"存在男同角色", type:"single", options:[
          {label:"主角团", value:-2},
          {label:"背景角色", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-W6", section:"基础世界观", title:"存在辱女词、厌女词", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-W7", section:"基础世界观", title:"女男存在刻板差异", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-W8", section:"基础世界观", title:"主角团母父设定（按人数情况叠加后填总值）", type:"scale", min:-5, max:5, step:1,
          note:"有母无父记 +1；有母有父或无母无父记 0；无母有父记 -1。若多名主角团成员可叠加，例如3名‘有母无父’可填 +3。" },
        { id:"N-W9", section:"基础世界观", title:"主角团是否含有性缘关系（多选叠加）", type:"multi", options:[
          {label:"含女且无", value:2},
          {label:"女同", value:-1},
          {label:"女男", value:-1},
          {label:"女单恋男", value:-3},
          {label:"男同", value:-3},
          {label:"不含女且无", value:-3}
        ]},
        { id:"N-W10", section:"基础世界观", title:"存在性缘关系时，性缘叙事占全剧情的比例（程度）", type:"scale", min:-2, max:0, step:1 },
        { id:"N-W11", section:"基础世界观", title:"存在纳入式生殖行为", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-W12", section:"基础世界观", title:"对纳入式生殖行为进行细致描写", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-W13", section:"基础世界观", title:"推广或倡导女权思想与行为", type:"single", options:[
          {label:"是", value:2},
          {label:"否", value:0}
        ]},
        { id:"N-W14", section:"基础世界观", title:"有性别战争内容且女性获胜", type:"single", options:[
          {label:"是", value:1},
          {label:"否", value:-1},
          {label:"没有提及", value:0}
        ]},
        { id:"N-W15", section:"基础世界观", title:"基础世界观厌女（-3~+3）", type:"scale", min:-3, max:3, step:1,
          note:"仅当世界观为全女或默认女为第一性时可打正分。" },
        { id:"N-W16", section:"基础世界观", title:"使用女本位词", type:"single", options:[
          {label:"是", value:1},
          {label:"否", value:0}
        ]},

        // ===== 女性角色刻画 =====
        { id:"N-F1", section:"女性角色刻画", title:"女角色参与核心剧情", type:"single", options:[
          {label:"是", value:1},
          {label:"否", value:-1}
        ]},
        { id:"N-F2", section:"女性角色刻画", title:"存在领导者角色时，性别数量对比", type:"single", options:[
          {label:"全女", value:2},
          {label:"女比男多", value:1},
          {label:"女男相等", value:0},
          {label:"男比女多", value:-1},
          {label:"全男", value:-2}
        ]},
        { id:"N-F3", section:"女性角色刻画", title:"女性角色年龄段丰富度（多选）", type:"multi", options:[
          {label:"幼年", value:1},
          {label:"少年", value:1},
          {label:"成年", value:1},
          {label:"中年", value:1},
          {label:"老年", value:1}
        ], special:"single_zero_cap4", note:"各占1分；若仅勾选一项则记 0 分；最高封顶 +4。" },
        { id:"N-F4", section:"女性角色刻画", title:"女角色形象设置丰富度（程度 0~2）", type:"scale", min:0, max:2, step:1,
          note:"包括体型、发型、肤色、职业等。" },
        { id:"N-F5", section:"女性角色刻画", title:"主要女性角色个人能力（程度 0~2）", type:"scale", min:0, max:2, step:1,
          note:"如武力、智慧、敏锐等。" },
        { id:"N-F6", section:"女性角色刻画", title:"女性角色有完整的成长线/高光/立体塑造（程度 0~2）", type:"scale", min:0, max:2, step:1 },
        { id:"N-F7", section:"女性角色刻画", title:"女女关系多样化（不包括女同）（程度 0~3）", type:"scale", min:0, max:3, step:1 },
        { id:"N-F8", section:"女性角色刻画", title:"存在女同关系时对其刻画（程度 -2~0）", type:"scale", min:-2, max:0, step:1 },
        { id:"N-F9", section:"女性角色刻画", title:"含有女性传承的情节", type:"single", options:[
          {label:"是", value:2},
          {label:"否", value:0}
        ]},
        { id:"N-F10", section:"女性角色刻画", title:"女角色存在男性支持（妹兄、姐弟、师生等）（程度 -2~0）", type:"scale", min:-2, max:0, step:1 },
        { id:"N-F11", section:"女性角色刻画", title:"含有驴竞行为", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ], note:"例如除女主角外的女性形象刻板，以此突出女主角特殊。" },
        { id:"N-F12", section:"女性角色刻画", title:"含有性缘关系（多选）", type:"multi", options:[
          {label:"女比男小三岁以上", value:-1},
          {label:"早阍早育", value:-1},
          {label:"女性为未成年且批判性质", value:-1},
          {label:"女性为未成年且非批判性质", value:-5}
        ]},
        { id:"N-F13", section:"女性角色刻画", title:"女性角色设置随意（取名 abb / x小x 等）", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-F14", section:"女性角色刻画", title:"含有物化女性的情节（闝倡、代孕、同妻等）", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-F15", section:"女性角色刻画", title:"含有描写女性外貌红利、身材焦虑等内容", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-F16", section:"女性角色刻画", title:"含有描写性自由、荡妇羞辱的内容", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-F17", section:"女性角色刻画", title:"含有女角色软色情、擦边内容", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-F18", section:"女性角色刻画", title:"性别认知障碍叙事（女扮男/自称哥/对女喊兄弟、buddy、guy等）", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-F19", section:"女性角色刻画", title:"含有女角色魅男/爱男/利男行为（程度 -2~-5）", type:"scale", min:-5, max:-2, step:1,
          note:"男包括男性亲属与陌生男性，如生育男性后代、帮扶兄弟、扶贫、男人分享女角色成果/遗产等。" },
        { id:"N-F20", section:"女性角色刻画", title:"过度渲染女性苦楚/雄堕但反抗/觉醒占比很少（程度 -2~0）", type:"scale", min:-2, max:0, step:1 },
        { id:"N-F21", section:"女性角色刻画", title:"含有女角色死亡情节（多选）", type:"multi", options:[
          {label:"被虐杀", value:-4},
          {label:"被女杀", value:-1},
          {label:"被男杀", value:-2},
          {label:"为女牺牲", value:-1},
          {label:"为男牺牲", value:-2},
          {label:"意外死亡", value:-1},
          {label:"自然死亡", value:0}
        ]},
        { id:"N-F22", section:"女性角色刻画", title:"忽视女性困境（美化伎女处境/拐卖/强暴等）", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-F23", section:"女性角色刻画", title:"女角色自愿堕落且以‘自由’包装（如明有选择仍当伎女/末世战争生育等）", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-F24", section:"女性角色刻画", title:"含有与男相关的‘弱女叙事’（哭丧/悲剧/徒劳等）（程度 -2~0）", type:"scale", min:-2, max:0, step:1 },
        { id:"N-F25", section:"女性角色刻画", title:"含有虐女情节（包括性犯罪、着重描绘女人受苦）", type:"scale", min:-5, max:-3, step:1 },

        // ===== 男性角色刻画 =====
        { id:"N-M1", section:"男性角色刻画", title:"男性角色参与核心剧情", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-M2", section:"男性角色刻画", title:"男性角色年龄段丰富度（多选）", type:"multi", options:[
          {label:"幼年", value:-1},
          {label:"少年", value:-1},
          {label:"成年", value:-1},
          {label:"中年", value:-1},
          {label:"老年", value:-1}
        ], special:"single_zero_cap-5", note:"各占-1分；若仅勾选一项则记 0 分；最低封底 -5。" },
        { id:"N-M3", section:"男性角色刻画", title:"男角色形象设置丰富度（程度 -2~0）", type:"scale", min:-2, max:0, step:1 },
        { id:"N-M4", section:"男性角色刻画", title:"主要男性角色个人能力（程度 -2~0）", type:"scale", min:-2, max:0, step:1,
          note:"如武力、智慧、敏锐等。" },
        { id:"N-M5", section:"男性角色刻画", title:"男性角色有完整成长线/高光/立体塑造（程度 -2~0）", type:"scale", min:-2, max:0, step:1 },
        { id:"N-M6", section:"男性角色刻画", title:"男男关系多样化（程度 -3~0）", type:"scale", min:-3, max:0, step:1 },
        { id:"N-M7", section:"男性角色刻画", title:"美化男性（母父对比、男性友情、男性深情等）", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-M8", section:"男性角色刻画", title:"含有男性生殖崇拜", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-M9", section:"男性角色刻画", title:"含有父系传承情节（包括随父姓）", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-M10", section:"男性角色刻画", title:"含有夸大男性苦难的情节", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-M11", section:"男性角色刻画", title:"男性角色获得更好待遇/结局等（程度 -3~0）", type:"scale", min:-3, max:0, step:1 },
        { id:"N-M12", section:"男性角色刻画", title:"男性掠夺女性生育能力或成果（男性生育/产翁等）", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"N-M13", section:"男性角色刻画", title:"含有污辱女性的言论或行为", type:"single", options:[
          {label:"是且并非用于批判", value:-2},
          {label:"是但用于批判讽刺", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-M14", section:"男性角色刻画", title:"存在男性对女性的猥亵、黄段子", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-M15", section:"男性角色刻画", title:"含有臆女童情节", type:"single", options:[
          {label:"是且非用于批判", value:-5},
          {label:"是但用于批判", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-M16", section:"男性角色刻画", title:"含有男角色死亡情节（多选）", type:"multi", options:[
          {label:"被虐杀", value:2},
          {label:"被女杀", value:2},
          {label:"被男杀", value:1},
          {label:"意外死亡", value:1},
          {label:"自然死亡", value:0}
        ]},

        // ===== 其她 =====
        { id:"N-O1", section:"其她", title:"文笔（程度 -2~2）", type:"scale", min:-2, max:2, step:1 },
        { id:"N-O2", section:"其她", title:"主观感受（程度 -2~2）", type:"scale", min:-2, max:2, step:1 },
        { id:"N-O3", section:"其她", title:"批判男性，但主要围绕性缘/男儿描写", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-O4", section:"其她", title:"对男性持有擦亮眼态度", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"N-O5", section:"其她", title:"鼓吹女凝男自由", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]}
      ]
    },

    socsci: {
      sectionOrder: ["作者", "作品"],
      sectionNotes: {
        "作者": ["（社科书籍）" + NONFEMALE_NOTE]
      },
      questions: [
        // ===== 作者 =====
        { id:"S-A1", section:"作者", title:"作者性别比", type:"single", options:[
          {label:"全女", value:2},
          {label:"有男参与", value:-2},
          {label:"全男", value:-4}
        ]},
        { id:"S-A2", section:"作者", title:"译者性别比", type:"single", options:[
          {label:"全女", value:2},
          {label:"有男参与", value:-2},
          {label:"全男", value:-4}
        ]},
        { id:"S-A3", section:"作者", title:"作者曾发表厌女言论、反对女权言论", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-A4", section:"作者", title:"译者曾发表厌女言论、反对女权言论", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-A5", section:"作者", title:"作者出版过非批判男同相关内容", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-A6", section:"作者", title:"女作者现实已阍或有性缘关系", type:"single", options:[
          {label:"已阍或有男友", value:-2},
          {label:"有女友", value:-1},
          {label:"未知", value:0},
          {label:"单身女性", value:1}
        ]},
        { id:"S-A7", section:"作者", title:"出版社曾发表厌女言论、反对女权言论", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-A8", section:"作者", title:"书籍封面含有男性 ego（男大头、无意义男凝照片等）", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-A9", section:"作者", title:"翻译歪曲标题", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ], note:"例如将《后悔成为母亲》翻译成《成为母亲的选择》。" },

        // ===== 作品 =====
        { id:"S-W1", section:"作品", title:"使用女本位词", type:"single", options:[
          {label:"是", value:2},
          {label:"否", value:0}
        ]},
        { id:"S-W2", section:"作品", title:"存在辱女词、厌女词", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-W3", section:"作品", title:"支持跨性别，污名化 TERF", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-W4", section:"作品", title:"支持男同", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-W5", section:"作品", title:"鼓吹性自由", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-W6", section:"作品", title:"把纳入式生殖行为默认为性行为", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-W7", section:"作品", title:"若涉及性别题材，性别倾向", type:"single", options:[
          {label:"推崇女社", value:2},
          {label:"推崇母社/女尊", value:1},
          {label:"女男/男女平等", value:-1},
          {label:"男尊", value:-2}
        ]},
        { id:"S-W8", section:"作品", title:"介绍动植物时代入男性视角（默认王为男性/贬低雌性夸赞雄性）", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-W9", section:"作品", title:"列举正向事例时，涉及女男比", type:"single", options:[
          {label:"全女", value:2},
          {label:"女比男多", value:1},
          {label:"女男相等", value:0},
          {label:"男比女多", value:-1},
          {label:"全男", value:-2}
        ]},
        { id:"S-W10", section:"作品", title:"列举负面事例时，涉及女男比", type:"single", options:[
          {label:"全女", value:-2},
          {label:"女比男多", value:-1},
          {label:"女男相等", value:0},
          {label:"男比女多", value:1},
          {label:"全男", value:2}
        ]},
        { id:"S-W11", section:"作品", title:"介绍人体时，涉及女男比", type:"single", options:[
          {label:"全女", value:2},
          {label:"女比男多", value:1},
          {label:"女男相等", value:0},
          {label:"男比女多", value:1},
          {label:"全男", value:2}
        ], note:"按你给的规则原样录入（注意：‘男比女多’也为正分）。" },
        { id:"S-W12", section:"作品", title:"为了叙事顺滑而美化压迫结构（阍育规训/母职惩罚/性别分工写成‘自然/温暖’）", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-W13", section:"作品", title:"作品整体推进或倡导基进女权思想与行动（程度 1~3）", type:"scale", min:1, max:3, step:1 },
        { id:"S-W14", section:"作品", title:"把女性受压迫归因于‘天性/本能/生理注定’", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"S-W15", section:"作品", title:"美化拐卖/强暴/伎女处境/代孕等（淡化伤害/合理化）（程度 -3~-1）", type:"scale", min:-3, max:-1, step:1 },
        { id:"S-W16", section:"作品", title:"把阍育当女性‘归宿/完成’，污名化反阍反育（程度 -3~-1）", type:"scale", min:-3, max:-1, step:1 },
        { id:"S-W17", section:"作品", title:"把‘男性样本/男性身体’当默认标准（人体/药物/心理/运动等）（程度 -3~-1）", type:"scale", min:-3, max:-1, step:1 },
        { id:"S-W18", section:"作品", title:"过度推崇男性权威理论（如弗洛伊德）且缺少批判（程度 -3~-1）", type:"scale", min:-3, max:-1, step:1 }
      ]
    },

    film: {
      sectionOrder: ["导演/编剧", "作品", "女性角色刻画", "男性角色刻画"],
      sectionNotes: {},
      questions: [
        // ===== 导演/编剧 =====
        { id:"F-C1", section:"导演/编剧", title:"导演性别比", type:"single", options:[
          {label:"全女", value:2},
          {label:"有男参与", value:0},
          {label:"全男", value:-2}
        ]},
        { id:"F-C2", section:"导演/编剧", title:"编剧性别比", type:"single", options:[
          {label:"全女", value:2},
          {label:"有男参与", value:0},
          {label:"全男", value:-2}
        ]},
        { id:"F-C3", section:"导演/编剧", title:"导演曾发表厌女言论、反对女权言论", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-C4", section:"导演/编剧", title:"编剧曾发表厌女言论、反对女权言论", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-C5", section:"导演/编剧", title:"导演或编剧曾经作品中有男同题材（按人数叠加后填总值）", type:"scale", min:-5, max:0, step:1,
          note:"按你规则：-1 ×（人数）。例如涉及2人可填 -2。" },
        { id:"F-C6", section:"导演/编剧", title:"编剧参与过非批判男同相关电影项目", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},

        // ===== 作品 =====
        { id:"F-W1", section:"作品", title:"单主角叙事：主角性别", type:"single", options:[
          {label:"女", value:2},
          {label:"无性别", value:0},
          {label:"男", value:-2}
        ]},
        { id:"F-W2", section:"作品", title:"多主角叙事：主角团性别比", type:"single", options:[
          {label:"全女", value:2},
          {label:"女多于男", value:1},
          {label:"女男相等", value:0},
          {label:"男比女多", value:-1},
          {label:"全男", value:-2}
        ]},
        { id:"F-W3", section:"作品", title:"是否有跨性别角色", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"F-W4", section:"作品", title:"有个人剧情的配角女男比例", type:"single", options:[
          {label:"全女", value:2},
          {label:"女多于男", value:1},
          {label:"女男相等", value:0},
          {label:"男比女多", value:-1},
          {label:"全男", value:-2}
        ]},
        { id:"F-W5", section:"作品", title:"叙事推进者/关键视角性别（旁白/配乐/镜头凝视/叙事重心）", type:"single", options:[
          {label:"全女", value:2},
          {label:"女多于男", value:1},
          {label:"女男相等", value:0},
          {label:"男比女多", value:-1},
          {label:"全男", value:-2}
        ]},
        { id:"F-W6", section:"作品", title:"配乐内容含有性缘关系", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"F-W7", section:"作品", title:"主角母父塑造", type:"single", options:[
          {label:"有母无父", value:2},
          {label:"母父俱全或母父均无", value:0},
          {label:"无母有父", value:-2}
        ]},
        { id:"F-W8", section:"作品", title:"主角团是否含有性缘关系（多选叠加）", type:"multi", options:[
          {label:"含女且无", value:2},
          {label:"女同", value:-1},
          {label:"女男", value:-3},
          {label:"男同", value:-3},
          {label:"不含女且无", value:-3}
        ]},
        { id:"F-W9", section:"作品", title:"存在纳入式生殖行为", type:"single", options:[
          {label:"是", value:-1},
          {label:"否", value:0}
        ]},
        { id:"F-W10", section:"作品", title:"对纳入式生殖行为进行细致描写", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-W11", section:"作品", title:"镜头语言（多选）", type:"multi", options:[
          {label:"男凝镜头描画女性", value:-2},
          {label:"镜头对准受害者", value:-2}
        ]},

        // ===== 女性角色刻画 =====
        { id:"F-F1", section:"女性角色刻画", title:"女性角色年龄段丰富度（多选）", type:"multi", options:[
          {label:"幼年", value:1},
          {label:"少年", value:1},
          {label:"成年", value:1},
          {label:"中年", value:1},
          {label:"老年", value:1}
        ], special:"single_zero_cap4", note:"各占1分；若仅勾选一项则记 0 分；最高封顶 +4。" },
        { id:"F-F2", section:"女性角色刻画", title:"女角色外形设定（服弱役/性化/幼化等）（-2~+2）", type:"scale", min:-2, max:2, step:1 },
        { id:"F-F3", section:"女性角色刻画", title:"女角色形象设置丰富度（程度 0~+2）", type:"scale", min:0, max:2, step:1 },
        { id:"F-F4", section:"女性角色刻画", title:"女角色有完整成长线/丰富剧情（0~+4）", type:"scale", min:0, max:4, step:1 },
        { id:"F-F5", section:"女性角色刻画", title:"女角色参与核心剧情", type:"single", options:[
          {label:"是", value:1},
          {label:"否", value:-1}
        ]},
        { id:"F-F6", section:"女性角色刻画", title:"女女关系多样化（不包括女同）（0~+3）", type:"scale", min:0, max:3, step:1 },
        { id:"F-F7", section:"女性角色刻画", title:"存在性缘关系时，性缘叙事占比（-2~0）", type:"scale", min:-2, max:0, step:1 },
        { id:"F-F8", section:"女性角色刻画", title:"存在领导者角色时，性别数量对比", type:"single", options:[
          {label:"全女", value:2},
          {label:"女比男多", value:1},
          {label:"女男相等", value:0},
          {label:"男比女多", value:-1},
          {label:"全男", value:-2}
        ]},
        { id:"F-F9", section:"女性角色刻画", title:"含有女性传承的情节", type:"single", options:[
          {label:"是", value:2},
          {label:"否", value:0}
        ]},
        { id:"F-F10", section:"女性角色刻画", title:"母对主角影响", type:"single", options:[
          {label:"较正面（尊重主角独立人格）", value:1},
          {label:"少量文字/过场描述", value:0},
          {label:"母内容少或有矮化弱化倾向/着重描写父女情", value:-2}
        ]},
        { id:"F-F11", section:"女性角色刻画", title:"女角色篇幅多于男角色", type:"single", options:[
          {label:"没有男角色", value:2},
          {label:"是", value:0},
          {label:"否", value:-2}
        ]},
        { id:"F-F12", section:"女性角色刻画", title:"女角色高光时刻多于男角色", type:"single", options:[
          {label:"没有男角色", value:2},
          {label:"是", value:0},
          {label:"否", value:-2}
        ]},
        { id:"F-F13", section:"女性角色刻画", title:"含有驴竞情节", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F14", section:"女性角色刻画", title:"主要女角色结阍", type:"single", options:[
          {label:"结了不离（离了再结）", value:-2},
          {label:"离了不结", value:-1},
          {label:"否", value:0}
        ]},
        { id:"F-F15", section:"女性角色刻画", title:"（除主要女角色的母亲外）主要女角色生育后代", type:"single", options:[
          {label:"男性后代", value:-2},
          {label:"女性后代", value:0}
        ]},
        { id:"F-F16", section:"女性角色刻画", title:"提及女性争取权力的历史", type:"single", options:[
          {label:"是", value:3},
          {label:"无", value:0}
        ]},
        { id:"F-F17", section:"女性角色刻画", title:"主要女角色是否拥有自己的事业", type:"single", options:[
          {label:"是", value:2},
          {label:"无", value:0}
        ]},
        { id:"F-F18", section:"女性角色刻画", title:"鼓吹女性外貌红利、身材焦虑等", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F19", section:"女性角色刻画", title:"鼓吹性自由/荡妇羞辱", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F20", section:"女性角色刻画", title:"女角色软色情、擦边内容", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F21", section:"女性角色刻画", title:"女角色魅男/爱男/利男行为", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F22", section:"女性角色刻画", title:"女角色寻父/救父/缅怀父/替父报仇", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F23", section:"女性角色刻画", title:"含有物化女性的情节", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F24", section:"女性角色刻画", title:"美化女性苦难", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F25", section:"女性角色刻画", title:"含有虐女情节（包括性犯罪、着重描绘女人受苦）", type:"scale", min:-5, max:-3, step:1 },
        { id:"F-F26", section:"女性角色刻画", title:"女角色存在男性支持（妹兄、姐弟、师生等）", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F27", section:"女性角色刻画", title:"女角色死亡/牺牲/奉献情节", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F28", section:"女性角色刻画", title:"与男相关的‘弱女叙事’（哭丧/悲剧/徒劳等）", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-F29", section:"女性角色刻画", title:"对女性生理周期（月经/更年期等）描写", type:"single", options:[
          {label:"有非负面描写", value:2},
          {label:"无描写", value:0},
          {label:"有负面描写", value:-2}
        ]},
        { id:"F-F30", section:"女性角色刻画", title:"涉及女性争取权利的情节", type:"single", options:[
          {label:"有正面描写", value:3},
          {label:"无描写", value:0},
          {label:"有负面描写", value:-3}
        ]},
        { id:"F-F31", section:"女性角色刻画", title:"对女性生理疾病（如乳腺结节/乳腺癌等）描写", type:"single", options:[
          {label:"非负面描写", value:1},
          {label:"无描写", value:0},
          {label:"负面描写", value:-1}
        ]},
        { id:"F-F32", section:"女性角色刻画", title:"对女性怀孕相关生理行为（生产/堕胎等）描写", type:"single", options:[
          {label:"无描写", value:0},
          {label:"美化描写", value:-2}
        ]},

        // ===== 男性角色刻画 =====
        { id:"F-M1", section:"男性角色刻画", title:"男性角色年龄段丰富度（多选）", type:"multi", options:[
          {label:"幼年", value:-1},
          {label:"少年", value:-1},
          {label:"成年", value:-1},
          {label:"中年", value:-1},
          {label:"老年", value:-1}
        ], note:"按你规则：若仅有一项则为 -1（这里按正常叠加即可）。" },
        { id:"F-M2", section:"男性角色刻画", title:"男角色形象设置丰富度（程度 -2~0）", type:"scale", min:-2, max:0, step:1 },
        { id:"F-M3", section:"男性角色刻画", title:"男男关系多样化（程度 -2~0）", type:"scale", min:-2, max:0, step:1 },
        { id:"F-M4", section:"男性角色刻画", title:"男角色有完整成长线、丰富剧情", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-M5", section:"男性角色刻画", title:"男角色参与核心剧情", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-M6", section:"男性角色刻画", title:"含有污辱女性的言论或行为", type:"single", options:[
          {label:"是且非用于批判", value:-5},
          {label:"是但用于批判", value:-1},
          {label:"否", value:0}
        ]},
        { id:"F-M7", section:"男性角色刻画", title:"美化或淡化男性对女性的猥亵、黄段子", type:"single", options:[
          {label:"是", value:-5},
          {label:"否", value:0}
        ]},
        { id:"F-M8", section:"男性角色刻画", title:"含有臆女童情节", type:"single", options:[
          {label:"是且非用于批判", value:-5},
          {label:"是但用于批判", value:-1},
          {label:"否", value:0}
        ]},
        { id:"F-M9", section:"男性角色刻画", title:"含闝倡、代孕等情节", type:"single", options:[
          {label:"是且非用于批判", value:-5},
          {label:"是但用于批判", value:-1},
          {label:"否", value:0}
        ]},
        { id:"F-M10", section:"男性角色刻画", title:"含有男性生殖崇拜", type:"single", options:[
          {label:"是", value:-5},
          {label:"否", value:0}
        ]},
        { id:"F-M11", section:"男性角色刻画", title:"含有父系传承的情节", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-M12", section:"男性角色刻画", title:"含有夸大男性苦难的情节", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]},
        { id:"F-M13", section:"男性角色刻画", title:"男角色获得比女角色更好待遇、结局等", type:"single", options:[
          {label:"是", value:-2},
          {label:"否", value:0}
        ]}
      ]
    }
  };

  // Choose set
  const setId = (window.PAGE_CONFIG && window.PAGE_CONFIG.questionSet) ? window.PAGE_CONFIG.questionSet : "narrative";
  const set = BANK[setId] || BANK.narrative;

  // Expose for rating.js
  window.QUESTIONS = set.questions;
  window.SECTION_ORDER = set.sectionOrder;
  window.SECTION_NOTES = set.sectionNotes || {};

  // Optional: expose all sets for debugging
  window.QUESTION_BANK = BANK;
})();
