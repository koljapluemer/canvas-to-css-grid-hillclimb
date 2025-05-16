<template>
  <div class="flex items-center gap-4 mb-4">
    <div class="flex-grow">
      <CanvasSelector v-model="selectedCanvas" />
    </div>
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-1">
        <label for="width" class="text-sm text-gray-600">W:</label>
        <input
          id="width"
          v-model.number="screenWidth"
          type="number"
          class="w-20 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="1"
        />
      </div>
      <div class="flex items-center gap-1">
        <label for="height" class="text-sm text-gray-600">H:</label>
        <input
          id="height"
          v-model.number="screenHeight"
          type="number"
          class="w-20 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="1"
        />
      </div>
    </div>
    <button 
      @click="handleGenerate"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors whitespace-nowrap"
    >
      Generate Grid Props
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import CanvasSelector from './CanvasSelector.vue'

const STORAGE_KEY = 'canvas-grid-settings'

interface StoredSettings {
  selectedCanvas: string
  screenWidth: number
  screenHeight: number
}

const selectedCanvas = ref('')
const screenWidth = ref(1920)
const screenHeight = ref(1080)

// Load settings from localStorage on mount
onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const settings: StoredSettings = JSON.parse(stored)
    selectedCanvas.value = settings.selectedCanvas
    screenWidth.value = settings.screenWidth
    screenHeight.value = settings.screenHeight
  }
})

// Save settings to localStorage whenever they change
watch([selectedCanvas, screenWidth, screenHeight], () => {
  const settings: StoredSettings = {
    selectedCanvas: selectedCanvas.value,
    screenWidth: screenWidth.value,
    screenHeight: screenHeight.value
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
}, { deep: true })

const emit = defineEmits<{
  generate: [width: number, height: number]
}>()

const handleGenerate = () => {
  emit('generate', screenWidth.value, screenHeight.value)
}
</script>
