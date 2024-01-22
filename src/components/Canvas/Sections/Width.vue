<template>
  <div class="space-y-6">
    <div
      v-for="(value, prop) in fixedWidths"
      :key="prop"
    >
      <CanvasSectionRow v-slot="{blockClasses}">
        <div
          :class="blockClasses"
          :style="{
            width: value.includes('vw') ? '100%' : value,
            maxWidth: '100%'
          }"
        />
      </CanvasSectionRow>
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
      <CanvasSectionRow v-slot="{blockClasses}">
        <div
          :class="blockClasses"
          :style="{
            width: value,
            maxWidth: '100%',
          }"
        />
      </CanvasSectionRow>
      <CanvasBlockLabel
        :label="`w-${prop}`"
        :value="value"
      />
    </div>
  </div>
</template>

<script>
import CanvasBlockLabel from '../CanvasBlockLabel.vue'
import CanvasSectionRow from '../CanvasSectionRow.vue'

export default {
  components: {
    CanvasBlockLabel,
    CanvasSectionRow
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
