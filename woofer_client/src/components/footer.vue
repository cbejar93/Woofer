<template>
  <footer class="page-footer">

    <img src="../assets/images/logo_sm.png" />
    <p class="right">Woofer © {{year}} Fourtastic</p>

  </footer>
</template>

<script>
  export default {
    name: 'footer-component',
    data() {
     return {
       year: this.getYear()
     }
    },
    methods: {
      getYear: function() {
        return new Date().getFullYear();
      }
    }
  }

</script>

<style scoped>
  .page-footer {
    height: 50px;
    background-image: linear-gradient(
      to bottom right,
    #FF23B8,
    #d4108e,
    #B20E7B
    );
  }

  p {
    margin: -5px 35px 0 0;
  }

  img {
    margin: -10px 20px 0 40px;
    
  }

</style>
