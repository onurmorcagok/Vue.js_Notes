new Vue({
    el: '#app',
    data: {
      firstNumber: '',
      secondNumber: '',
      result: '',
      collections: [],
    },
    methods: {

      signalChange: function (evt) {
        this.$emit((evt.srcElement.innerText = ''));
      },

      collection: function (event) {
        const element = event.target;
        element.disabled = true;
        setTimeout(() => {
          this.result = 0;
          this.firstNumber = 0;
          this.secondNumber = 0;
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

    watch: {
      value(value) {
        this.$emit('onchange', value);
        // or generate/simulate a native events (not sure how, but its outside Vue's realm I think
      },

    }
    
  });