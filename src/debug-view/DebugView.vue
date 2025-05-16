<template>
  <div class="p-4">
    <button 
      @click="generateProps"
      class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Generate Grid Props
    </button>

    <div v-if="gridProps" class="space-y-4">
      <div class="bg-gray-100 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Cell Size</h3>
        <p class="font-mono">{{ gridProps.cellSize }}</p>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Node Placement Priorities</h3>
        <p class="font-mono">{{ gridProps.nodePlacementPrios.join(', ') }}</p>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Node Gaps</h3>
        <p class="font-mono">{{ gridProps.nodeGaps.join(', ') }}</p>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Node Sizes</h3>
        <div class="space-y-2">
          <div v-for="(size, index) in gridProps.nodeSize" :key="index" class="font-mono">
            Node {{ index + 1 }}: {{ size.width }}x{{ size.height }}
          </div>
        </div>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Edge Placement Priorities</h3>
        <p class="font-mono">{{ gridProps.edgePlacementPrios.join(', ') }}</p>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Edge Start Cardinal Preferences</h3>
        <div class="space-y-2">
          <div v-for="(prefs, index) in gridProps.edgeStartCardinalPreferences" :key="index" class="font-mono">
            Edge {{ index + 1 }}: {{ prefs }}
          </div>
        </div>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Edge End Cardinal Preferences</h3>
        <div class="space-y-2">
          <div v-for="(prefs, index) in gridProps.edgeEndCardinalPreferences" :key="index" class="font-mono">
            Edge {{ index + 1 }}: {{ prefs }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { generateGridProps } from '@/grid-generation/generateGridProps'
import type { GenerateGridProps } from '@/grid-generation/generateGridProps'

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
