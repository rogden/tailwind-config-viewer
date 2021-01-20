<template>
  <div class="space-y-6">
    <div
      v-for="(value, prop) in data.letterSpacing"
      :key="prop"
    >
      <p
        class="mb-2 text-2xl leading-none text-gray-900 dark:text-gray-500"
        :style="{
          letterSpacing: value
        }"
      >
        {{ data.typographyExample }}
      </p>
      <CanvasBlockLabel
        :label="`tracking-${prop}`"
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
