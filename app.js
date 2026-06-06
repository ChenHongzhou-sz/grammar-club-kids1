const lessons = [
  {
    id: "sentence-bones",
    unit: "第 1 课",
    title: "句子的骨架",
    tag: "起步课",
    hook: "先别急着背语法名词，先学会认出一句话里“谁在做什么”。",
    goal: "完整句子最少要有主语和谓语，很多时候还会加宾语。",
    rule: "先找谁或什么，再找做什么，最后看动作影响谁或什么。",
    steps: [
      "主语：句子在说谁或什么。",
      "谓语动词：主语做什么，或者处在什么状态。",
      "宾语：动作指向谁或什么。"
    ],
    examples: [
      {
        en: "Birds sing.",
        zh: "鸟儿唱歌。",
        note: "Birds 是主语，sing 是谓语。"
      },
      {
        en: "Lily reads books after dinner.",
        zh: "莉莉晚饭后读书。",
        note: "Lily 是主语，reads 是谓语，books 是宾语。"
      },
      {
        en: "We play soccer in the park.",
        zh: "我们在公园踢足球。",
        note: "in the park 只是补充地点，不是句子的骨架。"
      }
    ],
    mistakes: [
      "只写一个名词或地点短语，不写动词。",
      "把 in the park 这类地点信息当成完整句子。",
      "看到长句就慌，其实先找主语和动词就行。"
    ],
    challenge: "把“Tom / eats / breakfast”拼成一句完整句子，再加上时间 in the morning。",
    quiz: [
      {
        question: "哪一句是完整句子？",
        options: ["My friend in the classroom.", "My friend studies in the classroom.", "In the classroom my friend."],
        answer: 1,
        explain: "完整句子里要有主语和谓语。My friend studies 才完整。"
      },
      {
        question: "在句子 “The cat drinks milk.” 里，milk 是什么？",
        options: ["主语", "谓语", "宾语"],
        answer: 2,
        explain: "drinks 这个动作指向 milk，所以 milk 是宾语。"
      },
      {
        question: "“After school.” 为什么不是完整句子？",
        options: ["因为太短", "因为没有主语和谓语", "因为没有宾语"],
        answer: 1,
        explain: "After school 只是时间短语，没有谁做什么。"
      }
    ],
    cards: [
      { front: "subject", back: "主语：一句话在说谁或什么。" },
      { front: "verb", back: "谓语动词：主语做什么，或处在什么状态。" }
    ]
  },
  {
    id: "be-and-pronouns",
    unit: "第 2 课",
    title: "be 动词和人称代词",
    tag: "核心课",
    hook: "很多句子不是“做什么”，而是“是什么”或“怎么样”。这时 be 动词就上场了。",
    goal: "会用 I / you / he / she / it / we / they 搭配 am / is / are。",
    rule: "I 配 am；he、she、it 配 is；you、we、they 配 are。",
    steps: [
      "先看主语是谁。",
      "再选对应的 be 动词。",
      "be 动词后面常接名词、形容词或地点。"
    ],
    examples: [
      {
        en: "I am ready.",
        zh: "我准备好了。",
        note: "I 只能和 am 搭配。"
      },
      {
        en: "She is my sister.",
        zh: "她是我的姐姐。",
        note: "she 是单数第三人称，用 is。"
      },
      {
        en: "They are in the library.",
        zh: "他们在图书馆。",
        note: "they 是复数，用 are。"
      }
    ],
    mistakes: [
      "把 I is、she are 这类搭配写错。",
      "中文里能省“是”，英文里很多时候不能省。",
      "把名字换成代词时忘了同时换 be 动词。"
    ],
    challenge: "把 “Mike and I / happy” 写成完整句子。",
    quiz: [
      {
        question: "哪一个搭配正确？",
        options: ["I is tired.", "He are late.", "We are ready."],
        answer: 2,
        explain: "we 要配 are，所以 We are ready. 正确。"
      },
      {
        question: "“Lucy is a student.” 把 Lucy 换成代词后，句子变成什么？",
        options: ["She is a student.", "Her is a student.", "She are a student."],
        answer: 0,
        explain: "Lucy 是女孩，主语代词用 she。"
      },
      {
        question: "句子 “The books are new.” 里的 are 为什么不用 is？",
        options: ["因为 books 是复数", "因为 new 是形容词", "因为句子在现在时"],
        answer: 0,
        explain: "books 是复数名词，所以 be 动词用 are。"
      }
    ],
    cards: [
      { front: "I -> am", back: "I am..." },
      { front: "he / she / it -> is", back: "单数第三人称常配 is。" }
    ]
  },
  {
    id: "simple-present",
    unit: "第 3 课",
    title: "一般现在时",
    tag: "核心课",
    hook: "每天都会发生、经常会发生、总是真的事，最常用一般现在时。",
    goal: "知道一般现在时表示习惯、事实和经常性动作。",
    rule: "主语不是第三人称单数时用动词原形；he、she、it 后常加 -s 或 -es。",
    steps: [
      "先判断是不是经常发生的事。",
      "再看主语是不是 he、she、it 或单个人名。",
      "如果是第三人称单数，动词常加 -s 或 -es。"
    ],
    examples: [
      {
        en: "I walk to school every day.",
        zh: "我每天走路去学校。",
        note: "I 后用 walk 原形。"
      },
      {
        en: "Tom plays basketball on Friday.",
        zh: "汤姆星期五打篮球。",
        note: "Tom 相当于 he，所以 play 变成 plays。"
      },
      {
        en: "Water boils at 100°C.",
        zh: "水在 100 摄氏度沸腾。",
        note: "这是客观事实，也用一般现在时。"
      }
    ],
    mistakes: [
      "he play、she like 这种忘记加 -s。",
      "看到 now 就乱用一般现在时。now 更常和进行时一起用。",
      "把 every day 这样的频率词漏掉，不影响时态，但会少信息。"
    ],
    challenge: "写一句关于你周末习惯的句子，再写一句关于你妈妈习惯的句子。",
    quiz: [
      {
        question: "哪一句正确？",
        options: ["He play chess after school.", "He plays chess after school.", "He playing chess after school."],
        answer: 1,
        explain: "he 是第三人称单数，动词 play 要变成 plays。"
      },
      {
        question: "一般现在时常用来表示什么？",
        options: ["此刻正在发生的动作", "经常发生的动作", "过去某一天发生的动作"],
        answer: 1,
        explain: "经常发生、习惯性动作最常用一般现在时。"
      },
      {
        question: "“My parents ___ tea every evening.” 应填什么？",
        options: ["drink", "drinks", "are drinking"],
        answer: 0,
        explain: "my parents 是复数主语，所以用 drink。"
      }
    ],
    cards: [
      { front: "every day / often / usually", back: "这些词常提醒你考虑一般现在时。" },
      { front: "he / she / it + verb-s", back: "第三人称单数后面的实义动词常加 -s 或 -es。" }
    ]
  },
  {
    id: "questions-and-negatives",
    unit: "第 4 课",
    title: "否定句和一般疑问句",
    tag: "核心课",
    hook: "会说“不是”“不做”“你会吗”，语法就开始真正能用了。",
    goal: "分清 be 动词句和实义动词句的否定与提问方式。",
    rule: "be 动词直接提前或后面加 not；实义动词常借助 do / does。",
    steps: [
      "如果句子里本来就有 am / is / are，提问时把它提前，否定时加 not。",
      "如果句子用的是实义动词，常用 do / does 帮忙。",
      "用了 does 以后，后面的实义动词要回到原形。"
    ],
    examples: [
      {
        en: "She is not late.",
        zh: "她没有迟到。",
        note: "is 后面直接加 not。"
      },
      {
        en: "Are they at home?",
        zh: "他们在家吗？",
        note: "把 are 提到句首。"
      },
      {
        en: "Does Ben like science?",
        zh: "本喜欢科学吗？",
        note: "用了 does，like 不能再写 likes。"
      }
    ],
    mistakes: [
      "Does she likes math? 这是常见错误，应该是 like。",
      "在实义动词句里直接加 not，不借 do / does。",
      "一般疑问句忘记把 be 动词或 do / does 放到前面。"
    ],
    challenge: "把 “Amy plays the piano.” 分别改成否定句和一般疑问句。",
    quiz: [
      {
        question: "“Tom is in the room.” 的一般疑问句是什么？",
        options: ["Is Tom in the room?", "Does Tom in the room?", "Tom is in the room?"],
        answer: 0,
        explain: "原句里已经有 is，只要把 is 提前。"
      },
      {
        question: "哪一句是否定句写对了？",
        options: ["She doesn't goes home by bus.", "She doesn't go home by bus.", "She not goes home by bus."],
        answer: 1,
        explain: "用了 doesn't，后面的 go 要用原形。"
      },
      {
        question: "“Do they like apples?” 这个句子需要回答 “是的” 时，正确答法是什么？",
        options: ["Yes, they do.", "Yes, they are.", "Yes, they like."],
        answer: 0,
        explain: "用 do 提问，一般也用 do 来回答。"
      }
    ],
    cards: [
      { front: "Is she happy?", back: "be 动词句提问：把 is / am / are 放前面。" },
      { front: "Does he like music?", back: "实义动词句提问：常借助 do / does。" }
    ]
  },
  {
    id: "present-continuous",
    unit: "第 5 课",
    title: "现在进行时",
    tag: "核心课",
    hook: "如果动作正在发生，就像你现在正在读这个页面，最常用现在进行时。",
    goal: "会用 am / is / are + 动词-ing 表示此刻正在发生的动作。",
    rule: "现在进行时 = be 动词 + 动词-ing。",
    steps: [
      "先判断是不是“现在正在发生”。",
      "选对 be 动词。",
      "把实义动词变成 ing 形式。"
    ],
    examples: [
      {
        en: "I am doing my homework now.",
        zh: "我现在正在写作业。",
        note: "am doing 表示此刻正在做。"
      },
      {
        en: "The boys are running on the playground.",
        zh: "男孩们正在操场上跑步。",
        note: "boys 是复数，所以用 are running。"
      },
      {
        en: "She is reading, not sleeping.",
        zh: "她正在读书，不是在睡觉。",
        note: "进行时也可以做对比表达。"
      }
    ],
    mistakes: [
      "只写 reading，不写 is / am / are。",
      "明明是每天都做的习惯，却误用进行时。",
      "把 runing 写错，注意 running 双写 n。"
    ],
    challenge: "写一句你现在正在做的事，再写一句你的家人现在正在做的事。",
    quiz: [
      {
        question: "哪一句是现在进行时？",
        options: ["She reads every night.", "She is reading now.", "She read last night."],
        answer: 1,
        explain: "is reading 符合 be 动词 + 动词-ing。"
      },
      {
        question: "“We ___ lunch now.” 应填什么？",
        options: ["eat", "are eating", "eats"],
        answer: 1,
        explain: "now 提醒你考虑现在进行时，we 配 are。"
      },
      {
        question: "为什么 “He is play basketball.” 不对？",
        options: ["因为 he 不能和 is 搭配", "因为 play 要变成 playing", "因为 basketball 不能当宾语"],
        answer: 1,
        explain: "现在进行时里的实义动词要用 ing 形式。"
      }
    ],
    cards: [
      { front: "now", back: "看到 now，常先想想是不是现在进行时。" },
      { front: "am / is / are + verb-ing", back: "这是现在进行时最重要的公式。" }
    ]
  },
  {
    id: "nouns-and-articles",
    unit: "第 6 课",
    title: "名词、冠词和单复数",
    tag: "基础补强",
    hook: "英语里“一个苹果”和“苹果们”长得不一样，冠词和单复数要一起看。",
    goal: "知道 a / an / the 的基本用法，能区分单数和复数。",
    rule: "单数可数名词前常要有 a / an / the / my 等限定词；两个或两个以上常用复数。",
    steps: [
      "先想这个名词是不是“一个”。",
      "再看它是不是可数名词。",
      "如果是泛指一个，常用 a / an；如果是大家都知道的那个，常用 the。"
    ],
    examples: [
      {
        en: "I have a pencil.",
        zh: "我有一支铅笔。",
        note: "pencil 是可数单数名词，前面要有 a。"
      },
      {
        en: "She eats an egg every morning.",
        zh: "她每天早上吃一个鸡蛋。",
        note: "egg 发音开头是元音音素，所以用 an。"
      },
      {
        en: "The books on the desk are mine.",
        zh: "桌子上的那些书是我的。",
        note: "说的是特定的书，所以用 the。"
      }
    ],
    mistakes: [
      "写成 I have pencil.，漏掉限定词。",
      "复数名词后面还配单数 be 动词。",
      "看到元音字母就机械用 an，要注意是读音不是字母。"
    ],
    challenge: "用 a / an / the 各写一个句子。",
    quiz: [
      {
        question: "哪一句正确？",
        options: ["She has cat.", "She has a cat.", "She has an cat."],
        answer: 1,
        explain: "cat 是可数单数名词，前面要有 a。"
      },
      {
        question: "“___ orange is on the table.” 如果是泛指一个橙子，应填什么？",
        options: ["A", "An", "The"],
        answer: 1,
        explain: "orange 的发音开头是元音音素，所以用 an。"
      },
      {
        question: "“These ___ new.” 应填什么？",
        options: ["book is", "books are", "book are"],
        answer: 1,
        explain: "these 表示复数，所以要用 books are。"
      }
    ],
    cards: [
      { front: "a vs an", back: "看发音开头，不只看字母。an apple, a book。" },
      { front: "single noun", back: "可数单数名词前面通常要有 a / an / the / my 等词。" }
    ]
  },
  {
    id: "adjectives-and-adverbs",
    unit: "第 7 课",
    title: "形容词和副词",
    tag: "表达升级",
    hook: "同一句话里，加上“快快地”“漂亮的”，画面就清楚多了。",
    goal: "会分辨形容词修饰名词，副词修饰动词或形容词。",
    rule: "形容词常放在名词前，或放在 be 动词后；副词常说明怎么做。",
    steps: [
      "想清楚你要修饰的是“人或物”，还是“动作”。",
      "修饰名词，多半用形容词。",
      "修饰动词，多半用副词。"
    ],
    examples: [
      {
        en: "This is a quiet room.",
        zh: "这是一个安静的房间。",
        note: "quiet 修饰 room，是形容词。"
      },
      {
        en: "The little girl sings beautifully.",
        zh: "那个小女孩唱得很美。",
        note: "beautifully 修饰 sings，是副词。"
      },
      {
        en: "Our teacher is kind.",
        zh: "我们的老师很亲切。",
        note: "kind 放在 is 后面，依然是形容词。"
      }
    ],
    mistakes: [
      "把 He runs quick. 写成 quick，应该是 quickly。",
      "看到 be 动词后面就以为一定是副词，其实常是形容词。",
      "只会背 -ly，不会先判断修饰对象。"
    ],
    challenge: "把 “The boy runs.” 改写得更生动：加一个形容词和一个副词。",
    quiz: [
      {
        question: "哪一个词最适合填进 “She is very ___.”？",
        options: ["careful", "carefully", "care"],
        answer: 0,
        explain: "is 后面常接形容词，careful 正确。"
      },
      {
        question: "“Tom writes ___.” 应该填什么？",
        options: ["neat", "neatly", "neatness"],
        answer: 1,
        explain: "这里修饰 writes 这个动作，所以用副词 neatly。"
      },
      {
        question: "在句子 “a tall tree” 里，tall 属于什么？",
        options: ["形容词", "副词", "动词"],
        answer: 0,
        explain: "tall 修饰 tree，是形容词。"
      }
    ],
    cards: [
      { front: "kind teacher", back: "形容词修饰名词：kind teacher。" },
      { front: "run quickly", back: "副词常修饰动作：run quickly。" }
    ]
  },
  {
    id: "prepositions",
    unit: "第 8 课",
    title: "in / on / at 表示位置",
    tag: "高频小词",
    hook: "这三个词很短，却几乎天天用。抓住“里面、表面、点”的感觉就好记多了。",
    goal: "掌握 in、on、at 表示位置时最常见的基本感觉。",
    rule: "in 强调里面；on 强调表面；at 常把位置当成一个点。",
    steps: [
      "先想物体是不是被包在里面。",
      "再想是不是接触在表面上。",
      "如果你只是把地点当成一个点来看，常用 at。"
    ],
    examples: [
      {
        en: "The keys are in the bag.",
        zh: "钥匙在包里面。",
        note: "被包在里面，用 in。"
      },
      {
        en: "The picture is on the wall.",
        zh: "画在墙上。",
        note: "接触在表面，用 on。"
      },
      {
        en: "My dad is at the bus stop.",
        zh: "我爸爸在公交站。",
        note: "把公交站看成一个点，用 at。"
      }
    ],
    mistakes: [
      "不先想空间关系，只死背搭配。",
      "把 in the wall 和 on the wall 混掉。",
      "看见大地点和小地点就只背规则，不看语境。"
    ],
    challenge: "分别用 in、on、at 各造一个地点句。",
    quiz: [
      {
        question: "“The milk is ___ the fridge.” 应填什么？",
        options: ["in", "on", "at"],
        answer: 0,
        explain: "牛奶在冰箱里面，所以用 in。"
      },
      {
        question: "“There is a notebook ___ the desk.” 应填什么？",
        options: ["in", "on", "at"],
        answer: 1,
        explain: "本子在桌面上，用 on。"
      },
      {
        question: "“Meet me ___ the school gate.” 哪个最合适？",
        options: ["in", "on", "at"],
        answer: 2,
        explain: "校门口常当成一个地点点位来看，用 at。"
      }
    ],
    cards: [
      { front: "in", back: "里面：in the box, in the room。" },
      { front: "on", back: "表面：on the desk, on the wall。" }
    ]
  },
  {
    id: "comparatives",
    unit: "第 9 课",
    title: "比较级",
    tag: "表达升级",
    hook: "一旦会比较，你就能说“更高、更快、更有趣”，表达马上丰富很多。",
    goal: "知道比较级常用来比较两个对象，并和 than 连用。",
    rule: "短词常加 -er，长词常用 more；比较时常跟 than。",
    steps: [
      "先确认是不是拿两个对象比。",
      "短形容词常加 -er，如 taller。",
      "较长的词常用 more，如 more beautiful。"
    ],
    examples: [
      {
        en: "My bag is bigger than yours.",
        zh: "我的书包比你的更大。",
        note: "big 变 bigger，要双写 g。"
      },
      {
        en: "Math is easier than I thought.",
        zh: "数学比我想的更容易。",
        note: "easy 变 easier，y 变 i 再加 er。"
      },
      {
        en: "This story is more interesting than that one.",
        zh: "这个故事比那个更有趣。",
        note: "interesting 比较长，用 more interesting。"
      }
    ],
    mistakes: [
      "只写 bigger，不写 than 对象，意思会不完整。",
      "把 more taller 这种形式混在一起。",
      "忘记一些不规则变化，比如 good -> better。"
    ],
    challenge: "比较你和朋友的一项特长，写一句比较级句子。",
    quiz: [
      {
        question: "哪一句正确？",
        options: ["My ruler is longer than yours.", "My ruler is more longer than yours.", "My ruler longer than yours."],
        answer: 0,
        explain: "long 是短词，用 longer than。"
      },
      {
        question: "“This box is ___ than that one.” 如果想说“更重”，应填什么？",
        options: ["heavyer", "heavier", "more heavy"],
        answer: 1,
        explain: "heavy 变比较级时，y 变 i，再加 er。"
      },
      {
        question: "good 的比较级是什么？",
        options: ["gooder", "more good", "better"],
        answer: 2,
        explain: "good 是不规则变化，比较级是 better。"
      }
    ],
    cards: [
      { front: "than", back: "比较级常和 than 连用：taller than, faster than。" },
      { front: "good -> better", back: "这是需要单独记住的不规则变化。" }
    ]
  },
  {
    id: "five-patterns",
    unit: "第 10 课",
    title: "五个基本句型",
    tag: "结构总复习",
    hook: "复杂句子再花，也离不开最基本的几种骨架。",
    goal: "认识最常见的五个句型，读长句时更不容易迷路。",
    rule: "先看动词需要带几个成员，再判断句型。",
    steps: [
      "主 + 谓：Birds sing.",
      "主 + 谓 + 宾：I read books.",
      "主 + 系 + 表：My room is tidy.",
      "主 + 谓 + 间宾 + 直宾：Mom gives me a pear.",
      "主 + 谓 + 宾 + 宾补：The game makes me happy."
    ],
    examples: [
      {
        en: "The baby smiles.",
        zh: "宝宝笑了。",
        note: "主 + 谓。"
      },
      {
        en: "Our teacher gives us homework.",
        zh: "老师给我们布置作业。",
        note: "us 是间接宾语，homework 是直接宾语。"
      },
      {
        en: "The song makes me calm.",
        zh: "这首歌让我平静。",
        note: "calm 是宾语 me 的补充说明。"
      }
    ],
    mistakes: [
      "以为 every sentence 都一定要有宾语。",
      "把主系表看成没有动词，其实系动词也是动词。",
      "一见长句就逐词翻译，不先找句型。"
    ],
    challenge: "把 “My dad cooks dinner for us.” 判断成基本句型，并说出宾语是谁。",
    quiz: [
      {
        question: "“The flowers smell sweet.” 属于哪种句型？",
        options: ["主 + 谓", "主 + 系 + 表", "主 + 谓 + 宾"],
        answer: 1,
        explain: "smell 在这里像系动词，sweet 是表语。"
      },
      {
        question: "“Jenny sends me a photo.” 里，me 是什么？",
        options: ["表语", "间接宾语", "宾语补足语"],
        answer: 1,
        explain: "me 是接收者，属于间接宾语。"
      },
      {
        question: "为什么学基本句型有用？",
        options: ["因为能让单词变多", "因为能帮助你更快看清句子结构", "因为每一句都只能属于一种时态"],
        answer: 1,
        explain: "先认结构，再处理细节，读句子会更稳。"
      }
    ],
    cards: [
      { front: "S + V", back: "主语 + 谓语：最短的完整句骨架。" },
      { front: "S + V + O", back: "主语 + 谓语 + 宾语：动作指向对象。" }
    ]
  },
  {
    id: "there-be",
    unit: "第 11 课",
    title: "there be 句型",
    tag: "高频句型",
    hook: "想说“某地有某物”，there be 是最顺手的句型。",
    goal: "会用 there is / there are 描述某个地方有什么。",
    rule: "there be 要跟后面的第一个名词保持单复数一致：单数用 is，复数用 are。",
    steps: [
      "先看你想介绍的是一个东西，还是多个东西。",
      "单数或不可数名词前面常用 there is。",
      "复数名词前面常用 there are。"
    ],
    examples: [
      {
        en: "There is a pencil on the desk.",
        zh: "桌子上有一支铅笔。",
        note: "a pencil 是单数，所以用 is。"
      },
      {
        en: "There are two cats under the tree.",
        zh: "树下有两只猫。",
        note: "two cats 是复数，所以用 are。"
      },
      {
        en: "There is some milk in the cup.",
        zh: "杯子里有一些牛奶。",
        note: "milk 是不可数名词，也常用 is。"
      }
    ],
    mistakes: [
      "看到离 be 最近的是地点短语，就忘记真正决定单复数的是后面的名词。",
      "把 There have 写成 there be 句型。",
      "中文直译成 “Desk on has a pencil.”。"
    ],
    challenge: "请分别用 there is 和 there are 写一句关于你书包或书桌的句子。",
    quiz: [
      {
        question: "“___ a clock on the wall.” 应填什么？",
        options: ["There is", "There are", "It is"],
        answer: 0,
        explain: "a clock 是单数，所以用 There is。"
      },
      {
        question: "哪一句正确？",
        options: ["There are a book on the chair.", "There is two books on the chair.", "There are two books on the chair."],
        answer: 2,
        explain: "two books 是复数，所以要用 There are。"
      },
      {
        question: "there be 句型最常用来表达什么？",
        options: ["谁喜欢什么", "某地有某物", "某人正在做什么"],
        answer: 1,
        explain: "there be 最常用于介绍“某个地方有什么”。"
      }
    ],
    cards: [
      { front: "There is ...", back: "后面第一个名词是单数或不可数时，常用 There is。" },
      { front: "There are ...", back: "后面第一个名词是复数时，常用 There are。" }
    ]
  },
  {
    id: "simple-past",
    unit: "第 12 课",
    title: "一般过去时",
    tag: "时间变化",
    hook: "昨天、上周、刚才发生过的事，最常用一般过去时。",
    goal: "知道一般过去时表示已经发生并结束的动作，会区分规则变化和常见不规则变化。",
    rule: "过去发生的动作常用动词过去式；提问和否定时常借助 did。",
    steps: [
      "先看是不是昨天、上周、刚刚、以前发生过的事。",
      "肯定句常把动词变成过去式。",
      "否定句和疑问句常用 did / didn't，后面的动词回到原形。"
    ],
    examples: [
      {
        en: "I watched a film last night.",
        zh: "我昨晚看了一场电影。",
        note: "watch 规则变化，加 -ed。"
      },
      {
        en: "We went to the museum on Sunday.",
        zh: "我们周日去了博物馆。",
        note: "go 的过去式是不规则变化 went。"
      },
      {
        en: "Did she finish her homework?",
        zh: "她完成作业了吗？",
        note: "用了 Did，finish 回到原形。"
      }
    ],
    mistakes: [
      "用了 did 以后，后面的动词还写成过去式。",
      "把 go、see、have 这类常见不规则过去式记混。",
      "看到 yesterday 却还用一般现在时。"
    ],
    challenge: "写一句你昨天做过的事，再把它改成一般疑问句。",
    quiz: [
      {
        question: "哪一句正确？",
        options: ["She played tennis yesterday.", "She plays tennis yesterday.", "She did played tennis yesterday."],
        answer: 0,
        explain: "yesterday 常提示一般过去时，肯定句用 played。"
      },
      {
        question: "“Did Tom ___ breakfast at home?” 应填什么？",
        options: ["ate", "eat", "eats"],
        answer: 1,
        explain: "用了 Did，后面的动词要回到原形 eat。"
      },
      {
        question: "go 的过去式是什么？",
        options: ["goed", "went", "gone"],
        answer: 1,
        explain: "go 的一般过去时是不规则变化 went。"
      }
    ],
    cards: [
      { front: "did + verb", back: "一般过去时提问或否定时，常用 did / didn't + 动词原形。" },
      { front: "go -> went", back: "这是最常见也最值得先记住的不规则过去式之一。" }
    ]
  },
  {
    id: "wh-questions",
    unit: "第 13 课",
    title: "特殊疑问句",
    tag: "开口提问",
    hook: "会问 what、where、when、why、how，英语对话就真的活起来了。",
    goal: "分清常见特殊疑问词的意思，并能按“疑问词 + 一般疑问句骨架”来造句。",
    rule: "特殊疑问句通常是在一般疑问句前面再加一个疑问词。",
    steps: [
      "先想你到底想问“什么、哪里、什么时候、为什么、怎样”。",
      "再把句子变成一般疑问句骨架。",
      "最后把疑问词放到最前面。"
    ],
    examples: [
      {
        en: "What do you eat for breakfast?",
        zh: "你早餐吃什么？",
        note: "what 问“什么”。"
      },
      {
        en: "Where is your school bag?",
        zh: "你的书包在哪里？",
        note: "where 问地点。"
      },
      {
        en: "Why were they late?",
        zh: "他们为什么迟到了？",
        note: "why 问原因，were 要放在主语前。"
      }
    ],
    mistakes: [
      "疑问词放对了，但后面句子还是陈述句顺序。",
      "what time 和 when 乱用，其实很多时候都能问时间，但语气和精细度不同。",
      "问主语时和问宾语时结构没分清。"
    ],
    challenge: "请各写一句 what、where、how 开头的问题，内容围绕学校生活。",
    quiz: [
      {
        question: "哪一句语序正确？",
        options: ["Where you are going?", "Where are you going?", "Where going are you?"],
        answer: 1,
        explain: "疑问词后面还是要接一般疑问句骨架：are you going。"
      },
      {
        question: "如果想问“你为什么笑？”，哪一句最合适？",
        options: ["Why do you laugh?", "Why are you laugh?", "What do you laugh?"],
        answer: 0,
        explain: "这是实义动词句，常用 do 来帮助提问。"
      },
      {
        question: "where 最常用来问什么？",
        options: ["原因", "方式", "地点"],
        answer: 2,
        explain: "where 主要问地点。"
      }
    ],
    cards: [
      { front: "What ...?", back: "what 常问“什么”。" },
      { front: "Where ...?", back: "where 常问地点。" }
    ]
  }
];

const storageKey = "grammarClubKidsState_v1";
const totalLessons = lessons.length;
const challengeSize = 5;
const questionBank = lessons.flatMap((lesson) =>
  lesson.quiz.map((item, questionIndex) => ({
    id: `${lesson.id}-${questionIndex}`,
    lessonId: lesson.id,
    lessonTitle: `${lesson.unit} · ${lesson.title}`,
    question: item.question,
    options: item.options,
    answer: item.answer,
    explain: item.explain
  }))
);
const questionLookup = new Map(questionBank.map((question) => [question.id, question]));
const flashcards = lessons.flatMap((lesson) =>
  lesson.cards.map((card) => ({
    ...card,
    lessonId: lesson.id,
    lessonTitle: `${lesson.unit} · ${lesson.title}`
  }))
);

const elements = {
  lessonMenu: document.getElementById("lessonMenu"),
  lessonView: document.getElementById("lessonView"),
  progressBar: document.getElementById("progressBar"),
  progressText: document.getElementById("progressText"),
  progressMessage: document.getElementById("progressMessage"),
  heroLessonCount: document.getElementById("heroLessonCount"),
  heroCompleted: document.getElementById("heroCompleted"),
  heroAccuracy: document.getElementById("heroAccuracy"),
  heroWrongCount: document.getElementById("heroWrongCount"),
  challengeSummary: document.getElementById("challengeSummary"),
  challengeBoard: document.getElementById("challengeBoard"),
  challengeSection: document.getElementById("challengeSection"),
  challengeModeBtn: document.getElementById("challengeModeBtn"),
  newChallengeBtn: document.getElementById("newChallengeBtn"),
  wrongSummary: document.getElementById("wrongSummary"),
  wrongBoard: document.getElementById("wrongBoard"),
  wrongSection: document.getElementById("wrongSection"),
  wrongModeBtn: document.getElementById("wrongModeBtn"),
  clearWrongBtn: document.getElementById("clearWrongBtn"),
  flashcard: document.getElementById("flashcard"),
  flashcardLesson: document.getElementById("flashcardLesson"),
  flipCardBtn: document.getElementById("flipCardBtn"),
  prevCardBtn: document.getElementById("prevCardBtn"),
  nextCardBtn: document.getElementById("nextCardBtn"),
  randomCardBtn: document.getElementById("randomCardBtn"),
  reviewSection: document.getElementById("reviewSection"),
  reviewBtn: document.getElementById("reviewBtn"),
  startLearningBtn: document.getElementById("startLearningBtn")
};

function shuffleArray(items) {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

function createChallengeQuestions() {
  return shuffleArray(questionBank).slice(0, Math.min(challengeSize, questionBank.length));
}

function createEmptyChallenge() {
  return {
    questions: createChallengeQuestions(),
    answers: {},
    roundsCompleted: 0,
    bestScore: 0,
    lastScore: null
  };
}

function getDefaultState() {
  return {
    selectedLessonId: lessons[0].id,
    completedIds: [],
    answers: {},
    wrongIds: [],
    wrongReview: {},
    cardIndex: 0,
    cardSide: "front",
    challenge: createEmptyChallenge()
  };
}

function loadState() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return getDefaultState();
    }

    const parsed = JSON.parse(raw);
    const normalizedWrongIds = Array.isArray(parsed.wrongIds)
      ? [...new Set(parsed.wrongIds.filter((questionId) => questionLookup.has(questionId)))]
      : [];
    const normalizedWrongReview =
      parsed.wrongReview && typeof parsed.wrongReview === "object"
        ? Object.fromEntries(
            Object.entries(parsed.wrongReview)
              .filter(([questionId]) => questionLookup.has(questionId))
              .map(([questionId, value]) => [
                questionId,
                {
                  selectedIndex: typeof value?.selectedIndex === "number" ? value.selectedIndex : null,
                  correct: Boolean(value?.correct)
                }
              ])
          )
        : {};

    const normalizedChallenge = {
      ...createEmptyChallenge(),
      ...(parsed.challenge && typeof parsed.challenge === "object" ? parsed.challenge : {}),
      questions:
        Array.isArray(parsed.challenge?.questions) && parsed.challenge.questions.length > 0
          ? parsed.challenge.questions
          : createChallengeQuestions(),
      answers:
        parsed.challenge?.answers && typeof parsed.challenge.answers === "object"
          ? parsed.challenge.answers
          : {}
    };

    return {
      ...getDefaultState(),
      ...parsed,
      selectedLessonId: lessons.some((lesson) => lesson.id === parsed.selectedLessonId)
        ? parsed.selectedLessonId
        : lessons[0].id,
      completedIds: Array.isArray(parsed.completedIds) ? parsed.completedIds : [],
      answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {},
      wrongIds: normalizedWrongIds,
      wrongReview: normalizedWrongReview,
      challenge: normalizedChallenge
    };
  } catch (error) {
    return getDefaultState();
  }
}

let state = loadState();

function saveState() {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    // Ignore storage errors in private browsing or restricted environments.
  }
}

function getLessonById(lessonId) {
  return lessons.find((lesson) => lesson.id === lessonId) || lessons[0];
}

function getLessonAnswers(lessonId) {
  return state.answers[lessonId] || {};
}

function getLessonScore(lesson) {
  const lessonAnswers = getLessonAnswers(lesson.id);
  let correct = 0;

  lesson.quiz.forEach((item, index) => {
    if (lessonAnswers[index] === item.answer) {
      correct += 1;
    }
  });

  return {
    correct,
    total: lesson.quiz.length
  };
}

function getStats() {
  let totalAnswered = 0;
  let totalCorrect = 0;

  lessons.forEach((lesson) => {
    const answers = getLessonAnswers(lesson.id);
    lesson.quiz.forEach((item, index) => {
      if (typeof answers[index] === "number") {
        totalAnswered += 1;
        if (answers[index] === item.answer) {
          totalCorrect += 1;
        }
      }
    });
  });

  return {
    completedCount: state.completedIds.length,
    totalAnswered,
    totalCorrect,
    accuracy: totalAnswered === 0 ? 0 : Math.round((totalCorrect / totalAnswered) * 100)
  };
}

function getChallengeState() {
  if (!state.challenge || !Array.isArray(state.challenge.questions) || state.challenge.questions.length === 0) {
    state.challenge = createEmptyChallenge();
  }

  return state.challenge;
}

function getChallengeScore() {
  const challenge = getChallengeState();
  let correct = 0;
  let answered = 0;

  challenge.questions.forEach((question) => {
    if (typeof challenge.answers[question.id] === "number") {
      answered += 1;
      if (challenge.answers[question.id] === question.answer) {
        correct += 1;
      }
    }
  });

  return {
    correct,
    answered,
    total: challenge.questions.length,
    finished: answered === challenge.questions.length
  };
}

function getWrongQuestions() {
  return state.wrongIds.map((questionId) => questionLookup.get(questionId)).filter(Boolean);
}

function syncWrongQuestion(questionId, isCorrect) {
  if (!questionLookup.has(questionId)) {
    return;
  }

  if (isCorrect) {
    state.wrongIds = state.wrongIds.filter((id) => id !== questionId);
    if (state.wrongReview[questionId]) {
      delete state.wrongReview[questionId];
    }
    return;
  }

  if (!state.wrongIds.includes(questionId)) {
    state.wrongIds = [questionId, ...state.wrongIds];
  }
}

function clearWrongQuestions() {
  state.wrongIds = [];
  state.wrongReview = {};
  saveState();
  renderAll();
}

function getStarString(score) {
  const full = "★".repeat(score);
  const empty = "☆".repeat(Math.max(0, challengeSize - score));
  return `${full}${empty}`;
}

function startNewChallenge() {
  const previous = getChallengeState();
  state.challenge = {
    questions: createChallengeQuestions(),
    answers: {},
    roundsCompleted: previous.roundsCompleted,
    bestScore: previous.bestScore,
    lastScore: previous.lastScore
  };
  saveState();
  renderAll();
}

function handleChallengeAnswer(questionId, optionIndex) {
  const challenge = getChallengeState();
  if (typeof challenge.answers[questionId] === "number") {
    return;
  }

  challenge.answers[questionId] = optionIndex;
  const question = questionLookup.get(questionId);
  if (question) {
    syncWrongQuestion(questionId, optionIndex === question.answer);
  }

  const score = getChallengeScore();
  if (score.finished && challenge.lastScore === null) {
    challenge.roundsCompleted += 1;
    challenge.lastScore = score.correct;
    challenge.bestScore = Math.max(challenge.bestScore, score.correct);
  }

  saveState();
  renderAll();
}

function getRecommendedLesson() {
  return lessons.find((lesson) => !state.completedIds.includes(lesson.id)) || lessons[0];
}

function getFlashcardIndexForLesson(lessonId) {
  const index = flashcards.findIndex((card) => card.lessonId === lessonId);
  return index >= 0 ? index : 0;
}

function selectLesson(lessonId) {
  state.selectedLessonId = lessonId;
  state.cardIndex = getFlashcardIndexForLesson(lessonId);
  state.cardSide = "front";
  saveState();
  renderAll();
}

function handleAnswer(lessonId, questionIndex, optionIndex) {
  if (!state.answers[lessonId]) {
    state.answers[lessonId] = {};
  }

  state.answers[lessonId][questionIndex] = optionIndex;
  const question = questionLookup.get(`${lessonId}-${questionIndex}`);
  if (question) {
    syncWrongQuestion(question.id, optionIndex === question.answer);
  }
  saveState();
  renderAll();
}

function toggleLessonComplete(lessonId) {
  if (state.completedIds.includes(lessonId)) {
    state.completedIds = state.completedIds.filter((id) => id !== lessonId);
  } else {
    state.completedIds = [...state.completedIds, lessonId];
  }

  saveState();
  renderAll();
}

function goToNextLesson() {
  const currentIndex = lessons.findIndex((lesson) => lesson.id === state.selectedLessonId);
  const nextLesson = lessons[currentIndex + 1] || lessons[0];
  selectLesson(nextLesson.id);
}

function jumpToRecommendedLesson() {
  const recommended = getRecommendedLesson();
  selectLesson(recommended.id);
}

function jumpToChallengeMode() {
  if (getChallengeScore().finished) {
    startNewChallenge();
  }

  elements.challengeSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function jumpToWrongReview() {
  elements.wrongSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleWrongReviewAnswer(questionId, optionIndex) {
  const question = questionLookup.get(questionId);
  if (!question) {
    return;
  }

  const isCorrect = optionIndex === question.answer;
  state.wrongReview[questionId] = {
    selectedIndex: optionIndex,
    correct: isCorrect
  };

  if (isCorrect) {
    syncWrongQuestion(questionId, true);
  }

  saveState();
  renderAll();
}

function setFlashcard(index) {
  const total = flashcards.length;
  state.cardIndex = (index + total) % total;
  state.cardSide = "front";
  saveState();
  renderFlashcard();
}

function randomFlashcard() {
  const randomIndex = Math.floor(Math.random() * flashcards.length);
  setFlashcard(randomIndex);
}

function toggleFlashcardSide() {
  state.cardSide = state.cardSide === "front" ? "back" : "front";
  saveState();
  renderFlashcard();
}

function buildQuizOptionClass(isChosen, isCorrectAnswer, shouldReveal, optionIndex, answerIndex) {
  const classes = ["option-btn"];

  if (isChosen) {
    classes.push("chosen");
  }

  if (shouldReveal && optionIndex === answerIndex) {
    classes.push("correct-answer");
  }

  if (shouldReveal && isChosen && optionIndex !== answerIndex) {
    classes.push("incorrect-answer");
  }

  return classes.join(" ");
}

function renderMenu() {
  elements.lessonMenu.innerHTML = lessons
    .map((lesson) => {
      const isActive = lesson.id === state.selectedLessonId;
      const isDone = state.completedIds.includes(lesson.id);
      const score = getLessonScore(lesson);
      const status = isDone ? "已完成" : `${score.correct}/${score.total} 题`;

      return `
        <button
          class="menu-btn ${isActive ? "active" : ""} ${isDone ? "done" : ""}"
          data-lesson-select="${lesson.id}"
        >
          <span class="menu-index">${lesson.unit.replace("第 ", "").replace(" 课", "")}</span>
          <span class="menu-title">
            <strong>${lesson.title}</strong>
            <span>${lesson.tag}</span>
          </span>
          <span class="menu-status">${status}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-lesson-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selectLesson(button.getAttribute("data-lesson-select"));
    });
  });
}

function renderProgress() {
  const stats = getStats();
  const progressPercent = Math.round((stats.completedCount / totalLessons) * 100);
  const recommended = getRecommendedLesson();
  const wrongCount = state.wrongIds.length;

  elements.heroLessonCount.textContent = `${totalLessons} 节微课`;
  elements.progressBar.style.width = `${progressPercent}%`;
  elements.progressText.textContent = `${stats.completedCount} / ${totalLessons}`;
  elements.progressMessage.textContent =
    stats.completedCount === totalLessons
      ? "全部课程都打卡了，接下来可以反复刷错题和复习卡。"
      : `推荐下一节：${recommended.unit}《${recommended.title}》`;
  elements.heroCompleted.textContent = String(stats.completedCount);
  elements.heroAccuracy.textContent = `${stats.accuracy}%`;
  elements.heroWrongCount.textContent = String(wrongCount);
}

function renderLessonView() {
  const lesson = getLessonById(state.selectedLessonId);
  const lessonAnswers = getLessonAnswers(lesson.id);
  const score = getLessonScore(lesson);
  const isDone = state.completedIds.includes(lesson.id);

  const examplesHtml = lesson.examples
    .map(
      (example) => `
        <article class="example-card">
          <h3>例句</h3>
          <p class="example-en">${example.en}</p>
          <p class="example-zh">${example.zh}</p>
          <p>${example.note}</p>
        </article>
      `
    )
    .join("");

  const quizHtml = lesson.quiz
    .map((item, questionIndex) => {
      const chosenIndex = lessonAnswers[questionIndex];
      const hasAnswered = typeof chosenIndex === "number";
      const cardClass = !hasAnswered
        ? "quiz-card"
        : chosenIndex === item.answer
          ? "quiz-card correct"
          : "quiz-card wrong";

      const optionsHtml = item.options
        .map((option, optionIndex) => {
          const isChosen = chosenIndex === optionIndex;
          return `
            <button
              class="${buildQuizOptionClass(isChosen, optionIndex === item.answer, hasAnswered, optionIndex, item.answer)}"
              data-answer-button="${lesson.id}"
              data-question-index="${questionIndex}"
              data-option-index="${optionIndex}"
            >
              ${String.fromCharCode(65 + optionIndex)}. ${option}
            </button>
          `;
        })
        .join("");

      return `
        <article class="${cardClass}">
          <h3>小练习 ${questionIndex + 1}</h3>
          <p class="quiz-question">${item.question}</p>
          <div class="quiz-options">${optionsHtml}</div>
          ${
            hasAnswered
              ? `<p class="quiz-explain"><strong>${chosenIndex === item.answer ? "答对了。 " : "再看一眼。 "}</strong>${item.explain}</p>`
              : ""
          }
        </article>
      `;
    })
    .join("");

  elements.lessonView.innerHTML = `
    <header class="lesson-header">
      <div class="lesson-kicker">
        <span class="lesson-chip">${lesson.unit}</span>
        <span class="lesson-chip">${lesson.tag}</span>
        <span class="lesson-progress-tag">${score.correct}/${score.total} 题正确</span>
      </div>
      <h2>${lesson.title}</h2>
      <p class="lesson-hook">${lesson.hook}</p>
    </header>

    <section class="lesson-grid">
      <div class="info-card">
        <h3>这节要学会什么</h3>
        <p>${lesson.goal}</p>
      </div>

      <div class="rule-box">
        <h3>一句规则</h3>
        <p>${lesson.rule}</p>
      </div>

      <div class="info-card">
        <h3>怎么一步步判断</h3>
        <ol class="step-list">
          ${lesson.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </div>

      <div class="mistake-box">
        <h3>最容易犯的错</h3>
        <ul class="mistake-list">
          ${lesson.mistakes.map((mistake) => `<li>${mistake}</li>`).join("")}
        </ul>
      </div>
    </section>

    <section class="example-grid">
      ${examplesHtml}
    </section>

    <section class="challenge-box">
      <h3>动手试一试</h3>
      <p>${lesson.challenge}</p>
    </section>

    <section class="quiz-list">
      ${quizHtml}
    </section>

    <section class="lesson-actions">
      <button id="toggleCompleteBtn" class="primary-btn">
        ${isDone ? "取消完成标记" : "我学完这节了"}
      </button>
      <button id="nextLessonBtn" class="ghost-btn">去下一节</button>
    </section>
  `;

  document.querySelectorAll("[data-answer-button]").forEach((button) => {
    button.addEventListener("click", () => {
      handleAnswer(
        button.getAttribute("data-answer-button"),
        Number(button.getAttribute("data-question-index")),
        Number(button.getAttribute("data-option-index"))
      );
    });
  });

  document.getElementById("toggleCompleteBtn").addEventListener("click", () => {
    toggleLessonComplete(lesson.id);
  });

  document.getElementById("nextLessonBtn").addEventListener("click", goToNextLesson);
}

function renderChallenge() {
  const challenge = getChallengeState();
  const score = getChallengeScore();
  const lastScoreText =
    challenge.lastScore === null ? "还没完成本轮" : `${challenge.lastScore} / ${challenge.questions.length}`;

  elements.challengeSummary.innerHTML = `
    <article class="challenge-stat">
      <span>本轮进度</span>
      <strong>${score.answered} / ${score.total}</strong>
    </article>
    <article class="challenge-stat">
      <span>历史最好</span>
      <strong>${challenge.bestScore} / ${challenge.questions.length}</strong>
    </article>
    <article class="challenge-stat">
      <span>最近成绩</span>
      <strong>${lastScoreText}</strong>
      <div class="challenge-stars">${challenge.lastScore === null ? "☆☆☆☆☆" : getStarString(challenge.lastScore)}</div>
    </article>
  `;

  elements.challengeBoard.innerHTML = challenge.questions
    .map((question, index) => {
      const chosenIndex = challenge.answers[question.id];
      const hasAnswered = typeof chosenIndex === "number";
      const cardClass = !hasAnswered
        ? "quiz-card"
        : chosenIndex === question.answer
          ? "quiz-card correct"
          : "quiz-card wrong";

      const optionsHtml = question.options
        .map((option, optionIndex) => `
          <button
            class="${buildQuizOptionClass(chosenIndex === optionIndex, optionIndex === question.answer, hasAnswered, optionIndex, question.answer)}"
            data-challenge-question="${question.id}"
            data-challenge-option="${optionIndex}"
          >
            ${String.fromCharCode(65 + optionIndex)}. ${option}
          </button>
        `)
        .join("");

      return `
        <article class="${cardClass}">
          <h3>闯关题 ${index + 1}</h3>
          <p class="challenge-question-meta">${question.lessonTitle}</p>
          <p class="quiz-question">${question.question}</p>
          <div class="quiz-options">${optionsHtml}</div>
          ${
            hasAnswered
              ? `<p class="quiz-explain"><strong>${chosenIndex === question.answer ? "答对了。 " : "再试试。 "}</strong>${question.explain}</p>`
              : ""
          }
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-challenge-question]").forEach((button) => {
    button.addEventListener("click", () => {
      handleChallengeAnswer(
        button.getAttribute("data-challenge-question"),
        Number(button.getAttribute("data-challenge-option"))
      );
    });
  });
}

function renderWrongBook() {
  const wrongQuestions = getWrongQuestions();
  const totalQuestionCount = questionBank.length;

  elements.wrongSummary.innerHTML = `
    <article class="wrongbook-stat">
      <span>当前错题</span>
      <strong>${wrongQuestions.length}</strong>
    </article>
    <article class="wrongbook-stat">
      <span>题库总数</span>
      <strong>${totalQuestionCount}</strong>
    </article>
    <article class="wrongbook-stat">
      <span>清理方式</span>
      <strong>${wrongQuestions.length === 0 ? "已清空" : "答对毕业"}</strong>
      <p class="wrongbook-note">${wrongQuestions.length === 0 ? "继续保持，做题也别着急。" : "先把错题做对，再去刷新题。"}</p>
    </article>
  `;

  if (wrongQuestions.length === 0) {
    elements.wrongBoard.innerHTML = `
      <article class="wrongbook-empty">
        <h3>现在没有待回炉的错题</h3>
        <p>继续学新课，或者先去做一轮 5 题闯关。答错的题会自动来到这里。</p>
      </article>
    `;
    return;
  }

  elements.wrongBoard.innerHTML = wrongQuestions
    .map((question, index) => {
      const reviewState = state.wrongReview[question.id];
      const chosenIndex = reviewState?.selectedIndex;
      const hasAnswered = typeof chosenIndex === "number";
      const isCorrect = reviewState?.correct === true;
      const cardClass = !hasAnswered ? "quiz-card" : isCorrect ? "quiz-card correct" : "quiz-card wrong";

      const optionsHtml = question.options
        .map((option, optionIndex) => `
          <button
            class="${buildQuizOptionClass(chosenIndex === optionIndex, optionIndex === question.answer, hasAnswered, optionIndex, question.answer)}"
            data-wrong-question="${question.id}"
            data-wrong-option="${optionIndex}"
          >
            ${String.fromCharCode(65 + optionIndex)}. ${option}
          </button>
        `)
        .join("");

      return `
        <article class="${cardClass}">
          <h3>回炉题 ${index + 1}</h3>
          <p class="challenge-question-meta">${question.lessonTitle}</p>
          <p class="quiz-question">${question.question}</p>
          <div class="quiz-options">${optionsHtml}</div>
          ${
            hasAnswered
              ? `<p class="quiz-explain"><strong>${isCorrect ? "这题毕业了。 " : "还差一点。 "}</strong>${question.explain}</p>`
              : `<p class="quiz-explain">先自己想，再点一个答案。答对后这题会自动从错题本移出。</p>`
          }
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-wrong-question]").forEach((button) => {
    button.addEventListener("click", () => {
      handleWrongReviewAnswer(
        button.getAttribute("data-wrong-question"),
        Number(button.getAttribute("data-wrong-option"))
      );
    });
  });
}

function renderFlashcard() {
  const card = flashcards[state.cardIndex] || flashcards[0];
  const showFront = state.cardSide === "front";
  const currentNumber = state.cardIndex + 1;

  elements.flashcardLesson.textContent = `${card.lessonTitle} · 卡片 ${currentNumber}/${flashcards.length}`;
  elements.flipCardBtn.textContent = showFront ? "翻到背面" : "翻回正面";
  elements.flashcard.innerHTML = `
    <span class="flashcard-label">${showFront ? "正面" : "背面"}</span>
    <span class="flashcard-main">${showFront ? card.front : card.back}</span>
    <span class="flashcard-hint">${showFront ? "先自己想一想，再翻面。" : "读懂后再说一遍，更容易记住。"}</span>
  `;
}

function renderAll() {
  renderMenu();
  renderProgress();
  renderLessonView();
  renderChallenge();
  renderWrongBook();
  renderFlashcard();
}

elements.startLearningBtn.addEventListener("click", jumpToRecommendedLesson);
elements.challengeModeBtn.addEventListener("click", jumpToChallengeMode);
elements.newChallengeBtn.addEventListener("click", startNewChallenge);
elements.wrongModeBtn.addEventListener("click", jumpToWrongReview);
elements.clearWrongBtn.addEventListener("click", clearWrongQuestions);
elements.reviewBtn.addEventListener("click", () => {
  randomFlashcard();
  elements.reviewSection.scrollIntoView({ behavior: "smooth", block: "start" });
});
elements.flipCardBtn.addEventListener("click", toggleFlashcardSide);
elements.flashcard.addEventListener("click", toggleFlashcardSide);
elements.prevCardBtn.addEventListener("click", () => setFlashcard(state.cardIndex - 1));
elements.nextCardBtn.addEventListener("click", () => setFlashcard(state.cardIndex + 1));
elements.randomCardBtn.addEventListener("click", randomFlashcard);

renderAll();
