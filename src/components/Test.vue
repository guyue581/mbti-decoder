<template>
  <div class="min-h-screen p-4 pt-8 pb-24">
    <div class="max-w-2xl mx-auto">
      <!-- 顶部进度 -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <button @click="confirmExit" class="group flex items-center gap-2 text-white/40 hover:text-white transition-all px-3 py-2 rounded-xl hover:bg-white/5">
            <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span class="text-sm">退出</span>
          </button>
          <div class="text-center">
            <span class="text-white font-semibold text-lg">{{ testStore.currentQuestionIndex + 1 }}</span>
            <span class="text-white/20"> / {{ testStore.totalQuestions }}</span>
          </div>
          <div class="text-white/30 text-sm">{{ Math.round(testStore.progress) }}%</div>
        </div>
        
        <!-- 进度条 -->
        <div class="h-1 bg-white/5 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500"
               :style="{ width: testStore.progress + '%' }"></div>
        </div>
        
        <!-- 维度指示器 -->
        <div class="flex justify-center gap-6 mt-4">
          <div v-for="(dim, key) in dimensions" :key="key" class="flex items-center gap-2">
            <span class="text-xs text-white/30">{{ dim.label }}</span>
            <span class="w-4 h-4 rounded-full transition-all duration-300" :class="getDimensionClass(dim.key)"></span>
          </div>
        </div>
      </div>
      
      <!-- 题目卡片 -->
      <div class="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 mb-8 border border-white/[0.05] animate-fade-in">
        <div class="flex items-center gap-2 mb-6">
          <span class="px-4 py-1.5 bg-indigo-500/10 text-indigo-300 rounded-full text-xs font-medium border border-indigo-500/20">
            {{ getDimensionName() }}
          </span>
        </div>
        
        <h2 class="text-2xl font-semibold text-white mb-8 text-center leading-relaxed">
          {{ testStore.currentQuestion.question }}
        </h2>
        
        <div class="space-y-4">
          <div v-for="(option, index) in testStore.currentQuestion.options" 
               :key="index"
               @click="selectOption(option)"
               class="group bg-white/[0.03] border border-white/[0.08] cursor-pointer transition-all duration-300 rounded-2xl p-4 hover:bg-white/[0.06] hover:border-white/15"
               :class="{ 'selected': testStore.answers[testStore.currentQuestionIndex] === option.text }">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-base font-semibold transition-all duration-300"
                   :class="testStore.answers[testStore.currentQuestionIndex] === option.text ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white' : 'bg-white/5 text-white/40 group-hover:bg-white/10'">
                {{ index === 0 ? 'A' : 'B' }}
              </div>
              <span class="text-white/80 font-medium group-hover:text-white transition-colors">{{ option.text }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 导航按钮 -->
      <div class="flex justify-between items-center">
        <button v-if="testStore.currentQuestionIndex > 0" 
                @click="testStore.prevQuestion"
                class="group px-6 py-3 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white font-medium rounded-xl transition-all flex items-center gap-2 border border-white/5">
          <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          上一题
        </button>
        <div v-else></div>
        
        <button v-if="testStore.currentQuestionIndex < testStore.totalQuestions - 1" 
                @click="testStore.nextQuestion"
                :disabled="!testStore.answers[testStore.currentQuestionIndex]"
                class="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 flex items-center gap-2">
          下一题
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        
        <button v-else 
                @click="handleSubmit"
                :disabled="!testStore.isComplete"
                class="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 flex items-center gap-2">
          查看结果 ✨
        </button>
      </div>
      
      <!-- 题目快速跳转 -->
      <div class="mt-10">
        <p class="text-sm text-white/20 mb-4 text-center">快速跳转</p>
        <div class="flex flex-wrap justify-center gap-2">
          <button v-for="i in testStore.totalQuestions" 
                  :key="i"
                  @click="testStore.goToQuestion(i - 1)"
                  class="w-8 h-8 rounded-lg text-xs font-medium transition-all duration-200 active:scale-90"
                  :class="testStore.answers[i - 1] ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg' : 'bg-white/5 text-white/30 hover:bg-white/10'">
            {{ i }}
          </button>
        </div>
        <p class="text-white/15 text-[10px] mt-4 text-center">本测试仅供娱乐参考，不构成专业心理评估</p>
      </div>
    </div>

    <!-- 退出确认 -->
    <div v-if="showExitConfirm" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="showExitConfirm = false">
      <div class="bg-[#0a0a0f] rounded-2xl p-6 max-w-sm w-full border border-white/10 animate-modal-in">
        <div class="text-center mb-6">
          <div class="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">确定退出测试？</h3>
          <p class="text-white/40 text-sm">退出后当前进度将不会保存</p>
        </div>
        <div class="flex gap-3">
          <button @click="showExitConfirm = false" class="flex-1 py-3 bg-white/5 text-white/70 font-medium rounded-xl hover:bg-white/10 transition-all border border-white/5">
            继续测试
          </button>
          <button @click="exitTest" class="flex-1 py-3 bg-red-500/80 text-white font-medium rounded-xl hover:bg-red-500 transition-all">
            确认退出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTestStore } from '../stores/testStore'
import { useAppStore } from '../stores/appStore'

const testStore = useTestStore()
const appStore = useAppStore()
const showExitConfirm = ref(false)

const dimensions = [
  { key: 'EI', label: '能量' },
  { key: 'SN', label: '感知' },
  { key: 'TF', label: '决策' },
  { key: 'JP', label: '行动' }
]

function getDimensionClass(key) {
  const question = testStore.currentQuestion
  const answered = testStore.answers[testStore.currentQuestionIndex]

  if (!answered) return 'bg-white/10'

  const option = question.options.find(o => o.text === answered)
  if (!option) return 'bg-white/10'

  // 只高亮当前题目对应的维度
  if (question.dimension === 'EI' && key === 'EI') return option.letter === 'E' ? 'bg-indigo-500' : 'bg-indigo-500'
  if (question.dimension === 'SN' && key === 'SN') return option.letter === 'S' ? 'bg-purple-500' : 'bg-purple-500'
  if (question.dimension === 'TF' && key === 'TF') return option.letter === 'T' ? 'bg-pink-500' : 'bg-pink-500'
  if (question.dimension === 'JP' && key === 'JP') return option.letter === 'J' ? 'bg-amber-500' : 'bg-amber-500'

  return 'bg-white/10'
}

function getDimensionName() {
  const q = testStore.currentQuestion.question
  if (q.includes('社交') || q.includes('朋友') || q.includes('能量') || q.includes('独处')) return '能量获取方式'
  if (q.includes('实际') || q.includes('创意') || q.includes('具体') || q.includes('直觉')) return '感知方式'
  if (q.includes('决定') || q.includes('分歧') || q.includes('逻辑') || q.includes('情感')) return '决策方式'
  if (q.includes('计划') || q.includes('灵活') || q.includes('秩序') || q.includes('随性')) return '生活方式'
  return '性格测试'
}

function selectOption(option) {
  testStore.setAnswer(testStore.currentQuestionIndex, option.text)
  setTimeout(() => {
    if (testStore.currentQuestionIndex < testStore.totalQuestions - 1) {
      testStore.nextQuestion()
    }
  }, 300)
}

function handleSubmit() {
  testStore.submitTest()
  appStore.openResult()
}

function confirmExit() {
  if (testStore.answeredCount > 0) {
    showExitConfirm.value = true
  } else {
    appStore.goHome()
  }
}

function exitTest() {
  showExitConfirm.value = false
  appStore.goHome()
}
</script>

<style scoped>
@keyframes modalIn {
  0% { opacity: 0; transform: scale(0.96); }
  100% { opacity: 1; transform: scale(1); }
}

.animate-modal-in {
  animation: modalIn 0.2s ease-out;
}
</style>
