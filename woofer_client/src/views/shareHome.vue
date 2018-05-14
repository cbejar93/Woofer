<template>
  <div id="app">
    <div class="container">

      <h5>Your Woofer Profile</h5>

      <div class="row" id="btnSection">
        <button class="btn waves-effect waves-light" type="submit" name="action" id="updateProfileBtn">Update Profile</button>
        <button class="btn waves-effect waves-light" type="submit" name="action" id="addDogBtn">Add a Dog</button>
      </div>

      <hr>
      
      <div class="row">
        <h6>Woofers You Share</h6>
          <woofeeDog v-for="dog in dogs" :dog="dog"/>
      </div>

      <hr>

      <h6>Pending Proposals
        <span id="numProposals">(1)</span>
      </h6>
      <small>Sort by:
        <span>
          <a class="btn-flat btn-small">Most Recent</a>
        </span>
        <span>
          <a class="btn-flat btn-small">Date</a>
        </span>
      </small>

      <!-------- if Woofer-Share is true, proposal card shows -------->
      <shareProposal v-if="true"></shareProposal>

      <!-------- if Woofer-Share is false, default message shows -------->
      <div class="card horizontal" id="defaultCard" v-else>
        <div class="card-stacked">
          <div class="card-content">
            <p>You have no proposals pending.</p>
          </div>
        </div>
      </div>




    </div>



  </div>
</template>

<script>
  import shareProposal from "../components/shareProposal";
  import userServices from  "@/services/userServices";
  import woofeeDog  from "../components/woofeeDogProfile";
  export default {
    name: "shareHome",
    components: {
      shareProposal,
      woofeeDog
    },
    props: ['user'],
    data() {
      return {
        dogs: ''
      }
    },
    methods: {
      async getDogs() {
        const res = await userServices.getDogsWoofee(this.user.id);
        this.dogs = res.data;
      }
    },
    created() {
      this.getDogs();
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

  #dogImg {
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
