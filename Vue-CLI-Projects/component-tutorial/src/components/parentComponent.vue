<template>
  <div class="container">
    <h1>Parent Component</h1>
    <button @click="sendToMessage">ChangeToName</button>
    <p>Change Name: {{title}}</p>
    <p>Child Component1 üzerinden gelen veri: {{ childData }}</p>
    <p>User Age: {{ age }}</p>
    <hr>
    <div class="row">
      <child1Component :age="age" @sendToParent="childData = $event " :message="title"></child1Component>
      <child2Component @ageChanged = "age = $event" :age="age"></child2Component>
    </div>
  </div>
</template>

<script>
    import child1Component from './child1Component'
    import child2Component from './child2Component'
    export default {
        name:'parentComponent',
        components:{
            child1Component,
            child2Component,
        },
        data() {
            return {
                title: 'ONUR',
                childData: '',
                age: 33,
            }
        },
        methods: {
            sendToMessage(){
                this.title = 'UMUT'
            }
        }
    }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>