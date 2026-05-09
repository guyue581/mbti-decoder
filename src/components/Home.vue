<template>
  <div class="min-h-screen pt-20 pb-16 px-5">
    <div class="max-w-4xl mx-auto">

      <!-- Hero 区域 -->
      <div class="text-center mb-14 relative">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/50 text-xs mb-6">
          <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          60题精准测评 · 16种人格类型 · 9大AI引擎
        </div>
        <h1 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4 leading-tight">
          人格解码器
        </h1>
        <p class="text-white/40 text-lg max-w-md mx-auto leading-relaxed">
          探索你的内在人格，解锁性格密码
        </p>
      </div>

      <!-- 核心功能入口 - 2x2 网格 -->
      <div class="grid grid-cols-2 gap-4 mb-12">
        <!-- MBTI测试 -->
        <div @click="$emit('start')"
             class="group relative bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 cursor-pointer overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
          <div class="relative">
            <div class="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">🧠</span>
            </div>
            <h3 class="text-white font-bold text-lg mb-1">MBTI 测试</h3>
            <p class="text-white/40 text-xs leading-relaxed">60道精选题目，精准定位你的性格类型</p>
            <div class="mt-3 text-indigo-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              开始测试 →
            </div>
          </div>
        </div>

        <!-- 情侣匹配 -->
        <div @click="$emit('openCouple')"
             class="group relative bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 cursor-pointer overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-rose-500/0 group-hover:from-pink-500/5 group-hover:to-rose-500/5 transition-all duration-500"></div>
          <div class="relative">
            <div class="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">💕</span>
            </div>
            <h3 class="text-white font-bold text-lg mb-1">情侣匹配</h3>
            <p class="text-white/40 text-xs leading-relaxed">分析双人性格契合度，解锁相处之道</p>
            <div class="mt-3 text-pink-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              开始匹配 →
            </div>
          </div>
        </div>

        <!-- 职场黑话 -->
        <div @click="$emit('openJargon')"
             class="group relative bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 cursor-pointer overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500"></div>
          <div class="relative">
            <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">💬</span>
            </div>
            <h3 class="text-white font-bold text-lg mb-1">职场黑话</h3>
            <p class="text-white/40 text-xs leading-relaxed">120+条黑话解析，AI智能翻译</p>
            <div class="mt-3 text-amber-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              去看看 →
            </div>
          </div>
        </div>

        <!-- AI对话 -->
        <div @click="$emit('openAIChat')"
             class="group relative bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 cursor-pointer overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
          <div class="relative">
            <div class="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="text-2xl">🤖</span>
            </div>
            <h3 class="text-white font-bold text-lg mb-1">AI 对话</h3>
            <p class="text-white/40 text-xs leading-relaxed">与AI深度对话，探索性格与成长</p>
            <div class="mt-3 text-violet-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              开始对话 →
            </div>
          </div>
        </div>
      </div>

      <!-- 已测试用户的快捷入口 -->
      <div v-if="testStore.result && testStore.resultType" class="mb-12">
        <div class="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center text-3xl">
                {{ testStore.result.emoji }}
              </div>
              <div>
                <div class="text-white font-bold text-lg">{{ testStore.resultType }}</div>
                <div class="text-indigo-300 text-sm">{{ testStore.result.name }}</div>
              </div>
            </div>
            <button @click="$emit('start')" class="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white text-sm rounded-xl transition-all border border-white/10">
              重新测试
            </button>
          </div>
        </div>
      </div>

      <!-- 16种人格预览 -->
      <div class="mb-12">
        <div class="flex items-center justify-between mb-5">
          <h2 class="text-white font-bold text-lg">16种人格类型</h2>
          <span class="text-white/30 text-xs">点击查看详情</span>
        </div>
        <div class="grid grid-cols-4 gap-3">
          <button v-for="type in allTypes" :key="type.type"
                  @click="showTypeDetail(type)"
                  class="bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-xl rounded-xl p-3.5 border border-white/[0.06] hover:border-white/20 transition-all duration-200 group">
            <div class="text-2xl mb-1.5 group-hover:scale-110 transition-transform">{{ type.emoji }}</div>
            <div class="text-white font-bold text-sm">{{ type.type }}</div>
            <div class="text-white/30 text-[10px] mt-0.5 leading-tight">{{ type.name }}</div>
          </button>
        </div>
      </div>

      <!-- 人格详情弹出 -->
      <div v-if="selectedType" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="selectedType = null">
        <div class="bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-white/10 shadow-2xl">
          <div class="text-center mb-6">
            <div class="text-5xl mb-3">{{ selectedType.emoji }}</div>
            <h3 class="text-2xl font-bold text-white">{{ selectedType.type }}</h3>
            <p class="text-indigo-300 text-sm mt-1">{{ selectedType.name }}</p>
          </div>
          <p class="text-white/60 text-sm leading-relaxed text-center mb-6">{{ selectedType.desc }}</p>
          <div class="flex gap-2">
            <button @click="selectedType = null" class="flex-1 py-3 bg-white/5 border border-white/10 text-white/70 rounded-xl text-sm hover:bg-white/10 transition-all">
              关闭
            </button>
            <button @click="$emit('start'); selectedType = null" class="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl text-sm hover:shadow-lg transition-all">
              测测我是不是
            </button>
          </div>
        </div>
      </div>

      <!-- 主页底部大按钮 -->
      <div class="text-center mb-12">
        <button @click="$emit('start')"
                class="px-12 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 active:scale-95 relative overflow-hidden group">
          <span class="relative z-10">开始性格测试</span>
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>

      <!-- 底部信息 -->
      <div class="text-center">
        <p class="text-white/20 text-xs">基于 Myers-Briggs Type Indicator 理论</p>
        <p class="text-white/15 text-xs mt-1">古月开发 · 2026</p>
        <p class="text-white/10 text-[10px] mt-3">本测试仅供娱乐参考，不构成专业心理评估</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTestStore } from '../stores/testStore'

defineEmits(['start', 'openJargon', 'openCouple', 'openAIChat'])

const testStore = useTestStore()

const selectedType = ref(null)

const allTypes = [
  { type: 'INTJ', name: '建筑师', emoji: '🏗️', desc: 'INTJ是战略性思考者，擅长将复杂的理论转化为可执行的计划。他们追求效率和逻辑，对知识有强烈渴望，是天生的系统构建者。' },
  { type: 'INTP', name: '逻辑学家', emoji: '💡', desc: 'INTP是创新的发明家，对知识有永不满足的渴望。他们喜欢理论和抽象思维，善于发现逻辑漏洞，是思想的探索者。' },
  { type: 'ENTJ', name: '指挥官', emoji: '⚔️', desc: 'ENTJ是大胆的领导者，善于组织和推动项目。他们有强烈的意志力和决断力，天生具有领导气质，是变革的推动者。' },
  { type: 'ENTP', name: '辩论家', emoji: '🔥', desc: 'ENTP是聪明好奇的思想家，喜欢挑战传统观念。他们善于辩论，思维敏捷，总能找到新的可能性，是创意的源泉。' },
  { type: 'INFJ', name: '提倡者', emoji: '🌟', desc: 'INFJ是安静而有神秘感的理想主义者，他们有着强烈的直觉和同理心。追求意义和深度，是人群中的灯塔。' },
  { type: 'INFP', name: '调停者', emoji: '🎨', desc: 'INFP是诗意的理想主义者，总是寻找生活中的善意。他们有丰富的内心世界，重视真实和自我表达，是灵魂的守护者。' },
  { type: 'ENFJ', name: '主人公', emoji: '✨', desc: 'ENFJ是富有魅力的领袖，能够激励和鼓舞他人。他们天生具有感染力，善于理解他人的需求，是天生的导师。' },
  { type: 'ENFP', name: '竞选者', emoji: '🎉', desc: 'ENFP是热情洋溢的自由灵魂，总能找到生活中的乐趣。他们好奇心旺盛，善于发现可能性，是社交场合的灵魂人物。' },
  { type: 'ISTJ', name: '物流师', emoji: '🛡️', desc: 'ISTJ是务实的组织者，注重事实和细节。他们可靠、有条理，尊重传统和规则，是社会的中坚力量。' },
  { type: 'ISFJ', name: '守护者', emoji: '🌸', desc: 'ISFJ是温暖的守护者，默默地保护着他们关心的人。他们细心、负责、忠诚，是身边最可靠的后盾。' },
  { type: 'ESTJ', name: '总经理', emoji: '🏢', desc: 'ESTJ是出色的管理者，善于组织和执行。他们注重秩序和效率，有强烈的责任感，是团队的定海神针。' },
  { type: 'ESFJ', name: '执政官', emoji: '🎀', desc: 'ESFJ是热心的协调者，善于营造和谐的氛围。他们关心他人的感受，乐于助人，是社交圈的粘合剂。' },
  { type: 'ISTP', name: '鉴赏家', emoji: '🔧', desc: 'ISTP是灵活的实验者，善于解决实际问题。他们冷静、理性、适应力强，喜欢探索事物的运作原理。' },
  { type: 'ISFP', name: '探险家', emoji: '🌿', desc: 'ISFP是灵活而有魅力的艺术家，善于用感官体验生活。他们温和、敏感、有审美天赋，是生活的美学家。' },
  { type: 'ESTP', name: '企业家', emoji: '🚀', desc: 'ESTP是精明的冒险家，善于把握当下机会。他们精力充沛、行动果断、适应力强，是危机中的急先锋。' },
  { type: 'ESFP', name: '表演者', emoji: '🎭', desc: 'ESFP是热情的表演者，天生就是人群中的焦点。他们乐观、开朗、富有感染力，能让任何场合充满活力。' }
]

function showTypeDetail(type) {
  selectedType.value = type
}
</script>
