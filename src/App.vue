<template>
  <div id="app" class="font-sans" :class="{'mode-dark': darkMode}">
    <div class="flex justify-between items-center bg-white dark:bg-gray-900 border-b dark:border-gray-900 p-4 text-gray-700 dark:text-gray-500 text-xl font-bold">
      Tailwind Config Viewer
      <a
        href="https://github.com/rogden/tailwind-config-viewer"
        target="_blank"
        class="text-gray-500 hover:text-gray-700"
      >
        <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
      </a>
    </div>
    <Canvas :darkMode="darkMode" @toggle-dark-mode="darkMode = $event"/>
  </div>
</template>

<script>
import Canvas from '@/components/Canvas'

export default {
  components: {
    Canvas
  },

  data () {
    return {
      darkMode: localStorage.getItem('tcvDarkMode') === 'true'
    }
  },

  watch: {
    darkMode (value) {
      localStorage.setItem('tcvDarkMode', value)
    }
  }
}
</script>

<style>
body {
  background-color: #fff !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-gray-900;
}
</style>
