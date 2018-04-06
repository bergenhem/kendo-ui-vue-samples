<template>
  <div id="app">
    <h1>Kendo UI Grid ❤️ Vue.js - Grid Column Templates</h1>
    <MyGrid />
  </div>
</template>

<script>
import MyGrid from './components/MyGrid';

export default {
  name: 'app',
  components: {
    MyGrid
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
