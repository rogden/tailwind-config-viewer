<template>
  <div class="flex flex-wrap -mb-4">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="w-full md:w-36 md:mr-4 mb-4"
    >
      <div
        class="mb-2 h-36 bg-gray-200 dark:bg-gray-800 border-gray-500 dark:border-gray-700"
        :style="{
          borderWidth: value
        }"
      />
      <CanvasBlockLabel
        :label="`${removeDefaultSuffix(`border-${prop}`)}`"
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
