<script>
    export default{
    name: 'ProjectCard',
    props: ['element'],
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
  <div class="card dimensioniCard d-flex align-items-center text-center">
      <img :src="'http://127.0.0.1:8000/storage/'+ this.element['preview']" class="card-img-top" :alt="this.element['title']">
      <div class="card-body">
          <router-link :to="{name: 'ProgettoVisualizzato', params:{slug: this.element['slug']}}">
            <h6 class="card-title">{{this.element['title']}}</h6>
          </router-link>
          <p class="card-text">
              <strong>
                  {{this.element['type_id'] ? this.element['type_id'] : 'Nessun Tipo di progetto selezionato'}}
              </strong>
          </p>
          <p class="card-text">{{this.element['description']}}</p>
          <p>{{this.element['language']}}</p>
          <ul class="d-flex gap-2 unstyled flex-wrap p-0 m-0 pb-3 justify-content-center">
            <li class="badge text-bg-primary dimensioniPill" v-if="this.element.technologies" v-for="($tech,index) in this.element.technologies">{{$tech.name}}</li>
            <li class="badge text-bg-danger dimensioniPill" v-else>Non ci sono Tecnologie selezionate</li>
          </ul>
      </div>
  </div>
</template>








<style scoped>
  img{
    width: 200px;
    height: 200px;
  }
  .dimensioniCard{
      --gap: 1.5rem;
      --columns: 3;
      flex-basis: calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)));
      height: 500px;
      overflow: auto;
  }
  .dimensioniPill{
      --gap: 0.5rem;
      --columns: 5;
      flex-basis: calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)));
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
</style>