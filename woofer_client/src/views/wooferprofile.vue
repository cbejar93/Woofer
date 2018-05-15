<template>
<div id="app">
    <div class="container">
        <h5>Your Woofer Dashboard</h5>
        <div class="row" id="btnSection">
                <button class="btn waves-effect waves-light" type="submit" name="action" id="updateProfileBtn">Update Profile</button>
                <button class="btn waves-effect waves-light" type="submit" name="action" id="inboxbBtn" href="/inbox">Inbox</button>      
        </div>
        <div class="row">
            <h6>Your Pending Woof Hangouts</h6>
            <!-- v-if is a vue directive that allows us to do some logic in the HTML -->
            <!-- This one controls what is seen if there are woof proposals for the user -->
            <!-- Also a for loop if there are more than one pending proposal -->
                <pendingWoofs v-if="proposals" v-for="props in proposals" :key="props.id" :proposal="props"/>
                <div v-else class="card horizontal" id="defaultCard">
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
  // This gets the component to display to the user that there is a pending woof there
import pendingWoofs from "../components/pendingWoofs";
//User services is where the requests to backend happen 
import userServices from "@/services/userServices";
export default {
  // This exports this Vue to the index.js in the router folder to show
  name: "wooferprofile",
  props: ['user'],
  components: {
    // Listing components so that we can pass information to App.vue 
    pendingWoofs
  },
  data() {
    return {
      // Vue only watches for reactivity if the varaibles are decleared before page render
      proposals: {}
    };
  },
  methods: {
    async getProposals() {
      const res = await userServices.getProposal(this.user.id);
      console.log(this.user.id);
      const temp = res.data;
      temp.forEach(async (item, index) => {
        item.woofer = (await this.getUsers(item.renter_id)).data;
        item.woofee = (await this.getUsers(item.rentee_id)).data;
        item.dog = (await this.getDogsById(item.dogId)).data;
        this.$set(this.proposals, index, item);
      });
      console.log(this.proposals);
    },
    async getDogsById(id) {
      return await userServices.getDogById(id);
    },
    async getUsers(id) {
      return await userServices.getUserById(id);
    }
  },
  created(){
      this.getProposals();
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