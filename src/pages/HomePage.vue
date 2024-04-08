<script>

  export default{
    name: 'HomePage',
    components:{

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
    <div  class="d-flex align-items-center justify-content-center flex-column gap-5 pt-3">
        <h1 class="text-center">Home page</h1>
        <router-link :to="{name: 'lista'}" class="btn btn-warning">Vai ai Progetti</router-link>
    </div>




</template>

<style scoped>

</style>
