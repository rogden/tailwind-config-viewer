<template>
  <div class="">
    <div
      v-for="(value, prop) in fixedWidths"
      :key="prop"
      class="mb-2"
    >
      <div>w-{{ prop }}</div>
      <div class="bg-gray-200">
        <div
          class="bg-gray-400"
          :style="{
          width: value.includes('vw') ? '100%' : value,
          height: '100px',
          maxWidth: '100%'
        }" />
      </div>
    </div>
    <div
        v-for="(value, prop) in percentWidths"
        :key="prop"
        class="mb-4"
      >
        <div>w-{{ prop }}</div>
        <div class="bg-gray-200">
          <div
            class="bg-gray-400"
            :style="{
            width: value,
            maxWidth: '100%',
            height: '100px'
          }" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
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
