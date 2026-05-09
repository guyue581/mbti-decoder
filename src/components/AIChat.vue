<template>
  <div class="min-h-screen flex flex-col">
    <!-- 顶部栏 -->
    <div class="flex items-center justify-between p-4 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div class="flex items-center gap-3">
        <button @click="handleClose" class="text-white/60 hover:text-white transition-colors p-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <div>
          <h1 class="text-lg font-bold text-white">AI人格助手</h1>
          <p class="text-white/40 text-xs">
            {{ testStore.resultType ? `基于你的 ${testStore.resultType} 人格` : '配置API后即可使用' }}
          </p>
        </div>
      </div>
      <button @click="clearChat" class="text-white/40 hover:text-white/70 text-sm transition-colors">
        清空对话
      </button>
    </div>

    <!-- 消息列表 -->
    <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4">
      <!-- 未配置API提示 -->
      <div v-if="!hasApiKey" class="flex flex-col items-center justify-center h-full text-center">
        <div class="text-5xl mb-4">🔑</div>
        <h3 class="text-xl font-semibold text-white mb-2">请先配置AI服务</h3>
        <p class="text-white/50 text-sm mb-6 max-w-xs">在设置中选择AI服务商并配置API Key后，即可使用AI对话功能</p>
        <button @click="appStore.openSettings()" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl">
          去设置
        </button>
      </div>

      <!-- 欢迎消息 -->
      <template v-else-if="messages.length === 0">
        <div class="flex flex-col items-center justify-center text-center pt-8">
          <div class="text-5xl mb-4">🤖</div>
          <h3 class="text-xl font-semibold text-white mb-2">你好！我是你的AI人格助手</h3>
          <p class="text-white/50 text-sm mb-8 max-w-xs">
            {{ testStore.resultType 
              ? `我了解你是 ${testStore.resultType}（${testStore.result?.name}），可以聊聊你的性格、职业、人际关系等话题`
              : '完成MBTI测试后，我会更了解你。你也可以直接开始聊天' 
            }}
          </p>
        </div>

        <!-- 快捷话题 -->
        <div class="grid grid-cols-2 gap-3">
          <button v-for="topic in getTopics()" :key="topic.text"
                  @click="sendMessage(topic.text)"
                  class="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-all group">
            <span class="text-2xl block mb-2">{{ topic.icon }}</span>
            <span class="text-white/80 text-sm">{{ topic.label }}</span>
          </button>
        </div>
      </template>

      <!-- 消息 -->
      <template v-for="(msg, i) in messages" :key="i">
        <!-- 用户消息 -->
        <div v-if="msg.role === 'user'" class="flex justify-end">
          <div class="max-w-[80%] bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-3 rounded-2xl rounded-tr-md">
            <p class="text-sm whitespace-pre-wrap">{{ msg.content }}</p>
          </div>
        </div>

        <!-- AI消息 -->
        <div v-else class="flex justify-start">
          <div class="max-w-[85%] bg-white/5 border border-white/10 text-white/80 px-4 py-3 rounded-2xl rounded-tl-md">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-sm">🤖</span>
              <span class="text-xs text-white/40">AI助手</span>
            </div>
            <div class="text-sm whitespace-pre-wrap leading-relaxed" v-html="renderMarkdown(msg.content)"></div>
          </div>
        </div>
      </template>

      <!-- 加载中 -->
      <div v-if="loading" class="flex justify-start">
        <div class="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-md">
          <div class="flex items-center gap-2">
            <span class="text-sm">🤖</span>
            <div class="flex gap-1">
              <span class="w-2 h-2 bg-white/40 rounded-full animate-bounce" style="animation-delay: 0s"></span>
              <span class="w-2 h-2 bg-white/40 rounded-full animate-bounce" style="animation-delay: 0.15s"></span>
              <span class="w-2 h-2 bg-white/40 rounded-full animate-bounce" style="animation-delay: 0.3s"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入区 -->
    <div v-if="hasApiKey" class="p-4 border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div class="flex gap-3 items-end">
        <textarea
          ref="inputRef"
          v-model="inputText"
          @keydown.enter.exact.prevent="sendMessage()"
          placeholder="输入你的问题..."
          rows="1"
          class="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-purple-500/50 resize-none max-h-32"
        ></textarea>
        <button
          v-if="loading"
          @click="stopGeneration"
          class="w-10 h-10 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center hover:bg-red-500/30 transition-colors flex-shrink-0"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="6" width="12" height="12" rx="2"/>
          </svg>
        </button>
        <button
          v-else
          @click="sendMessage()"
          :disabled="!inputText.trim()"
          class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
        </button>
      </div>
      <p class="text-white/15 text-[10px] mt-2 text-center">AI生成内容仅供娱乐参考，不代表专业意见</p>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, computed } from 'vue'
import { useTestStore } from '../stores/testStore'
import { useAppStore } from '../stores/appStore'
import { useAIConfigStore } from '../stores/aiConfigStore'
import { apiService } from '../services/apiService'

const emit = defineEmits(['close'])
const testStore = useTestStore()
const appStore = useAppStore()
const aiConfigStore = useAIConfigStore()

const hasApiKey = computed(() => aiConfigStore.hasApiKey)

const messages = ref([])
const inputText = ref('')
const loading = ref(false)
const chatContainer = ref(null)
const inputRef = ref(null)

function handleClose() {
  messages.value = []
  localStorage.removeItem('mbti-ai-chat')
  emit('close')
}

function getTopics() {
  if (testStore.resultType) {
    return [
      { icon: '💡', label: '分析我的性格优势', text: `我是${testStore.resultType}人格，请分析我的核心优势和天赋` },
      { icon: '💼', label: '职业发展建议', text: `我是${testStore.resultType}人格，适合什么样的职业发展方向？` },
      { icon: '💕', label: '人际关系指南', text: `我是${testStore.resultType}人格，在人际关系中应该注意什么？` },
      { icon: '🎯', label: '个人成长计划', text: `我是${testStore.resultType}人格，请给我一个30天的个人成长计划` }
    ]
  }
  return [
    { icon: '🧠', label: '什么是MBTI', text: '什么是MBTI？16种人格分别是什么？' },
    { icon: '📝', label: '帮我选类型', text: '我不确定自己的MBTI类型，你能帮我分析一下吗？' },
    { icon: '💼', label: 'MBTI与职业', text: 'MBTI人格类型和职业选择有什么关系？' },
    { icon: '💕', label: 'MBTI与恋爱', text: 'MBTI人格类型在恋爱中有什么影响？' }
  ]
}

function buildSystemPrompt() {
  let prompt = '你是人格解码器的AI人格助手，专精于MBTI人格类型分析。你的特点是：温暖、专业、有洞察力、善于用具体例子说明问题。回答要简洁实用，避免空泛。'

  if (testStore.resultType && testStore.result) {
    const r = testStore.result
    prompt += `\n\n当前用户的MBTI类型是：${testStore.resultType}（${r.name}）
性格特点：${r.personalityTraits?.join('；') || '暂无'}
适合职业：${r.careers?.join('、') || '暂无'}
请基于用户的性格类型给出个性化建议，用"你"来称呼用户。`
  }

  return prompt
}

function buildMessages() {
  const systemMsg = { role: 'system', content: buildSystemPrompt() }
  return [systemMsg, ...messages.value.map(m => ({ role: m.role, content: m.content }))]
}

async function sendMessage(text) {
  const content = text || inputText.value.trim()
  if (!content || loading.value) return

  inputText.value = ''
  messages.value.push({ role: 'user', content })

  await nextTick()
  scrollToBottom()

  loading.value = true
  let aiMessage = { role: 'assistant', content: '' }
  messages.value.push(aiMessage)

  const apiMessages = buildMessages()

  apiService.configure({
    provider: aiConfigStore.apiConfig?.provider,
    apiKey: aiConfigStore.apiConfig?.apiKey,
    model: aiConfigStore.apiConfig?.model
  })

  apiService.sendStreamingMessage(
    apiMessages,
    { temperature: 0.8, max_tokens: 2000 },
    (chunk, fullContent) => {
      aiMessage.content = fullContent
      scrollToBottom()
    },
    (fullContent) => {
      aiMessage.content = fullContent
      loading.value = false
      saveChatHistory()
    },
    (error) => {
      aiMessage.content = `抱歉，出现了错误：${error}\n\n请检查API配置后重试。`
      loading.value = false
    }
  )
}

function stopGeneration() {
  apiService.abort()
  loading.value = false
}

function clearChat() {
  messages.value = []
  localStorage.removeItem('mbti-ai-chat')
}

function saveChatHistory() {
  try {
    localStorage.setItem('mbti-ai-chat', JSON.stringify(messages.value.slice(-50)))
  } catch (e) {
    // 忽略存储错误
  }
}

function loadChatHistory() {
  try {
    const saved = localStorage.getItem('mbti-ai-chat')
    if (saved) {
      messages.value = JSON.parse(saved)
    }
  } catch (e) {
    // 忽略加载错误
  }
}

function scrollToBottom() {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  })
}

function renderMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
}

onMounted(() => {
  loadChatHistory()
})
</script>
