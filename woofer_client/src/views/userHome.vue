<template>
  <div id="app">
    <div class="container">
        <h5>Your Companion Matches</h5>

        <google-map></google-map>
        <br>
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
