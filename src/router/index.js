import { createRouter, createWebHistory } from 'vue-router'
import {ArticleDetailView, HomeView, LoginView, RegisterView, CreateArticleView, EditArticleView} from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/article/:slug',
      name: 'article-details',
      component: ArticleDetailView
    },
    {
      path: '/create-article',
      name: 'create-article',
      component: CreateArticleView
    },
    {
      path: '/edit-article/:slug',
      name: 'edit-article',
      component: EditArticleView
    },
  ],
})

export default router
