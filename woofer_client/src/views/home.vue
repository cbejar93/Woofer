<template>
  
    <div id="app">
      <navbar1 />
    </div>
  
</template>

<script>
import navbar1 from "../components/navbar.vue";

export default {
  name: 'home',
  components: {
    navbar1
  }
}
</script>

<style>
#app {
  font-family: 'Gothic A1', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #797979;
}
</style>
