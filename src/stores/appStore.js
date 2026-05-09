import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const currentView = ref('home')

  function goHome() {
    currentView.value = 'home'
  }

  function openTest() {
    currentView.value = 'test'
  }

  function openResult() {
    currentView.value = 'result'
  }

  function openSettings() {
    currentView.value = 'settings'
  }

  function openHistory() {
    currentView.value = 'history'
  }

  function openCouple() {
    currentView.value = 'couple'
  }

  function openJargon() {
    currentView.value = 'jargon'
  }

  function openAIChat() {
    currentView.value = 'aiChat'
  }

  const previousView = ref('home')

  function setPreviousView(view) {
    previousView.value = view
  }

  function goBack() {
    currentView.value = previousView.value || 'home'
  }

  return {
    currentView,
    previousView,
    goHome,
    openTest,
    openResult,
    openSettings,
    openHistory,
    openCouple,
    openJargon,
    openAIChat,
    setPreviousView,
    goBack
  }
})
