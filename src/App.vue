<script>
  //import MainApp from './components/MainApp.vue';
  import AppHeader from './components/AppHeader.vue';
  export default{
    components:{
      //MainApp,
      AppHeader,
    },
    data(){
      return{

      }
    },
    methods:{
      
    },
    mounted(){
  
    },
  }
</script>

<template>
  <!-- <MainApp/> -->
  <AppHeader/>
  <router-view></router-view>




</template>

<style scoped>

</style>
