<template>
    <div id="app">
        <div class="container">
            <h5>Add your Woofer</h5>
            <div class="row">
                <form class="col s12">
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
                            <input id="tempermant" type="text" class="validate">
                            <label for="tempermant">Tempermant</label>
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

<style>

</style>
