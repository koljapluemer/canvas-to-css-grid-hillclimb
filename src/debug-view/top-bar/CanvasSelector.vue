<template>
  <div class="mb-4">
    <label for="canvas-select" class="block text-sm font-medium text-gray-700 mb-1">Select Canvas File</label>
    <select 
      id="canvas-select"
      v-model="selectedCanvas"
      class="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      @change="$emit('update:modelValue', selectedCanvas)"
    >
      <option value="">Select a canvas file...</option>
      <option v-for="file in canvasFiles" :key="file" :value="file">
        {{ file }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const selectedCanvas = ref(props.modelValue)
const canvasFiles = ref(['godot_instantiating.canvas', 'simple.canvas'])
</script>
