// 人格解码器题目数据 - 60道精选题目
export const mbtiQuestions = [
  // ===== E/I 维度 (能量获取方式) - 15题 =====
  {
    id: 1,
    dimension: 'EI',
    question: '周末你想要怎么度过？',
    options: [
      { text: '和一大群朋友出去社交聚会', letter: 'E' },
      { text: '一个人在家看书、看电影或独处', letter: 'I' }
    ]
  },
  {
    id: 2,
    question: '你在社交场合中通常？',
    options: [
      { text: '主动和别人交谈，成为焦点', letter: 'E' },
      { text: '等待别人来和你搭话', letter: 'I' }
    ]
  },
  {
    id: 3,
    question: '空闲时间你更喜欢？',
    options: [
      { text: '参加各种社交活动或聚会', letter: 'E' },
      { text: '阅读、研究或学习新技能', letter: 'I' }
    ]
  },
  {
    id: 4,
    question: '你更容易从什么中获得能量？',
    options: [
      { text: '与人的互动和交流', letter: 'E' },
      { text: '独处和内省的时间', letter: 'I' }
    ]
  },
  {
    id: 5,
    question: '你更倾向于？',
    options: [
      { text: '在人群中活跃气氛', letter: 'E' },
      { text: '在安静的角落思考问题', letter: 'I' }
    ]
  },
  {
    id: 6,
    question: '参加派对时，你通常会？',
    options: [
      { text: '和尽可能多的人交流', letter: 'E' },
      { text: '和几个熟悉的朋友深入聊天', letter: 'I' }
    ]
  },
  {
    id: 7,
    question: '独自旅行时你更享受？',
    options: [
      { text: '结识新朋友和当地人', letter: 'E' },
      { text: '独自探索，沉浸在风景中', letter: 'I' }
    ]
  },
  {
    id: 8,
    question: '当你要做演讲或发言时？',
    options: [
      { text: '享受站在众人面前的感觉', letter: 'E' },
      { text: '会感到紧张，需要充分准备', letter: 'I' }
    ]
  },
  {
    id: 9,
    question: '你更喜欢的工作环境是？',
    options: [
      { text: '开放式的办公室，大家可以随时交流', letter: 'E' },
      { text: '安静独立的办公空间，可以专注思考', letter: 'I' }
    ]
  },
  {
    id: 10,
    question: '在群聊中，你通常是？',
    options: [
      { text: '消息最活跃、话最多的那个', letter: 'E' },
      { text: '偶尔看看，很少主动发言', letter: 'I' }
    ]
  },
  {
    id: 11,
    question: '你更喜欢什么样的朋友关系？',
    options: [
      { text: '有很多朋友，保持广泛联系', letter: 'E' },
      { text: '几个知心朋友，保持深度交流', letter: 'I' }
    ]
  },
  {
    id: 12,
    question: '当遇到问题时，你更倾向于？',
    options: [
      { text: '找人讨论，听取多方意见', letter: 'E' },
      { text: '自己思考，找到解决方案', letter: 'I' }
    ]
  },
  {
    id: 13,
    question: '午餐时间你更喜欢？',
    options: [
      { text: '和同事一起去餐厅，边吃边聊', letter: 'E' },
      { text: '自己一个人吃，顺便看看书或手机', letter: 'I' }
    ]
  },
  {
    id: 14,
    question: '你在陌生人面前通常？',
    options: [
      { text: '很快就能打开话匣子', letter: 'E' },
      { text: '比较沉默，需要时间熟悉', letter: 'I' }
    ]
  },
  {
    id: 15,
    question: '社交活动结束后，你通常？',
    options: [
      { text: '感觉精力充沛，还想继续', letter: 'E' },
      { text: '感觉疲惫，需要独处恢复', letter: 'I' }
    ]
  },

  // ===== S/N 维度 (感知方式) - 15题 =====
  {
    id: 16,
    question: '你在工作中更看重什么？',
    options: [
      { text: '实际可行的方案和具体细节', letter: 'S' },
      { text: '创造性的解决方案和新想法', letter: 'N' }
    ]
  },
  {
    id: 17,
    question: '你更感兴趣的是？',
    options: [
      { text: '眼前存在的事物和事实', letter: 'S' },
      { text: '未来可能发生的事物和可能性', letter: 'N' }
    ]
  },
  {
    id: 18,
    question: '学习新东西时，你更喜欢？',
    options: [
      { text: '边做边学，通过实践掌握', letter: 'S' },
      { text: '先了解理论，再付诸实践', letter: 'N' }
    ]
  },
  {
    id: 19,
    question: '你更相信？',
    options: [
      { text: '自己的观察和经验', letter: 'S' },
      { text: '自己的直觉和第六感', letter: 'N' }
    ]
  },
  {
    id: 20,
    question: '在团队合作中，你更像是？',
    options: [
      { text: '确保计划顺利执行的执行者', letter: 'S' },
      { text: '提出新想法的创新者', letter: 'N' }
    ]
  },
  {
    id: 21,
    question: '你更关注？',
    options: [
      { text: '具体的事实和数据', letter: 'S' },
      { text: '抽象的概念和理论', letter: 'N' }
    ]
  },
  {
    id: 22,
    question: '在日常生活中，你更在意？',
    options: [
      { text: '如何完成任务', letter: 'S' },
      { text: '为什么会有这样的任务', letter: 'N' }
    ]
  },
  {
    id: 23,
    question: '你更容易？',
    options: [
      { text: '记住具体的细节', letter: 'S' },
      { text: '记住整体的概念', letter: 'N' }
    ]
  },
  {
    id: 24,
    question: '你更擅长？',
    options: [
      { text: '解决具体问题', letter: 'S' },
      { text: '发现新的可能性', letter: 'N' }
    ]
  },
  {
    id: 25,
    question: '读小说时，你更关注？',
    options: [
      { text: '故事情节和具体事件', letter: 'S' },
      { text: '人物内心和深层含义', letter: 'N' }
    ]
  },
  {
    id: 26,
    question: '你更喜欢哪种解决问题的方式？',
    options: [
      { text: '使用已经被验证的方法', letter: 'S' },
      { text: '尝试全新的、未被使用的方法', letter: 'N' }
    ]
  },
  {
    id: 27,
    question: '当你听到一个新奇的想法时，你通常会？',
    options: [
      { text: '先考虑它是否可行', letter: 'S' },
      { text: '先欣赏它的创意和可能性', letter: 'N' }
    ]
  },
  {
    id: 28,
    question: '你更倾向于记住？',
    options: [
      { text: '具体的事实、数字和日期', letter: 'S' },
      { text: '图案、关系和模式', letter: 'N' }
    ]
  },
  {
    id: 29,
    question: '在制定计划时，你更关注？',
    options: [
      { text: '具体的步骤和时间表', letter: 'S' },
      { text: '整体方向和可能的发展', letter: 'N' }
    ]
  },
  {
    id: 30,
    question: '你更喜欢什么样的讨论？',
    options: [
      { text: '讨论具体的实施方案', letter: 'S' },
      { text: '探索抽象的可能性和创意', letter: 'N' }
    ]
  },

  // ===== T/F 维度 (决策方式) - 15题 =====
  {
    id: 31,
    question: '做决定时，你更倾向于？',
    options: [
      { text: '遵循逻辑和客观分析', letter: 'T' },
      { text: '考虑他人的感受和价值观', letter: 'F' }
    ]
  },
  {
    id: 32,
    question: '当和别人发生分歧时，你更看重？',
    options: [
      { text: '事情本身的对错', letter: 'T' },
      { text: '维护和谐的关系', letter: 'F' }
    ]
  },
  {
    id: 33,
    question: '你更容易被什么所吸引？',
    options: [
      { text: '理性、有逻辑的讨论', letter: 'T' },
      { text: '充满情感和创意的表达', letter: 'F' }
    ]
  },
  {
    id: 34,
    question: '当你需要做重要决定时？',
    options: [
      { text: '会深入分析利弊后再决定', letter: 'T' },
      { text: '会考虑自己的内心感受', letter: 'F' }
    ]
  },
  {
    id: 35,
    question: '你更喜欢参加？',
    options: [
      { text: '有具体话题讨论的会议', letter: 'T' },
      { text: '能自由交流想法的讨论', letter: 'F' }
    ]
  },
  {
    id: 36,
    question: '你在乎别人的看法吗？',
    options: [
      { text: '不太在乎，我有自己的判断', letter: 'T' },
      { text: '会在意，希望被理解和认可', letter: 'F' }
    ]
  },
  {
    id: 37,
    question: '你更喜欢什么样的朋友？',
    options: [
      { text: '头脑冷静、理智型', letter: 'T' },
      { text: '善解人意、温暖型', letter: 'F' }
    ]
  },
  {
    id: 38,
    question: '当你的朋友向你倾诉烦恼时，你通常会？',
    options: [
      { text: '帮他分析问题，提出解决方案', letter: 'T' },
      { text: '先安慰他，倾听和共情', letter: 'F' }
    ]
  },
  {
    id: 39,
    question: '你更欣赏什么样的领导？',
    options: [
      { text: '公平公正、赏罚分明的', letter: 'T' },
      { text: '关心员工、善于沟通的', letter: 'F' }
    ]
  },
  {
    id: 40,
    question: '在评价一部电影时，你更看重？',
    options: [
      { text: '剧情逻辑和制作质量', letter: 'T' },
      { text: '情感表达和艺术感染力', letter: 'F' }
    ]
  },
  {
    id: 41,
    question: '当别人犯错时，你的第一反应是？',
    options: [
      { text: '指出错误，分析原因', letter: 'T' },
      { text: '安慰对方，理解对方的难处', letter: 'F' }
    ]
  },
  {
    id: 42,
    question: '你做决定时更依赖？',
    options: [
      { text: '客观事实和逻辑推理', letter: 'T' },
      { text: '个人价值观和情感判断', letter: 'F' }
    ]
  },
  {
    id: 43,
    question: '你觉得自己更擅长？',
    options: [
      { text: '分析利弊，做出最优选择', letter: 'T' },
      { text: '理解他人需求，协调关系', letter: 'F' }
    ]
  },
  {
    id: 44,
    question: '在争论中，你更希望？',
    options: [
      { text: '通过论证找出正确答案', letter: 'T' },
      { text: '通过沟通增进相互理解', letter: 'F' }
    ]
  },
  {
    id: 45,
    question: '你更认同以下哪种说法？',
    options: [
      { text: '对事不对人，坚持原则', letter: 'T' },
      { text: '人与人之间需要互相体谅', letter: 'F' }
    ]
  },

  // ===== J/P 维度 (生活方式) - 15题 =====
  {
    id: 46,
    question: '面对计划外的变化时，你通常？',
    options: [
      { text: '喜欢按计划行事，有条不紊', letter: 'J' },
      { text: '喜欢保持灵活，随机应变', letter: 'P' }
    ]
  },
  {
    id: 47,
    question: '你的工作环境更喜欢？',
    options: [
      { text: '有条理、有秩序的工作空间', letter: 'J' },
      { text: '自由随意、灵活的工作空间', letter: 'P' }
    ]
  },
  {
    id: 48,
    question: '你更喜欢什么样的工作方式？',
    options: [
      { text: '按照清单一项项完成', letter: 'J' },
      { text: '根据心情随时调整', letter: 'P' }
    ]
  },
  {
    id: 49,
    question: '你更喜欢？',
    options: [
      { text: '提前规划好行程', letter: 'J' },
      { text: '随性而为，走到哪算哪', letter: 'P' }
    ]
  },
  {
    id: 50,
    question: '你更喜欢的生活是？',
    options: [
      { text: '有计划、有目标的', letter: 'J' },
      { text: '自由、随性的', letter: 'P' }
    ]
  },
  {
    id: 51,
    question: '你更喜欢的工作节奏是？',
    options: [
      { text: '按部就班，有deadline驱动', letter: 'J' },
      { text: '自由灵活，随时可以调整', letter: 'P' }
    ]
  },
  {
    id: 52,
    question: '当你要完成一个项目时，你通常会？',
    options: [
      { text: '制定详细的计划和时间表', letter: 'J' },
      { text: '边做边想，灵活调整', letter: 'P' }
    ]
  },
  {
    id: 53,
    question: '你更倾向于？',
    options: [
      { text: '按时完成任务再休息', letter: 'J' },
      { text: '先休息，任务最后再赶', letter: 'P' }
    ]
  },
  {
    id: 54,
    question: '你的书桌通常是什么样子的？',
    options: [
      { text: '整洁有序，所有物品归位', letter: 'J' },
      { text: '有点乱，但你知道每样东西在哪', letter: 'P' }
    ]
  },
  {
    id: 55,
    question: '约会时你通常会？',
    options: [
      { text: '提前计划好每个环节', letter: 'J' },
      { text: '大致有个想法，到时候再说', letter: 'P' }
    ]
  },
  {
    id: 56,
    question: '面对多个待办事项时，你会？',
    options: [
      { text: '按重要性和紧急程度排序处理', letter: 'J' },
      { text: '先做想做的，其他的再说', letter: 'P' }
    ]
  },
  {
    id: 57,
    question: '你更喜欢什么样的假期安排？',
    options: [
      { text: '提前订好酒店、景点和行程', letter: 'J' },
      { text: '没有具体计划，随心所欲', letter: 'P' }
    ]
  },
  {
    id: 58,
    question: '当你制定了一个计划后，你通常会？',
    options: [
      { text: '严格执行，尽量不变', letter: 'J' },
      { text: '根据情况随时调整', letter: 'P' }
    ]
  },
  {
    id: 59,
    question: '你更认同以下哪种说法？',
    options: [
      { text: '计划赶不上变化，但计划仍然是必要的', letter: 'J' },
      { text: '过于详细的计划会限制可能性', letter: 'P' }
    ]
  },
  {
    id: 60,
    question: '你更享受什么样的状态？',
    options: [
      { text: '一切都在掌控之中的感觉', letter: 'J' },
      { text: '充满未知和惊喜的感觉', letter: 'P' }
    ]
  }
]

// 计算MBTI类型
export function calculateMBTI(answers) {
  const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
  
  answers.forEach((answer, index) => {
    const question = mbtiQuestions[index]
    if (answer && question) {
      const selectedOption = question.options.find(opt => opt.text === answer)
      if (selectedOption) {
        counts[selectedOption.letter]++
      }
    }
  })

  let type = ''
  type += counts.E >= counts.I ? 'E' : 'I'
  type += counts.S >= counts.N ? 'S' : 'N'
  type += counts.T >= counts.F ? 'T' : 'F'
  type += counts.J >= counts.P ? 'J' : 'P'
  
  return type
}

export function calculatePercentages(answers) {
  const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
  
  answers.forEach((answer, index) => {
    const question = mbtiQuestions[index]
    if (answer && question) {
      const selectedOption = question.options.find(opt => opt.text === answer)
      if (selectedOption) {
        counts[selectedOption.letter]++
      }
    }
  })

  const total = 15
  return {
    E: Math.round((counts.E / total) * 100),
    I: Math.round((counts.I / total) * 100),
    S: Math.round((counts.S / total) * 100),
    N: Math.round((counts.N / total) * 100),
    T: Math.round((counts.T / total) * 100),
    F: Math.round((counts.F / total) * 100),
    J: Math.round((counts.J / total) * 100),
    P: Math.round((counts.P / total) * 100)
  }
}

export function getDimensionTendencies(answers) {
  const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
  
  answers.forEach((answer, index) => {
    const question = mbtiQuestions[index]
    if (answer && question) {
      const selectedOption = question.options.find(opt => opt.text === answer)
      if (selectedOption) {
        counts[selectedOption.letter]++
      }
    }
  })

  const total = 15 // 每个维度15题
  
  return {
    EI: { left: 'E', right: 'I', leftScore: counts.E, rightScore: counts.I, percentage: Math.round(counts.E / total * 100) },
    SN: { left: 'S', right: 'N', leftScore: counts.S, rightScore: counts.N, percentage: Math.round(counts.S / total * 100) },
    TF: { left: 'T', right: 'F', leftScore: counts.T, rightScore: counts.F, percentage: Math.round(counts.T / total * 100) },
    JP: { left: 'J', right: 'P', leftScore: counts.J, rightScore: counts.P, percentage: Math.round(counts.J / total * 100) }
  }
}

// MBTI类型详细描述数据
export const mbtiDescriptions = {
  'INTJ': {
    name: '建筑师',
    tagline: '富有想象力和战略性的思想家',
    emoji: '🏗️',
    color: '#8b5cf6',
    bgGradient: 'from-violet-500 to-purple-600',
    description: '你是一个独立思考者，善于制定长期计划和战略。你对新想法充满热情，但也会以理性和逻辑来评估。你追求知识和理解，喜欢与同样聪明的人讨论抽象概念。你是天生的战略家，能够看到事物发展的长远趋势。',
    personalityTraits: [
      '逻辑性强，善于分析问题',
      '独立自主，不依赖他人',
      '战略思维，善于规划未来',
      '追求完美，高标准要求',
      '思想深刻，洞察力强',
      '自信坚定，敢于表达观点',
      '善于发现问题中的系统性缺陷',
      '重视效率和实效'
    ],
    strengths: ['战略思维', '独立自主', '目标导向', '高标准', '善于分析', '理性决策', '创新精神', '自律性强'],
    weaknesses: ['过于挑剔', '情感表达不足', '不善于社交', '过于批判', '缺乏耐心', '完美主义倾向', '容易忽视他人感受'],
    careers: ['战略规划师', '科学家', '工程师', '律师', '金融分析师', '管理顾问', '大学教授', '系统架构师', '投资银行家'],
    relationships: '你在感情中忠诚且投入，但可能需要学会更好地表达情感。你需要一个能够理解你深度的人，一个愿意和你进行思想碰撞的伴侣。学习倾听和欣赏他人的感受，会让你的人际关系更加和谐。',
    growth: [
      '学会欣赏过程而不仅仅是结果',
      '多表达欣赏和感谢之情',
      '接受他人的帮助和合作',
      '培养社交技能和情商',
      '学会容忍不确定性',
      '不要过于苛责自己和他人'
    ],
    famousPeople: ['埃隆·马斯克', '杰夫·贝索斯', '娜塔莉·波特曼', '克里斯蒂亚诺·罗纳尔多']
  },
  'INTP': {
    name: '逻辑学家',
    tagline: '富有创造力的发明家',
    emoji: '💡',
    color: '#10b981',
    bgGradient: 'from-emerald-500 to-teal-600',
    description: '你是一个逻辑性强的思考者，对知识有无限的渴望。你善于分析复杂的系统，喜欢找出问题背后的原理。你思想开放，爱护自由，是天生的问题解决者。你对理论和概念充满好奇，总是想要理解事物运作的本质。',
    personalityTraits: [
      '逻辑缜密，思维敏捷',
      '好奇心强，求知欲旺盛',
      '独立思考，不盲从权威',
      '善于分析复杂问题',
      '思想开放，接受新观点',
      '创造力丰富，富有想象力',
      '追求精确和准确',
      '重视真理和理性'
    ],
    strengths: ['逻辑思维', '创造力', '分析能力', '客观公正', '好奇心强', '独立思考', '适应力强', '学术能力强'],
    weaknesses: ['社交困难', '容易忽视细节', '拖延症', '情感表达不足', '过度分析', '忽视实际行动', '容易钻牛角尖'],
    careers: ['计算机科学家', '数据分析师', '大学教授', '研究员', '哲学家', '软件工程师', '经济学家', '数学家', '物理学家'],
    relationships: '你需要一个能接受你独处需求的伴侣。找一个能与你进行深度思想交流的人，建立基于相互尊重的关系。学会表达情感会让你的亲密关系更加美满。尝试主动表达关心，而不仅仅是通过行动。',
    growth: [
      '学会按时完成任务',
      '多关注人际关系和情感需求',
      '将想法付诸实践',
      '学会表达感谢和欣赏',
      '平衡理论与实践',
      '接受不完美的解决方案'
    ],
    famousPeople: ['阿尔伯特·爱因斯坦', '比尔·盖茨', '马克·扎克伯格', '亚里士多德']
  },
  'ENTJ': {
    name: '指挥官',
    tagline: '大胆、富有想象力的领导者',
    emoji: '⚔️',
    color: '#f97316',
    bgGradient: 'from-orange-500 to-amber-600',
    description: '你是一个天生的领导者，有强大的气场和决断力。你善于制定战略和激励他人，追求效率和成就。你直言不讳，有强大的组织能力。你喜欢挑战，把困难当作证明自己的机会。你的领导风格直接、高效，能够带领团队达成目标。',
    personalityTraits: [
      '天生领导者气质',
      '决策果断，敢于冒险',
      '战略眼光，长远规划',
      '自信坚定，意志坚强',
      '高效务实，追求成果',
      '善于激励和鼓舞他人',
      '逻辑清晰，表达有力',
      '喜欢挑战和竞争'
    ],
    strengths: ['领导能力', '决策力', '自信', '战略思维', '效率高', '执行力强', '激励他人', '沟通能力强'],
    weaknesses: ['缺乏耐心', '过于强势', '不善表达情感', '忽略细节', '忽视他人感受', '控制欲强', '容易傲慢'],
    careers: ['企业CEO', '企业家', '律师', '管理顾问', '项目经理', '政治家', '投资银行家', '军官', '销售总监'],
    relationships: '你在亲密关系中直接而坦诚，有时可能显得太过强势。学会倾听伴侣的感受，欣赏对方的独特价值，会让关系更加平衡。尝试在表达意见和体贴之间找到平衡点。',
    growth: [
      '学会倾听他人的意见',
      '注意表达方式，别太直接',
      '培养耐心和同理心',
      '学会欣赏他人的贡献',
      '接受自己也会犯错的事实',
      '在强硬和温柔之间找到平衡'
    ],
    famousPeople: ['史蒂夫·乔布斯', '玛格丽特·撒切尔', '富兰克林·罗斯福', '乔丹·彼得森']
  },
  'ENTP': {
    name: '辩论家',
    tagline: '聪明好奇的思想家',
    emoji: '🔥',
    color: '#ec4899',
    bgGradient: 'from-pink-500 to-rose-600',
    description: '你是一个充满创意的思想家，喜欢挑战现状。你善于发现可能性，能够看到他人忽视的联系。你的思维敏捷，喜欢辩论和脑力激荡。你对新事物充满好奇，总是想要尝试新的想法和方法。',
    personalityTraits: [
      '思维敏捷，善于创新',
      '善于发现问题的新视角',
      '口才好，能言善辩',
      '充满好奇心',
      '喜欢挑战和辩论',
      '适应力强，灵活变通',
      '精力充沛，热情洋溢',
      '善于启发他人思考'
    ],
    strengths: ['创新能力', '适应力', '沟通能力', '洞察力', '多才多艺', '善于解决问题', '思维敏捷', '充满活力'],
    weaknesses: ['容易分心', '缺乏耐心', '三分钟热度', '过于好辩', '忽视细节', '难以专注', '回避常规工作'],
    careers: ['企业家', '律师', '记者', '营销策划', '广告创意', '演员', '发明家', '公共关系专家', '管理顾问'],
    relationships: '你在关系中充满活力和创意，总是能给伴侣带来新鲜感。但你可能需要学会在一段关系中保持专注和投入。找一个能跟上你思维节奏、欣赏你创意的人，同时也要学会倾听和理解对方的需求。',
    growth: [
      '学会专注和坚持',
      '培养耐心和细心',
      '不要为了辩论而辩论',
      '学会在关系中投入',
      '尊重传统和规则的价值',
      '多关注执行而非只是计划'
    ],
    famousPeople: ['马克·吐温', '托马斯·爱迪生', '罗伯特·肯尼迪', '萨尔曼·拉什迪']
  },
  'INFJ': {
    name: '提倡者',
    tagline: '安静而坚定的理想主义者',
    emoji: '🌟',
    color: '#6366f1',
    bgGradient: 'from-indigo-500 to-violet-600',
    description: '你是一个富有同理心和理想主义的人。你有强烈的价值观，致力于帮助他人和改善世界。你善于理解他人的情感和需求，是一个天生的倾听者。你安静而有洞察力，能够看到他人的潜力和可能性。',
    personalityTraits: [
      '富有同理心和共情能力',
      '理想主义，追求意义',
      '有强烈的价值观',
      '善于倾听和理解他人',
      '洞察力强，能看透本质',
      '创造性地解决问题',
      '忠诚且值得信赖',
      '有远见卓识'
    ],
    strengths: ['同理心', '洞察力', '创造力', '理想主义', '忠诚', '沟通能力', '领导力', '道德感强'],
    weaknesses: ['过于理想化', '难以接受批评', '忽视自己需求', '过度敏感', '难以说"不"', '完美主义'],
    careers: ['心理咨询师', '社会工作者', '作家', '教师', '人力资源经理', '非营利组织工作者', '神职人员', '艺术家', '职业顾问'],
    relationships: '你在感情中深沉而专注，渴望建立有意义的心灵连接。你是一个浪漫的理想主义者，但有时可能对伴侣有不切实际的期望。学会接受人性的不完美，平衡给予和接受爱。',
    growth: [
      '学会照顾自己的需求',
      '接受不完美是常态',
      '勇于表达自己的意见',
      '设定健康的边界',
      '不要总是把别人放在第一位',
      '学会接受建设性的批评'
    ],
    famousPeople: ['纳尔逊·曼德拉', '卡尔·荣格', '马丁·路德·金', 'J.K.罗琳']
  },
  'INFP': {
    name: '调停者',
    tagline: '诗意、善良的理想主义者',
    emoji: '🎨',
    color: '#14b8a6',
    bgGradient: 'from-teal-500 to-cyan-600',
    description: '你是一个浪漫的理想主义者，重视内心深处的情感和价值观。你富有创造力，善于表达自己，是一个天生的艺术家。你善良且有同理心，总是想要帮助他人。你内心世界丰富，喜欢通过创作来表达自己。',
    personalityTraits: [
      '富有想象力和创造力',
      '理想主义，相信美好',
      '善良且有同理心',
      '重视个人价值观',
      '善于倾听和共情',
      '忠诚于在乎的人和事',
      '适应力强，灵活变通',
      '重视内在精神世界'
    ],
    strengths: ['创造力', '同理心', '适应力', '忠诚', '理想主义', '洞察力', '艺术气质', '善于沟通'],
    weaknesses: ['过于理想化', '情绪波动大', '难以做决定', '容易自我否定', '回避冲突', '拖延症'],
    careers: ['作家/诗人', '艺术家', '心理咨询师', '社会工作者', '人力资源', '语言学家', '图书管理员', '音乐家', '神职人员'],
    relationships: '你在感情中热情而忠诚，对伴侣有着深刻的承诺。你渴望被理解和欣赏，需要一个能够接纳你真实自我的伴侣。学会接纳自己的价值，不要总是自我批评。',
    growth: [
      '学会相信自己的价值',
      '勇于做出决定和承诺',
      '不要害怕冲突',
      '平衡理想和现实',
      '多关注外在行动',
      '学会接受赞美'
    ],
    famousPeople: ['威廉·莎士比亚', '约翰·列侬', '奥普拉·温弗瑞', '威廉·华莱士']
  },
  'ENFJ': {
    name: '主人公',
    tagline: '富有魅力的领导者',
    emoji: '✨',
    color: '#f59e0b',
    bgGradient: 'from-amber-500 to-yellow-600',
    description: '你是一个天生的领导者，富有魅力和感染力。你善于激励他人，帮助他们发挥潜力。你有强烈的责任感，致力于帮助他人成长和进步。你热情而富有同理心，是一个理想的沟通者。',
    personalityTraits: [
      '天生的领导者',
      '富有感染力和热情',
      '善于激励和启发他人',
      '有强烈的责任感',
      '善于理解他人需求',
      '沟通能力强',
      '富有同理心',
      '有远见和使命感'
    ],
    strengths: ['领导力', '感染力', '同理心', '沟通能力', '责任感', '热情', '有远见', '善于培养他人'],
    weaknesses: ['过于理想化', '取悦他人', '忽视自己需求', '难以批评他人', '过度承诺', '容易被他人的问题影响'],
    careers: ['培训师/教练', '人力资源经理', '政治家', '教师', '心理咨询师', '销售经理', '公关专员', '社会活动家', '演员'],
    relationships: '你在感情中热情而投入，是一个浪漫的伴侣。你善于表达爱意，让伴侣感到被珍视。但你也需要学会照顾自己的需求，不要总是把别人的需求放在第一位。',
    growth: [
      '学会说"不"',
      '照顾好自己的情绪',
      '不要试图让所有人满意',
      '接受建设性的反馈',
      '给自己一些独处时间',
      '不要把他人的问题都扛在身上'
    ],
    famousPeople: ['巴拉克·奥巴马', '马丁·路德·金', '奥普拉·温弗瑞', '约翰·肯尼迪']
  },
  'ENFP': {
    name: '竞选者',
    tagline: '热情、有想象力的社交者',
    emoji: '🎉',
    color: '#ef4444',
    bgGradient: 'from-red-500 to-pink-600',
    description: '你是一个充满热情和创意的人，生活对你来说是一场精彩的冒险。你善于发现可能性，对新事物充满好奇。你富有感染力，能够激励和启发周围的人。你是天然的社交者，善于建立联系。',
    personalityTraits: [
      '热情洋溢，精力充沛',
      '富有创造力和想象力',
      '善于发现可能性',
      '社交能力强',
      '适应力强',
      '乐观积极',
      '善于启发他人',
      '思想自由开放'
    ],
    strengths: ['创造力', '热情', '社交能力', '适应力', '洞察力', '沟通能力', '乐观积极', '激励他人'],
    weaknesses: ['容易分心', '难以专注', '过度情绪化', '回避冲突', '拖延症', '容易感到无聊'],
    careers: ['记者', '广告创意', '演员', '作家', '营销策划', '公共关系', '教师', '企业家', '社会工作者'],
    relationships: '你在感情中充满热情和浪漫，总是给伴侣带来惊喜和活力。你渴望心灵的连接，需要一个能够理解你复杂内心世界的伴侣。学会在关系中保持专注和投入。',
    growth: [
      '学会专注和坚持',
      '培养耐心',
      '面对困难不退缩',
      '学会做决定并负责',
      '不要总是逃避无聊',
      '接受批评作为成长的机会'
    ],
    famousPeople: ['罗宾·威廉姆斯', '罗伯特·唐尼', '萨尔瓦多·达利', '艾伦·德詹尼丝']
  },
  'ISTJ': {
    name: '物流师',
    tagline: '务实、可靠的事实守护者',
    emoji: '🛡️',
    color: '#64748b',
    bgGradient: 'from-slate-500 to-gray-600',
    description: '你是一个务实、可靠的人，重视责任和承诺。你做事有条理，注重细节，是一个天生的执行者。你诚实正直，说到做到，是值得信赖的伙伴。你尊重传统和规则，通过实际行动来证明自己的价值。',
    personalityTraits: [
      '务实、脚踏实地',
      '有责任感，信守承诺',
      '做事有条理',
      '注重细节',
      '诚实正直',
      '可靠值得信赖',
      '尊重传统',
      '勤奋努力'
    ],
    strengths: ['可靠性', '责任感', '有条理', '注重细节', '诚信', '勤奋', '实际', '执行力强'],
    weaknesses: ['固执', '难以接受新事物', '不善变通', '过于批判', '不善于表达情感', '可能过于传统'],
    careers: ['会计', '审计师', '律师', '医生', '军人', '行政管理者', '项目经理', '金融分析师', '警察'],
    relationships: '你在感情中忠诚而专一，是一个可靠的伴侣。你通过行动来表达爱意，而不是言语。尝试多表达情感，让伴侣感受到你的温柔的一面。学会接受变化和新事物。',
    growth: [
      '接受新想法和变化',
      '学会灵活变通',
      '多表达情感',
      '不要过于挑剔',
      '欣赏他人的不同方式',
      '给自己一些休息时间'
    ],
    famousPeople: ['乔治·华盛顿', '安格拉·默克尔', '艾森豪威尔', '斯托夫人']
  },
  'ISFJ': {
    name: '守卫者',
    tagline: '温暖、贴心的守护天使',
    emoji: '🌸',
    color: '#84cc16',
    bgGradient: 'from-lime-500 to-green-600',
    description: '你是一个温暖、善良的人，天生具有照顾他人的本能。你忠诚而可靠，重视传统和责任。你默默付出，不求回报，是身边人坚实的后盾。你有强烈的责任感，总是尽心尽力完成自己的承诺。',
    personalityTraits: [
      '温暖善良，有同情心',
      '忠诚可靠',
      '有责任感',
      '注重细节',
      '善于照顾他人',
      '脚踏实地',
      '谦逊低调',
      '尊重传统和规则'
    ],
    strengths: ['温暖', '可靠性', '责任感', '注重细节', '耐心', '善于照顾他人', '忠诚', '勤奋'],
    weaknesses: ['过度自责', '忽视自己需求', '难以拒绝', '过于谦虚', '对新事物抵触', '容易被他人的负面情绪影响'],
    careers: ['护士', '医生', '教师', '社会工作者', '人力资源', '行政助理', '图书管理员', '厨师', '会计'],
    relationships: '你在感情中无私付出，是最温暖的伴侣。你通过细心的照顾来表达爱意。但你也需要学会照顾自己，表达自己的需求。找一个懂得欣赏你的人，同时也要学会接受爱。',
    growth: [
      '学会照顾自己的需求',
      '勇于表达自己的感受',
      '不要太在意别人的评价',
      '学会说"不"',
      '接受变化和新事物',
      '对自己好一点'
    ],
    famousPeople: ['碧昂丝', '斯嘉丽·约翰逊', 'Lady Gaga', '母亲特蕾莎']
  },
  'ESTJ': {
    name: '总经理',
    tagline: '卓越、执行力强的领导者',
    emoji: '🏢',
    color: '#0284c7',
    bgGradient: 'from-sky-500 to-blue-600',
    description: '你是一个天生的管理者，擅长组织和领导。你务实高效，注重结果，是一个优秀的执行者。你尊重传统和秩序，有强烈的责任感。你直接而果断，能够带领团队达成目标。',
    personalityTraits: [
      '天生的领导者',
      '务实高效',
      '有组织能力',
      '注重结果',
      '直接果断',
      '有责任感',
      '尊重传统',
      '善于执行'
    ],
    strengths: ['领导力', '组织能力', '可靠性', '执行力', '直接', '有责任感', '务实', '善于规划'],
    weaknesses: ['缺乏灵活性', '过于强势', '不善表达情感', '忽视他人感受', '难以接受批评', '过于传统'],
    careers: ['企业管理者', '军官', '法官', '律师', '银行家', '房地产开发商', '教师', '项目经理', '财务总监'],
    relationships: '你在感情中直接而坦诚，是一个可靠的伴侣。你有强烈的家庭责任感，愿意为家人付出一切。尝试多倾听和理解伴侣的感受，不要总是按自己的方式做事。',
    growth: [
      '学会倾听他人意见',
      '接受不同的做事方式',
      '多表达情感和欣赏',
      '学会变通',
      '接受建设性批评',
      '留点时间给家人和自己'
    ],
    famousPeople: ['迈克尔·博克', '朱利叶斯·凯撒', '塞缪尔·杰克逊', '艾玛·沃特森']
  },
  'ESFJ': {
    name: '执政官',
    tagline: '热情、有爱心的社交者',
    emoji: '🎀',
    color: '#d946ef',
    bgGradient: 'from-fuchsia-500 to-pink-600',
    description: '你是一个热情、友善的人，天生喜欢照顾他人。你善于社交，是朋友圈中的活跃分子。你有强烈的社会意识，重视传统和和谐。你慷慨大方，喜欢通过帮助他人来获得满足感。',
    personalityTraits: [
      '热情友好',
      '善于社交',
      '有同情心',
      '善于照顾他人',
      '有责任感',
      '重视和谐',
      '慷慨大方',
      '实际务实'
    ],
    strengths: ['社交能力', '热情', '同情心', '责任感', '善于照顾他人', '可靠', '实际', '有组织能力'],
    weaknesses: ['过于在意他人看法', '难以拒绝', '过度迎合', '忽视自己需求', '容易被他人的问题影响', '难以接受批评'],
    careers: ['护士', '教师', '销售', '人力资源', '客户服务', '医生', '美容师', '旅游代理', '社会工作者'],
    relationships: '你在感情中热情而投入，是一个浪漫而贴心的伴侣。你喜欢为伴侣创造温馨的环境，庆祝每一个纪念日。但你也需要学会平衡伴侣的需求和自己的需求。',
    growth: [
      '学会说"不"',
      '不要过于在意他人的评价',
      '照顾好自己的情绪',
      '学会接受建设性批评',
      '给自己一些独处时间',
      '不要把他人的问题都揽在身上'
    ],
    famousPeople: ['泰勒·斯威夫特', '莎拉·米歇尔', '休·杰克曼', '哈利·贝瑞']
  },
  'ISTP': {
    name: '鉴赏家',
    tagline: '大胆、实用的冒险家',
    emoji: '🔧',
    color: '#0ea5e9',
    bgGradient: 'from-sky-500 to-cyan-600',
    description: '你是一个务实、动手能力强的人。你喜欢探索事物如何运作，具有技术天赋。你冷静理性，能够在危机中保持冷静。你独立自主，喜欢按自己的方式做事。',
    personalityTraits: [
      '务实、实际',
      '善于动手操作',
      '好奇心强',
      '冷静理性',
      '善于分析',
      '独立自主',
      '适应力强',
      '勇于尝试'
    ],
    strengths: ['动手能力', '分析能力', '适应力', '理性', '独立', '务实', '技术能力强', '冷静'],
    weaknesses: ['社交能力弱', '情感表达不足', '容易厌倦', '冲动', '难以承诺', '不善于规划'],
    careers: ['工程师', '机械师', '飞行员', '警察', '消防员', '运动员', '计算机程序员', '牙医', '军事专家'],
    relationships: '你在感情中需要空间和自由，不喜欢被束缚。你通过行动而非言语来表达爱意。找一个能理解你对独立需求的伴侣，同时也要学会更多地表达情感。',
    growth: [
      '多表达情感和感受',
      '学会规划未来',
      '增强社交能力',
      '不要总是独来独往',
      '学会承诺和坚持',
      '多关注他人的需求'
    ],
    famousPeople: ['李小龙', '汤姆·克鲁斯', '克林特·伊斯特伍德', '尼古拉·特斯拉']
  },
  'ISFP': {
    name: '探险家',
    tagline: '自由、艺术的实践者',
    emoji: '🌿',
    color: '#a3e635',
    bgGradient: 'from-lime-500 to-emerald-600',
    description: '你是一个温柔、敏感的人，具有艺术气质。你重视个人表达，喜欢通过艺术来展现自己。你活在当下，享受生活的每一刻。你谦逊低调，不喜欢引起注意。',
    personalityTraits: [
      '艺术气质',
      '敏感细腻',
      '活在当下',
      '温柔善良',
      '谦逊低调',
      '富有想象力',
      '善于发现美',
      '适应力强'
    ],
    strengths: ['艺术能力', '敏感', '观察力', '适应力', '好奇心', '温柔', '善于发现美', '灵活'],
    weaknesses: ['难以做决定', '容易自我否定', '回避冲突', '过度敏感', '拖延', '不善于表达'],
    careers: ['艺术家', '设计师', '摄影师', '音乐家', '园林设计师', '厨师', '兽医', '时装设计师', '室内设计师'],
    relationships: '你在感情中温柔而浪漫，注重与伴侣的情感连接。你需要伴侣能够理解你对自由的需求，同时也要学会表达自己的感受和需求。',
    growth: [
      '学会做决定',
      '多表达自己的感受',
      '增强自信',
      '不要害怕承诺',
      '学会处理冲突',
      '多关注未来规划'
    ],
    famousPeople: ['奥黛丽·赫本', '迈克尔·杰克逊', '克里斯托弗·里夫', '鲍勃·迪伦']
  },
  'ESTP': {
    name: '企业家',
    tagline: '聪明、精力充沛的冒险家',
    emoji: '🚀',
    color: '#facc15',
    bgGradient: 'from-yellow-500 to-orange-600',
    description: '你是一个充满活力、热爱冒险的人。你喜欢活在当下，享受生活的刺激。你务实高效，善于解决实际问题。你社交能力强，喜欢与人打交道。你是天生的领导者，能够激励和带动他人。',
    personalityTraits: [
      '精力充沛',
      '热爱冒险',
      '务实高效',
      '善于社交',
      '适应力强',
      '善于解决问题',
      '活在当下',
      '有领导力'
    ],
    strengths: ['行动力', '适应力', '社交能力', '解决问题的能力', '务实', '领导力', '大胆', '充满活力'],
    weaknesses: ['缺乏耐心', '冲动', '难以专注', '回避情感话题', '冒险过度', '不善于规划'],
    careers: ['企业家', '销售', '营销', '经纪人', '房地产', '旅游', '运动员', '警察', '军人'],
    relationships: '你在感情中充满活力和热情，喜欢给伴侣带来惊喜和刺激。但你可能需要学会在关系中投入更多，学习倾听和理解伴侣的情感需求。',
    growth: [
      '培养耐心',
      '学会倾听',
      '多关注情感需求',
      '不要总是冲动',
      '学会规划未来',
      '多花时间陪伴伴侣'
    ],
    famousPeople: ['唐纳德·特朗普', '温斯顿·丘吉尔', '马德琳·奥尔布赖特', '黄信尧']
  },
  'ESFP': {
    name: '表演者',
    tagline: '自发、热情、有趣的娱乐者',
    emoji: '🎭',
    color: '#fb923c',
    bgGradient: 'from-orange-500 to-red-600',
    description: '你是一个活泼、开朗的人，天生喜欢成为焦点。你富有感染力，能够让周围的人感到快乐。你活在当下，享受生活的每一刻。你善于社交，喜欢与人互动。你是天生的表演者，善于活跃气氛。',
    personalityTraits: [
      '活泼开朗',
      '富有感染力',
      '善于社交',
      '享受当下',
      '有创造力',
      '适应力强',
      '有趣幽默',
      '热情洋溢'
    ],
    strengths: ['社交能力', '感染力', '适应力', '表演能力', '乐观', '有创意', '务实', '充满活力'],
    weaknesses: ['难以专注', '冲动', '害怕孤独', '回避冲突', '不善于规划', '过度追求刺激'],
    careers: ['演员', '歌手', '主持人', '销售', '营销', '旅游', '公关', '教师', '摄影师'],
    relationships: '你在感情中热情浪漫，善于制造惊喜和浪漫氛围。你需要伴侣能够跟上你的节奏，同时也要学会在关系中保持专注和投入。',
    growth: [
      '学会专注和坚持',
      '增强计划性',
      '学会处理独处',
      '不要过于追求刺激',
      '多关注未来',
      '接受建设性的批评'
    ],
    famousPeople: ['玛丽莲·梦露', '威尔·史密斯', '朱莉娅·罗伯茨', '罗德岛']
  }
}

// 情侣匹配数据
export const coupleCompatibility = {
  'INTJ': {
    best: ['ENFP', 'ENTP', 'INTP', 'INFJ'],
    good: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'INTJ', 'ENTJ', 'ISTP', 'ISFP'],
    challenging: ['ESFP', 'ESTP']
  },
  'INTP': {
    best: ['ENTJ', 'INFJ', 'INTJ', 'ENFP'],
    good: ['ISTJ', 'ISFJ', 'INTP', 'ENTP', 'ISTP', 'ISFP', 'ESTP', 'ESFP'],
    challenging: ['ESFJ', 'ESTJ']
  },
  'ENTJ': {
    best: ['INTP', 'ENTP', 'INTJ', 'INFJ'],
    good: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ENTJ', 'ENFJ', 'ISTP', 'ESTP'],
    challenging: ['ISFP', 'ESFP']
  },
  'ENTP': {
    best: ['INTJ', 'INFJ', 'ENTJ', 'ENFP'],
    good: ['ISTJ', 'INTP', 'ENTP', 'ISTP', 'ISFP', 'ESTP', 'ESFP'],
    challenging: ['ISFJ', 'ESFJ']
  },
  'INFJ': {
    best: ['ENFP', 'ENTP', 'INTJ', 'INFJ'],
    good: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ENTJ', 'ENFJ', 'INTP', 'ISTP', 'ISFP'],
    challenging: ['ESTP', 'ESFP']
  },
  'INFP': {
    best: ['ENFJ', 'ENTP', 'INFJ', 'INTJ'],
    good: ['ISTJ', 'ISFJ', 'INTP', 'ENFP', 'ISTP', 'ISFP', 'ESFP'],
    challenging: ['ESTJ', 'ESTP']
  },
  'ENFJ': {
    best: ['INFP', 'ENFP', 'INTP', 'INFJ'],
    good: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ENTJ', 'ENFJ', 'ISFP', 'ESFP'],
    challenging: ['ESTP', 'ISTP']
  },
  'ENFP': {
    best: ['INFJ', 'INTJ', 'ENFJ', 'ENTP'],
    good: ['ISFJ', 'ESFJ', 'INTP', 'INFP', 'ISTP', 'ISFP', 'ESTP', 'ESFP'],
    challenging: ['ISTJ', 'ESTJ']
  },
  'ISTJ': {
    best: ['ESFP', 'ESTP', 'ISFP', 'ISTP'],
    good: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'INTJ', 'INTP', 'ENTJ', 'INFJ', 'ENFJ', 'INFP'],
    challenging: ['ENFP', 'ENTP']
  },
  'ISFJ': {
    best: ['ESFP', 'ESTP', 'ISFP', 'ISTP'],
    good: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'INTJ', 'INTP', 'ENTJ', 'INFJ', 'ENFJ', 'INFP'],
    challenging: ['ENTP', 'ENFP']
  },
  'ESTJ': {
    best: ['ISTP', 'ISFP', 'ESTP', 'ESFP'],
    good: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'ENFJ'],
    challenging: ['INFP', 'ENFP']
  },
  'ESFJ': {
    best: ['ISTP', 'ISFP', 'ESTP', 'ESFP'],
    good: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'INTJ', 'ENTJ', 'ENTP', 'INFJ', 'ENFJ', 'ENFP'],
    challenging: ['INTP', 'INFP']
  },
  'ISTP': {
    best: ['ESFJ', 'ESTJ', 'ESFP', 'ESTP'],
    good: ['ISTJ', 'ISFJ', 'INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'ISTP', 'ISFP'],
    challenging: ['ENFJ', 'ENFP']
  },
  'ISFP': {
    best: ['ESFJ', 'ESTJ', 'ESFP', 'ESTP'],
    good: ['ISTJ', 'ISFJ', 'INTJ', 'INTP', 'INFJ', 'INFP', 'ISTP', 'ISFP'],
    challenging: ['ENTJ', 'ENFJ']
  },
  'ESTP': {
    best: ['ISFJ', 'ISTJ', 'ISFP', 'ISTP'],
    good: ['ISFJ', 'ISTJ', 'ESTJ', 'ESFJ', 'INTJ', 'INTP', 'ENTJ', 'ENTP', 'ENFJ', 'ENFP', 'ESTP', 'ESFP'],
    challenging: ['INFJ', 'INFP']
  },
  'ESFP': {
    best: ['ISFJ', 'ISTJ', 'ISFP', 'ISTP'],
    good: ['ISFJ', 'ISTJ', 'ESTJ', 'ESFJ', 'ENTJ', 'ENTP', 'ENFJ', 'ENFP', 'INFP', 'ESTP', 'ESFP'],
    challenging: ['INTJ', 'INTP']
  }
}

// 情侣匹配优势与挑战数据
const coupleDetails = {
  'INTJ': {
    advantages: ['思维深度相似，能进行高质量的思想交流', '都重视独立空间，不会过度依赖对方', '共同追求成长和进步', '理性沟通，减少情绪化冲突'],
    challenges: ['都可能过于理性，忽视情感表达', '独立性强可能导致情感疏离', '完美主义可能给关系带来压力', '不擅长处理突发情感需求']
  },
  'INTP': {
    advantages: ['好奇心强，能一起探索新知识', '尊重彼此的独立思考空间', '逻辑性强，沟通清晰直接', '包容度高，接受不同观点'],
    challenges: ['情感表达可能不足', '容易沉浸在自己的世界中', '对日常琐事缺乏耐心', '决策时可能过于犹豫']
  },
  'ENTJ': {
    advantages: ['目标导向，能共同规划未来', '领导力强，能互相激励', '效率高，执行力强', '坦诚直接，沟通不绕弯子'],
    challenges: ['控制欲强，可能产生权力斗争', '过于强势，忽视对方感受', '工作狂倾向，忽视情感交流', '竞争意识过强']
  },
  'ENTP': {
    advantages: ['充满创意，生活不会无聊', '善于沟通，能激发彼此灵感', '适应力强，能接受变化', '幽默感强，相处轻松愉快'],
    challenges: ['容易分心，缺乏专注', '喜欢辩论，可能引发冲突', '承诺恐惧，难以安定', '对细节和日常事务不耐烦']
  },
  'INFJ': {
    advantages: ['深度情感连接，彼此理解', '共同的理想主义追求', '善于倾听和支持对方', '重视精神层面的契合'],
    challenges: ['过于敏感，容易受伤', '理想化对方，可能失望', '回避冲突，问题积累', '需要大量独处时间']
  },
  'INFP': {
    advantages: ['情感丰富，能深刻理解对方', '价值观相似，追求真实自我', '创造力强，能共同创造美好', '包容接纳，不评判对方'],
    challenges: ['情绪化，容易陷入负面情绪', '回避现实问题', '过于理想化，不切实际', '做决定困难']
  },
  'ENFJ': {
    advantages: ['热情温暖，能给予对方支持', '善于沟通，能化解矛盾', '共同成长，互相激励', '重视关系，愿意付出'],
    challenges: ['过度付出，忽视自己需求', '太在意他人看法', '回避冲突，维持表面和谐', '情绪化，容易受他人影响']
  },
  'ENFP': {
    advantages: ['热情洋溢，能给对方带来快乐', '充满创意，生活丰富多彩', '善于表达爱意', '开放包容，接受不同'],
    challenges: ['容易分心，难以专注', '情绪波动大', '对承诺感到压力', '忽视细节和实际问题']
  },
  'ISTJ': {
    advantages: ['可靠稳定，给对方安全感', '责任感强，值得信赖', '务实高效，能共同经营生活', '忠诚专一，重视承诺'],
    challenges: ['过于固执，不善变通', '情感表达含蓄', '对新事物接受慢', '可能过于严肃']
  },
  'ISFJ': {
    advantages: ['温柔体贴，善于照顾对方', '忠诚可靠，是坚实的后盾', '重视家庭，营造温馨氛围', '细心周到，关注对方需求'],
    challenges: ['过度付出，忽视自己', '回避冲突，压抑感受', '过于敏感，容易受伤', '难以适应变化']
  },
  'ESTJ': {
    advantages: ['务实高效，能共同规划未来', '责任感强，值得信赖', '组织能力强，生活有序', '直接坦诚，沟通高效'],
    challenges: ['过于强势，控制欲强', '不善表达情感', '固执己见，难以接受不同', '对情感需求不敏感']
  },
  'ESFJ': {
    advantages: ['热情温暖，善于营造和谐氛围', '重视家庭，乐于付出', '善于社交，能共同建立人脉', '体贴入微，关注对方感受'],
    challenges: ['过度在意他人评价', '回避冲突，维持表面和谐', '可能过于依赖对方', '情绪化，容易受影响']
  },
  'ISTP': {
    advantages: ['独立自主，尊重彼此空间', '冷静理性，能共同解决问题', '适应力强，能应对变化', '务实高效，不拖泥带水'],
    challenges: ['情感表达不足', '难以做出长期承诺', '对情感需求不敏感', '可能过于冷漠']
  },
  'ISFP': {
    advantages: ['温柔敏感，能感知对方情绪', '艺术气质，能共同创造美好', '尊重彼此独立性', '活在当下，享受相处时光'],
    challenges: ['回避冲突，难以表达不满', '情绪化，容易受伤', '难以做长期规划', '过于随性，缺乏条理']
  },
  'ESTP': {
    advantages: ['充满活力，生活丰富多彩', '适应力强，能共同面对挑战', '务实直接，沟通高效', '善于享受生活'],
    challenges: ['冲动行事，缺乏规划', '对承诺感到压力', '容易厌倦，追求刺激', '忽视情感深度交流']
  },
  'ESFP': {
    advantages: ['热情开朗，能给对方带来快乐', '善于社交，生活丰富多彩', '活在当下，享受每一刻', '表达直接，不藏心事'],
    challenges: ['容易分心，难以专注', '情绪化，容易冲动', '对长期规划缺乏耐心', '可能过于依赖外界认可']
  }
}

// 计算匹配度
export function calculateCompatibility(type1, type2) {
  if (type1 === type2) {
    return {
      score: 85,
      level: 'perfect',
      description: '你们是同类型的人，彼此非常了解对方的思维方式。但也可能因为太相似而产生摩擦，需要学会欣赏彼此的差异。',
      tips: ['发挥共同优势', '注意保持新鲜感', '学会接纳不同'],
      advantages: coupleDetails[type1]?.advantages || ['彼此理解，思维方式相似', '有共同的兴趣和价值观'],
      challenges: coupleDetails[type1]?.challenges || ['可能因为太相似而缺乏新鲜感', '相同的弱点可能被放大']
    }
  }

  const compatibility = coupleCompatibility[type1]
  if (!compatibility) return { score: 50, level: 'normal', description: '需要更多了解才能判断匹配度。', tips: [], advantages: [], challenges: [] }

  let score = 50
  let level = 'normal'
  let description = ''

  if (compatibility.best.includes(type2)) {
    score = Math.floor(Math.random() * 15) + 80 // 80-95
    level = 'excellent'
    description = '你们是完美的一对！你们在很多方面都很契合，能够相互理解和支持。'
  } else if (compatibility.good.includes(type2)) {
    score = Math.floor(Math.random() * 15) + 60 // 60-75
    level = 'good'
    description = '你们有不错的匹配度。虽然在一些方面可能需要磨合，但整体来说是很合适的组合。'
  } else if (compatibility.challenging && compatibility.challenging.includes(type2)) {
    score = Math.floor(Math.random() * 15) + 35 // 35-50
    level = 'challenging'
    description = '你们之间可能会有些挑战，但差异也可能成为相互学习和成长的机会。'
  } else {
    description = '你们需要更多时间来了解彼此，但只要愿意沟通和理解，仍然可以建立良好的关系。'
  }

  // 根据维度相似性微调
  const sharedDimensions = [
    type1[0] === type2[0] ? 1 : 0,
    type1[1] === type2[1] ? 1 : 0,
    type1[2] === type2[2] ? 1 : 0,
    type1[3] === type2[3] ? 1 : 0
  ].reduce((a, b) => a + b, 0)
  
  score = Math.min(98, score + sharedDimensions * 5)

  const tips = []
  if (sharedDimensions >= 3) {
    tips.push('你们在多个维度相似，有很多共同语言')
  } else if (sharedDimensions <= 1) {
    tips.push('你们的思维方式差异较大，需要更多沟通')
  }
  tips.push('相互尊重是关系长久的关键')
  tips.push('接纳彼此的不同可以带来成长')

  // 获取双方的优势和挑战
  const type1Details = coupleDetails[type1] || { advantages: [], challenges: [] }
  const type2Details = coupleDetails[type2] || { advantages: [], challenges: [] }
  
  // 组合优势：取双方前2个优势
  const advantages = [...type1Details.advantages.slice(0, 2), ...type2Details.advantages.slice(0, 2)]
  // 组合挑战：取双方前2个挑战
  const challenges = [...type1Details.challenges.slice(0, 2), ...type2Details.challenges.slice(0, 2)]

  return { score, level, description, tips, sharedDimensions, advantages, challenges }
}

// AI分析提示词生成
export function generateAnalysisPrompt(type, result) {
  return `请为${type}类型的"${result.name}"人格提供一份深度分析报告，包括：

1. 深度性格剖析（3-4个要点）
2. 职场发展建议（3-4个要点）
3. 人际关系与情感建议（3-4个要点）
4. 个人成长路径（3-4个要点）

请用温暖、专业且富有洞察力的语言，不要太长，每个要点简洁有力。`
}
