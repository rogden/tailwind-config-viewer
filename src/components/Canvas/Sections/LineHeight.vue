<template>
  <div class="space-y-6">
    <div
      v-for="(value, prop) in data.lineHeight"
      :key="prop"
    >
      <div
        class="text-lg mb-2 text-gray-900 dark:text-gray-500"
        :style="{
          lineHeight: value
        }"
      >
        <p>{{ data.typographyExample || 'The quick brown fox jumped over the lazy dog.' }}</p>
        <p>{{ data.typographyExample || 'The quick brown fox jumped over the lazy dog.' }}</p>
      </div>
      <CanvasBlockLabel
        :label="`leading-${prop}`"
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

<style scoped>
.row:not(:last-child) {
  @apply border-b;
}
</style>
