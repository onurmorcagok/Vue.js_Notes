export const myMixins = {
    computed:{
        switchText(){
          return this.text.split("").reverse().join("");
        },
        length(){
          return this.text + " (" + this.text.length + ")";
        }
      }
}