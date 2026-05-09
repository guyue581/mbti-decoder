<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex items-center justify-between p-4 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div class="flex items-center gap-3">
        <button @click="emit('close')" class="text-white/60 hover:text-white transition-colors p-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1 class="text-lg font-bold text-white">历史记录</h1>
      </div>
      <button v-if="history.length" @click="clearAll" class="text-red-400/60 hover:text-red-400 text-sm">清空</button>
    </div>

    <div class="flex-1 overflow-y-auto p-4">
      <div v-if="history.length === 0" class="flex flex-col items-center justify-center h-full text-center">
        <div class="text-5xl mb-4">📭</div>
        <h3 class="text-lg font-semibold text-white mb-2">暂无历史记录</h3>
        <p class="text-white/40 text-sm">完成MBTI测试后，结果将自动保存在这里</p>
      </div>

      <div v-else class="space-y-3 max-w-2xl mx-auto">
        <div v-for="item in history" :key="item.id"
             class="bg-white/[0.03] border border-white/[0.05] rounded-2xl overflow-hidden cursor-pointer hover:bg-white/[0.05] transition-all"
             @click="toggleExpand(item.id)">
          <!-- 摘要行 -->
          <div class="p-5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="text-3xl">{{ item.emoji }}</span>
                <div>
                  <h3 class="text-lg font-semibold text-white">{{ item.type }}</h3>
                  <p class="text-white/40 text-xs">{{ item.name }} · {{ formatDate(item.date) }}</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <!-- 情侣匹配分数摘要 -->
                <span v-if="item.isCoupleMatch && item.score" class="text-pink-400 font-bold text-sm">{{ item.score }}%</span>
                <!-- 展开/折叠箭头 -->
                <svg class="w-5 h-5 text-white/20 transition-transform" :class="{ 'rotate-180': expandedId === item.id }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
                <button @click.stop="deleteItem(item.id)" class="text-white/20 hover:text-red-400 p-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- 展开的详细内容 -->
          <div v-if="expandedId === item.id" class="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
            <!-- 情侣匹配分数 -->
            <div v-if="item.isCoupleMatch && item.score" class="flex items-center gap-2">
              <span class="text-white/40 text-xs">匹配度：</span>
              <span class="text-pink-400 font-bold">{{ item.score }}%</span>
              <span class="px-2 py-0.5 rounded-full text-xs" :class="getScoreBg(item.score)">{{ item.level }}</span>
            </div>

            <!-- 情侣匹配非AI分析结果 -->
            <div v-if="item.isCoupleMatch && item.description" class="space-y-3">
              <div class="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div class="text-xs text-white/40 mb-2">匹配描述</div>
                <p class="text-white/60 text-sm leading-relaxed">{{ item.description }}</p>
              </div>
              <div v-if="item.advantages && item.advantages.length" class="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                <div class="text-xs text-emerald-400 mb-2">相处优势</div>
                <ul class="space-y-1">
                  <li v-for="(a, idx) in item.advantages" :key="idx" class="text-white/60 text-sm flex items-start gap-2">
                    <span class="text-emerald-400">•</span>{{ a }}
                  </li>
                </ul>
              </div>
              <div v-if="item.challenges && item.challenges.length" class="p-3 bg-amber-500/5 border border-amber-500/10 rounded-xl">
                <div class="text-xs text-amber-400 mb-2">注意事项</div>
                <ul class="space-y-1">
                  <li v-for="(c, idx) in item.challenges" :key="idx" class="text-white/60 text-sm flex items-start gap-2">
                    <span class="text-amber-400">•</span>{{ c }}
                  </li>
                </ul>
              </div>
              <div v-if="item.tips && item.tips.length" class="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                <div class="text-xs text-blue-400 mb-2">建议</div>
                <ul class="space-y-1">
                  <li v-for="(t, idx) in item.tips" :key="idx" class="text-white/60 text-sm flex items-start gap-2">
                    <span class="text-blue-400">•</span>{{ t }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- 默认人格分析结果 -->
            <div v-if="!item.isCoupleMatch && item.description" class="space-y-3">
              <div class="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div class="text-xs text-white/40 mb-2">性格解读</div>
                <p class="text-white/60 text-sm leading-relaxed">{{ item.description }}</p>
              </div>
              <div v-if="item.personalityTraits && item.personalityTraits.length" class="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div class="text-xs text-white/40 mb-2">核心特征</div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(trait, idx) in item.personalityTraits" :key="idx" class="px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded-lg text-xs">{{ trait }}</span>
                </div>
              </div>
              <div v-if="item.strengths && item.strengths.length" class="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div class="text-xs text-white/40 mb-2">性格优势</div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(s, idx) in item.strengths" :key="idx" class="px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-xs">{{ s }}</span>
                </div>
              </div>
              <div v-if="item.weaknesses && item.weaknesses.length" class="p-3 bg-amber-500/5 border border-amber-500/10 rounded-xl">
                <div class="text-xs text-amber-400 mb-2">成长建议</div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(w, idx) in item.weaknesses" :key="idx" class="px-2 py-1 bg-amber-500/10 text-amber-300 rounded-lg text-xs">{{ w }}</span>
                </div>
              </div>
              <div v-if="item.careers && item.careers.length" class="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div class="text-xs text-white/40 mb-2">适合职业</div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(c, idx) in item.careers" :key="idx" class="px-2 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-xs">{{ c }}</span>
                </div>
              </div>
              <!-- 深度成长指南 -->
              <div v-if="item.growth" class="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div class="text-xs text-white/40 mb-3">深度成长指南</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div v-if="item.growth.strengths && item.growth.strengths.length" class="p-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded-lg">
                    <div class="text-xs text-emerald-400 mb-1.5">天赋优势</div>
                    <ul class="space-y-1">
                      <li v-for="(g, idx) in item.growth.strengths" :key="idx" class="text-white/60 text-xs flex items-start gap-1.5">
                        <span class="text-emerald-400">•</span>{{ g }}
                      </li>
                    </ul>
                  </div>
                  <div v-if="item.growth.growthAreas && item.growth.growthAreas.length" class="p-2.5 bg-amber-500/5 border border-amber-500/10 rounded-lg">
                    <div class="text-xs text-amber-400 mb-1.5">成长方向</div>
                    <ul class="space-y-1">
                      <li v-for="(g, idx) in item.growth.growthAreas" :key="idx" class="text-white/60 text-xs flex items-start gap-1.5">
                        <span class="text-amber-400">•</span>{{ g }}
                      </li>
                    </ul>
                  </div>
                  <div v-if="item.growth.careerAdvice && item.growth.careerAdvice.length" class="p-2.5 bg-blue-500/5 border border-blue-500/10 rounded-lg">
                    <div class="text-xs text-blue-400 mb-1.5">职业建议</div>
                    <ul class="space-y-1">
                      <li v-for="(g, idx) in item.growth.careerAdvice" :key="idx" class="text-white/60 text-xs flex items-start gap-1.5">
                        <span class="text-blue-400">•</span>{{ g }}
                      </li>
                    </ul>
                  </div>
                  <div v-if="item.growth.relationshipAdvice && item.growth.relationshipAdvice.length" class="p-2.5 bg-pink-500/5 border border-pink-500/10 rounded-lg">
                    <div class="text-xs text-pink-400 mb-1.5">关系建议</div>
                    <ul class="space-y-1">
                      <li v-for="(g, idx) in item.growth.relationshipAdvice" :key="idx" class="text-white/60 text-xs flex items-start gap-1.5">
                        <span class="text-pink-400">•</span>{{ g }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- 每日行动建议 -->
              <div v-if="item.growth && item.growth.dailyTips && item.growth.dailyTips.length" class="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div class="text-xs text-white/40 mb-2">每日行动建议</div>
                <div class="space-y-1.5">
                  <div v-for="(tip, idx) in item.growth.dailyTips" :key="idx" class="flex items-start gap-2 p-2 bg-white/[0.02] rounded-lg">
                    <span class="w-5 h-5 bg-yellow-500/15 text-yellow-300 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">{{ idx + 1 }}</span>
                    <span class="text-white/60 text-xs">{{ tip }}</span>
                  </div>
                </div>
              </div>
              <!-- 人际关系建议 -->
              <div v-if="item.relationships" class="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div class="text-xs text-white/40 mb-2">人际关系建议</div>
                <p class="text-white/60 text-sm leading-relaxed">{{ item.relationships }}</p>
              </div>
            </div>

            <!-- AI分析结果 -->
            <div v-if="item.aiAnalysis" class="p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-xl">
              <div class="text-xs text-indigo-400 mb-1">AI人格分析</div>
              <div class="text-white/60 text-sm leading-relaxed" v-html="formatAnalysis(item.aiAnalysis)"></div>
            </div>

            <!-- 情侣AI分析结果 -->
            <div v-if="item.coupleAIAnalysis" class="p-3 bg-pink-500/5 border border-pink-500/10 rounded-xl">
              <div class="text-xs text-pink-400 mb-1">AI情感分析</div>
              <div class="text-white/60 text-sm leading-relaxed" v-html="formatCoupleAnalysis(item.coupleAIAnalysis)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHistoryStore } from '../stores/historyStore'
import { useTestStore } from '../stores/testStore'
import { useAppStore } from '../stores/appStore'

const historyStore = useHistoryStore()
const testStore = useTestStore()
const appStore = useAppStore()
const emit = defineEmits(['close'])

const history = computed(() => historyStore.history)
const expandedId = ref(null)

function toggleExpand(id) {
  expandedId.value = expandedId.value === id ? null : id
}

function deleteItem(id) {
  historyStore.deleteHistory(id)
  if (expandedId.value === id) expandedId.value = null
}

function clearAll() {
  if (confirm('确定要清空所有历史记录吗？')) {
    historyStore.clearHistory()
    expandedId.value = null
  }
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getMonth() + 1}月${d.getDate()}日 ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`
}

function formatAnalysis(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-400">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-purple-300">$1</em>')
    .replace(/^### (.*$)/gm, '<h4 class="text-white font-semibold text-base mt-4 mb-2">$1</h4>')
    .replace(/^## (.*$)/gm, '<h3 class="text-white font-bold text-lg mt-5 mb-2">$1</h3>')
    .replace(/^# (.*$)/gm, '<h2 class="text-white font-bold text-xl mt-6 mb-3">$1</h2>')
    .replace(/^- (.*$)/gm, '<div class="flex items-start gap-2 ml-2 mb-1"><span class="text-indigo-400 mt-1">•</span><span>$1</span></div>')
    .replace(/\n/g, '<br>')
}

function formatCoupleAnalysis(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-400">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-rose-300">$1</em>')
    .replace(/^### (.*$)/gm, '<h4 class="text-white font-semibold text-base mt-4 mb-2">$1</h4>')
    .replace(/^## (.*$)/gm, '<h3 class="text-white font-bold text-lg mt-5 mb-2">$1</h3>')
    .replace(/^# (.*$)/gm, '<h2 class="text-white font-bold text-xl mt-6 mb-3">$1</h2>')
    .replace(/^- (.*$)/gm, '<div class="flex items-start gap-2 ml-2 mb-1"><span class="text-pink-400 mt-1">•</span><span>$1</span></div>')
    .replace(/\n/g, '<br>')
}

function getScoreBg(score) {
  if (score >= 90) return 'bg-emerald-500/10 text-emerald-300'
  if (score >= 75) return 'bg-blue-500/10 text-blue-300'
  if (score >= 60) return 'bg-amber-500/10 text-amber-300'
  return 'bg-red-500/10 text-red-300'
}
</script>
