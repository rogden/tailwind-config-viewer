<template>
  <div class="flex">
    <div
      v-for="(value, prop) in data"
      class="mr-4"
      :key="prop"
      :style="{
        backgroundColor: '#ccc',
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
