<template>
  <div id="app">
    <div class="bg-gray-800 p-4 text-white text-xl font-bold">
      Tailwind Config Viewer
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  background-color: #fff !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
