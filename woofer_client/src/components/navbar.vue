<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
      <!-- This is the navbar for when no one is logged in -->
        <img src="../assets/images/logo_white.png" class="brand-logo"  />
        <ul v-if="!user" id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link class="waves-effect" to="/join">Become a Woofer</router-link>
          </li>
          <li>
            <router-link class="waves-effect" to="/signin">Sign In</router-link>
          </li>
          <li>
            <router-link class="waves-effect" to="/">Home</router-link>
          </li>
        </ul>
        <!-- Vue directive for is someone is signed in  -->
        <ul v-else-if="user.type == 1" id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link class="waves-effect" to="/shareprofile">Home</router-link>
          </li>
          <li>
            <router-link class="waves-effect" to="/adddog">Add a Woofer</router-link>
          </li>
          <li>
            <a class="waves-effect" v-on:click="logOut">Sign Out</a>
          </li>
        </ul>



        <ul v-else id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link class="waves-effect" to="/dogsviews">Home</router-link>
          </li>
          <li>
            <router-link class="waves-effect" to="/wooferhome">Profile</router-link>
          </li>
          <li>
            <a class="waves-effect" v-on:click="logOut">Sign Out</a>
          </li>
        </ul>


      </div>
    </nav>

  </div>
</template>

<script>
import localStorages from "@/services/localStorage";
export default {
  name: "navbar1",
  props: ["user"],
  data() {
    return {};
  },
  methods: {
    logOut() {
      localStorages.deleteLocal();

      this.$emit("interface", localStorages.getLocal());
      this.$router.push({ path: `/` });
    }
  },
  updated() {
    console.log(this.user);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 60%;
  margin: 10px 20px 10px 40px;
}

a {
  margin: 0 20px 0 0;
  font-size: 16px;
}

.nav-wrapper {
  background-image: linear-gradient(to bottom right, #ff23b8, #d4108e, #b20e7b);
}
</style>
