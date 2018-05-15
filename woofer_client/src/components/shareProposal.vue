<template>
  <div v-if="show" id="app">

    <!-- proposal card if someone wants to schedule time with a Woofer -->
    <div class="card horizontal z-depth-0" id="propCard">
      <div class="card-stacked">
        <div class="card-content">

          <p id="date">{{proposal.createdAt}}</p>
          <p>
            <span id="userName">{{proposal.woofer.firstName}} {{proposal.woofer.lastName}}</span> would like to schedule time with
            <span id="dogName">{{proposal.dog.name}}</span>
            <p v-if="proposal.state == 1">
  
                You have accepted this proposal. 
            </p>
            <p v-if="proposal.state == 2 ">
                You have declined this proposal.
            </p>
          </p>

          <div class="card-action">
            <!-- Modal Trigger -->
            <button class="btn modal-trigger waves-effect waves-light btn-small" :data-target="proposal.id" id="detailsBtn">View Details</button>

            <button class="btn waves-effect waves-light btn-small" type="submit" name="action" id="deleteBtn">Remove</button>
          </div>

        </div>
      </div>
    </div>

    <!-------------------------------- Visit Details Modal Structure ---------------------------------------->

    <div :id="proposal.id" class="modal">
      <div class="modal-content">
        <h5>Meeting Details for <span id="sharedDogName">{{proposal.dog.name}}</span></h5>
        <h6>Time requested by: <span id="renter_id">{{proposal.woofer.firstName}} {{proposal.woofer.lastName}}</span></h6>
        <h6>Requested date and time: <span id="reqDateTime"> 5/17/18, 11:30am</span></h6>
        <h6>Meeting address: <span id="meetAddy">{{proposal.meetAddress}}</span></h6>
        
        <!-- EXTRA FEATURE ... user paws (star) rating? -->
        <h6>Rating: <span id="pawsRating"><i class="tiny material-icons">pets</i></span></h6>
      </div>
      <hr>
      <div class="modal-footer">
        <button type="submit" v-on:click="updateProposal" value="1" class="waves-effect waves-light btn-flat">Accept</button>
        <button type="submit" v-on:click="updateProposal"  value="2" class="waves-effect waves-light btn-flat">Decline</button>
      </div>
    </div>

  </div>
</template>

<script>
  import userServices from  "@/services/userServices";
  let nastyGlobal = []
  export default {
    name: "shareProposal",
    props: ['proposal'],
    data(){
      return {
        show: true,
  
      }
    },
    methods: {
      async updateProposal(e) {
        e.preventDefault();
        const state = e.target.value; 
        const res = await userServices.updateProposal(this.proposal.id, state)
        nastyGlobal.forEach(modal => modal.close())

      }
    },
    mounted() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
      nastyGlobal = instances;
    }
  };

</script>

<style scoped>
  #propCard {
    margin: 15px 0 30px 0;
    border: 1px solid #10C5CC;
  }

  .btn-small {
    margin: .5em;
  }

  .card-action { 
    padding: 15px 0;
    margin: 10px 0 0 0;
  }

  .card-content {
    padding: 10px 20px;
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
