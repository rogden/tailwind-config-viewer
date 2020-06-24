<template>
  <div class="space-y-4">
    <div
      v-for="(value, prop) in fixedWidths"
      :key="prop"
    >
      <div class="mb-2 bg-gray-200">
        <div
          class="bg-gray-400"
          :style="{
            width: value.includes('vw') ? '100%' : value,
            height: '100px',
            maxWidth: '100%'
          }"
        />
      </div>
      <CanvasBlockLabel
        :label="`w-${prop}`"
        :value="value"
      />
    </div>
    <div
      v-for="(value, prop) in percentWidths"
      :key="prop"
      class="mb-6"
    >
      <div class="mb-2 bg-gray-200">
        <div
          class="bg-gray-400"
          :style="{
            width: value,
            maxWidth: '100%',
            height: '100px'
          }"
        />
      </div>
      <CanvasBlockLabel
        :label="`w-${prop}`"
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
  },

  computed: {
    percentWidths () {
      return Object.keys(this.data)
        .filter(key => this.data[key].indexOf('%') !== -1)
        .reduce((curr, key) => ({
          ...curr,
          [key]: this.data[key]
        }), {})
    },

    fixedWidths () {
      return Object.keys(this.data)
        .filter(key => this.data[key].indexOf('%') === -1)
        .reduce((curr, key) => ({
          ...curr,
          [key]: this.data[key]
        }), {})
    }
  }
}
</script>
