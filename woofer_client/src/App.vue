<template>
  <div id="app">
    <main>
      <navbar1 :user="user"/>
      <router-view/>
    </main>
    <footer1 class="sticky" />
  </div>
</template>

<script>
  import navbar1 from "./components/navbar.vue";
  import footer1 from "./components/footer.vue";
  import localStorages from "@/services/localStorage";
  export default {
    name: 'App',
    components: {
      navbar1,
      footer1
    },
    data() {
      return {
        user: ""
      }
    },
    methods: {
      checkUser() {
        return localStorages.getLocal();
      
      }
    },
    created(){
      this.user = this.checkUser();
      console.log(this.user)
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
<<<<<<< HEAD
  
  main {
    min-height: calc(100vh - 70px);
  }
  
  .sticky {
    height: 50px;
=======
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
>>>>>>> ba2b5298a589768614276206e629df9a23d6c039
  }
</style>
