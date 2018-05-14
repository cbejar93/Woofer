<template>
  <div id="app">

    <hr>
   
    <div class="row" id="matchPanel">
      <div class="col s2" id="dogImg">
        <img src="../assets/images/match_melo.jpg" id="matchImg" alt="Woofer Match" />
      </div>

      <div class="col s9 push-s1" id="dogDesc">
        <h6>Name:
          <span id="matchName">{{dog.name}}</span>
        </h6>
        <h6>Breed: <span id="breed">{{dog.breed}}</span></h6>
        <h6>Gender: <span id="gender">Gender</span></h6>
        <h6>Age: <span id="age">{{years}}</span></h6>
        <h6>Character:
          <span id="charDesc">{{dog.character}}</span>
        </h6>
        <p id="matchDesc">Melo loves going for walks and meeting other dogs. He’s also perfectly content laying his head in your lap. Melo
          takes treats gently and gives the best hugs.</p>
        
        <button class="btn waves-effect waves-light" type="submit" name="action">Meet This Woofer</button>
      </div>
    </div>

  </div>
</template>

<script>
import userServices from  "@/services/userServices";

export default {
  
  name: "userMatches",
  components: {
  },
  props: ['dog'],
  data() {
    return {
      years: ''
    }
  },
  methods: {
    calcYear() {
      const foo = new Date(this.dog.age).getFullYear();
      const bar = new Date().getFullYear();
      this.years = bar - foo;
    }
  },
  created() {
    this.calcYear();
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
