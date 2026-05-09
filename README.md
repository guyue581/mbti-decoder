# 人格解码器 - MBTI人格测试+情侣匹配+AI分析+职场黑话翻译

一款基于 Vue3 + Pinia + Electron 的桌面端人格分析应用，支持 MBTI 人格测试、情侣匹配分析、AI 智能解读和职场黑话翻译。

## 功能特性

- **MBTI 人格测试**：60道精选题目，4维度深度分析
- **情侣匹配**：16种人格类型两两匹配，查看兼容度
- **AI 智能分析**：接入大模型 API，生成个性化深度解读
- **职场黑话翻译**：120+条互联网/职场黑话解析，AI 智能翻译
- **历史记录**：本地保存测试记录，随时回顾
- **数据可视化**：维度偏好百分比展示

## 技术栈

- **前端**：Vue 3 + Vite + Tailwind CSS
- **状态管理**：Pinia
- **桌面端**：Electron 29 + electron-builder
- **AI 接口**：OpenAI / 兼容 API 格式

## 开发环境

- Node.js >= 18
- npm >= 9

## 安装与运行

```bash
# 克隆项目
git clone [你的仓库地址]
cd MBTI

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建前端
npm run build

# 打包桌面应用（Windows）
npm run electron:build:win
```

## 项目结构

```
MBTI/
├── electron/           # Electron 主进程
│   ├── main.cjs        # 主进程入口
│   └── preload.cjs     # 预加载脚本
├── src/
│   ├── components/     # Vue 组件
│   ├── stores/         # Pinia 状态管理
│   ├── services/       # API 服务
│   ├── data/           # 静态数据（题目、描述、成长建议等）
│   └── main.js         # 前端入口
├── dist/               # Vite 构建输出
├── package.json
├── vite.config.js
├── tailwind.config.js
└── index.html
```

## 配置 AI 接口

在应用内"设置"页面配置：
- API Key（支持 OpenAI 及兼容格式）
- 模型名称（如 gpt-3.5-turbo）
- 请求地址（可选，默认 OpenAI 官方地址）

## 开源协议

MIT License

## 开发者

古月开发
