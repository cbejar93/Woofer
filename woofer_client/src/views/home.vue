<template>

  <div id="app">

    <div class="row" id="carousel">
      <agile :arrows="false" :autoPlaySpeed="2500" :timing="'linear'" :fade="true" :autoplay="true" :dots="false" :pauseOnHover="false">
        <div class="slide slide--1">
          <img src="../assets/images/car_beagle.jpg" />
        </div>
        <div class="slide slide--2">
          <img src="../assets/images/car_duoDogs.jpg" />
        </div>
        <div class="slide slide--3">
          <img src="../assets/images/car_husky.jpg" />
        </div>
        <div class="slide slide--4">
          <img src="../assets/images/car_fluff.jpg" />
        </div>
        <div class="slide slide--5">
          <img src="../assets/images/car_pitPup.jpg" />
        </div>
        <div class="slide slide--6">
          <img src="../assets/images/car_golden.jpg" />
        </div>
        <div class="slide slide--7">
          <img src="../assets/images/car_yorkie.jpg" />
        </div>
      </agile>
      <hr>
    </div>

    <div class="container">

      <div class="row" id="intro-content">
        <h5>What's a Woofer?</h5>
        <p>Woofer is a dog sharing service offering the joy and companionship of a furry best friend whenever you need it. Do
          you want a dog but you're not sure if your lifestyle is compatible with having a dog? Looking for a running partner
          of the four-legged kind? Want some naptime snuggles with a little furry friend? Then Woofer is for you! We help
          match people with a temporary canine companion. All Woofer companions are fully vetted and chipped... that goes
          for you too, just maybe not the chipped part.</p>
      </div>
    </div>

  </div>
</template>

<script>
  import localStorage from "@/services/localStorage.js";
  export default {
    name: "home",
    components: {},
    methods: {
      getData(data) {
        return localStorage.getLocal();
      }
    }
  };

</script>


<style scoped>
  img {
    width: 100%;
  }

  hr {
    margin: -5px;
  }

  h5 {
    padding: 20px 0;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }

  #shelterInfoPanel {
    margin: 0 0 -5px 0;
  }

  #dogPanelImg {
    margin: 20px 0 0 0;
  }

</style>
