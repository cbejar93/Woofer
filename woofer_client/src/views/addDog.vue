<template>

  <div class="container">
    <div class="sign-up-form">

      <h5 id="title">Thanks for sharing your dog's companionship.
        <br>Please add your Woofer below.</h5>
        <small>* All fields required</small>
      <div class="row">
        <form id="addDog" class="col s12 card">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">pets</i>
              <input id="dog_name" type="text" class="validate" name="name">
              <label for="dog_name">Dog Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="dog_breed" type="text" class="validate" name="breed">
              <label for="dog_breed">Breed</label>
            </div>
            <div class="input-field col s6">
              <input id="dog_age" type="text" class="datepicker" name="age">
              <label for="dog_age">Date of Birth
                <small>(month/day/year)</small>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="gender" type="text" class="validate" name="dog_gender">
              <label for="gender">Gender</label>
            </div>
            <div class="input-field col s6">
              <input id="character" type="text" class="validate" name="character">
              <label for="character">Character
                <small>(ex. Tiny Mighty, Quiet Protector, etc.)</small>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea" name="description"></textarea>
              <label for="textarea1">Please enter a short description about your dog</label>
            </div>
          </div>
          <!-- <div class="row">
            <div class="file-field input-field col s12">
              <div class="btn btn-small">
                <span>Add image</span>
                <input type="file">
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" placeholder="Upload an image of your dog" type="text">
              </div>
            </div>
          </div> -->
          <div class="row">
            <button v-on:click="sendForm" class="btn waves-effect waves-light" name='btn'>Submit
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>

</template>

<script>
  import userServices from  "@/services/userServices";

  export default {
    name: "adddog", 
    props: ['user'],
    data(){
      return {
        temp: ''
      }
    },
    methods : {
     async sendForm(e) {
      e.preventDefault();

      const form = document.querySelector("#addDog");
      const values = Object.values(form).reduce((obj, field) => {
        obj[field.name] = field.value;
        return obj;
      }, {});

      values.userId = this.user.id
      const res = await userServices.addDog(values);
      this.$router.push({path:'/shareprofile'})

    }
    },
    mounted(){ 
       const elems = document.querySelectorAll('.datepicker');
       const instances = M.Datepicker.init(elems);
    }
  }

  // need to add code for sendForm

</script>

<style>
  .sign-up-form {
    width: 90%;
    margin: 1em auto;
  }

  button {
    float: right;
    margin: 1em;
  }

  .card {
    padding: 2em;
  }

  h5 {
    margin: 20px 0;
    padding: 20px 0;
  }

  #inputFileBtn {
    margin: 0 0 10px 0;
  }

</style>
