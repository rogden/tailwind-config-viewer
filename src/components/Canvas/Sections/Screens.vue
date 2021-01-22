<template>
  <div class="space-y-6">
    <div
      v-for="(value, prop) in data"
      :key="prop"
    >
      <CanvasSectionRow
        :hasBg="false"
        v-slot="{blockClasses}"
      >
        <div
          :class="blockClasses"
          :style="{
            maxWidth: value
          }"
        />
      </CanvasSectionRow>
      <CanvasBlockLabel
        :label="`${prop}${config.separator}`"
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
    },
    config: {
      type: Object
    }
  }
}
</script>
