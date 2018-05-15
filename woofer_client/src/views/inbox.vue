<template>
    <div id="app">
        <div class="container">
            <div class="col s12 m7">
                    <h2 class="header">Inbox</h2>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                            <h5>Messages with {{person}}</h5>
                          <div class="divider"></div>
                          <p>In here should be all the posts in a message thread.</p>
                        </div>
                        <div class="card-action">
                                <button class="btn waves-effect waves-light" type="submit" name="action" id="inboxbBtn" href="">Reply</button>
            
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
</template>



<script>
import localStorage from "@/services/localStorage.js";
export default {
  name: "inbox",
  components: {},
  methods: {
    getData(data) {
      return localStorage.getLocal();
    }
  }
};

</script>

<style>

</style>