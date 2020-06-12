<template>
  <div class="-mb-4">
    <div
      v-for="(value, prop) in data"
      class="mb-4"
      :key="prop"
    >
      <div class="border-b py-4 rounded">
        <p
          class="mb-2 leading-none"
          :style="{
            fontSize: value
          }"
        >
          The quick brown fox jumped over the lazy dog.
        </p>
        <CanvasBlockLabel
          :label="`text-${prop}`"
          :value="value"
        />
      </div>
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
