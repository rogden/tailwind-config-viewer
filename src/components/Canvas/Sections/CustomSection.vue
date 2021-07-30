<template>
  <div>
    <div
      v-for="row in rows"
      :key="row.utilityName"
    >
      <div :style="row.styles">{{ data.typographyExample }}</div>

      <CanvasBlockLabel
        :label="row.utilityName"
      >
        <template #value="{ valueBoxClasses }">
          <div :class="valueBoxClasses">
            {{ row.utilityValue }}
          </div>
        </template>
      </CanvasBlockLabel>
    </div>
  </div>
</template>

<script>
import CanvasBlockLabel from '../CanvasBlockLabel'

export default {
  components: { CanvasBlockLabel },

  inject: [
    'getConfig'
  ],

  props: {
    data: {
      type: Object,
      required: true
    },

    config: {
      type: Object,
      required: true
    }
  },

  computed: {
    rows () {
      return this.$props.data.sectionRows.map((sectionRow) => ({
        ...sectionRow,
        utilityValue: sectionRow.utilityValues.join(', ')
      }))
    }
  }
}
</script>
