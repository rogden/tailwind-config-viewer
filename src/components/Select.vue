<template>
  <div class="relative">
    <svg
      class="absolute pointer-events-none"
      style="right: 10px; top: calc(50% - 6px);"
      width="11" height="11" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.657 4.243h3.76a.2.2 0 0 1 .141.341l-3.76 3.76a.2.2 0 0 1-.283 0l-3.76-3.76a.2.2 0 0 1 .142-.341h3.76z" fill="#B8C2CC"></path></svg>
    <select
      id="transition-duration"
      class="h-full w-full px-4 py-2 border bg-white border-gray-400 rounded text-sm appearance-none"
      v-model="selected"
    >
      <option v-for="(value, key) in options" :key="key" :value="key">{{ value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true
    },

    value: {
      type: Object,
      default: null
    }
  },

  data () {
    return {
      selected: this.value
    }
  },

  watch: {
    selected (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>
