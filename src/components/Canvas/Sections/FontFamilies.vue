<template>
  <div class="space-y-6">
    <div v-for="[prop, value] in fontFamilies" :key="prop">
      <p
        class="mb-2 leading-none text-2xl text-gray-900 dark:text-gray-500"
        :style="{
          fontFamily: getFontFamilyValue(value)
        }"
      >
        {{ data.typographyExample }}
      </p>
      <CanvasBlockLabel :label="`font-${prop}`" :value="getFontFamilyValue(value)" />
    </div>
  </div>
</template>

<script>
import CanvasBlockLabel from '../CanvasBlockLabel.vue'

export default {
  components: {
    CanvasBlockLabel
  },
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
    fontFamilies () {
      return Object.entries(this.data.fontFamily)
    }
  },
  methods: {
    getFontFamilyValue (value) {
      if (Array.isArray(value)) {
        return value.join(', ')
      }
      return value
    }
  }
}
</script>
