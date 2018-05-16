<template>
  
    <div class="container">
      <h4>Welcome, {{user.firstName}} {{user.lastName}}</h4>
      <h5>Your Companion Matches</h5>

      <div class="row" id="google-map">
        <div class="col 8 push-s2">
        </div>
      </div>
      <br>
      <!-- This calls the userMatches componenet so users are able to see which dogs they would like to hang out with  -->
      <userMatches v-for="dog in dogs" :dog="dog" :user="user" :key="dog.id" v-on:interface="foo"/>
      
      


    </div>

</template>

<script>
import googleMap from "../components/map";
import userMatches from "../components/userMatches";
import userServices from  "@/services/userServices";
export default {
  name: "userHome",
  props: ['user'],
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
  }
};
</script>

<style>
h5 {
  margin: 20px 0;
  padding: 20px 0;
}
</style>
