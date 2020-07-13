<template>
  <div>
    <form @submit.prevent = "saveUser">
    <label>Name</label>
    <br>
    <input type="text" v-model="name">
    <br><br>
    <label>Surname</label>
    <br>
    <input type="text" v-model="surname">
    <br><br>
    <label>City</label>
    <br>
    <select v-model="city">
      <option value="34">İstanbul</option>
      <option value="06">Ankara</option>
      <option value="35">İzmir</option>
    </select>
    <br><br>
    <label>is Active ? </label>
    <br>
    <input type="checkbox" v-model="isActive">
    <br><br>
    <label>Gender</label>
    <br>
    <input type="radio" id="M" name="gender" value="Man" v-model="gender"> Man
    <input type="radio" id="W" name="gender" value="Women" v-model="gender"> Women
    <br><br>
    <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
    name:'userFormComponent',
    data(){
        return {
            name: '',
            surname: '',
            city: null,
            isActive: false,
            gender: null,
            userList:[

            ],
        }
    },
    methods: {
        saveUser(){
            
            // console.log(this.name);
            // console.log(this.surname);
            // console.log(this.city);
            // console.log(this.isActive);
            // console.log(this.gender);

            this.userList.push({
                name: this.name,
                surname: this.surname,
                city: this.city,
                isActive: this.isActive,
                gender: this.gender,
            })

            console.log(this.userList);
        }
    }
}
</script>

<style>

</style>