<template>
  <div id="container">
    <userFormComponent @userSubmit="userAdd"
                       ref="myUserForm"></userFormComponent>
    <br />
    <userList :userList="userList" 
              @onUpdate="setUpdateUserData"></userList>
  </div>
</template>

<script>

import userFormComponent from "./components/userFormComponent";
import userList from "./components/userList";

export default {
  name: "App",
  components: {
    userFormComponent,
    userList,
  },
  data() {
    return {
      userList: [],
    };
  },
  methods: {
    userAdd(data) {
      this.userList.push(data);
    },
    setUpdateUserData(data){
      this.$refs.myUserForm.formModel = {...data }
    }
  }
};
</script>

<style>
#container {
  margin: auto;
  width: 50%;
  border: 5px solid black;
  padding: 80px;
  text-align: center;
}
</style>