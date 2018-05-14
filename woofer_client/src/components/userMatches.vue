<template>
  <div id="app">

    <hr>
   
    <div class="row" id="matchPanel">
      <div class="col s2" id="dogImg">
        <img src="../assets/images/match_melo.jpg" id="matchImg" alt="Woofer Match" />
      </div>

      <div class="col s9 push-s1" id="dogDesc">
        <h6>Name:
          <span id="matchName">Melo</span>
        </h6>
        <h6>Breed: <span id="breed">Pitbull Boxer Mix</span></h6>
        <h6>Gender: <span id="gender">Male</span></h6>
        <h6>Age: <span id="age">4 years old</span></h6>
        <h6>Character:
          <span id="charDesc">Beefy Snuggler</span>
        </h6>
        <p id="matchDesc">Melo loves going for walks and meeting other dogs. He’s also perfectly content laying his head in your lap. Melo
          takes treats gently and gives the best hugs.</p>
        
        <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="emit">Meet This Woofer</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "userMatches",
  components: {

  },
  
  methods: {
    onClickButton (event) {
      this.$emit('clicked', 'true')
    }
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
