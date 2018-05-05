import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/components/MainPage'




Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'MainPage', component: MainPage },
        // { path: '/movies', name: 'movies', component: Search },
        // { path: '/series', name: 'series', component: Search },
        // { path: '/actors', name: 'actors', component: Search },
    ]
})