<template>
  <div class="sign-up-form">

    <div v-if="msg" class="alert">
      
      </div>

    <div v-else="msg" class="row">
      <form id="addUser" class="col s12 card">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input id="fname" type="text" class="validate" name="first_name">
            <label for="fname">First Name</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input id="lname" type="text" class="validate" name="last_name">
            <label for="lname">Last Name</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input id="icon_email" type="email" class="validate" name="email">
            <label for="icon_email">Email</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">location_city</i>
            <input id="icon_zip" type="text" pattern="[0-9]{5}" class="validate" name="zipcode">
            <label for="icon_zip">Zipcode</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">security</i>
            <input id="pass" type="password" class="validate" name="password">
            <label for="pass">Password</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">security</i>
            <input id="password1" type="password" class="validate" name="password_one">
            <label for="password1">Verify Password</label>
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
  
  export default {
    name: "signUpForm",
    data() {
      return {
        msg:''
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

       const res = await userServices.addUser(values); 

       this.msg = res.data.msg;
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
    text-align: center;
    border: 1px solid 
  }
  .card {
    padding: 1em;
  }
  
  button {
    float: right;
    margin: 1em;
  }
</style>
