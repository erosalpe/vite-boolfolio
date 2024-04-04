<script>
    export default{
    name: 'ProjectCard',
    props: ['element', 'key'],
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
  <div class="card dimensioniCard">
      <img :src="this.element[preview]" class="card-img-top" :alt="this.element['title']">
      <div class="card-body">
          <h6 class="card-title">{{this.element['title']}}</h6>
          <p class="card-text">
              <strong>
                  {{this.element['type_id'] ? this.element['type_id'] : 'Nessun Tipo di progetto selezionato'}}
              </strong>
          </p>
          <p class="card-text">{{this.element['description']}}</p>
          <p>{{this.element['language']}}</p>
          <ul class="d-flex gap-2 unstyled flex-wrap p-0 m-0 pb-3">
              placeholder
          </ul>
      </div>
  </div>
</template>








<style scoped>
  .dimensioniCard{
      --gap: 1.5rem;
      --columns: 3;
      flex-basis: calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)));
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