import { defineStore } from 'pinia'
import { ref } from 'vue'

const STORAGE_KEY = 'mbti-history-v2'

export const useHistoryStore = defineStore('history', () => {
  const history = ref([])

  function loadHistory() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        history.value = JSON.parse(saved)
      }
    } catch (e) {
      history.value = []
    }
  }

  function saveHistory() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history.value))
    } catch (e) {
      console.error('保存历史记录失败:', e)
    }
  }

  function addToHistory(recordData) {
    const record = {
      id: Date.now(),
      date: new Date().toISOString(),
      aiAnalysis: null,
      coupleAIAnalysis: null,
      ...recordData
    }
    history.value.unshift(record)
    if (history.value.length > 20) {
      history.value = history.value.slice(0, 20)
    }
    saveHistory()
    return record.id
  }

  function updateHistoryAIAnalysis(recordId, analysis) {
    const record = history.value.find(h => h.id === recordId)
    if (record) {
      record.aiAnalysis = analysis
      saveHistory()
    }
  }

  function updateHistoryCoupleAIAnalysis(recordId, analysis) {
    const record = history.value.find(h => h.id === recordId)
    if (record) {
      record.coupleAIAnalysis = analysis
      saveHistory()
    }
  }

  function deleteHistory(id) {
    history.value = history.value.filter(h => h.id !== id)
    saveHistory()
  }

  function clearHistory() {
    history.value = []
    saveHistory()
  }

  return {
    history,
    loadHistory,
    addToHistory,
    updateHistoryAIAnalysis,
    updateHistoryCoupleAIAnalysis,
    deleteHistory,
    clearHistory
  }
})
