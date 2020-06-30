new Vue({
    el: '#app',
    data: {
        firstNumber: '',
        secondNumber: '',
        result: '',
        collections: [
        
        ],

    },
    methods: {
        collection: function () {
            return this.result = this.firstNumber + this.secondNumber;
        },

        addResult: function () {
            this.collections.push(this.result);
        },
    },
    computed: {
        collectionResult() {
            return "Sonuç: ";
        },
    },
    watch: {

    }
})