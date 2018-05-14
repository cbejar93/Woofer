<template>
  
    <div class="container">
      <h5>Your Companion Matches</h5>

      <div class="row" id="google-map">
        <div class="col 8 push-s2">
          <google-map></google-map>
        </div>
      </div>
      <br>
      <userMatches></userMatches>
      <userMatches></userMatches>
      <userMatches></userMatches>

    </div>

</template>

<script>
import googleMap from "../components/map";
import userMatches from "../components/userMatches";

export default {
  name: "userHome",
  components: {
    googleMap,
    userMatches
  },
  method: {
    
      clicked: function(id) {
			console.log('The button has been clicked', id)
    
  }
  }
}
</script>

<style>

h5 {
  margin: 20px 0;
  padding: 20px 0;
}

</style>
