<template>
    <div class="woofeeDog">
        <div class="woofer col m4">
            <a href="#">
                <img :src="dog.imgPath" class="dogImg" />
             </a>
            <!-- A vue instance that gives us several dog names -->
             <p>{{dog.name}}</p>
        </div>
    </div>
</template>

<script>
  import userServices from  "@/services/userServices";
  export default {
    // exporting it
    name: "woofeeDog",
    props:['dog'],
    updated() {
        console.log(this.dog)
    }
  };

</script>

<style scoped>
  p {
    margin: 0;
    padding: 0;
  }

  h5 {
    margin: 20px 0;
    padding: 20px 0;
  }

  h6 {
    padding: 5px 0;
  }

  .btn-flat {
    margin: 5px 0;
    max-width: 200px;
  }

  #addDogBtn {
    margin: 0 0 0 10px;
  }

  .btn-flat {
    text-transform: capitalize;
    padding: 0 10px;
  }

  .btn-small:hover {
    background-color: transparent;
  }

  #defaultCard {
    margin: 10px 0 30px 0;
  }

  img {
    max-width: 200px; 
    height: auto;
  }

</style>
