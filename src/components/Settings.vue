<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex items-center justify-between p-4 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div class="flex items-center gap-3">
        <button @click="emit('close')" class="text-white/60 hover:text-white transition-colors p-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1 class="text-lg font-bold text-white">设置</h1>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-6 max-w-2xl mx-auto w-full">
      <!-- 状态提示 -->
      <div v-if="status" class="mb-6 p-4 rounded-xl text-center" :class="statusType === 'success' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-red-500/10 text-red-300'">
        {{ status }}
      </div>

      <!-- AI服务选择 -->
      <div class="mb-8">
        <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
          <span class="w-6 h-6 bg-indigo-500/15 rounded-full flex items-center justify-center text-xs">1</span>
          选择AI服务商
        </h3>
        <div class="grid grid-cols-2 gap-3">
          <button v-for="(config, key) in PROVIDER_CONFIG" :key="key"
                  @click="selectProvider(key)"
                  class="p-4 rounded-xl border transition-all text-left"
                  :class="store.apiConfig.provider === key ? 'bg-indigo-500/10 border-indigo-500/50' : 'bg-white/5 border-white/10 hover:border-white/20'">
            <div class="font-medium text-white">{{ config.name }}</div>
            <div class="text-white/30 text-xs mt-1">{{ config.developer }}</div>
          </button>
        </div>
      </div>

      <!-- 模型选择 -->
      <div class="mb-8">
        <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
          <span class="w-6 h-6 bg-indigo-500/15 rounded-full flex items-center justify-center text-xs">2</span>
          选择模型
        </h3>
        <select v-model="store.apiConfig.model"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer">
          <option value="" disabled>请选择模型</option>
          <option v-for="m in models" :key="m" :value="m" class="bg-slate-800 text-white">{{ m }}</option>
        </select>
        <div v-if="currentDescription" class="mt-3 p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-xl text-indigo-300 text-xs leading-relaxed">
          {{ currentDescription }}
        </div>
      </div>

      <!-- API Key -->
      <div class="mb-8">
        <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
          <span class="w-6 h-6 bg-indigo-500/15 rounded-full flex items-center justify-center text-xs">3</span>
          输入 API Key
        </h3>
        <div class="relative">
          <input :type="showKey ? 'text' : 'password'"
                 v-model="apiKey"
                 placeholder="sk-..."
                 class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50">
          <button @click="showKey = !showKey" class="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">
            <svg v-if="!showKey" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
            </svg>
          </button>
        </div>
        
        <div class="flex gap-2 mt-4 mb-4">
          <button @click="saveMode = 'session'" class="flex-1 py-2 text-sm rounded-lg transition-all" :class="saveMode === 'session' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/5 text-white/40'">临时保存</button>
          <button @click="saveMode = 'local'" class="flex-1 py-2 text-sm rounded-lg transition-all" :class="saveMode === 'local' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/5 text-white/40'">长期保存</button>
        </div>

        <button @click="saveKey" :disabled="!apiKey" class="mt-3 w-full py-3 bg-indigo-500/20 text-indigo-300 rounded-xl hover:bg-indigo-500/30 transition-colors disabled:opacity-40">
          保存 API Key
        </button>
      </div>

      <!-- 测试 -->
      <div class="mb-8">
        <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
          <span class="w-6 h-6 bg-indigo-500/15 rounded-full flex items-center justify-center text-xs">4</span>
          测试连接
        </h3>
        <button @click="testConnection" :disabled="!store.apiConfig.apiKey || testing" class="w-full py-3 bg-emerald-500/20 text-emerald-300 rounded-xl hover:bg-emerald-500/30 transition-colors disabled:opacity-40">
          {{ testing ? '测试中...' : '测试连接' }}
        </button>
        <div v-if="testResult" class="mt-3 p-3 rounded-xl text-sm" :class="testResult.success ? 'bg-emerald-500/10 text-emerald-300' : 'bg-red-500/10 text-red-300'">
          {{ testResult.message }}
        </div>
      </div>

      <!-- 说明 -->
      <div class="p-4 bg-white/5 rounded-xl text-white/40 text-sm space-y-2 mb-6">
        <p>💡 API Key 仅保存在本地浏览器中，不会上传到任何服务器。</p>
        <p>⚠️ 免费API可能存在调用限制，请合理使用。</p>
      </div>

      <!-- 版本信息 -->
      <div class="text-center pt-6 border-t border-white/5">
        <p class="text-white/20 text-xs">人格解码器 v1.0.0</p>
        <p class="text-white/15 text-xs mt-1">开发者：古月开发</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAIConfigStore, PROVIDER_CONFIG } from '../stores/aiConfigStore'

const store = useAIConfigStore()
const emit = defineEmits(['close'])

const apiKey = ref('')
const showKey = ref(false)
const testing = ref(false)
const testResult = ref(null)
const status = ref('')
const statusType = ref('success')
const saveMode = ref(store.apiConfig.saveMode || 'session')

const models = computed(() => PROVIDER_CONFIG[store.apiConfig.provider]?.models || [])

const currentDescription = computed(() => {
  const config = PROVIDER_CONFIG[store.apiConfig.provider]
  return config?.description || ''
})

function selectProvider(p) {
  store.setApiConfig({ provider: p, model: PROVIDER_CONFIG[p]?.defaultModel || '' })
}

function saveKey() {
  store.setApiKey(apiKey.value)
  store.setApiConfig({ saveMode: saveMode.value })
  store.saveConfig()
  status.value = 'API Key 已保存'
  statusType.value = 'success'
  setTimeout(() => status.value = '', 2000)
}

async function testConnection() {
  testing.value = true
  testResult.value = null
  try {
    const result = await store.testApiConnection({
      provider: store.apiConfig.provider,
      apiKey: store.apiConfig.apiKey,
      model: store.apiConfig.model
    })
    testResult.value = result
  } catch (e) {
    testResult.value = { success: false, message: e.message }
  }
  testing.value = false
}

onMounted(() => {
  apiKey.value = store.apiConfig.apiKey
})
</script>
