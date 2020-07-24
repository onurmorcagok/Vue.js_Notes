new Vue({
    el: '#exercise',
    data: {
        value: 0,
        time: 0,
    },
    computed: {
        computedResult() {
            return this.value >= 33 ? 'Tamamlandı' : 'Henüz Bitmedi';
        }
    },
    watch: {
        value() {
            vue = this;
            setTimeout(function () {
                vue.value = 0;
            }, vue.time)
        }
    },
});