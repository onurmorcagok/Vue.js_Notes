<template>
  <div>
    <h1>New Memory Component</h1>
    <button @click="counter++">Sayacı Arttır</button>
    <br><br>
    <p>Sayac Degeri: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: "NewMemory",
  data() {
      return {
         counter:0
      }
  },
  destroyed(){
      console.log("Destroy !");
  },
  activated(){ // Dinamik componentleri keep-alive ile canlı tutmak için kullandığımız lifeCycle Hook
      console.log("Activated !!");
  },
  deactivated(){ //Dinamik componentleri keep-alive ile canlı tutmak için kullandığımız lifeCycle Hook
      console.log("Deactivated !!");
  }
};
</script>

<style>
</style>