<template>
  <div class="flex">
    <div
      v-for="(value, prop) in data"
      class="mr-4 bg-gray-400"
      :key="prop"
      :style="{
        width: '100px',
        height: '100px',
        borderRadius: value
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
