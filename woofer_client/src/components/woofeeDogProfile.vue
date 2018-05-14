<template>
    <div class="woofeeDog">
        <div class="woofer col m4">
            <a href="#">
                <img src="../assets/images/profile_sasha.jpg" class="dogImg" />
             </a>
             <p>{{dog.name}}</p>
        </div>
    </div>
</template>

<script>
  import userServices from  "@/services/userServices";
  export default {
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

</style>
