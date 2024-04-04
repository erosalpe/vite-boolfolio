<script>
  import ProjectCard from './ProjectCard.vue';
  import axios from 'axios';
    export default{
    name: 'MainApp',
    components:{
      ProjectCard,
    },
    data(){
      return{
        arrayProgetti: [],
      }
    },
    methods:{
      getProjects(){
        axios.get('http://127.0.0.1:8000/api/test')
        .then(res => {
          console.log(res.data.project)
          this.arrayProgetti = res.data.project
        })
      }
    },
    mounted(){
      this.getProjects();
    },
  }
</script>

<template>
  <main>
    <h1>Progetti disponibili</h1>

    <div class="container d-flex flex-wrap justify-content-center align-items-center gap-4">
      <ProjectCard v-for="(element) in arrayProgetti" 
      :key="element.id"
      :element="element"/>
    </div>
  </main>
</template>

<style>

</style>
