<template>
  <div class="flex flex-wrap">
    <div
      v-for="(value, prop) in data"
      class="mb-3 mr-8"
      :key="prop"
      >
        <div class="text-sm">shadow-{{ prop }}</div>
        <div
          :style="{
            width: '100px',
            height: '100px',
            boxShadow: value
          }"
        />
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
