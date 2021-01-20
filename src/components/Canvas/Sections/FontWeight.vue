<template>
  <div class="space-y-6">
    <div
      v-for="(value, prop) in data.fontWeight"
      :key="prop"
    >
      <p
        class="mb-2 leading-none text-2xl text-gray-900 dark:text-gray-500"
        :style="{
          fontWeight: value
        }"
      >
        {{ data.typographyExample }}
      </p>
      <CanvasBlockLabel
        :label="`font-${prop}`"
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
