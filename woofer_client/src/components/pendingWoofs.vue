<template>
        <div class="card horizontal z-depth-0" id="propCard">
                <div class="card-stacked">
                  <div class="card-content">
          
                    <p id="date">5/13/18</p>
                    <p>
                      <span id="userName">You've requested woofee Liz Ehmann</span> 
                      <span id="dogName"> to hang out with Sasha</span>
                    </p>
          
                    <div class="card-action">
                      <button class="btn waves-effect waves-light btn-small" type="submit" name="action" id="detailsBtn">Message</button>
                      <button class="btn waves-effect waves-light btn-small" type="submit" name="action" id="deleteBtn">Cancel</button>
                    </div>
          
                  </div>
                </div>
              </div>
</template>

<script>
    export default {
        name: "pendingwoofs",
        components:{

        }
    };

</script>

<style scoped>
 #propCard {
    margin: 15px 0 30px 0;
    border: 1px solid #10C5CC;
  }

  .btn-small {
    margin: 0 0 0 10px;
  }

  .card-action {
    padding: 15px 0;
    margin: 10px 0 0 0;
  }

  .card-content {
    padding: 10px 20px;
  }

  #detailsBtn {
    margin: 0;
  }

  #date {
    font-size: 14px;
    margin: 5px 0;
  }
</style>