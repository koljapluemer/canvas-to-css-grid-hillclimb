<template>
  <div class="p-4">
    <TopBar @generate="generateProps" />
    <GridPropsDisplay :grid-props="gridProps" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { generateGridProps } from '@/grid-generation/generateGridProps'
import type { GenerateGridProps } from '@/grid-generation/generateGridProps'
import { readCanvas } from '@/open-json-canvas-utils/readInCanvas'
import TopBar from './top-bar/TopBar.vue'
import GridPropsDisplay from './props-view/GridPropsDisplay.vue'

const gridProps = ref<GenerateGridProps | null>(null)

const generateProps = async (screenWidth: number, screenHeight: number) => {
  try {
    // Get the selected canvas file name from localStorage
    const stored = localStorage.getItem('canvas-grid-settings')
    if (!stored) {
      console.error('No canvas file selected')
      return
    }
    
    const settings = JSON.parse(stored)
    const selectedCanvas = settings.selectedCanvas
    if (!selectedCanvas) {
      console.error('No canvas file selected')
      return
    }

    // Read the canvas file
    const response = await fetch(`/src/data/in/${selectedCanvas}`)
    if (!response.ok) {
      throw new Error(`Failed to load canvas file: ${response.statusText}`)
    }
    
    const canvasData = await response.text()
    const canvas = readCanvas(canvasData)

    // Generate grid props using actual canvas data
    gridProps.value = generateGridProps(
      canvas.nodes.length,
      canvas.edges.length,
      screenWidth,
      screenHeight
    )
  } catch (error) {
    console.error('Error generating grid props:', error)
  }
}
</script>
