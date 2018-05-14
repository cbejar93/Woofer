<template>
  
    <div class="container">
      <h5>Your Companion Matches</h5>

      <div class="row" id="google-map">
        <div class="col 8 push-s2">
          <google-map></google-map>
        </div>
      </div>
      <br>

      <userMatches v-for="dog in dogs" :dog="dog" v-on:interface="foo"/>
      <button data-target="modal1" class="btn modal-trigger">Modal</button>


    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4>Plan a Woofer Outing</h4>
            <p>Where would you like to meet? </p>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <form id="addproposal">
                    <div class="input-field col s12">
                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                      <label for="textarea1">Where would you like to meet?</label>
                    </div>
                  </form>
                </div>
              </form>
            </div>
        </div>
        <div class="modal-footer">
            <a href="/dogsviews" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
            <a href="/wooferhome" class="modal-close waves-effect waves-green btn-flat" v-on:click="sendForm">Agree</a>
        </div>
    </div>

    </div>

</template>

<script>
import googleMap from "../components/map";
import userMatches from "../components/userMatches";
import userServices from  "@/services/userServices";
export default {
  name: "userHome",
  components: {
    googleMap,
    userMatches
  },
  data(){
    return {
      dogs: ''
    }
  },
  methods: {
    async getDogs() {
      const res = await userServices.getDogsLocal();
      this.dogs = res.data;
      
    },
    foo(name){
      console.log(name)
    }
  },
  created() {
    this.getDogs();
  },
  mounted(){
    
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);


  }
};
</script>

<style>
h5 {
  margin: 20px 0;
  padding: 20px 0;
}
</style>
