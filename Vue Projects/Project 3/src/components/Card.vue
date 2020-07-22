<template>
    <div class="box">
        <slot name="title"></slot>
        <slot name="description"></slot>
    </div>
</template>

<script>
    export default {
        name: "Card"
    }
</script>

<style scoped>
    .box {
        margin: auto;
        background-color: azure;
        border: solid 1px #ccc;
        padding: 10px;
    }
</style>
