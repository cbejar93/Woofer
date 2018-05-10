<template>
  <nav>
    <div class="nav-wrapper">
      <img src="../assets/logo_white.png" href="#" class="brand-logo" />
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Become a Woofer</a></li>
        <li><a href="#">Sign In</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    height: 65%;
    margin: 10px 20px 10px 40px;
}

ul {
    margin: 0 20px 0 0;
}

.nav-wrapper {
    background-image: linear-gradient(
    to bottom right,
    #FF23B8,
    #d4108e
  );
}

</style>
