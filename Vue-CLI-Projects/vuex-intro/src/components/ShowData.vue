<template>
  <div class="showData">
   Store direkt erişim: {{ $store.state.counter }}
   <hr>
   Getters ile erişim: {{ $store.getters.getterCounter }}
   <hr>
   mapState ile erişim: {{ counter }}
   <hr>
   mapGetters ile erişim: {{ getterCounter }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState([
            'counter'
        ]),
        ...mapGetters([
            'getterCounter'
        ]),
        // ...mapActions([
        //     'setCount',
        // ])
    }
};
</script>

<style>
.showData {
  border: 1px solid black;
  width: 500px;
  margin: auto;
  background-color: lavender;
  padding:12px;
}
</style>