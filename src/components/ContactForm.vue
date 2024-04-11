<script>
    import axios from 'axios';
    import {store} from '../store'
    export default {
        name: "ContactForm",
        data(){
            return{
                store,
                name: 'eros',
                email: 'eros.alpegiani@gmail.com',
                message: 'eros',
                errors: {},
                success: false
            }
        },
        methods:{
            sendForm(){
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }

                this.errors = {};

                console.log(data)
                axios.post(`${this.store.apiBaseUrl}/api/contacts`, data)
                .then(res => {
                    this.success = res.data.success;

                    if(!this.success){
                        this.errors = res.data.errors
                    } else {
                        this.name = ''
                        this.email = ''
                        this.message = ''
                    }
                })
                
            }
        },
        mounted(){

        }
    }
</script>






<template>
    <div>
        <h2>Contact Form</h2>
        <div class="alert alert-success" v-if="success" role="alert">
            Messaggio inviato correttamente
        </div>

        <div class="">
            <form @submit.prevent="sendForm()">
                <div>
                    <input type="text" class="form-control" :class="{'is-invalid' : errors.name}" name="name" placeholder="inserisci il tuo nome" v-model="name"></input>
                    <p 
                        v-for="(error, index) in errors?.name" :key='`message-errors-${index}`'
                        class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>

                <div>
                    <input type="email" class="form-control" :class="{'is-invalid' : errors.email}" name="email" placeholder="inserisci la tua email" v-model="email"></input>
                    <p 
                        v-for="(error, index) in errors?.email" :key='`message-errors-${index}`'
                        class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>

                <div>
                    <textarea class="form-control" name="message" id="message" cols="30" rows="10" :class="{'is-invalid' : errors.message}" v-model="message"></textarea>
                    <p 
                        v-for="(error, index) in errors?.message" :key='`message-errors-${index}`'
                        class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>

                <button class="btn btn-primary" type="submit">Invia</button>
            </form>
        </div>
    </div>


  


</template>








<style scoped>
    




</style>