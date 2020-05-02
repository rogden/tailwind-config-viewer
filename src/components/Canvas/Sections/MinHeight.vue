<template>
  <div class="">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="mb-6"
    >
        <div
          class="mb-2 bg-gray-400"
          :style="{
            minHeight: value
          }"
        />
      <CanvasBlockLabel
        :label="`min-h-${prop}`"
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
