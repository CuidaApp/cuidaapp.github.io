import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogEntries from '../statics/data/blogs.json';


Vue.use(VueRouter)

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    //name: section,
    component: () => import('../components/Blog.vue'),
    children,
  }
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stories',
    component: Home,
    meta: { showNavigation: false },
    disable:true
  },
  ...blogRoutes,

  {
    path: '/farmacias',
    name: 'Farmácias',
  },
  {
    path: '/boletim',
    name: 'Boletim de Monitoramento',
  },
  {
    path: '/entrevistas',
    name: 'Entrevistas',
  },
  {
    path: '/quiz',
    name: 'Quiz',
  }
]

const router = new VueRouter({
  routes
})

export default router
