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
        <p>Woofer is a dog sharing service offering the joy and companionship of a temporary furry best friend whenever you
          need it. All Woofer companions are fully vetted and chipped... that goes for you too, just maybe not the chipped
          part.
        </p>
      </div>
    </div>

    <hr style="margin: 0">

    <div class="container">
      <div class="row">

        <div class="col m4">
          <i class="medium material-icons sectionIcon">pets</i>
          <p>Just a couple of clicks and you can schedule time with one of our Woofer dogs. Or, if you have a dog who loves
            meeting new people, become a Woofer partner and get your dog some extra playtime!</p>
        </div>

        <div class="col m4">
          <i class="medium material-icons sectionIcon">check_circle_outline</i>
          <p>Our Woofer dogs, their people, and those looking to schedule time with a dog are fully vetted. Woofer dogs are
            microchipped and tracked by GPS.</p>
        </div>

        <div class="col m4">
          <i class="medium material-icons sectionIcon">favorite</i>
          <p>Did you know? Playing with or petting a dog can help reduce stress and keep your heart healthy. Read more about
            it
            <a href="https://www.health.harvard.edu/blog/therapy-dog-offers-stress-relief-at-work-201107223111">here.</a>
          </p>
        </div>

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
    margin: -5px 0;
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

  .sectionIcon {
    color: #FFE447;
    display: block;
    margin: 40px auto;
    max-width: 75px;
  }

  a:visited {
    color: rgb(14, 153, 158);
  }

  a:hover {
    color: rgb(27, 228, 235);
  }

  a:active {
    color: #10C5CC;
  }

</style>
