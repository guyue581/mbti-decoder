import { defineStore } from 'pinia'
import { ref } from 'vue'
import { calculateCompatibility } from '../data/mbtiData'
import { apiService } from '../services/apiService'
import { useAIConfigStore } from './aiConfigStore'
import { useHistoryStore } from './historyStore'

export const useCoupleStore = defineStore('couple', () => {
  const coupleType1 = ref('')
  const coupleType2 = ref('')
  const compatibilityResult = ref(null)

  const coupleAIAnalysis = ref('')
  const isCoupleAnalyzing = ref(false)
  const coupleAnalysisError = ref(null)
  const currentCoupleHistoryId = ref(null)

  function calculateCoupleMatch() {
    if (!coupleType1.value || !coupleType2.value) return

    const type1Upper = coupleType1.value.toUpperCase()
    const type2Upper = coupleType2.value.toUpperCase()

    if (!/^(I|E)(N|S)(T|F)(J|P)$/.test(type1Upper) || !/^(I|E)(N|S)(T|F)(J|P)$/.test(type2Upper)) {
      return
    }

    compatibilityResult.value = {
      type1: type1Upper,
      type2: type2Upper,
      ...calculateCompatibility(type1Upper, type2Upper)
    }

    // 保存到历史记录
    const historyStore = useHistoryStore()
    const recordId = historyStore.addToHistory({
      type: `${type1Upper} + ${type2Upper}`,
      name: '情侣匹配',
      emoji: '💕',
      isCoupleMatch: true,
      coupleType1: type1Upper,
      coupleType2: type2Upper,
      score: compatibilityResult.value.score,
      level: compatibilityResult.value.level,
      description: compatibilityResult.value.description,
      advantages: compatibilityResult.value.advantages,
      challenges: compatibilityResult.value.challenges,
      tips: compatibilityResult.value.tips
    })
    currentCoupleHistoryId.value = recordId
  }

  async function analyzeCoupleWithAI() {
    const aiConfigStore = useAIConfigStore()

    if (!aiConfigStore.hasApiKey) {
      coupleAnalysisError.value = '请先在设置中配置API Key'
      return
    }
    if (!compatibilityResult.value) {
      coupleAnalysisError.value = '请先进行匹配分析'
      return
    }

    isCoupleAnalyzing.value = true
    coupleAnalysisError.value = null
    coupleAIAnalysis.value = ''

    apiService.configure({
      provider: aiConfigStore.apiConfig.provider,
      apiKey: aiConfigStore.apiConfig.apiKey,
      model: aiConfigStore.apiConfig.model
    })

    const r = compatibilityResult.value
    const messages = [
      {
        role: 'system',
        content: '你是一位专业的情感关系咨询师，精通MBTI人格类型理论。请针对情侣的MBTI组合给出深入、实用的分析和建议。回复使用Markdown格式，包含：相处模式分析、潜在冲突点、沟通技巧、长期发展建议。'
      },
      {
        role: 'user',
        content: `请深度分析 ${r.type1} 和 ${r.type2} 这对情侣组合：

匹配度：${r.score}%
匹配等级：${r.level}
基础描述：${r.description}

请从以下维度深入分析：
1. 日常相处模式
2. 沟通风格差异
3. 冲突来源与化解方式
4. 情感需求差异
5. 长期关系发展建议
6. 给双方各自的建议`
      }
    ]

    apiService.sendStreamingMessage(
      messages,
      { temperature: 0.7, max_tokens: 2000 },
      (chunk, fullContent) => {
        coupleAIAnalysis.value = fullContent
      },
      (fullContent) => {
        coupleAIAnalysis.value = fullContent
        isCoupleAnalyzing.value = false
        if (currentCoupleHistoryId.value) {
          const historyStore = useHistoryStore()
          historyStore.updateHistoryCoupleAIAnalysis(currentCoupleHistoryId.value, fullContent)
        }
      },
      (error) => {
        coupleAnalysisError.value = error || 'AI分析失败'
        isCoupleAnalyzing.value = false
      }
    )
  }

  function resetCouple() {
    coupleType1.value = ''
    coupleType2.value = ''
    compatibilityResult.value = null
    coupleAIAnalysis.value = ''
    coupleAnalysisError.value = null
    isCoupleAnalyzing.value = false
    currentCoupleHistoryId.value = null
  }

  return {
    coupleType1,
    coupleType2,
    compatibilityResult,
    coupleAIAnalysis,
    isCoupleAnalyzing,
    coupleAnalysisError,
    currentCoupleHistoryId,
    calculateCoupleMatch,
    analyzeCoupleWithAI,
    resetCouple
  }
})
