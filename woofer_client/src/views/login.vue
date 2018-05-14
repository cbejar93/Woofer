<template>

  <div class="login">
    <div class="container">
      <div class="row">
        <h5 class="title">Welcome back to Woofer!</h5>
        <form id="addUser" class="col s12 card z-depth-0">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input id="icon_email" type="email" class="validate" name="email">
              <label for="icon_email">Email</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">security</i>
              <input id="pass" type="password" class="validate" name="password">
              <label for="pass">Password</label>
            </div>
            <button v-on:click="sendForm" class="btn waves-effect waves-light" name='btn'>Submit
            </button>

          </div>
        </form>
      </div>
    </div>

    <img src="../assets/images/lg_dogImg01.jpg" id="signInImg" alt="sign in dog image" />

  </div>

</template>

<script>
  import userServices from "@/services/userServices";
  import localStorages from "@/services/localStorage";
  export default {
    name: "loginForm",
    props: ["user"],
    data() {
      return {
        msg: ""
        // user: {}
      };
    },
    methods: {
      async sendForm(e) {
        e.preventDefault();

        const form = document.querySelector("#addUser");
        const values = Object.values(form).reduce((obj, field) => {
          obj[field.name] = field.value;
          return obj;
        }, {});

        const res = await userServices.loginUser(values);
        console.log(res);
        this.msg = res.data.msg;
        this.setSession(res.data.user);
        const url = (res.data.user.type === 0)? '/dogsviews': '/shareprofile'
        this.$router.push({
          path: url
        });
      },
      setSession(data) {
        this.$emit("interface", localStorages.setLocal(data));

        console.log(this.user);
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alert {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  #addUser {
    border: 1px solid #10C5CC;
  }

  .card {
    padding: 1em;
  }

  button {
    float: right;
    margin: 1em;
  }

  h5 {
    padding: 20px 0;
  }

  #signInImg {
    display: block;
    margin: 0 auto;
  }

</style>
