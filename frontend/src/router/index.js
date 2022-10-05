import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "@/views/IndexView";
import CreateView from "@/views/CreateView";
import EditView from "@/views/EditView";

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
