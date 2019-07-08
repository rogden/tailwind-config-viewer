<template>
  <div class="flex flex-wrap">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="mr-2"
    >
      <div>{{ prop }}</div>
      <div :style="{
        backgroundColor: '#ccc',
        width: '100px',
        height: value
      }" />
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
