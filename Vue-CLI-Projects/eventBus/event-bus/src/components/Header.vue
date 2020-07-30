<template>
    <div class="card" >
        <h1 @click="changeTitle">{{ title }}</h1>
        <br>
        <h3>{{ inComingMessage }}</h3>
        <br>
        <input type="text" v-model="message" placeholder="Please send to message">
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
                title: 'Click here',
                message: '',
                inComingMessage: '',
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
        },
        watch:{
            message(){
                setTimeout(()=>{
                    this.message = '';
                },5000)
            }
        },
        created(){
            eventBus.$on('sendToMessage2',(message) => {
                this.inComingMessage = message;
            })
        },
         beforeDestroy() {},
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