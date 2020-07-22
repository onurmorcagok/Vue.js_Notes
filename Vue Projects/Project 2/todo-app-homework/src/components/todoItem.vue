<template>
    <div :class="colorArray[status]" class="col-md-12 px-3 py-3 mb-3">
      <div class="d-flex justify-content-between">
        <div>
          <h4>{{ title }}</h4>
        </div>
        <div>
          <button @click="modeUpdate">Edit</button>
        </div>
      </div>
      <div>{{ description }}</div>
    </div>
</template>

<script>
export default {
  name: "todoItem",
  props: ["index", "title", "description", "status"],
  data() {
    return {
      colorArray: ["bg-info", "bg-warning", "bg-primary", "bg-success"],
    };
  },
  methods: {
    modeUpdate() {
      this.$emit("onUpdate", this.index);
    },
  },
};
</script>

<style lang="scss" scoped></style>
