import Vue from 'vue'

Vue.filter("lengthText" , (value) => {
    return value + " (" + value.length + ")";
})
