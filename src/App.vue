<template>
  <div class="min-h-screen bg-[#030014] overflow-hidden">
    <!-- 背景效果 -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
    </div>
    
    <!-- 顶部导航 -->
    <nav v-if="appStore.currentView !== 'settings' && appStore.currentView !== 'history' && appStore.currentView !== 'couple' && appStore.currentView !== 'jargon' && appStore.currentView !== 'aiChat'" class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <button @click="goHome" class="flex items-center gap-3 group">
          <div class="w-11 h-11 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span class="text-xl">🧠</span>
          </div>
          <span class="text-white font-semibold">人格<span class="text-indigo-400">解码器</span></span>
        </button>
        
        <div class="flex items-center gap-2">
          <button @click="openHistory" class="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-xl transition-all text-sm font-medium flex items-center gap-2 border border-white/5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            历史
          </button>
          <button @click="appStore.openSettings()" class="w-11 h-11 bg-white/5 hover:bg-white/10 rounded-xl transition-all flex items-center justify-center border border-white/5">
            <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    
    <!-- 非主导航页面的顶部栏 -->
    <nav v-if="appStore.currentView !== 'home' && appStore.currentView !== 'test' && appStore.currentView !== 'result'" class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <button @click="goHome" class="flex items-center gap-3 group">
          <div class="w-11 h-11 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span class="text-xl">🧠</span>
          </div>
          <span class="text-white font-semibold">人格<span class="text-indigo-400">解码器</span></span>
        </button>
        <button @click="goBack" class="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-xl transition-all text-sm font-medium flex items-center gap-2 border border-white/10">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          返回
        </button>
      </div>
    </nav>
    
    <!-- 主内容 -->
    <div class="relative z-10 pt-24">
      <transition name="page" mode="out-in">
        <Home v-if="appStore.currentView === 'home'" @start="startTest" @openJargon="openJargon" @openCouple="openCouple" @openAIChat="openAIChat" />
        <Test v-else-if="appStore.currentView === 'test'" />
        <Result v-else-if="appStore.currentView === 'result'" />
        <Settings v-else-if="appStore.currentView === 'settings'" @close="goBack" />
        <History v-else-if="appStore.currentView === 'history'" @close="goBack" />
        <CoupleMatch v-else-if="appStore.currentView === 'couple'" @close="goBack" />
        <JargonTranslator v-else-if="appStore.currentView === 'jargon'" @close="goBack" />
        <AIChat v-else-if="appStore.currentView === 'aiChat'" @close="goBack" />
      </transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppStore } from './stores/appStore'
import { useTestStore } from './stores/testStore'
import { useCoupleStore } from './stores/coupleStore'
import { useHistoryStore } from './stores/historyStore'
import { useAIConfigStore } from './stores/aiConfigStore'
import Home from './components/Home.vue'
import Test from './components/Test.vue'
import Result from './components/Result.vue'
import Settings from './components/Settings.vue'
import History from './components/History.vue'
import CoupleMatch from './components/CoupleMatch.vue'
import JargonTranslator from './components/JargonTranslator.vue'
import AIChat from './components/AIChat.vue'

const appStore = useAppStore()
const testStore = useTestStore()
const coupleStore = useCoupleStore()
const historyStore = useHistoryStore()
const aiConfigStore = useAIConfigStore()

function goHome() {
  testStore.resetTest()
  appStore.goHome()
}

function goBack() {
  appStore.goBack()
}

function startTest() {
  testStore.startTest()
  appStore.openTest()
}

function openHistory() {
  historyStore.loadHistory()
  appStore.setPreviousView(appStore.currentView)
  appStore.openHistory()
}

function openCouple() {
  coupleStore.resetCouple()
  appStore.setPreviousView(appStore.currentView)
  appStore.openCouple()
}

function openJargon() {
  appStore.setPreviousView(appStore.currentView)
  appStore.openJargon()
}

function openAIChat() {
  appStore.setPreviousView(appStore.currentView)
  appStore.openAIChat()
}

onMounted(() => {
  aiConfigStore.loadConfig()
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
