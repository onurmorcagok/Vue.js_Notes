<template>
  <div id="app">
    <p>
      -Card içerisindeki title ve detail yazıları için birer slot oluşturup
      slotlar ile card componenti içerisine aktarınız
    </p>

    <Card>
      <h2 slot="title">Title Episode</h2>
      <p slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam
        perspiciatis, tempore voluptates doloribus vel, dignissimos repudiandae
        porro qui totam voluptatibus, officia ab. Ea in eos doloribus quibusdam
        eligendi nulla.
      </p>
    </Card>

    <br />
    <hr />
    <br />

    <p>
      -Aşağıdaki div'i button ile gizle göster yapınız.<br />
      -Button text'i duruma göre show yada hide olacaktır. Hazırlanan
      'buttonText' isimli computed'i bu şekilde update ediniz.<br />
      - İlgili div'i gizlerken ve gösterirken transition ile fade animasyonu
      ekleyiniz. (Animate.css ve hazır css'ler kullanmayınız)
    </p>
    <button @click="isShow = !isShow">{{ isShow ? "Hide" : "Show" }}</button>
    <br /><br />

    <transition name="fade">
      <div class="box" v-if="isShow">
        Vue.js is awasome!!!
      </div>
    </transition>

    <br />
    <hr />
    <br />

    <p>
      - Aşağıdaki div'e sayfa loading <b><i>(appear)</i></b> olduktan sonra bir
      animate.css ile animasyon ekleyiniz. (Animete.css kullanmak zorunludur)
    </p>
    <br />
    <transition name="fade" appear>
      <div class="box">
        I have a animation!!!!
      </div>
    </transition>

    <br />
    <hr />
    <br />

    <p>
      - Aşağıdaki component içerisindeki input'a girilen price'i formatTL
      filter'i ile filtre uygulayınız.<br />
      Örnek olarak çıktı 15 için '15.00 TL' olacaktır.
    </p>
    <Price> </Price>

    <br />
    <hr />
    <br />
    <p>
      - Mixins & EventBus example başlığını props ile wrapper componentine
      yazınız.<br />
      - 2 child component'i eventbus ile haberleştiriniz. Gelen mesajları
      "incoming message" kısmına yazınız<br />
      - 2 child component aynı işi yaptıkları için ortak kodları mixin
      içerisinde tutunuz. Not: sadece ortak olan kodlar mixin içerisinde olacak
      bu ayrıntıya dikkat edelim.
    </p>

    <Wrapper :wrapperHeader="header"> </Wrapper>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Price from "./components/Price.vue";
import Wrapper from "./components/Wrapper.vue";

export default {
  name: "App",
  data() {
    return {
      isShow: true,
      header: "Mixins & EventBus example",
    };
  },
  components: {
    Card,
    Price,
    Wrapper,
  },
  computed: {
    buttonText() {
      return "Show / Hide";
    },
  },
};
</script>

<style>
#app {
  width: 800px;
  margin: auto;
}
.box {
  background-color: beige;
  border: solid 1px #ccc;
  padding: 10px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.5s;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 1.5s;
}
</style>
