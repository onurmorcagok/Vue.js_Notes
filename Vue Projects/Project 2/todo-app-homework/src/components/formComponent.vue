<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(submitForm)">
        <div class="row mt-3">
          <div class="col-12">
            <label>Title</label>
            <ValidationProvider
              mode="passive"
              rules="required"
              v-slot="{ errors }">
              <input type="text" name="title" class="w-100" v-model="title" placeholder="Please enter title" />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <label>Description</label>
            <ValidationProvider
              mode="passive"
              rules="required"
              v-slot="{ errors }">
              <textarea id="description" 
              name="description" 
              rows="3"
              class="w-100"
              v-model="description"
              placeholder="Please enter information"/>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <label>Status</label>
            <ValidationProvider
              mode="passive"
              rules="required"
              v-slot="{ errors }">
              <select class="w-100 px-1 py-1" name="status" v-model="status">
                <template v-for="status in Object.keys(statusses)">
                  <option v-bind:key="status" :value="statusses[status].value">
                    {{ statusses[status].text }}
                  </option>
                </template>
              </select>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <hr>
        <div class="row mt-4">
          <div class="col-12">
            <button type="submit" class="w-100 text-white"
            :class="isUpdate ? 'bg-info' : 'bg-success'">
            {{ isUpdate ? 'Update' : 'Add New Todo'}}
            </button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { statusses } from "../statuses";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: "formComponent",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      title: "",
      description: "",
      status: "",
      isUpdate: false,
      statusses
    }
  },
  methods: {
    submitForm() {
      const formData = {
        title: this.title,
        description: this.description,
        status: this.status,
      };

      this.$emit("onSubmit", formData);
      this.clearForm();
    },
    clearForm() {
      this.title = "";
      this.description = "";
      this.status = "";
      this.isUpdate = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
