<template>
    <div id="google-map">

    </div>

</template>

<script>
export default {
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
        }
  }

var googleMapApikey = "AIzaSyBmaHbGhFQhBByXyw8flgXVTURVHT5iHHc"
</script>

<style>

#google-map{
    height: 300px;
    width: 300px;;
}

</style>