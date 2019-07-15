<template>
  <div>
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="mb-4"
    >
      <div
        class="mb-2 bg-gray-400"
        :style="{
          maxWidth: value,
          height: '100px',
        }"
      />
      <CanvasBlockLabel
        :label="`${prop}:`"
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
