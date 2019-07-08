<template>
  <div class="">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="mb-2"
      :style="{
        backgroundColor: '#ccc',
        width: value,
        height: '50px',
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
