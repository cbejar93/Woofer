<template>
  <div class="container">
    <div class="sign-up-form">
      <!-- This is where Woofer Partners can add a god to share -->
      <h5 id="title">Thanks for sharing your dog's companionship.
        <br>Please add your Woofer below.</h5>
        <small>* All fields required</small>
      <div class="row">


        <form id="addDog" class="col s12 card" enctype="multipart/form-data">
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
              <input id="gender" type="text" class="validate" name="gender">
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

          <div class="row">
            <div class="file-field input-field col s12">
              <div v-on:click="openUpload" class="add-img btn btn-small">
                <span>Add image</span>
              </div>

            </div>
          </div>
          <div class="row">
          <!-- // The v:on click below is a Vue directive that add vue logic to the template -->
            <button v-on:click="sendForm" class="btn waves-effect waves-light" name='btn'>Submit
            </button>
          </div>
        </form>
      </div>
    </div>

<img src="../assets/images/lg_dogImg03.jpg" id="pageDogImg" alt="add dog image" /> 

  </div>

</template>

<script>
// This imports the database.
import userServices from "@/services/userServices";

export default {
  name: "adddog",
  props: ["user"],
  data() {
    return {
      temp: "",
      upload: "",
      cloud_name: "dd0fpirjd",
      api_key: "234985847271392",
      api_secret: "MGpmvutEL_yROsxj_jVc2LxUYf0",
      imgPath: ""
    };
  },
  computed: {
    clUrl: function() {
      return "https://api.cloudinary.com/v1_1/dd0fpirjd/image/upload";
    }
  },
  methods: {
    async sendForm(e) {
      e.preventDefault();

      const form = document.querySelector("#addDog");
      const values = Object.values(form).reduce((obj, field) => {
        obj[field.name] = field.value;
        return obj;
      }, {});
      values.userId = this.user.id;
      values.imgPath = this.imgPath;
      const res = await userServices.addDog(values);
      this.$router.push({ path: "/shareprofile" });
    },
    openUpload() {
      cloudinary.openUploadWidget(
        {
          cloud_name: "dd0fpirjd",
          upload_preset: "hb40qhpx",
          cropping: "server",
          cropping_aspect_ratio: 1,
          folder: "Dog_Photos",
          sources: ["local", "url", "camera"],
          theme: "minimal"
        },
       (error, result) => {
          console.log(error, result);
          var image =
            "http://res.cloudinary.com/dd0fpirjd/image/upload/" +
            result[0].path;
          this.imgPath = image;
        }
      );
    }
  },
  mounted() {
    // This is to submit our form to the backend server
    const elems = document.querySelectorAll(".datepicker");
    const instances = M.Datepicker.init(elems);
  }
};
</script>

<style>
.sign-up-form {
  width: 90%;
  margin: 1em auto;
}

#addDog {
  border: 1px solid #10c5cc;
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

#pageDogImg {
  display: block;
  margin: 0 auto;
}

.add-img{
  width:100%;
  margin: auto;
}
</style>
