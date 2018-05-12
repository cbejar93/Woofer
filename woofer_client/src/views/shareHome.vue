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

    </div>



  </div>
</template>

<script>
  import shareDogProfile from "../components/sharedogProfile";

  export default {
    name: "shareHome",
    components: {
      shareDogProfile
    }
  };

</script>

<style>
  
</style>
