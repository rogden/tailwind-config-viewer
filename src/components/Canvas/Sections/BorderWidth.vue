<template>
  <div class="flex">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="mr-2"
      :style="{
        backgroundColor: '#ccc',
        height: '100px',
        width: '100px',
        borderBottomWidth: value,
        borderColor: '#666'
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
