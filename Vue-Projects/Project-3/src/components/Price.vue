<template>
    <div class="price">
        <div>
            <input v-model="price" type="text" placeholder="please enter price"/> <br><br>
            Price : {{ price | formatTL }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Price",
        filters: {
            formatTL(amount) {
                return `${amount}.00 TL`;
            }
        },
        data() {
            return {
                price: 0,
            }
        },
    }
</script>

<style scoped>
 .price {
     border: solid 1px #ccc;
     background-color: azure;
     padding: 10px;
 }
</style>
