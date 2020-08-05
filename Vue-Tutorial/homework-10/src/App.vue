<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- Soru 1 -->
        <!-- Girmiş olduğunuz yazıyı tersten yazacak bir Filter tanımı yapınız ve bunu <p> içerisinde uygulayınız -->
        <p>Text: {{ text }}</p>
        <p>Switch Text: {{ text | switchText }}</p>

        <!-- Soru 2 -->
        <!-- Global bir Filter tanımlayarak size kelime sayısını ve kelimeyi veren bir Filter tanımı yapınız -->
        <!-- Örneğin : "videosinif.com" => videosinif.com (14) Şeklinde çıktı vermelidir -->
        <p>Text Length: {{ text | lengthText }}</p>

        <!-- Soru 3 -->
        <!-- Soru 1 ve 2 deki uygulamaların aynısını Computed Property kullanarak yapınız -->
        <p>{{ switchText }}</p>
        <p>{{ length }}</p>

        <!-- Soru 4 -->
        <!-- 3.Uygulamadaki Computed Property'leri bir Mixin aracılığı ile tanımlayarak tekrardan kodlarınızı düzenleyiniz-->
      </div>
    </div>
  </div>
</template>
<script>
import filters from "./filters";
import { myMixins } from "./myMixins";
export default {
  name: "App",
  mixins: [myMixins],
  data() {
    return {
      text: "ONUR",
    };
  },
  filters: {
    switchText(value) {
      return value.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>
