<template>
    <div>
        <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <li
            :key="index"
            class="list-group-item"
            v-for="index in 5">
            Sunucu #{{ index }}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'listComponent',
    }
</script>

<style lang="scss" scoped>

</style>