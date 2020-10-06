import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Boletim from '../views/Boletim.vue'
import Farmacia from '../views/Farmacia.vue'
import Quiz from '../views/Quiz.vue'
import EntrevistasHome from '../components/EntrevistasHome.vue'
import RemediosHome from '../components/RemediosHome.vue'
import RemediosEntries from '../statics/data/remedios.json';
import EntrevistasEntries from '../statics/data/entrevistas.json';


Vue.use(VueRouter)

const remediosRoutes = Object.keys(RemediosEntries).map(section => {
  const children = RemediosEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    //name: section,
    component: () => import('../components/BlogRemedios.vue'),
    children,
  }
})

const entrevistasRoutes = Object.keys(EntrevistasEntries).map(section => {
  const children = EntrevistasEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    //name: section,
    component: () => import('../components/BlogEntrevistas.vue'),
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
    path: '/farmacias',
    component: Farmacia,
  },
  {
    path: '/remedios',
    component: RemediosHome,
    meta: { showNavigation: false },
    disable: true
  },
  {
    path: '/boletim',
    component: Boletim,
  },
  {
    path: '/entrevistas',
    component: EntrevistasHome,
    meta: { showNavigation: false },
    disable: true
  },
  ...remediosRoutes,
  ...entrevistasRoutes,
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})


export default router
