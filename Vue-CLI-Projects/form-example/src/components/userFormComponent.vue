<template>
  <div>
    <form @submit.prevent = "saveUser">
    <label>Name</label>
    <br>
    <input type="text" v-model="formModel.name">
    <br><br>
    <label>Surname</label>
    <br>
    <input type="text" v-model="formModel.surname">
    <br><br>
    <label>City</label>
    <br>
    <select v-model="formModel.city">
      <option value="34">İstanbul</option>
      <option value="06">Ankara</option>
      <option value="35">İzmir</option>
    </select>
    <br><br>
    <label>is Active ? </label>
    <br>
    <input type="checkbox" v-model="formModel.isActive">
    <br><br>
    <label>Gender</label>
    <br>
    <input type="radio" id="M" name="gender" value="Man" v-model="formModel.gender"> Man
    <input type="radio" id="W" name="gender" value="Women" v-model="formModel.gender"> Women
    <br><br>
    <input type="submit" value="Submit">
    </form>

    <br><br>

  </div>
</template>

<script>

export default {
    name:'userFormComponent',
    data(){
        return {
            formModel:{
                name: '',
                surname: '',
                city: null,
                isActive: false,
                gender: null,
            },
        }
    },
    methods: {
        saveUser(){

            // console.log(this.name);
            // console.log(this.surname);
            // console.log(this.city);
            // console.log(this.isActive);
            // console.log(this.gender);

            //this.userList.push(this.formModel);

            this.$emit('userSubmit', {...this.formModel});
            this.clearForm();
        },
        
        clearForm(){
            this.formModel = {
                name: '',
                surname: '',
                city: null,
                isActive: false,
                gender: null,
            };
        }
    },
}
</script>

<style>

</style>