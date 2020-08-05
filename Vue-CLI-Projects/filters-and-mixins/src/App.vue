<template>
  <div>
    <h3>Filters and Mixins</h3>
    <hr>
    <p>{{ message | lowerCase | upperCase }}</p>
    <br>
    <span>Currency(TL): </span>
    <input type="text" v-model="amountTL">
    <span> {{ amountTL | currencyTL }}</span>
    <br><br>
    <span>Currency(USD): </span>
    <input type="text" v-model="amountDollar">
    <span> {{ amountDollar | currency }}</span>
    <br><br>
    <hr>
    <br>
    <input type="text" v-model="searchText" placeholder="Please enter search text" />
    <br />
    <ul>
      <li v-for="product in filtered" v-bind:key="product">{{ product }}</li>
    </ul>
    <hr />
    <filterList></filterList>
  </div>
</template>

<script>
import myFilters from './myFilters';
import filterList from '../src/components/filterList';
import  { productMixin } from './productMixin';
  export default {
    name: 'App',
    mixins: [productMixin],
    components:{
      filterList,
    },
    data() {
      return {
        message: "Uyuyan milletler ya ölür ya da köle olarak uyanır.",
        amountTL: '',
        amountDollar: '',
      }
    },
    filters:{ // Local Filter
      upperCase(value){
        return value.toUpperCase();
      },
      currency(value){
        return `${value}.00 $`;
      }
    },
  }
</script>

<style>

</style>