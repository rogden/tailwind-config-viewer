<template>
  <div
    class="mb-2 h-28"
    :class="{
      'bg-gray-200 dark:bg-gray-800': hasBg
    }"
    v-bind="$attrs"
  >
    <slot v-bind:blockClasses="blockClasses"/>
  </div>
</template>

<script>
export default {
  props: {
    hasBg: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      blockClasses: 'bg-gray-500 dark:bg-gray-700 h-28'
    }
  }
}
</script>
