<template>
  <div id="app" class="font-sans">
    <div class="bg-white border-b p-4 text-gray-700 text-xl font-bold">
      Tailwind Config Viewer
    </div>
    <Canvas />
  </div>
</template>

<script>
import Canvas from '@/components/Canvas'

export default {
  components: {
    Canvas
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
  color: #2c3e50;
}
</style>
