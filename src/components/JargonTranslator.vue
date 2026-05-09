<template>
  <div class="min-h-screen p-4 pt-8 pb-24">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-white">🗣️ 职场黑话翻译器</h1>
        <p class="text-white/40 mt-2">解码职场潜台词，get 高情商回复</p>
      </div>

      <!-- AI模式 -->
      <div class="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-white mb-4">🤖 AI智能分析</h3>
        <textarea v-model="aiInputText" placeholder="输入你想分析的职场黑话..." rows="3"
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none mb-4"></textarea>
        <button @click="handleAI" :disabled="!hasApiKey || jargonStore.isJargonAnalyzing" class="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl disabled:opacity-40">
          {{ jargonStore.isJargonAnalyzing ? '分析中...' : 'AI分析' }}
        </button>
        <div v-if="jargonStore.jargonAIResult" class="mt-4 p-4 bg-white/[0.02] rounded-xl">
          <div class="text-white/70 leading-relaxed" v-html="formatText(jargonStore.jargonAIResult)"></div>
        </div>
        <div v-if="jargonStore.jargonAIError" class="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
          {{ jargonStore.jargonAIError }}
        </div>
      </div>

      <!-- 随机黑话 -->
      <div v-if="randomItem" class="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 mb-6">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-lg font-bold text-white">🎲 随机黑话</h2>
          <button @click="pickRandom" class="text-amber-400 text-sm hover:text-amber-300">换一个 →</button>
        </div>
        <div class="text-3xl mb-2">{{ randomItem.emoji }}</div>
        <div class="text-white font-bold text-xl mb-1">{{ randomItem.phrase }}</div>
        <div class="text-white/50">{{ randomItem.meaning }}</div>
        <div class="mt-3">
          <span class="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full">{{ randomItem.category }}</span>
        </div>
      </div>

      <!-- 搜索框 -->
      <div class="mb-6">
        <div class="relative">
          <input v-model="searchKeyword" placeholder="输入职场黑话关键词..."
                 class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 text-lg">
          <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      <!-- 分类标签 -->
      <div class="flex flex-wrap gap-2 mb-6">
        <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
                class="px-4 py-2 rounded-xl text-sm transition-all"
                :class="selectedCategory === cat ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-white/5 text-white/40 hover:text-white/60 border border-white/5'">
          {{ cat }}
        </button>
      </div>

      <!-- 黑话列表 -->
      <div class="space-y-3 mb-8">
        <div v-for="(j, idx) in filteredList" :key="idx" @click="toggleDetail(idx)"
             class="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-5 cursor-pointer hover:bg-white/[0.06] transition-all">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="text-2xl">{{ j.emoji }}</span>
              <div>
                <h3 class="text-white font-semibold text-lg">{{ j.phrase }}</h3>
                <p class="text-white/40 text-sm mt-1">{{ j.category }}</p>
              </div>
            </div>
            <svg class="w-5 h-5 text-white/20 transition-transform" :class="{ 'rotate-90': expandedIndex === idx }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
          <div v-if="expandedIndex === idx" class="mt-4 pt-4 border-t border-white/10">
            <div class="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
              <h4 class="text-emerald-400 font-medium mb-2">翻译</h4>
              <p class="text-white/70">{{ j.meaning }}</p>
            </div>
          </div>
        </div>
        <div v-if="filteredList.length === 0" class="text-center py-8 text-white/30">
          没有找到相关黑话
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useJargonStore } from '../stores/jargonStore'
import { useAIConfigStore } from '../stores/aiConfigStore'
import { officeJargonData } from '../data/jargonData'

const jargonStore = useJargonStore()
const aiConfigStore = useAIConfigStore()

const searchKeyword = ref('')
const selectedCategory = ref('全部')
const expandedIndex = ref(null)
const aiInputText = ref('')
const randomItem = ref(null)

const hasApiKey = computed(() => aiConfigStore.hasApiKey)

const categories = computed(() => {
  if (!officeJargonData || officeJargonData.length === 0) return ['全部']
  return ['全部', ...new Set(officeJargonData.map(j => j.category))]
})

const filteredList = computed(() => {
  let list = officeJargonData || []
  if (selectedCategory.value !== '全部') {
    list = list.filter(j => j.category === selectedCategory.value)
  }
  if (searchKeyword.value) {
    const kw = searchKeyword.value.toLowerCase()
    list = list.filter(j => j.phrase.toLowerCase().includes(kw) || j.meaning.toLowerCase().includes(kw))
  }
  return list
})

function pickRandom() {
  if (!officeJargonData || officeJargonData.length === 0) return
  const idx = Math.floor(Math.random() * officeJargonData.length)
  randomItem.value = officeJargonData[idx]
}

function toggleDetail(idx) {
  expandedIndex.value = expandedIndex.value === idx ? null : idx
}

function handleAI() {
  const text = aiInputText.value || (randomItem.value ? randomItem.value.phrase : '')
  if (!text) return
  jargonStore.analyzeJargonWithAI(text)
}

function formatText(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-400">$1</strong>')
    .replace(/\n/g, '<br>')
}

onMounted(() => {
  try {
    pickRandom()
  } catch (e) {
    console.error('黑话数据加载失败:', e)
  }
})
</script>
