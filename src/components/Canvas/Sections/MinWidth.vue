<template>
  <div class="space-y-6">
    <div
      v-for="(value, prop) in data"
      :key="prop"
    >
      <CanvasSectionRow v-slot="{blockClasses}">
        <div
          :class="blockClasses"
          :style="{
            maxWidth: value,
          }"
        />
      </CanvasSectionRow>
      <CanvasBlockLabel
        :label="`min-w-${prop}`"
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
  }
}
</script>
