<template>
  <button
    class="
      py-2 px-4
      text-sm text-gray-800 dark:text-gray-400
      border border-gray-400 dark:border-gray-700
      hover:bg-gray-300 dark-hover:bg-gray-800
      focus:outline-none rounded
    "
    :class="{
      'bg-gray-300 dark:bg-gray-800': selected,
      'bg-white dark:bg-gray-900': !selected
    }"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean
    }
  }
}
</script>
