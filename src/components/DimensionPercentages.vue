<template>
  <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
    <h3 class="text-xl font-semibold text-white mb-6 text-center">维度偏好分析</h3>
    
    <div class="space-y-5">
      <div v-for="dim in dimensions" :key="dim.key" class="space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium" :style="{ color: dim.leftColor }">
            {{ dim.leftLabel }} {{ percentages[dim.left] }}%
          </span>
          <span class="text-xs text-white/40">{{ dim.name }}</span>
          <span class="text-sm font-medium" :style="{ color: dim.rightColor }">
            {{ percentages[dim.right] }}% {{ dim.rightLabel }}
          </span>
        </div>
        
        <div class="relative h-3 bg-white/10 rounded-full overflow-hidden">
          <div 
            class="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out"
            :style="{ 
              width: percentages[dim.left] + '%',
              background: `linear-gradient(90deg, ${dim.leftColor}, ${dim.leftColor}88)`
            }"
          ></div>
          <div 
            class="absolute right-0 top-0 h-full rounded-full transition-all duration-1000 ease-out"
            :style="{ 
              width: percentages[dim.right] + '%',
              background: `linear-gradient(270deg, ${dim.rightColor}, ${dim.rightColor}88)`
            }"
          ></div>
          <div 
            class="absolute top-0 h-full w-0.5 bg-white/60 transition-all duration-1000 ease-out"
            :style="{ left: percentages[dim.left] + '%' }"
          ></div>
        </div>
        
        <div class="text-center">
          <span class="text-xs px-2 py-0.5 rounded-full" :class="percentages[dim.left] >= percentages[dim.right] ? dim.strongClass : dim.weakClass">
            {{ getPreferenceText(dim) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  percentages: {
    type: Object,
    required: true
  }
})

const dimensions = [
  {
    key: 'EI',
    name: '精力来源',
    left: 'E',
    right: 'I',
    leftLabel: '外向 E',
    rightLabel: '内向 I',
    leftColor: '#22d3ee',
    rightColor: '#fbbf24',
    weakClass: 'bg-cyan-500/20 text-cyan-300',
    strongClass: 'bg-cyan-500/30 text-cyan-200'
  },
  {
    key: 'SN',
    name: '信息获取',
    left: 'S',
    right: 'N',
    leftLabel: '实感 S',
    rightLabel: '直觉 N',
    leftColor: '#3b82f6',
    rightColor: '#ef4444',
    weakClass: 'bg-blue-500/20 text-blue-300',
    strongClass: 'bg-blue-500/30 text-blue-200'
  },
  {
    key: 'TF',
    name: '决策方式',
    left: 'T',
    right: 'F',
    leftLabel: '思考 T',
    rightLabel: '情感 F',
    leftColor: '#ef4444',
    rightColor: '#22c55e',
    weakClass: 'bg-red-500/20 text-red-300',
    strongClass: 'bg-red-500/30 text-red-200'
  },
  {
    key: 'JP',
    name: '生活方式',
    left: 'J',
    right: 'P',
    leftLabel: '判断 J',
    rightLabel: '感知 P',
    leftColor: '#fbbf24',
    rightColor: '#a855f7',
    weakClass: 'bg-yellow-500/20 text-yellow-300',
    strongClass: 'bg-yellow-500/30 text-yellow-200'
  }
]

function getPreferenceText(dim) {
  const leftPct = props.percentages[dim.left]
  const rightPct = props.percentages[dim.right]
  const diff = Math.abs(leftPct - rightPct)
  const dominant = leftPct > rightPct ? dim.leftLabel : dim.rightLabel
  
  if (diff >= 60) return `${dominant} - 极强偏好`
  if (diff >= 40) return `${dominant} - 明显偏好`
  if (diff >= 20) return `${dominant} - 轻微偏好`
  return '均衡型 - 无明显偏好'
}
</script>
