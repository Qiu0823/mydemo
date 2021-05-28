import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Datail from '@/pages/detail'
import Index from '@/pages/index'
import RollCar from '@/components/rollCar'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:'/',
        component:HelloWorld,
        meta:{
            title:'七号线'
        }
    },{
        path:'/detail',
        component:Datail
    },
    {
        path:'/index',
        component:Index
    },
    {
        path:'/rollCar',
        component:RollCar
    },
]
})