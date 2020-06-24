<template>
  <div class="flex flex-wrap -mb-4">
    <div
      v-for="(value, prop) in data"
      class="mb-4 mr-8 w-40"
      :key="prop"
      >
        <div
          class="mb-2 w-40 h-40"
          :style="{
            boxShadow: value
          }"
        />
        <CanvasBlockLabel
          :label="`${removeDefaultSuffix(`shadow-${prop}`)}`"
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
