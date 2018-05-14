<template>
<div id="app">
    <div class="container">
        <h5>Your Woofer Profile</h5>
        <div class="row" id="btnSection">
                <button class="btn waves-effect waves-light" type="submit" name="action" id="updateProfileBtn">Update Profile</button>       
        </div>
        <div class="row">
            <h6>Your Pending Woof Hangouts</h6>
                <pendingWoofs v-if="true"></pendingWoofs>
                <div class="card horizontal" id="defaultCard" v-else>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>You have no proposals pending.</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>

</template>

<script>
import pendingWoofs from "../components/pendingWoofs";

export default {
    name: "wooferprofile",
    components:{
        pendingWoofs
    }
};

</script>

<style>
  #propCard {
    margin: 15px 0 30px 0;
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