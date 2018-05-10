<template>
       <footer class="page-footer">
                
                    <div class="row valign-wrapper">
                        <div class="col l6 s6">
                            <img src="../assets/logo_mobile.png"/>
                        </div>
                        <div class="col l6 s6">
                            <p>© 2018 Fourtastic</p>
                        </div>
                    </div>
                  
        </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
    height: 60px;
    background-image: linear-gradient(
    to bottom right,
    #FF23B8,
    #d4108e
  );
  }

main {
    flex: 1 0 auto;
  }
img{
    width: 25%;
}

</style>
