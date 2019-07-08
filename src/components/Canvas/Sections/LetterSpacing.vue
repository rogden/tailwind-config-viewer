<template>
  <div class="">
    <div
      v-for="(value, prop) in data"
      class="mb-3"
      :key="prop"
      >
        <div class="text-sm">{{ prop }}</div>
        <p
          class="text-xl"
          :style="{
            letterSpacing: value
          }"
        >The quick brown fox jumped over the lazy dog.</p>
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
