<template>
  <div id="app">

    <img src="../assets/images/match_melo.jpg" id="matchImg" alt="Woofer Match" />
    <h6>Name:
      <span id="matchName">Melo</span>
    </h6>
    <h6>Temperment:
      <span id="tempDesc">Beefy Snuggler</span>
    </h6>
    <p id="matchDesc">Melo loves going for walks and meeting other dogs. He’s also perfectly content laying his head in your lap. Melo takes
      treats gently and gives the best hugs.</p>
    <p>Would you like to meet
      <span id="matchName">Melo</span>?</p>
    <button class="btn waves-effect waves-light" type="submit" name="action">Meet This Woofer</button>
    <br>
    <br>


  </div>
</template>

<script>
  export default {
    name: "userMatches",
    components: {}
  };

</script>

<style scoped>
  h6,
  p {
    line-height: 1.6;
  }

</style>
