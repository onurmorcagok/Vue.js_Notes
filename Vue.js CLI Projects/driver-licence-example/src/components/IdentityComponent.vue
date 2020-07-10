<template>
  <div class="card bg-danger">
    <div class="row">
      <div class="col-6">
        <img class="w-50" :src="driverLicenceObject.photo" />
      </div>

      <div class="col-6 text-left text-white">
        <div>Name Surname: {{name}} {{surname}}</div>
        <div>Licence ID: {{driverLicenceObject.licenceID}}</div>
        <div>Licence Type: {{driverLicenceObject.licenceType}}</div>
        <div>Publish Date: {{driverLicenceObject.publishDate}}</div>
        <div>Expire Date: {{driverLicenceObject.expireDate}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IdentityComponent",
  props: {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    driverLicenceObject: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>