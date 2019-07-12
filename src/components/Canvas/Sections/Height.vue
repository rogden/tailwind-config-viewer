<template>
  <div class="flex flex-wrap">
    <div
      v-for="(value, prop) in data"
      :key="prop"
      class="mr-4 mb-4"
    >
      <div>h-{{ prop }}</div>
      <div class="bg-gray-200 h-full">
        <div
          class="bg-gray-400"
          :style="{
            width: '100px',
            height: value
          }"
        />
      </div>
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
