<template>
  <div class="space-y-6">
    <div
      v-for="(value, prop) in data"
      :key="prop"
    >
      <CanvasSectionRow
        v-slot="{blockClasses}"
        :style="{
          minHeight: value,
          height: 'auto'
        }"
      >
        <div
          :class="blockClasses"
          :style="{
            minHeight: value,
            height: 'auto'
          }"
        />
      </CanvasSectionRow>
      <CanvasBlockLabel
        :label="`min-h-${prop}`"
        :value="value"
      />
    </div>
  </div>
</template>

<script>
import CanvasBlockLabel from '../CanvasBlockLabel'
import CanvasSectionRow from '../CanvasSectionRow'

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
