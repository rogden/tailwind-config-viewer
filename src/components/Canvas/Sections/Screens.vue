<template>
  <div class="">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="mb-4"
      :style="{
        backgroundColor: '#ccc',
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
