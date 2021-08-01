<template>
  <div>
    <div
      v-for="row in rows"
      :key="row.utilityName"
    >
      <div :style="row.styles">
        <template v-if="data.type === 'text'">{{ data.typographyExample }}</template>
      </div>

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
      return this.data.sectionRows.map((sectionRow) => ({
        ...sectionRow,
        utilityValue: sectionRow.utilityValues.join(', ')
      }))
    }
  }
}
</script>
