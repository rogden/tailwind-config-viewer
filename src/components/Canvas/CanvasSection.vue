<template>
  <section class="mb-16">
    <h1 class="mb-6 border-b text-4xl text-gray-800">{{ title }}</h1>
    <slot />
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
