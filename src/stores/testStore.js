import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mbtiQuestions, calculateMBTI, getDimensionTendencies, mbtiDescriptions, calculatePercentages, generateAnalysisPrompt } from '../data/mbtiData'
import { growthSuggestions } from '../data/growthData'
import { apiService } from '../services/apiService'
import { useAIConfigStore } from './aiConfigStore'
import { useHistoryStore } from './historyStore'

export const useTestStore = defineStore('test', () => {
  const currentQuestionIndex = ref(0)
  const answers = ref({})
  const result = ref(null)
  const resultType = ref(null)
  const dimensionTendencies = ref(null)
  const dimensionPercentages = ref(null)

  const aiAnalysis = ref('')
  const isAnalyzing = ref(false)
  const analysisError = ref(null)
  const currentHistoryId = ref(null)

  const currentQuestion = computed(() => mbtiQuestions[currentQuestionIndex.value])
  const progress = computed(() => ((currentQuestionIndex.value + 1) / mbtiQuestions.length) * 100)
  const totalQuestions = computed(() => mbtiQuestions.length)
  const answeredCount = computed(() => Object.keys(answers.value).length)
  const isComplete = computed(() => answeredCount.value === totalQuestions.value)

  function setAnswer(index, answer) {
    answers.value[index] = answer
  }

  function nextQuestion() {
    if (currentQuestionIndex.value < totalQuestions.value - 1) {
      currentQuestionIndex.value++
    }
  }

  function prevQuestion() {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--
    }
  }

  function goToQuestion(index) {
    if (index >= 0 && index < totalQuestions.value) {
      currentQuestionIndex.value = index
    }
  }

  function startTest() {
    currentQuestionIndex.value = 0
    answers.value = {}
    result.value = null
    resultType.value = null
    aiAnalysis.value = ''
    analysisError.value = null
    dimensionTendencies.value = null
    dimensionPercentages.value = null
  }

  function submitTest() {
    const answersList = Object.keys(answers.value)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map(key => answers.value[key])

    const mbtiType = calculateMBTI(answersList)
    resultType.value = mbtiType
    result.value = mbtiDescriptions[mbtiType]
    dimensionTendencies.value = getDimensionTendencies(answersList)
    dimensionPercentages.value = calculatePercentages(answersList)
    aiAnalysis.value = ''

    const historyStore = useHistoryStore()
    const recordId = historyStore.addToHistory({
      type: mbtiType,
      name: result.value.name,
      emoji: result.value.emoji,
      answers: { ...answers.value },
      dimensionTendencies: dimensionTendencies.value ? { ...dimensionTendencies.value } : null,
      dimensionPercentages: dimensionPercentages.value ? { ...dimensionPercentages.value } : null,
      description: result.value.description,
      personalityTraits: result.value.personalityTraits,
      strengths: result.value.strengths,
      weaknesses: result.value.weaknesses,
      careers: result.value.careers,
      relationships: result.value.relationships,
      growth: growthSuggestions[mbtiType] || null
    })
    currentHistoryId.value = recordId
  }

  function resetTest() {
    currentQuestionIndex.value = 0
    answers.value = {}
    result.value = null
    resultType.value = null
    aiAnalysis.value = ''
    analysisError.value = null
    dimensionTendencies.value = null
    dimensionPercentages.value = null
  }

  async function analyzeWithAI() {
    const aiConfigStore = useAIConfigStore()

    if (!aiConfigStore.hasApiKey) {
      analysisError.value = '请先在设置中配置API Key'
      return
    }

    if (!result.value || !resultType.value) {
      analysisError.value = '无法获取测试结果'
      return
    }

    isAnalyzing.value = true
    analysisError.value = null
    aiAnalysis.value = ''

    apiService.configure({
      provider: aiConfigStore.apiConfig.provider,
      apiKey: aiConfigStore.apiConfig.apiKey,
      model: aiConfigStore.apiConfig.model
    })

    const prompt = generateAnalysisPrompt(resultType.value, result.value)
    const messages = [
      {
        role: 'system',
        content: '你是一位专业MBTI人格分析师，拥有深厚的心理学背景。请用温暖、有洞察力的语言为用户提供深度人格分析。回复使用Markdown格式。'
      },
      {
        role: 'user',
        content: prompt
      }
    ]

    apiService.sendStreamingMessage(
      messages,
      { temperature: 0.7, max_tokens: 2000 },
      (chunk, fullContent) => {
        aiAnalysis.value = fullContent
      },
      (fullContent) => {
        aiAnalysis.value = fullContent
        isAnalyzing.value = false
        if (currentHistoryId.value) {
          const historyStore = useHistoryStore()
          historyStore.updateHistoryAIAnalysis(currentHistoryId.value, fullContent)
        }
      },
      (error) => {
        analysisError.value = error || 'AI分析失败，请检查API配置'
        isAnalyzing.value = false
      }
    )
  }

  return {
    currentQuestionIndex,
    answers,
    result,
    resultType,
    dimensionTendencies,
    dimensionPercentages,
    aiAnalysis,
    isAnalyzing,
    analysisError,
    currentHistoryId,
    currentQuestion,
    progress,
    totalQuestions,
    answeredCount,
    isComplete,
    setAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    startTest,
    submitTest,
    resetTest,
    analyzeWithAI
  }
})
