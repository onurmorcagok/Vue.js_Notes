<template>
  <div class="col-xs-12 col-sm-6" v-if="Object.keys(server).length === 0">
    <p>Henüz bir sunucu seçilmedi.</p>
  </div>

  <div class="col-xs-12 col-sm-6" v-else>
    <p>Seçilen sunucuyu görüntülüyorsunuz.</p>
    <h3>Sunucu ID:{{ server.id }}</h3>
    <p>Sunucu Status:{{ server.status }}</p>
    <button class="btn btn-info btn-xs" @click="changeServerToStatus">Durumu Düzelt</button>
  </div>
</template>
<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      server: {},
    };
  },
  created() {
    eventBus.$on("serverDataSend", (data) => {
      this.server = data;
    });
  },
  methods: {
    changeServerToStatus() {
      this.server.status = "Normal";
    },
  },
};
</script>