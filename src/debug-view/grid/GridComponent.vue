<template>
  <div class="p-4">
    <div class="grid gap-0 border border-gray-200 rounded-lg overflow-hidden">
      <div
        v-for="(row, rowIndex) in grid"
        :key="rowIndex"
        class="contents"
      >
        <div
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          class="relative aspect-square"
        >
          <div
            v-if="cell.type === 'node'"
            class="absolute inset-0 m-1 rounded-md overflow-hidden"
            :class="{
              'bg-blue-100': cell.subType === 'text',
              'bg-green-100': cell.subType === 'file',
              'bg-purple-100': cell.subType === 'link',
              'bg-yellow-100': cell.subType === 'group',
              'border border-blue-300': cell.subType === 'text',
              'border border-green-300': cell.subType === 'file',
              'border border-purple-300': cell.subType === 'link',
              'border border-yellow-300': cell.subType === 'group',
            }"
          >
            <div class="absolute inset-0 p-1 flex flex-col">
              <div class="text-[8px] text-gray-500 font-medium mb-0.5">
                {{ cell.subType }}
              </div>
              <div class="text-[10px] text-gray-700 truncate">
                <template v-if="cell.node">
                  <template v-if="cell.subType === 'text' && 'text' in cell.node">
                    {{ cell.node.text }}
                  </template>
                  <template v-else-if="cell.subType === 'file' && 'file' in cell.node">
                    {{ cell.node.file }}{{ 'subpath' in cell.node && cell.node.subpath ? cell.node.subpath : '' }}
                  </template>
                  <template v-else-if="cell.subType === 'link' && 'url' in cell.node">
                    {{ cell.node.url }}
                  </template>
                  <template v-else-if="cell.subType === 'group' && 'label' in cell.node">
                    {{ cell.node.label || 'Group' }}
                  </template>
                </template>
              </div>
            </div>
          </div>
          <div
            v-else-if="cell.type === 'edge'"
            class="absolute inset-0 m-1"
          >
            <div class="w-full h-full border-t-2 border-dashed border-gray-300"></div>
          </div>
          <div
            v-else
            class="absolute inset-0 m-1 bg-gray-50"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Grid } from '@/grid-render/types';

defineProps<{
  grid: Grid;
}>();
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
