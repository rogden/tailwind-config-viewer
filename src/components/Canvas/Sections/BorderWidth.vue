<template>
  <div class="flex">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="mr-2 bg-gray-400 border-gray-600"
      :style="{
        height: '100px',
        width: '100px',
        borderWidth: value
      }">
      {{ prop }}
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
  }
}
</script>
