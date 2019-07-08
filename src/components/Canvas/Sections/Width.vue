<template>
  <div class="">
    <div class="flex flex-wrap">
      <div
        v-for="(value, prop) in fixedWidths"
        :key="prop"
        class="mr-2"
      >
        <div>{{ prop }}</div>
        <div :style="{
          backgroundColor: '#ccc',
          width: value,
          height: '100px',
          maxWidth: '100%'
        }" />
      </div>
    </div>
    <div
        v-for="(value, prop) in percentWidths"
        :key="prop"
        class="mr-2"
      >
        <div>{{ prop }}</div>
        <div :style="{
          backgroundColor: '#ccc',
          width: value,
          height: '100px'
        }" />
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
