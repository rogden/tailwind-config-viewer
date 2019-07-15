<template>
  <section class="mb-16 max-w-full">
    <h1 class="mb-1 text-4xl text-gray-800">{{ title }}</h1>
    <p class="mb-4 text-gray-600">This is the description of the section. You can use it to do cool things.</p>
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
