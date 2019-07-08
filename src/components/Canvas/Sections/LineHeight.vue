<template>
  <div class="">
    <div
      v-for="(value, prop) in data"
      class="mb-3"
      :key="prop"
      >
        <div class="text-sm">{{ prop }}</div>
        <div
          class="text-lg"
          :style="{
            lineHeight: value
          }"
        >
          <p>The quick brown fox jumped over the lazy dog.</p>
          <p>The quick brown fox jumped over the lazy dog.</p>
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
