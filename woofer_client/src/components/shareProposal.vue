<template>
  <div id="app">

    <!-- proposal card if someone wants to schedule time with a Woofer -->
    <div class="card horizontal z-depth-0" id="propCard">

      <div class="card-stacked">
        <div class="card-content">

          <p id="date">5/13/18</p>
          <p>
            <span id="userName">Liz Ehmann</span> would like to schedule time with
            <span id="dogName">Sasha</span>
          </p>

          <div class="card-action">
            <!-- Modal Trigger -->
            <button class="btn modal-trigger waves-effect waves-light btn-small" data-target="detailsModal" id="detailsBtn">View Details</button>

            <button class="btn waves-effect waves-light btn-small" type="submit" name="action" id="deleteBtn">Remove</button>
          </div>

        </div>
      </div>
    </div>

    <!-------------------------------- Visit Details Modal Structure ---------------------------------------->

    <div id="detailsModal" class="modal">
      <div class="modal-content">
        <h5>Meeting Details for <span id="sharedDogName"> Sasha</span></h5>
        <h6>Time requested by: <span id="renter_id"> Liz Ehmann</span></h6>
        <h6>Requested date and time: <span id="reqDateTime"> 5/17/18, 11:30am</span></h6>
        <h6>Meeting address: <span id="meetAddy"> 3280 Progress Dr., Orlando, FL 32826</span></h6>
        
        <!-- EXTRA FEATURE ... user paws (star) rating? -->
        <h6>Rating: <span id="pawsRating"><i class="tiny material-icons">pets</i></span></h6>
      </div>
      <hr>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-light btn-flat">Accept</a>
        <a href="#!" class="modal-close waves-effect waves-light btn-flat">Decline</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "shareProposal",
    mounted() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
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

  h5 {
    margin: 0;
  }

  #renter_id,
  #reqDateTime,
  #meetAddy {
    color: #797979;
  }

</style>
