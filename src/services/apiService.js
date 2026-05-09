const PROVIDER_CONFIG = {
  deepseek: {
    name: 'DeepSeek',
    apiEndpoint: 'https://api.deepseek.com/chat/completions',
    defaultModel: 'deepseek-v4-pro',
    models: ['deepseek-v4-pro', 'deepseek-v4-flash', 'deepseek-chat', 'deepseek-reasoner'],
    authType: 'bearer',
    getKeyUrl: 'https://platform.deepseek.com/api_keys',
    description: 'deepseek-v4-pro: V4旗舰 | deepseek-v4-flash: V4快速 | deepseek-chat(旧) | deepseek-reasoner(旧)',
    developer: '深度求索'
  },
  tongyi: {
    name: '通义千问',
    apiEndpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    defaultModel: 'qwen3-max',
    models: ['qwen3-max', 'qwen3.6-plus', 'qwen3.5-flash', 'qwen-plus', 'qwen-turbo'],
    authType: 'bearer',
    getKeyUrl: 'https://dashscope.console.aliyun.com/apiKey',
    description: 'qwen3-max: Qwen3旗舰 | qwen3.6-plus: 均衡多模态 | qwen3.5-flash: 快速低成本 | qwen-plus(旧) | qwen-turbo(旧)',
    developer: '阿里巴巴'
  },
  kimi: {
    name: 'Kimi',
    apiEndpoint: 'https://api.moonshot.cn/v1/chat/completions',
    defaultModel: 'kimi-k2.5',
    models: ['kimi-k2.5', 'kimi-k2-turbo-preview', 'kimi-k2-thinking', 'moonshot-v1-128k', 'moonshot-v1-32k', 'moonshot-v1-8k'],
    authType: 'bearer',
    getKeyUrl: 'https://platform.moonshot.cn/console/api-keys',
    description: 'kimi-k2.5: K2.5多模态旗舰 | k2-turbo: 高速版 | k2-thinking: 深度推理 | moonshot-v1: 经典系列',
    developer: '月之暗面'
  },
  doubao: {
    name: '豆包',
    apiEndpoint: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
    defaultModel: 'doubao-1.5-pro-256k',
    models: ['doubao-1.5-pro-256k', 'doubao-1.5-lite-32k'],
    authType: 'bearer',
    getKeyUrl: 'https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey',
    description: 'doubao-1.5-pro-256k: 旗舰推理 | doubao-1.5-lite-32k: 轻量快速',
    developer: '字节跳动'
  },
  siliconflow: {
    name: '硅基流动',
    apiEndpoint: 'https://api.siliconflow.cn/v1/chat/completions',
    defaultModel: 'Pro/deepseek-ai/DeepSeek-V3',
    models: ['Pro/deepseek-ai/DeepSeek-V3', 'deepseek-ai/DeepSeek-R1', 'Pro/Qwen/Qwen2.5-72B-Instruct', 'THUDM/GLM-4-32B-0414', 'THUDM/GLM-Z1-32B-0414'],
    authType: 'bearer',
    getKeyUrl: 'https://cloud.siliconflow.cn/account/ak',
    description: 'DeepSeek-V3: 新版V3 | DeepSeek-R1: 推理模型 | Qwen2.5-72B | GLM-4-32B | GLM-Z1-32B',
    developer: '硅基流动'
  },
  glm: {
    name: '智谱AI',
    apiEndpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
    defaultModel: 'glm-5',
    models: ['glm-5', 'glm-5-code', 'glm-4.7', 'glm-4.5-air', 'glm-4-plus', 'glm-4-flash', 'glm-4-long'],
    authType: 'bearer',
    getKeyUrl: 'https://open.bigmodel.cn/usercenter/apikeys',
    description: 'glm-5: 最新旗舰 | glm-5-code: 代码专用 | glm-4.7: 均衡 | glm-4.5-air: 轻量 | glm-4-plus: 高智能 | glm-4-flash: 免费',
    developer: '智谱AI'
  },
  xiaomi: {
    name: '小米MiMo',
    apiEndpoint: 'https://api.xiaomimimo.com/v1/chat/completions',
    defaultModel: 'mimo-v2.5-pro',
    models: ['mimo-v2.5-pro', 'mimo-v2.5', 'mimo-v2.5-flash', 'mimo-v2-pro'],
    authType: 'bearer',
    getKeyUrl: 'https://platform.xiaomimimo.com',
    description: 'mimo-v2.5-pro: V2.5旗舰 | mimo-v2.5: 全模态 | mimo-v2.5-flash: 快速 | mimo-v2-pro: V2旗舰',
    developer: '小米'
  },
  ernie: {
    name: '文心一言',
    apiEndpoint: 'https://qianfan.baidubce.com/v2/chat/completions',
    defaultModel: 'ernie-4.0-8k',
    models: ['ernie-4.0-8k', 'ernie-3.5-128k', 'ernie-speed-128k'],
    authType: 'bearer',
    getKeyUrl: 'https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application',
    description: 'ernie-4.0-8k: 旗舰推理 | ernie-3.5-128k: 长文本 | ernie-speed-128k: 免费快速',
    developer: '百度'
  },
  spark: {
    name: '讯飞星火',
    apiEndpoint: 'https://spark-api-open.xf-yun.com/v1/chat/completions',
    defaultModel: '4.0Ultra',
    models: ['4.0Ultra', 'generalv3.5', 'generalv3'],
    authType: 'bearer',
    getKeyUrl: 'https://console.xfyun.cn/services/bm4',
    description: '4.0Ultra: 星火4.0旗舰 | generalv3.5: 均衡 | generalv3: 基础',
    developer: '科大讯飞'
  }
}

class APIService {
  constructor() {
    this.provider = 'none'
    this.apiKey = ''
    this.model = ''
    this.abortController = null
    this.currentRequestId = 0
  }

  configure(config) {
    this.provider = config.provider || 'none'
    this.apiKey = config.apiKey || ''
    this.model = config.model || ''
  }

  setConfig(config) {
    this.configure(config)
  }

  getProviderConfig() {
    return PROVIDER_CONFIG[this.provider]
  }

  async sendMessage(message, systemPrompt = '') {
    const config = this.getProviderConfig()
    if (!config) throw new Error('未选择AI服务商')
    if (!this.apiKey) throw new Error('未设置API Key')

    this.abortController = new AbortController()

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    }

    const body = {
      model: this.model || config.defaultModel,
      messages: [
        ...(systemPrompt ? [{ role: 'system', content: systemPrompt }] : []),
        { role: 'user', content: message }
      ],
      stream: false
    }

    try {
      const response = await fetch(config.apiEndpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        signal: this.abortController.signal
      })

      if (!response.ok) {
        const error = await response.json().catch(() => ({}))
        throw new Error(error.error?.message || `HTTP ${response.status}`)
      }

      const data = await response.json()
      return data.choices?.[0]?.message?.content || ''
    } catch (e) {
      if (e.name === 'AbortError') throw new Error('请求已取消')
      throw e
    }
  }

  sendStreamingMessage(messages, options = {}, onChunk, onDone, onError) {
    const config = this.getProviderConfig()
    if (!config) {
      if (onError) this.safeCallback(onError, '未选择AI服务商')
      return
    }
    if (!this.apiKey) {
      if (onError) this.safeCallback(onError, '未设置API Key')
      return
    }

    // 取消上一个请求，防止竞态
    if (this.abortController) {
      this.abortController.abort()
    }

    const requestId = ++this.currentRequestId
    this.abortController = new AbortController()

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    }

    const body = {
      model: this.model || config.defaultModel,
      messages: messages,
      stream: true,
      ...options
    }

    fetch(config.apiEndpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      signal: this.abortController.signal
    }).then(async (response) => {
      // 如果请求已被新请求覆盖，忽略此响应
      if (requestId !== this.currentRequestId) return

      if (!response.ok) {
        const error = await response.json().catch(() => ({}))
        throw new Error(error.error?.message || `HTTP ${response.status}`)
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let fullContent = ''
      let parseErrorCount = 0
      const maxParseErrors = 5

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        // 如果请求已被取消或覆盖，停止读取
        if (requestId !== this.currentRequestId) {
          reader.cancel()
          return
        }

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || trimmed === 'data: [DONE]') continue
          if (trimmed.startsWith('data: ')) {
            try {
              const data = JSON.parse(trimmed.slice(6))
              const content = data.choices?.[0]?.delta?.content
              if (content) {
                fullContent += content
                if (onChunk) this.safeCallback(onChunk, content, fullContent)
              }
            } catch (e) {
              parseErrorCount++
              if (parseErrorCount >= maxParseErrors) {
                throw new Error('数据解析失败，API返回格式异常')
              }
            }
          }
        }
      }

      if (onDone && requestId === this.currentRequestId) {
        this.safeCallback(onDone, fullContent)
      }
    }).catch((e) => {
      // 只处理当前请求的异常，忽略被取消的旧请求
      if (requestId !== this.currentRequestId) return
      if (e.name === 'AbortError') {
        if (onError) this.safeCallback(onError, '请求已取消')
      } else {
        if (onError) this.safeCallback(onError, e.message || '请求失败')
      }
    })
  }

  safeCallback(callback, ...args) {
    try {
      callback(...args)
    } catch (e) {
      console.error('API回调执行错误:', e)
    }
  }

  abort() {
    if (this.abortController) {
      this.abortController.abort()
      this.abortController = null
    }
  }

  async testConnection() {
    try {
      const result = await this.sendMessage('你好，请回复"连接成功"', '你是一个测试助手')
      return { success: true, message: '连接成功' }
    } catch (e) {
      return { success: false, message: e.message }
    }
  }
}

export { PROVIDER_CONFIG }
export const apiService = new APIService()
