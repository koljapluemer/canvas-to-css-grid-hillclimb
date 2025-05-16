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
import TopBar from './top-bar/TopBar.vue'
import GridPropsDisplay from './GridPropsDisplay.vue'

const gridProps = ref<GenerateGridProps | null>(null)

const generateProps = () => {
  // Example values - you might want to make these configurable
  const nrOfNodes = 5
  const nrOfEdges = 3
  const screenWidth = 800
  const screenHeight = 600

  gridProps.value = generateGridProps(nrOfNodes, nrOfEdges, screenWidth, screenHeight)
}
</script>
