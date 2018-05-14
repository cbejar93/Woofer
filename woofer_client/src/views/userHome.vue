<template>
  
    <div class="container">
      <h5>Your Companion Matches</h5>

      <div class="row" id="google-map">
        <div class="col 8 push-s2">
          <google-map></google-map>
        </div>
      </div>
      <br>
      <userMatches v-for="dog in dogs" :dog="dog"/>

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
    clicked: function(id) {
			console.log('The button has been clicked', id)
  },
  created() {
    this.getDogs();
 
}
</script>

<style>

h5 {
  margin: 20px 0;
  padding: 20px 0;
}

</style>
