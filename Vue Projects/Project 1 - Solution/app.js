new Vue({

    el: '#app',
    data: {
        number1: '',
        number2: '',
        total: null,
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
    watch: { // Watch bir seyleri izlemesi icin o seyin var olması gerekir.
        total(value) {
            if (value !== null) {
                setTimeout(() => {
                    this.clearInputs();
                }, 1000)
            }

        }
    },
    computed:{ // Computed method gibi yazılır, degisken gibi kullanilir.
        isTotalShowed() {
            return this.total !== null ? true : false
        }
    },
});