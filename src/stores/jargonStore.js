import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiService } from '../services/apiService'
import { useAIConfigStore } from './aiConfigStore'

export const useJargonStore = defineStore('jargon', () => {
  const jargonAIResult = ref('')
  const isJargonAnalyzing = ref(false)
  const jargonAIError = ref(null)

  async function analyzeJargonWithAI(text) {
    const aiConfigStore = useAIConfigStore()

    if (!aiConfigStore.hasApiKey) {
      jargonAIError.value = '请先在设置中配置API Key'
      return
    }

    isJargonAnalyzing.value = true
    jargonAIError.value = null
    jargonAIResult.value = ''

    apiService.configure({
      provider: aiConfigStore.apiConfig.provider,
      apiKey: aiConfigStore.apiConfig.apiKey,
      model: aiConfigStore.apiConfig.model
    })

    let systemPrompt = '你是一位资深职场顾问，精通职场沟通艺术。'
    let userPrompt = ''

    systemPrompt += '请将用户输入的职场"黑话"翻译成通俗易懂的大白话，并分析背后的潜台词和应对策略。'
    userPrompt = `请翻译以下职场黑话："${text}"\n\n请包含：1. 大白话翻译 2. 潜台词分析 3. 推荐回复方式`

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ]

    apiService.sendStreamingMessage(
      messages,
      { temperature: 0.8, max_tokens: 1500 },
      (chunk, fullContent) => {
        jargonAIResult.value = fullContent
      },
      (fullContent) => {
        jargonAIResult.value = fullContent
        isJargonAnalyzing.value = false
      },
      (error) => {
        jargonAIError.value = error || 'AI分析失败'
        isJargonAnalyzing.value = false
      }
    )
  }

  return {
    jargonAIResult,
    isJargonAnalyzing,
    jargonAIError,
    analyzeJargonWithAI
  }
})
