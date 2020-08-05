<template>
  <div>
    <input type="text" v-model="searchText" placeholder="Please enter search text" />
    <br />
    <ul>
      <li v-for="product in filtered" v-bind:key="product">{{ product }}</li>
    </ul>
  </div>
</template>

<script>
import  { productMixin } from '../productMixin';
export default {
  name: "filterList",
  mixins : [productMixin],
};
</script>

<style lang="scss" scoped>
</style>