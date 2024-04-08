<script>
import axios from 'axios';
    export default {
        name: "SingleProject",
        data(){
            return{
                project: null,
            }
        },
        methods: {
            getSingleProject(){
                axios.get(`http://127.0.0.1:8000/api/test/${this.$route.params.slug}`)
                .then(res=>{
                    if(res.data.success){
                        this.project = res.data.project;
                    } else {
                        //redirect 404
                    }
                })
            }
        },
        mounted(){
            this.getSingleProject()
        }
    }
</script>






<template>
    <div class="card dimensioniCard d-flex align-items-center text-center w-25 m-auto" v-if="project">
        <img :src="'http://127.0.0.1:8000/storage/'+ project.preview" class="card-img-top" :alt="project.title">
        <div class="card-body">
            <h6 class="card-title">{{this.project.title}}</h6>
            <p class="card-text">
                <strong>
                    {{this.project.type_id ? this.project.type_id : 'Nessun Tipo di progetto selezionato'}}
                </strong>
            </p>
            <p class="card-text">{{this.project.description}}</p>
            <p>{{this.project.language}}</p>
            <ul class="d-flex gap-2 unstyled flex-wrap p-0 m-0 pb-3 justify-content-center">
            <li class="badge text-bg-primary dimensioniPill" v-if="this.project.technologies" v-for="($tech,index) in this.project.technologies">{{$tech.name}}</li>
            <li class="badge text-bg-danger dimensioniPill" v-else>Non ci sono Tecnologie selezionate</li>
            </ul>
        </div>
    </div>
    <div v-else class="d-flex justify-content-center pt-5">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>


  


</template>








<style scoped>
    img{
        width: 200px;
    }
</style>