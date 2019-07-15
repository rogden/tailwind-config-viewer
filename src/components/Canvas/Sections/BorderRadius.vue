<template>
  <div class="flex">
    <div v-for="(value, prop) in data" :key="prop" class="mr-4">
      <div
        class="bg-gray-400 mb-2 w-40 h-40"
        :style="{
          borderRadius: value
        }"
      />
      <CanvasBlockLabel
        :label="`rounded-${prop}`"
        :value="value"
      />
    </div>
  </div>
</template>

<script>
import CanvasBlockLabel from '../CanvasBlockLabel'

export default {
  components: {
    CanvasBlockLabel
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
