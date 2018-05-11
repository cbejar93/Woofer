<template>
    <div id="app">
        <google-map></google-map>
        <h1>Hello there</h1>
    </div>
</template>

<script>
import googleMap from "../components/map"

    export default {
        name: "userHome",
        components: {
            googleMap
        }
    }
</script>

<style>

</style>