<template>
  <div id="app">
    <main>
      <navbar1/>
      <router-view/>
    </main>
    <footer1 class="sticky" />
  </div>
</template>

<script>
  import navbar1 from "./components/navbar.vue";
  import footer1 from "./components/footer.vue";
  export default {
    name: 'App',
    components: {
      navbar1,
      footer1
    }
  }

</script>

<style>
  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #797979;
  }

  main {
    min-height: calc(100vh - 70px);
  }

  .sticky {
    height: 50px;
  }

  .btn {
    font-family: "Montserrat", sans-serif;
    text-transform: capitalize;
    background-color: #10C5CC;
  }

  h5 {
    padding: 20px;
    color: #b20e7b;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }

  hr {
    border: none;
    height: 1px;
    background-color: #0ac6cb;
  }

</style>
