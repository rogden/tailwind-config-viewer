<template>
  <div class="">
    <div
      v-for="(value, prop) in data"
      class="mb-3"
      :key="prop"
      :style="{
        fontSize: value
      }">
      <div class="text-sm">text-{{ prop }}</div>
      <p>The quick brown fox jumped over the lazy dog.</p>
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
