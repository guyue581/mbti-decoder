<template>
  <div class="min-h-screen p-4 pt-8 pb-24">
    <div class="max-w-3xl mx-auto">
      <!-- 庆祝头部 -->
      <div class="text-center mb-8 animate-fade-in">
        <div class="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-5 py-2 rounded-full mb-4 border border-emerald-500/20">
          <span class="text-lg">🎉</span>
          <span class="font-medium">测试完成</span>
        </div>
        <h1 class="text-2xl font-bold text-white">你的MBTI人格类型</h1>
      </div>
      
      <!-- 主结果卡片 -->
      <div class="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 mb-6 text-center border border-white/[0.05] animate-slide-up">
        <div class="relative inline-block mb-6">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 blur-2xl rounded-full"></div>
          <div class="relative w-36 h-36 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
            <span class="text-5xl font-black text-white">{{ testStore.resultType }}</span>
          </div>
        </div>
        
        <div class="flex items-center justify-center gap-3 mb-2">
          <span class="text-4xl">{{ testStore.result.emoji }}</span>
          <h2 class="text-3xl font-bold text-white">{{ testStore.result.name }}</h2>
        </div>
        <p class="text-white/40 mb-8">{{ testStore.result.tagline }}</p>
        
        <!-- 维度百分比分析 -->
        <div class="max-w-md mx-auto mb-8">
          <DimensionPercentages v-if="testStore.dimensionPercentages" :percentages="testStore.dimensionPercentages" />
        </div>
        
        <div class="flex justify-center gap-3 flex-wrap">
          <button @click="shareResult" class="px-6 py-3 bg-white/5 hover:bg-white/10 text-white/70 font-medium rounded-xl transition-all flex items-center gap-2 border border-white/5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            分享
          </button>
          <button @click="generateWallpaper" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            生成壁纸
          </button>
        </div>
      </div>
      
      <!-- 性格描述 -->
      <div class="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 mb-4 border border-white/[0.05] animate-slide-up" style="animation-delay: 0.1s;">
        <h3 class="text-lg font-semibold text-white mb-3">📖 性格解读</h3>
        <p class="text-white/60 leading-relaxed">{{ testStore.result.description }}</p>
      </div>
      
      <!-- 性格特点 -->
      <div class="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 mb-4 border border-white/[0.05] animate-slide-up" style="animation-delay: 0.15s;">
        <h3 class="text-lg font-semibold text-white mb-4">🔍 核心特征</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div v-for="(trait, index) in testStore.result.personalityTraits" :key="index" 
               class="flex items-start gap-3 p-3 bg-white/[0.02] rounded-xl">
            <span class="w-6 h-6 bg-indigo-500/15 text-indigo-300 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
              {{ index + 1 }}
            </span>
            <span class="text-white/70 text-sm">{{ trait }}</span>
          </div>
        </div>
      </div>
      
      <!-- 优势和成长 -->
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-5 border border-white/[0.05] animate-slide-up" style="animation-delay: 0.2s;">
          <h3 class="text-base font-semibold text-white mb-3">💪 性格优势</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in testStore.result.strengths" :key="s" class="px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-sm">{{ s }}</span>
          </div>
        </div>
        
        <div class="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-5 border border-white/[0.05] animate-slide-up" style="animation-delay: 0.25s;">
          <h3 class="text-base font-semibold text-white mb-3">🌱 成长建议</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="w in testStore.result.weaknesses.slice(0, 5)" :key="w" class="px-3 py-1 bg-amber-500/10 text-amber-300 rounded-lg text-sm">{{ w }}</span>
          </div>
        </div>
      </div>
      
      <!-- 适合职业 -->
      <div class="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 mb-4 border border-white/[0.05] animate-slide-up" style="animation-delay: 0.3s;">
        <h3 class="text-lg font-semibold text-white mb-4">💼 适合职业</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="c in testStore.result.careers" :key="c" class="px-4 py-2 bg-indigo-500/10 text-indigo-300 rounded-lg text-sm">{{ c }}</span>
        </div>
      </div>
      
      <!-- 成长建议（详细版） -->
      <div v-if="growth" class="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 mb-4 border border-white/[0.05] animate-slide-up" style="animation-delay: 0.32s;">
        <h3 class="text-lg font-semibold text-white mb-5">🌟 深度成长指南</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
            <h4 class="text-emerald-400 font-medium mb-3 flex items-center gap-2">💎 天赋优势</h4>
            <ul class="space-y-2">
              <li v-for="(item, i) in growth.strengths" :key="i" class="text-white/60 text-sm flex items-start gap-2">
                <span class="text-emerald-400 mt-0.5">•</span>{{ item }}
              </li>
            </ul>
          </div>
          <div class="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4">
            <h4 class="text-amber-400 font-medium mb-3 flex items-center gap-2">🎯 成长方向</h4>
            <ul class="space-y-2">
              <li v-for="(item, i) in growth.growthAreas" :key="i" class="text-white/60 text-sm flex items-start gap-2">
                <span class="text-amber-400 mt-0.5">•</span>{{ item }}
              </li>
            </ul>
          </div>
          <div class="bg-blue-500/5 border border-blue-500/10 rounded-xl p-4">
            <h4 class="text-blue-400 font-medium mb-3 flex items-center gap-2">💼 职业建议</h4>
            <ul class="space-y-2">
              <li v-for="(item, i) in growth.careerAdvice" :key="i" class="text-white/60 text-sm flex items-start gap-2">
                <span class="text-blue-400 mt-0.5">•</span>{{ item }}
              </li>
            </ul>
          </div>
          <div class="bg-pink-500/5 border border-pink-500/10 rounded-xl p-4">
            <h4 class="text-pink-400 font-medium mb-3 flex items-center gap-2">💕 关系建议</h4>
            <ul class="space-y-2">
              <li v-for="(item, i) in growth.relationshipAdvice" :key="i" class="text-white/60 text-sm flex items-start gap-2">
                <span class="text-pink-400 mt-0.5">•</span>{{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 每日小贴士 -->
      <div v-if="growth && growth.dailyTips" class="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 mb-4 border border-white/[0.05] animate-slide-up" style="animation-delay: 0.34s;">
        <h3 class="text-lg font-semibold text-white mb-3">💡 每日行动建议</h3>
        <div class="space-y-2">
          <div v-for="(tip, i) in growth.dailyTips" :key="i" class="flex items-start gap-3 p-3 bg-white/[0.02] rounded-xl">
            <span class="w-6 h-6 bg-yellow-500/15 text-yellow-300 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{{ i + 1 }}</span>
            <span class="text-white/60 text-sm">{{ tip }}</span>
          </div>
        </div>
      </div>

      <!-- 相处建议 -->
      <div class="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 mb-4 border border-white/[0.05] animate-slide-up" style="animation-delay: 0.35s;">
        <h3 class="text-lg font-semibold text-white mb-3">💕 人际关系建议</h3>
        <p class="text-white/60 leading-relaxed">{{ testStore.result.relationships }}</p>
      </div>

      <!-- AI分析 -->
      <div class="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 mb-6 border border-white/[0.05] animate-slide-up" style="animation-delay: 0.4s;">
        <h3 class="text-lg font-semibold text-white mb-4">🤖 AI智能分析</h3>
        
        <div v-if="!aiConfigStore.hasApiKey" class="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-4">
          <p class="text-amber-300 text-sm">请先在设置中配置API Key以启用AI分析功能</p>
          <button @click="appStore.openSettings()" class="mt-2 px-4 py-2 bg-amber-500/20 text-amber-300 rounded-lg text-sm">去设置</button>
        </div>
        
        <div v-else-if="!testStore.aiAnalysis && !testStore.isAnalyzing" class="text-center">
          <button @click="testStore.analyzeWithAI()" class="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all inline-flex items-center gap-2">
            🚀 开启AI深度分析
          </button>
        </div>
        
        <div v-else-if="testStore.isAnalyzing && !testStore.aiAnalysis" class="text-center py-6">
          <div class="inline-block animate-spin rounded-full h-10 w-10 border-2 border-indigo-500 border-t-transparent mb-3"></div>
          <p class="text-white/50">AI分析中...</p>
        </div>
        
        <div v-else-if="testStore.analysisError" class="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
          <p class="text-red-300 text-sm">{{ testStore.analysisError }}</p>
          <button @click="testStore.analyzeWithAI()" class="mt-2 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg text-sm">重试</button>
        </div>
        
        <div v-else-if="testStore.aiAnalysis">
          <div class="text-white/70 leading-relaxed" v-html="formatAnalysis(testStore.aiAnalysis)"></div>
          <div v-if="testStore.isAnalyzing" class="flex items-center gap-2 mt-3 text-white/30 text-sm">
            <div class="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            生成中...
          </div>
        </div>
      </div>
      
      <!-- 重新测试 -->
      <div class="text-center animate-slide-up" style="animation-delay: 0.5s;">
        <div class="flex justify-center gap-3 flex-wrap">
          <button @click="appStore.goHome()" class="px-6 py-3 bg-white/5 hover:bg-white/10 text-white/70 font-medium rounded-xl transition-all flex items-center gap-2 border border-white/5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            返回首页
          </button>
          <button @click="restartTest" class="px-6 py-3 bg-white/5 hover:bg-white/10 text-white/70 font-medium rounded-xl transition-all flex items-center gap-2 border border-white/5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            重新测试
          </button>
        </div>
        <p class="text-white/15 text-[10px] mt-4">⚠️ 本测试仅供娱乐参考，不构成专业心理评估</p>
      </div>
      
      <!-- 壁纸弹窗 -->
      <div v-if="showWallpaper" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="showWallpaper = false">
        <div class="bg-[#0a0a0f] rounded-3xl p-6 max-w-sm w-full border border-white/10 animate-modal-in">
          <h3 class="text-lg font-semibold text-white mb-4 text-center">🎨 专属壁纸</h3>
          <div class="bg-white rounded-2xl overflow-hidden mb-4">
            <img :src="wallpaperData" alt="壁纸">
          </div>
          <div class="flex gap-3">
            <button @click="saveWallpaper" class="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl">保存</button>
            <button @click="showWallpaper = false" class="px-6 py-3 bg-white/10 text-white/70 rounded-xl">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTestStore } from '../stores/testStore'
import { useAppStore } from '../stores/appStore'
import { useAIConfigStore } from '../stores/aiConfigStore'
import DimensionPercentages from './DimensionPercentages.vue'
import { growthSuggestions } from '../data/growthData'

const testStore = useTestStore()
const appStore = useAppStore()
const aiConfigStore = useAIConfigStore()

const growth = computed(() => growthSuggestions[testStore.resultType] || null)
const showWallpaper = ref(false)
const wallpaperData = ref('')

function restartTest() {
  testStore.resetTest()
  appStore.goHome()
}

async function shareResult() {
  const shareText = `我的MBTI是${testStore.resultType}（${testStore.result.name}）！\n${testStore.result.tagline}\n\n来自：人格解码器`

  if (navigator.share) {
    try {
      await navigator.share({
        title: '人格解码器 - 测试结果',
        text: shareText
      })
    } catch (e) {
      // 用户取消分享不处理
    }
  } else {
    // 桌面端回退：复制到剪贴板
    try {
      await navigator.clipboard.writeText(shareText)
      alert('结果已复制到剪贴板')
    } catch (e) {
      // 降级方案
      const textarea = document.createElement('textarea')
      textarea.value = shareText
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      alert('结果已复制到剪贴板')
    }
  }
}

function generateWallpaper() {
  const canvas = document.createElement('canvas')
  canvas.width = 400
  canvas.height = 700
  const ctx = canvas.getContext('2d')
  
  const gradient = ctx.createLinearGradient(0, 0, 400, 700)
  gradient.addColorStop(0, '#030014')
  gradient.addColorStop(0.5, '#1a0533')
  gradient.addColorStop(1, '#030014')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 400, 700)
  
  ctx.fillStyle = 'rgba(99, 102, 241, 0.15)'
  ctx.beginPath()
  ctx.arc(320, 80, 180, 0, Math.PI * 2)
  ctx.fill()
  
  ctx.fillStyle = '#fff'
  ctx.font = '16px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('人格解码器', 200, 60)
  
  ctx.font = 'bold 72px sans-serif'
  ctx.fillStyle = '#8b5cf6'
  ctx.fillText(testStore.resultType, 200, 180)
  
  ctx.fillStyle = '#fff'
  ctx.font = 'bold 32px sans-serif'
  ctx.fillText(testStore.result.emoji + ' ' + testStore.result.name, 200, 260)
  
  ctx.fillStyle = 'rgba(255,255,255,0.5)'
  ctx.font = '18px sans-serif'
  ctx.fillText(testStore.result.tagline, 200, 300)
  
  const traits = testStore.result.strengths.slice(0, 4)
  traits.forEach((trait, i) => {
    const x = 100 + (i % 2) * 150
    const y = Math.floor(i / 2) * 50 + 380
    ctx.fillStyle = 'rgba(139, 92, 246, 0.3)'
    ctx.beginPath()
    ctx.roundRect(x, y, 130, 36, 18)
    ctx.fill()
    ctx.fillStyle = '#fff'
    ctx.font = '14px sans-serif'
    ctx.fillText(trait, x + 65, y + 23)
  })
  
  ctx.fillStyle = 'rgba(255,255,255,0.3)'
  ctx.font = '12px sans-serif'
  ctx.fillText('人格解码器 v1.0.0', 200, 650)
  
  wallpaperData.value = canvas.toDataURL('image/png')
  showWallpaper.value = true
}

async function saveWallpaper() {
  const link = document.createElement('a')
  link.download = `MBTI_${testStore.resultType}.png`
  link.href = wallpaperData.value
  link.click()
  showWallpaper.value = false
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
    .replace(/^\d+\. (.*$)/gm, '<div class="ml-2 mb-1">$&</div>')
    .replace(/\n/g, '<br>')
}
</script>

<style scoped>
@keyframes modalIn {
  0% { opacity: 0; transform: scale(0.96); }
  100% { opacity: 1; transform: scale(1); }
}
.animate-modal-in { animation: modalIn 0.2s ease-out; }
</style>
