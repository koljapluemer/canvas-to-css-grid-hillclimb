<template>
  <div class="flex items-center gap-4 mb-4">
    <div class="flex-grow">
      <CanvasSelector v-model="selectedCanvas" />
    </div>
    <button 
      @click="$emit('generate')"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors whitespace-nowrap"
    >
      Generate Grid Props
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CanvasSelector from './CanvasSelector.vue'

const selectedCanvas = ref('')

defineEmits<{
  generate: []
}>()
</script>
