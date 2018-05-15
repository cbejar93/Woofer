<template>
<div id="app">
    <div class="container">
        <h5>Your Woofer Profile</h5>
        <div class="row" id="btnSection">
                <button class="btn waves-effect waves-light" type="submit" name="action" id="updateProfileBtn">Update Profile</button>       
        </div>
        <div class="row">
            <h6>Your Pending Woof Hangouts</h6>
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
import pendingWoofs from "../components/pendingWoofs";
import userServices from "@/services/userServices";
export default {
  name: "wooferprofile",
  props: ['user'],
  components: {
    pendingWoofs
  },
  data() {
    return {
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