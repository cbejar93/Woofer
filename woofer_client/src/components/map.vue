<template>
  <div> 
    <div id="google-map">
    </div>
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
        default: function() {
          return 4
        }
      }
    },

    data(){
      return {
        markers: []

      }
    },

    mounted(){
      this.map = new google.maps.Map(document.getElementById('google-map'), {
        center: {lat: this.latitude, lng: this.longitude},
        zoom: this.zoom
      });
    },
    computed:{  
        locations(){
          return this("This is where the location is supposed to go")
        }
      },
      methods: {
        // Builds markers for our array
          buildMarkers(){
            // local array for different markers
            this.markers = []
            // This for loop is to create all the different makers
            for (var i = 0; i < this.cafelength; i++){
              // The google map method for adding markers
                var marker = new google.maps.Marker({
                  position: {lat: parseFloat(this.cafes[i].latitude), lng: parseFloat(this.cafes[i].longitude)},
                  map: this.map
                });
                this.markers.push(marker)
            }
          }
      }
    }


</script>

<style>

#google-map{
    height: 300px;
    width: 600px;
}

</style>