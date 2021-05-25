<template>
  <div class="flex flex-wrap -mb-4">
    <div v-for="(value, prop) in data" :key="prop" class="w-full md:w-36 md:mr-4 mb-4">
      <div
        class="bg-gray-500 dark:bg-gray-700 mb-2 md:w-36 h-36"
        :style="{
          borderRadius: value
        }"
      />
      <CanvasBlockLabel
        :label="`${removeDefaultSuffix(`rounded-${prop}`)}`"
        :value="value"
      />
    </div>
  </div>
</template>

<script>
import CanvasBlockLabel from '../CanvasBlockLabel'
import { removeDefaultSuffix } from '@/utils'

export default {
  components: {
    CanvasBlockLabel
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  methods: {
    removeDefaultSuffix
  }
}
</script>
