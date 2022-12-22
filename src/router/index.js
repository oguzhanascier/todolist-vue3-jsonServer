import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Form from '../views/todoAdd.vue'
import Edit from '../views/todoEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo-form',
    name: 'form',
    component: Form
  },
  {
    path: '/todo-edit/:id',
    name: 'edit',
    component: Edit,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
