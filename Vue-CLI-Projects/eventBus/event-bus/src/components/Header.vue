<template>
    <div class="card" >
        <h1 @click="changeTitle">{{ title }}</h1>
        <br>
        <input type="text" v-model="message">
        <br>
        <button @click="sendToMessage">Send Message</button>
    </div>
</template>

<script>
import { eventBus } from '../main'
    export default {
        name: 'Header',
        data() {
            return {
                title: 'Onur',
                message: '',
            }
        },
        methods:{
            changeTitle(){
                //this.$emit('changeTitle','Onur MORCAGÖK');
                this.title = "Onur MORCAGÖK";
                eventBus.$emit('changeTitle',this.title);
            },
            sendToMessage(){
                eventBus.$emit('sendToMessage',this.message);
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