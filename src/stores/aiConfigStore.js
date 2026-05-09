import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { apiService, PROVIDER_CONFIG } from '../services/apiService'

export { PROVIDER_CONFIG }

const CONFIG_STORAGE_KEY = 'mbti-api-config-v2'

export const useAIConfigStore = defineStore('aiConfig', () => {
  const apiConfig = ref({
    provider: 'siliconflow',
    apiKey: '',
    model: '',
    modelInputType: 'select'
  })

  const hasApiKey = computed(() => apiConfig.value.apiKey && apiConfig.value.apiKey.length > 10)

  function loadConfig() {
    const saved = localStorage.getItem(CONFIG_STORAGE_KEY) || sessionStorage.getItem(CONFIG_STORAGE_KEY)
    if (saved) {
      try {
        const config = JSON.parse(saved)
        apiConfig.value = { ...apiConfig.value, ...config }
      } catch (e) {
        // 忽略解析错误
      }
    }
  }

  function setApiKey(key) {
    apiConfig.value.apiKey = key
  }

  function setApiConfig(config) {
    apiConfig.value = { ...apiConfig.value, ...config }
  }

  function saveConfig() {
    const configString = JSON.stringify(apiConfig.value)
    if (apiConfig.value.saveMode === 'local') {
      localStorage.setItem(CONFIG_STORAGE_KEY, configString)
      sessionStorage.removeItem(CONFIG_STORAGE_KEY)
    } else {
      sessionStorage.setItem(CONFIG_STORAGE_KEY, configString)
      localStorage.removeItem(CONFIG_STORAGE_KEY)
    }
  }

  async function testApiConnection(config) {
    apiService.setConfig({
      provider: config.provider,
      apiKey: config.apiKey,
      model: config.model
    })
    return await apiService.testConnection()
  }

  return {
    apiConfig,
    hasApiKey,
    loadConfig,
    setApiKey,
    setApiConfig,
    saveConfig,
    testApiConnection
  }
})
