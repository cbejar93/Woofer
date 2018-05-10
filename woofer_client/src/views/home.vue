<template>
    <div id="app">
         <navbar1 />
          <div class"container">
              <h1>Our Content Goes in Here</h1>
              <footer1/>
           </div>
    </div>
</template>

<script>
import footer1 from "../components/footer.vue";
import navbar1 from "../components/navbar.vue";
export default {
  name: 'home',
  components: {
    footer1,
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
