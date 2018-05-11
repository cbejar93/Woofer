<template>
  <div> 
    <div id="google-map">
    </div>
    <h1>There should be some text showing up</h1>
  </div>


</template>

<script>
  export default {
    name: "map",
    props: {
      'latitude': {
        type: Number,
        default: function(){
          return 39.50
        }
      },
      'longitude': {
        type: Number,
        default: function(){
          return -98.35
        }
      },
      'zoom': {
        type: Number,
        default: function(){
          return 4
        }
      }
    },

    data(){
      return {

      }
    },

    mounted(){
      this.map = new google.maps.Map(document.getElementById('google-map'), {
        center: {lat: this.latitude, lng: this.longitude},
        zoom: this.zoom
      });
    }
  }

</script>

<style>

#google-map{
    height: 300px;
    width: 300px;
}

</style>