new Vue({

    el: '#app',
    data: {

        firstNumber: '',
        secondNumber: '',
        result: '',
        isActive: true,
        isShow:false,
        collections: [

        ],
    },

    methods: {

        collection: function (event) {
            const element = event.target;
            element.disabled = true;
            setTimeout(() => {
                this.result = '';
                this.firstNumber = '';
                this.secondNumber = '';
            }, 500);
            element.disabled = false;
            this.result = this.firstNumber + this.secondNumber;
        },

        addResult: function () {
            this.collections.push(`${this.firstNumber} + ${this.secondNumber} = ${this.result}`);
        },
    },

    computed: {

        collectionResult() {
            return 'Sonuç: ';
        },
    },

});