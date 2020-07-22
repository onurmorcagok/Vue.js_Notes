<template>
  <div id="app">
    <div class="container" ref="myContainer">
      <formComponent @onSubmit="saveForm" ref="todoForm">
      </formComponent>
       <div class="mt-3 mb-3">
          Show <select v-model="selectedFilterValue">
            <template v-for="status in Object.keys(statusses)">
              <option v-bind:key="status" :value="statusses[status].value">
                {{ statusses[status].text }}
              </option>
            </template>
          </select>
        </div>
      <todoItem :key="index"
            v-for="(item,index) in filterItems" 
            :index="index"
            :title="item.title" 
            :description="item.description"
            :status="item.status" 
            @onUpdate="updateForm"/>
    </div>
  </div>
</template>

<script>
import { statusses } from "./statuses";
import formComponent from "./components/formComponent";
import todoItem from "./components/todoItem";

export default {
  name: "App",
  components: {
    formComponent,
    todoItem,
  },
  data() {
    return {
      statusses,
      todoList: [],
      updatedIndex: null,
      selectedFilterValue: statusses.all.value,
    };
  },
  methods: {
    saveForm(data) {
      if (this.updatedIndex !== null) {
        this.todoList.splice(this.updatedIndex, 1, data);
        this.updatedIndex = null;
      } else {
        this.todoList.push(data);
      }
    },
    updateForm(index) {
      this.updatedIndex = index;
      this.$refs.todoForm.isUpdate = true;
      this.$refs.todoForm.title = this.todoList[index].title;
      this.$refs.todoForm.description = this.todoList[index].description;
      this.$refs.todoForm.status = this.todoList[index].status;
    },
  },
  computed: {
    filterItems() {
      if (this.selectedFilterValue === statusses.all.value) {
        return this.todoList;
      } else {
        return this.todoList.filter((item) => item.status === this.selectedFilterValue);
      }
    }
  },
};
</script>

<style></style>
