<template>
  <div class="sign-up-form">
  

    <div class="row">
      <h2 class="title">Welcome Back</h2>
      <form id="addUser" class="col s12 card">
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
              <i class="material-icons right">send</i>
            </button>
  
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import userServices from "@/services/userServices";
  import localStorages from "@/services/localStorage";
  export default {
    name: "loginForm",
    data() {
      return {
        msg: '',
        user: {}
      }
    },
    methods: {
      async sendForm(e) {
        e.preventDefault();

        const form = document.querySelector('#addUser');
        const values = Object.values(form).reduce((obj, field) => {
          obj[field.name] = field.value;
          return obj
        }, {});

       const res = await userServices.loginUser(values); 
       console.log(res);
       this.msg = res.data.msg;
       this.setSession(res.data.user);
       this.$router.push({ path: `/` });
      }, 
      setSession(data){
        this.user = localStorages.setLocal(data);
        console.log(this.user)

      }



    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sign-up-form {
    width: 90%;
    margin: 1em auto;
  }
  .alert {
    width: 100%; 
    height: 100%;;
    text-align: center;
  
  }
  .card {
    padding: 1em;
  }
  .title {
    text-align: center;
  }
  
  button {
    float: right;
    margin: 1em;
  }
</style>
