<template>
  <div class="space-y-6">
    <div
      v-for="(value, prop) in data"
      :key="prop"
    >
      <p
        class="mb-2 leading-none text-gray-900 dark:text-gray-500"
        :style="{
          fontSize: value
        }"
      >
        The quick brown fox jumped over the lazy dog.
      </p>
      <CanvasBlockLabel
        :label="`text-${prop}`"
        :value="getLabelValue(value)"
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
  },
  methods: {
    getLabelValue (value) {
      // Tailwind 2.0 returns font size as array with size and line height
      if (Array.isArray(value)) {
        return value[0]
      }

      return value
    }
  }
}
</script>
