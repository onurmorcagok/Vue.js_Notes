<template>
  <div>
      <table>
          <thead>
              <td>Name</td>
              <td>Surname</td>
              <td>City</td>
              <td>isActive</td>
              <td>Gender</td>
              <td>Action</td>
              <tr v-for="user in userList" v-bind:key="user.id">
                  <td>{{user.name}}</td>
                  <td>{{user.surname}}</td>
                  <td>{{user.city}}</td>
                  <td>{{user.isActive}}</td>
                  <td>{{user.gender}}</td>
                  <td>
                      <a @click="goToUpdate(user)">Update</a>
                  </td>
              </tr>
          </thead>
      </table>
  </div>
</template>

<script>
export default {
    name:'userList',
    props:{
        userList:{

            type: Array,
            required:true,

        }
    },
    methods:{
        goToUpdate(user){
            this.$emit('onUpdate',user);   
        }
    }
}
</script>

<style>

table{

    border:3px solid red;
    
}

</style>