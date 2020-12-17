import vueRouter from 'vue-router'
import Home from './components/Home'
import Registro from './components/Registro'
import App from './App'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "login",
                component: Home
            },
            
            {
                path: '/registro',
                name: "Registro",
                component: Registro
        },
    ]
})

export default router