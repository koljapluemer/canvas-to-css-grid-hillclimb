<template>
  <details v-if="props.gridProps" class="bg-gray-100 rounded-lg">
    <summary class="p-4 cursor-pointer hover:bg-gray-200">
      <h3 class="text-lg font-semibold">Grid Properties</h3>
    </summary>
    <div class="p-4 space-y-4">
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Cell Size</h3>
        <p class="font-mono">{{ props.gridProps.cellSize }}</p>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Node Placement Priorities</h3>
        <p class="font-mono">{{ props.gridProps.nodePlacementPrios.join(', ') }}</p>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Node Gaps</h3>
        <p class="font-mono">{{ props.gridProps.nodeGaps.join(', ') }}</p>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Node Sizes</h3>
        <div class="space-y-2">
          <div v-for="(size, index) in props.gridProps.nodeSize" :key="index" class="font-mono">
            Node {{ index + 1 }}: {{ size.width }}x{{ size.height }}
          </div>
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Edge Placement Priorities</h3>
        <p class="font-mono">{{ props.gridProps.edgePlacementPrios.join(', ') }}</p>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Edge Start Cardinal Preferences</h3>
        <div class="space-y-2">
          <div v-for="(prefs, index) in props.gridProps.edgeStartCardinalPreferences" :key="index" class="font-mono">
            Edge {{ index + 1 }}: {{ prefs }}
          </div>
        </div>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Edge End Cardinal Preferences</h3>
        <div class="space-y-2">
          <div v-for="(prefs, index) in props.gridProps.edgeEndCardinalPreferences" :key="index" class="font-mono">
            Edge {{ index + 1 }}: {{ prefs }}
          </div>
        </div>
      </div>
    </div>
  </details>
</template>

<script setup lang="ts">
import type { GenerateGridProps } from '@/grid-generation/generateGridProps'

const props = defineProps<{
  gridProps: GenerateGridProps | null
}>()
</script> 