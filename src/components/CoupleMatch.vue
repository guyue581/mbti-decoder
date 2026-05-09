<template>
  <div class="min-h-screen p-4 pt-8 pb-24">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-white">💕 情侣MBTI匹配</h1>
        <p class="text-white/40 mt-2">输入两个人的MBTI类型，看看你们有多配</p>
      </div>

      <!-- 类型选择区 -->
      <div class="bg-white/[0.03] rounded-2xl p-6 mb-6 border border-white/[0.05]">
        <div class="grid grid-cols-2 gap-4 mb-5">
          <button @click="selectingPerson = 1"
                  class="rounded-xl p-4 text-center transition-all border-2"
                  :class="selectingPerson === 1 ? 'border-pink-400 bg-pink-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'">
            <label class="text-white/50 text-sm block mb-1">你的类型</label>
            <div class="text-3xl mb-1">{{ getTypeEmoji(store.coupleType1) }}</div>
            <div class="text-white font-bold text-lg uppercase">{{ store.coupleType1 || '点击选择' }}</div>
          </button>
          <button @click="selectingPerson = 2"
                  class="rounded-xl p-4 text-center transition-all border-2"
                  :class="selectingPerson === 2 ? 'border-pink-400 bg-pink-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'">
            <label class="text-white/50 text-sm block mb-1">TA的类型</label>
            <div class="text-3xl mb-1">{{ getTypeEmoji(store.coupleType2) }}</div>
            <div class="text-white font-bold text-lg uppercase">{{ store.coupleType2 || '点击选择' }}</div>
          </button>
        </div>

        <div class="grid grid-cols-4 gap-2 mb-5">
          <button v-for="type in mbtiTypes" :key="type.type" @click="selectType(type.type)"
                  class="rounded-xl py-2 px-1 transition-all border text-center"
                  :class="isTypeSelected(type.type)
                    ? 'bg-pink-500/20 border-pink-400/50 scale-105'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'">
            <div class="text-xl mb-0.5">{{ type.emoji }}</div>
            <div class="text-white font-bold text-xs">{{ type.type }}</div>
          </button>
        </div>

        <button @click="handleMatch" :disabled="!store.coupleType1 || !store.coupleType2"
                class="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed">
          开始匹配 💕
        </button>
      </div>

      <!-- 匹配结果 -->
      <div v-if="store.compatibilityResult" class="space-y-4">
        <!-- 匹配度 -->
        <div class="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.05] text-center">
          <div class="flex items-center justify-center gap-4 mb-4">
            <span class="text-2xl font-bold text-white">{{ store.compatibilityResult.type1 }}</span>
            <span class="text-3xl">💕</span>
            <span class="text-2xl font-bold text-white">{{ store.compatibilityResult.type2 }}</span>
          </div>
          <div class="text-5xl font-black mb-2" :class="getScoreColor(store.compatibilityResult.score)">
            {{ store.compatibilityResult.score }}%
          </div>
          <span class="px-4 py-1.5 rounded-full text-sm font-medium" :class="getScoreBg(store.compatibilityResult.score)">
            {{ store.compatibilityResult.level }}
          </span>
          <p class="text-white/50 mt-4">{{ store.compatibilityResult.description }}</p>
        </div>

        <!-- 详细分析 -->
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-5">
            <h3 class="text-emerald-400 font-semibold mb-3">✅ 相处优势</h3>
            <ul class="space-y-2">
              <li v-for="s in store.compatibilityResult.advantages" :key="s" class="text-white/60 text-sm flex items-start gap-2">
                <span class="text-emerald-400">•</span>{{ s }}
              </li>
            </ul>
          </div>
          <div class="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-5">
            <h3 class="text-amber-400 font-semibold mb-3">⚠️ 注意事项</h3>
            <ul class="space-y-2">
              <li v-for="c in store.compatibilityResult.challenges" :key="c" class="text-white/60 text-sm flex items-start gap-2">
                <span class="text-amber-400">•</span>{{ c }}
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-5">
          <h3 class="text-blue-400 font-semibold mb-3">💡 建议</h3>
          <ul class="space-y-2">
            <li v-for="t in store.compatibilityResult.tips" :key="t" class="text-white/60 text-sm flex items-start gap-2">
              <span class="text-blue-400">•</span>{{ t }}
            </li>
          </ul>
        </div>

        <!-- AI分析 -->
        <div class="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.05]">
          <h3 class="text-lg font-semibold text-white mb-4">🤖 AI深度分析</h3>
          <div v-if="!hasApiKey" class="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <p class="text-amber-300 text-sm">请先在设置中配置API Key</p>
          </div>
          <div v-else-if="!store.coupleAIAnalysis && !store.isCoupleAnalyzing" class="text-center">
            <button @click="store.analyzeCoupleWithAI()" class="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
              🚀 开启AI深度分析
            </button>
          </div>
          <div v-else-if="store.isCoupleAnalyzing && !store.coupleAIAnalysis" class="text-center py-6">
            <div class="inline-block animate-spin rounded-full h-10 w-10 border-2 border-pink-500 border-t-transparent mb-3"></div>
            <p class="text-white/50">AI分析中...</p>
          </div>
          <div v-else-if="store.coupleAnalysisError" class="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <p class="text-red-300 text-sm">{{ store.coupleAnalysisError }}</p>
            <button @click="store.analyzeCoupleWithAI()" class="mt-2 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg text-sm">重试</button>
          </div>
          <div v-else-if="store.coupleAIAnalysis">
            <div class="text-white/70 leading-relaxed" v-html="formatAnalysis(store.coupleAIAnalysis)"></div>
            <div v-if="store.isCoupleAnalyzing" class="flex items-center gap-2 mt-3 text-white/30 text-sm">
              <div class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              生成中...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCoupleStore } from '../stores/coupleStore'
import { useAIConfigStore } from '../stores/aiConfigStore'

const store = useCoupleStore()
const aiConfigStore = useAIConfigStore()
const hasApiKey = computed(() => aiConfigStore.hasApiKey)

const selectingPerson = ref(1)

const mbtiTypes = [
  { type: 'INTJ', emoji: '🔮', name: '建筑师' },
  { type: 'INTP', emoji: '🧬', name: '逻辑学家' },
  { type: 'ENTJ', emoji: '👑', name: '指挥官' },
  { type: 'ENTP', emoji: '⚡', name: '辩论家' },
  { type: 'INFJ', emoji: '🌙', name: '提倡者' },
  { type: 'INFP', emoji: '🦋', name: '调停者' },
  { type: 'ENFJ', emoji: '🌟', name: '主人公' },
  { type: 'ENFP', emoji: '🎭', name: '竞选者' },
  { type: 'ISTJ', emoji: '📋', name: '物流师' },
  { type: 'ISFJ', emoji: '🛡️', name: '守卫者' },
  { type: 'ESTJ', emoji: '📊', name: '总经理' },
  { type: 'ESFJ', emoji: '🤝', name: '执政官' },
  { type: 'ISTP', emoji: '🔧', name: '鉴赏家' },
  { type: 'ISFP', emoji: '🎨', name: '探险家' },
  { type: 'ESTP', emoji: '🎯', name: '企业家' },
  { type: 'ESFP', emoji: '🎪', name: '表演者' }
]

function selectType(type) {
  if (selectingPerson.value === 1) {
    store.coupleType1 = type
    if (store.coupleType2) return
    selectingPerson.value = 2
  } else {
    store.coupleType2 = type
  }
}

function getTypeEmoji(type) {
  if (!type) return '❓'
  const found = mbtiTypes.find(t => t.type === type.toUpperCase())
  return found ? found.emoji : '❓'
}

function isTypeSelected(type) {
  return store.coupleType1 === type || store.coupleType2 === type
}

function handleMatch() {
  store.calculateCoupleMatch()
}

function getScoreColor(score) {
  if (score >= 90) return 'text-emerald-400'
  if (score >= 75) return 'text-blue-400'
  if (score >= 60) return 'text-amber-400'
  return 'text-red-400'
}

function getScoreBg(score) {
  if (score >= 90) return 'bg-emerald-500/10 text-emerald-300'
  if (score >= 75) return 'bg-blue-500/10 text-blue-300'
  if (score >= 60) return 'bg-amber-500/10 text-amber-300'
  return 'bg-red-500/10 text-red-300'
}

function formatAnalysis(text) {
  if (!text) return ''
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-400">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-rose-300">$1</em>')
    .replace(/^### (.*$)/gm, '<h4 class="text-white font-semibold text-base mt-4 mb-2">$1</h4>')
    .replace(/^## (.*$)/gm, '<h3 class="text-white font-bold text-lg mt-5 mb-2">$1</h3>')
    .replace(/^# (.*$)/gm, '<h2 class="text-white font-bold text-xl mt-6 mb-3">$1</h2>')
    .replace(/^- (.*$)/gm, '<div class="flex items-start gap-2 ml-2 mb-1"><span class="text-pink-400 mt-1">•</span><span>$1</span></div>')

  // 优化表格样式：将Markdown表格转换为HTML表格
  const tableRegex = /\|(.+)\|\n\|[-:\|]+\|\n((?:\|.+\|\n?)+)/g
  formatted = formatted.replace(tableRegex, (match, header, rows) => {
    const headers = header.split('|').map(h => h.trim()).filter(h => h)
    const rowData = rows.trim().split('\n').map(row => {
      return row.split('|').map(c => c.trim()).filter(c => c)
    }).filter(r => r.length > 0)

    let tableHtml = '<div class="overflow-x-auto my-4"><table class="w-full text-sm border border-white/10 rounded-xl overflow-hidden">'
    tableHtml += '<thead class="bg-white/5"><tr>'
    headers.forEach(h => {
      tableHtml += `<th class="px-4 py-3 text-left text-white/80 font-semibold border-b border-white/10">${h}</th>`
    })
    tableHtml += '</tr></thead><tbody>'
    rowData.forEach((row, idx) => {
      const bgClass = idx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
      tableHtml += `<tr class="${bgClass}">`
      row.forEach(cell => {
        tableHtml += `<td class="px-4 py-3 text-white/60 border-b border-white/5">${cell}</td>`
      })
      tableHtml += '</tr>'
    })
    tableHtml += '</tbody></table></div>'
    return tableHtml
  })

  return formatted.replace(/\n/g, '<br>')
}
</script>
