new Vue({
    el: '#exercise',
    data: {
        value: '',
        value2: '',
    },
    methods: {
        message() {
            alert("Butona tıklandı. Alert mesaj açıldı...");
        },
        showMessage() {
            this.value2 = event.target.value;
        },
    },
});