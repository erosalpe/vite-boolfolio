import {createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/HomePage.vue'
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'Lista Progetti',
            component: ProjectList,
        },
        {
            path: '/projects/:slug',
            name: 'Progetto visualizzato',
            component: SingleProject,
        },
    ]
});

export {router};