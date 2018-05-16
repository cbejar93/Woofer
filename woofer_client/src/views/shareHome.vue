<template>
  <div id="app">
    <div class="container">

      <h5>Woofer Partner Profile</h5>
      <div class="row" id="btnSection">
        <button class="btn waves-effect waves-light right" type="submit" name="action" id="updateProfileBtn">Update Profile</button>
        <form action="addDog">
        <button class="btn waves-effect waves-light right" type="submit" name="action" id="addDogBtn">Add a Dog</button>
        </form>      
      </div>

      <hr>
      
      <div class="row">
        <h6>Woofers You Share</h6>
        <!-- ------  This is more vue logic, for all the dogs that are in the object. ------  -->
        <!-- This is the Vue component -->
          <woofeeDog v-for="dog in dogs" :dog="dog" :key="dogs.id"/>
      </div>
      

      <hr>

      <h6>Pending Proposals
      <!-- // This the reactivity avaialable for vue  -->
        <span id="numProposals">({{howManyProps}})</span>
      </h6>
      <small>Sort by:
        <span>
          <a class="btn-flat btn-small">Most Recent</a>
        </span>
        <span>
          <a class="btn-flat btn-small">Date</a>
        </span>
      </small>

      <!--------- if Woofer-Share is true, proposal card shows ---------->
      <shareProposal v-if="proposals" v-for="prop in proposals" :key="prop.id" :proposal="prop" />

    

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
  // A Vue component 
  import userServices from  "@/services/userServices";
  // A Vue component 
  import woofeeDog  from "../components/woofeeDogProfile";
  export default {
    name: "shareHome",
    components: {
      // You have to include the componenets to pass on to the app vue  
      shareProposal,
      woofeeDog
    },
    props: ['user'],
    data() {
      return {
        dogs: '',
        proposals: {},
        howManyProps: ''
      }
    },
    methods: {
      async getDogs() {
        const res = await userServices.getDogsWoofee(this.user.id);
        this.dogs = res.data;
      },
      async getProposals(){
        const res = await userServices.getProposal(this.user.id);
        const temp   = res.data;
        this.howManyProps = res.data.length
        temp.forEach(async (item, index) => {
           item.woofer = (await this.getUsers(item.renter_id)).data
           item.woofee = (await this.getUsers(item.rentee_id)).data
           item.dog = (await this.getDogsById(item.dogId)).data
           this.$set(this.proposals, index , item)
        });
  
      },
      async getDogsById(id){
        return await userServices.getDogById(id)
       
      },
      async getUsers(id) {
        return await userServices.getUserById(id)
      }
    },
    created() {
      this.getDogs();
      this.getProposals();
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

  .btn {
    margin: .5em;
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
