<template>
  <div class="flex">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="mr-4"
    >
      <div
        class="mb-2 w-40 h-40 bg-gray-200 border-gray-400"
        :style="{
          borderWidth: value
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
