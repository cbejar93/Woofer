<template>
  <div id="app">
    <div class="container">
      <h5>Your Companion Matches</h5>

      <div class="row" id="googMap">
        <div class="col 8 push-s2">
          <google-map></google-map>
        </div>
      </div>
      <br>
      <userMatches></userMatches>
      <userMatches></userMatches>
      <userMatches></userMatches>

    </div>



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
    }
  };

</script>

<style>
  
</style>
