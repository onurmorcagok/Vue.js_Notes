new Vue({

    el: '#app',
    data: {
        number1: '',
        number2: '',
        total: null,
        isShow: true,
        clicked: true,
        totalsArray: [

        ],
    },
    methods: {
        sum() {
            this.total = this.number1 + this.number2;
        },
        clearInputs() {
            this.total = null
            this.number1 = ''
            this.number2 = ''
        },

    },
    watch: { // Watch bir seyleri izlemesi icin o seyin var olması gerekir. Method her seferinde render edilir.
        total(value) {
            if (value !== null) {
                this.totalsArray.push(`${this.number1} + ${this.number2} toplandı. Sonuç: ${this.total}`);
                setTimeout(() => {
                    this.clearInputs();
                }, 1000)
            }
        }
    },
    computed: { // Computed method gibi yazılır, degisken gibi kullanilir. Computed degisene kadar 1 defa cagirilir.
        isTotalShowing() {
            return this.total !== null ? true : false
        }
    },
});