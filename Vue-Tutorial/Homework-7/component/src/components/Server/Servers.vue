<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <Server
        @click.native="sendToDetail(server)"
        :serverData="server"
        v-for="server in servers"
        :key="server"
      ></Server>
    </ul>
  </div>
</template>

<script>

import Server from './Server';
import {eventBus} from '../../main';

  export default {
    components:{
      Server,
    },
    data() {
      return {
        servers:[
          {id:1, status:'Kritik'},
          {id:2, status:'Normal'},
          {id:3, status:'Ciddi'},
          {id:4, status:'Önemsiz'},
        ],
        selectedID:'',
      }
    },
    methods: {
      sendToDetail(server){
        eventBus.sendToData(server);
      }
    }
  }
</script>