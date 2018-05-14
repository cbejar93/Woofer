<template>
  <div id="app">
    <main>
      <navbar1 :user="user" @interface="user = $event"/>
      <router-view :user="user" @interface="user = $event"/>
    </main>
    <footer1 class="sticky" />
  </div>
</template>

<script>
import navbar1 from "./components/navbar.vue";
import footer1 from "./components/footer.vue";
import localStorages from "@/services/localStorage";
export default {
  name: "App",
  components: {
    navbar1,
    footer1
  },
  data() {
    return {
      user: ""
    };
  },
  methods: {
    checkUser() {
      return localStorages.getLocal();
    }
  },
  mounted() {
    this.user = this.checkUser();
    console.log(this.user);
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
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
  background-color: #10c5cc;
}

h5,
h6 {
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
