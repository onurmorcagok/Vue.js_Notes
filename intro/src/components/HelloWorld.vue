<template>
  <div>
    Hello {{ fullName }}
    <br />
    <br />

    Hi {{ user.name }} {{ user.surname }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    name: {

      type: String,
      default: "",
      required: true

    },
    surname: {

      type: String,
      default: "",
      required: true

    },
    user: {

      type: Object,
      required: true

    }
  },
  computed: {

    fullName() {
      return `${this.name}  ${this.surname}`;
      
    }
  }
};
</script>

