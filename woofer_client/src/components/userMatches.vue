<template>
  <div>

    <hr>

    <div class="row" id="matchPanel">
      <div class="col s2" id="dogImg">

        <img :src="dog.imgPath" id="matchImg" alt="Woofer Match" />
      </div>

      <div class="col s9 push-s1" id="dogDesc">
        <h6>Name:
          <span id="matchName">{{dog.name}}</span>
        </h6>

        <h6>Breed: <span id="breed">{{dog.breed}}</span></h6>
        <h6>Gender: <span id="gender">{{dog.gender}}</span></h6>
        <h6>Age: <span id="age">{{years}}</span></h6>
        <h6>Character:
          <span id="charDesc">{{dog.character}}</span>
        </h6>
        <p id="matchDesc">{{dog.description}}</p>
        <button :data-target="dog.id" class="btn modal-trigger">Meet This Woofer</button>
      </div>
    </div>
        <div v-bind:id="dog.id" class="modal">
        <div class="modal-content">
            <h4>Plan a Woofer Outing</h4>
            <p>Where would you like to meet with {{dog.name}} ?</p>
      
         
                <div class="row">
                  <form id="addProp">
                    <div class="input-field col s12">
                      <textarea class="materialize-textarea" name="meetAddress"></textarea>
                      <label for="textarea1">Where would you like to meet?</label>
                    </div>
                    <div class="modal-footer">
                       <a class="modal-close waves-effect waves-green btn-flat">Cancel</a>
                       <a v-on:click="sendForm"  class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                  </form>
                </div>

           
        </div>

    </div>

  </div>
</template>

<script>
  import userServices from "@/services/userServices";
  export default {
    name: "userMatches",
    components: {},
    props: ["dog", "user"],
    data() {
      return {
        years: ""
      };
    },
    methods: {
      calcYear() {
        const foo = new Date(this.dog.age).getFullYear();
        const bar = new Date().getFullYear();
        this.years = bar - foo;
      },
      btnClicked() {
        this.$emit("interface", "Carlos!");
      },
      async sendForm(e) {
        e.preventDefault();

        const form = document.querySelector("#addProp");
        const values = Object.values(form).reduce((obj, field) => {
          obj[field.name] = field.value;
          return obj;
        }, {});

        values.dogId = this.dog.id;
        values.renter_id = this.user.id; 
        values.rentee_id = this.dog.userId;
        values.state = 0;
        const res = await userServices.addProposal(values);
        console.log(res);
 
      }
      
    },
    created() {
      this.calcYear();
    
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);

    }
  };

</script>


<style scoped>
  #matchPanel {
    margin: 20px 0 30px 0;
  }

  h6,
  p {
    line-height: 1.6;
  }

  #matchImg {
    height: 150px;
    width: 150px;
    margin: 10px 20px;
    border: 1px solid #797979;
    padding: 5px;
  }

  #dogDesc {
    padding: 0;
  }

  span {
    color: #797979;
  }

</style>
