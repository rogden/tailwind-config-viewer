<template>
  <section class="mb-16 max-w-full">
    <h1 class="mb-2 text-3xl text-gray-800">{{ title }}</h1>
    <div class="bg-white p-6 rounded border-gray-300 border">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
