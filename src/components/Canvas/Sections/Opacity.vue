<template>
  <div class="flex flex-wrap -mb-4">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="w-full md:w-36 md:mr-4 mb-4"
    >
      <div
        class="mb-2 bg-gray-500 dark:bg-gray-700 w-full md:w-36 h-36"
        :style="{
          opacity: value
        }"
      />
      <CanvasBlockLabel
        :label="`opacity-${prop}`"
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
