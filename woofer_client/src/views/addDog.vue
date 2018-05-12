<template>
    <div id="app">
        <div class="container">
            <h2 id="title">Add your Woofer</h2>
            <div class="row">
                <form id="addDog" class="col s12 card">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="dog_name" type="text" class="validate">
                            <label for="dog_name">Dog Name</label>
                        </div>   
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="dog_breed" type="text" class="validate">
                            <label for="dog_breed">Breed</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="dog_age" type="number" class="validate">
                            <label for="dog_age">Age</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="gender" type="text" class="validate">
                            <label for="gender">Gender</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="character" type="text" class="validate">
                            <label for="character">Character</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Enter a description about your Dog</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>Image</span>
                                <input type="file">
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" placeholder="Upload an image of your dog" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <button v-on:click="sendForm" class="btn waves-effect waves-light" name='btn'>Submit
                            <i class="material-icons right">send</i>
                        </button>   
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "adddog"
    }
</script>

<style scoped>
    button {
        float: right;
        margin: 1em;
    }

    #title {
        text-align: center;
    }

    .card {
        padding: 2em;
    }

</style>
