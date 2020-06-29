new Vue({
    el: "#app",
    data: {
        inComingData: "Hello Vue!",
        dataBinding: '',
        number: 0,
        number1: 5,
        number2: 4,
        result: '',
    },
    methods: {

        sayiArttir() {
            this.number += 1;
        },

        sayilarToplami(){
           this.result = this.number1 + this.number2;
        }
    }

})