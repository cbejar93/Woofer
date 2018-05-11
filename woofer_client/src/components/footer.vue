<template>
  <footer class="page-footer">

    <img src="../assets/images/logo_sm.png" />
    <p class="right">Woofer © 2018 Fourtastic</p>

  </footer>
</template>

<script>
  export default {
    name: 'footer'
  }

</script>

<style scoped>
  .page-footer {
    height: 50px;
    background-image: linear-gradient( to bottom right,
    #FF23B8,
    #d4108e);
  }

  p {
    margin: -5px 35px 0 0;
  }

  img {
    margin: -10px 20px 0 40px;
    
  }

</style>
