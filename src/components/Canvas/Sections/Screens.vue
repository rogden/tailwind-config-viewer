<template>
  <div class="">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="mb-4 bg-gray-400"
      :style="{
        maxWidth: value,
        height: '100px',
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
