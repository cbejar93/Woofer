<template>
<div>
    <div class="card horizontal z-depth-0" id="propCard">
                <div class="card-stacked">
                  <div class="card-content">
            
                    <h3 id="date">{{moment(proposal.createdAt).format("dddd, MMMM Do YYYY")}}</h3>
                    <p>
                      <h6>
                      <span id="userName">You've requested woofee {{proposal.woofee.firstName}} {{proposal.woofee.lastName}}</span> 
                      <span id="dogName"> to hang out with {{proposal.dog.name}}</span>
                      </h6>
                      <h6>Date:<span>{{moment(proposal.meetingDate).format("dddd, MMMM Do YYYY")}}</span> </h6> 
                      <h6>Time: <span>{{proposal.meetingTime}}</span></h6>
                      <h6>Where: <span>{{proposal.meetAddress}}</span></h6>
                      <p>{{proposal.woofee.firstName}} has 
                      <span v-if="proposal.state == 1">accepted.</span>
                      <span v-else-if="proposal.state == 2">declined</span>
                      <span v-else>not responded yet.</span></p>
                    </p>
                    <div class="card-action">
                      <button v-bind:data-target="proposal.dog.name" class="btn waves-effect waves-light btn-small modal-trigger ">Message</button>
                      <button class="btn waves-effect waves-light btn-small" type="submit" name="action" id="deleteBtn">Cancel</button>
                    </div>
          
                  </div>
                </div>
              </div>

    <!------------------------------- Modal Structure ------------------------------------>
    <form v-bind:id="proposal.dog.name" class="modal">
      <div>

        <div class="modal-content">
          <h5>Message
            <span id="dogName">{{proposal.dog.name}}</span>'s Hooman</h5>

          <div class="input-field col s12">
            <textarea name="subject" id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Subject</label>
            </div>
            <div class="input-field col s12">
            <textarea name="content" id="textarea2" class="materialize-textarea"></textarea>
            <label for="textarea2">Textarea</label>
          </div>

    
            <button v-on:click="sendMsg" class="waves-effect waves-green btn-flat">Send</button>
          
        </div>
      </div>
    </form>

  </div>
</div>
</template>

<script>
import userServices from "@/services/userServices";
import moment from 'moment';
export default {
  name: "pendingwoofs",
  props: ["proposal"],
  data(){
    return{
      moment: moment
    }
  },
  methods: {
    async sendMsg(e) {
      e.preventDefault();
      const form = document.querySelector(`#${this.proposal.dog.name}`);
      const values = Object.values(form).reduce((obj, field) => {
        obj[field.name] = field.value;
        return obj;
      }, {});
      values.senderId = this.proposal.woofer.id;
      values.recipientId = this.proposal.woofee.id;
      console.log(values);
      const res = await userServices.sendMsg(values);
      console.log(res);
    }
  },
  mounted() {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems);
  }
};
</script>

<style scoped>
#propCard {
  margin: 15px 0 30px 0;
  border: 1px solid #10c5cc;
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
  text-decoration: underline;
}

.modal-content {
  padding: 10px 20px;
}
 span {
    color: #797979;
  }
</style>
