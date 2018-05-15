<template>
  <div class="card horizontal z-depth-0" id="propCard">
    <div class="card-stacked">
      <div class="card-content">

        <p id="date">5/13/18</p>
        <p>
          You've requested time with
          <span id="dogName"> Sasha</span>
        </p>

        <div class="card-action">
          <button class="btn waves-effect waves-light btn-small modal-trigger" type="submit" name="action" id="detailsBtn" data-target="msgModal">Message</button>
          <button class="btn waves-effect waves-light btn-small" type="submit" name="action" id="deleteBtn">Cancel</button>
        </div>

      </div>
    </div>

    <!------------------------------- Modal Structure ------------------------------------>
    <form>
      <div id="msgModal" class="modal">

        <div class="modal-content">
          <h5>Message
            <span id="dogName">Sasha</span>'s Hooman</h5>

          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Subject</label>
            </div>
            <div class="input-field col s12">
            <textarea id="textarea2" class="materialize-textarea"></textarea>
            <label for="textarea2">Textarea</label>
          </div>

          <div class="modal-footer">
            <a class="modal-close waves-effect waves-green btn-flat">Send</a>
          </div>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    name: "pendingwoofs",
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


  .modal-content {
    padding: 10px 20px;
  }

</style>
