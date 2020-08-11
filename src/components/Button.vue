<template>
  <button
    class="hover:bg-gray-300 py-2 px-4 text-sm border border-gray-400 focus:outline-none rounded"
    :class="{'bg-gray-300': selected}"
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
