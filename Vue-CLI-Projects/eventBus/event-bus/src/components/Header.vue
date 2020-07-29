<template>
    <div class="card" >
        <h1 @click="changeTitle">{{ title }}</h1>
    </div>
</template>

<script>
import { eventBus } from '../main'
    export default {
        name: 'Header',
        data() {
            return {
                title: 'Onur M.',
            }
        },
        methods:{
            changeTitle(){
                //this.$emit('changeTitle','Onur MORCAGÖK');
                this.title = "Onur MORCAGÖK";
                eventBus.$emit('changeTitle',this.title);
            }
        }
    }
</script>

<style>
    .card {
        margin:20px;
        padding:20px;
        border:1px solid black;
        text-align: center;
        width: auto;
    }
</style>