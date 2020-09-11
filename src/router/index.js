import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BoletimHome from '../components/BoletimHome.vue'
import EntrevistasHome from '../components/EntrevistasHome.vue'
import RemediosHome from '../components/RemediosHome.vue'
import FarmaciasHome from '../components/FarmaciasHome.vue'
import FarmaciaEntries from '../statics/data/farmacias.json';
import BoletimEntries from '../statics/data/boletim.json';
import RemediosEntries from '../statics/data/remedios.json';
import EntrevistasEntries from '../statics/data/entrevistas.json';


Vue.use(VueRouter)

const farmaciaRoutes = Object.keys(FarmaciaEntries).map(section => {
  const children = FarmaciaEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    //name: section,
    component: () => import('../components/BlogFarmacias.vue'),
    children,
  }
})

const boletimRoutes = Object.keys(BoletimEntries).map(section => {
  const children = BoletimEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    //name: section,
    component: () => import('../components/BlogBoletim.vue'),
    children,
  }
})

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
    component: FarmaciasHome,
    meta: { showNavigation: false },
    disable: true
  },
  {
    path: '/remedios',
    component: RemediosHome,
    meta: { showNavigation: false },
    disable: true
  },
  {
    path: '/boletim',
    component: BoletimHome,
    meta: { showNavigation: false },
    disable: true
  },
  {
    path: '/entrevistas',
    component: EntrevistasHome,
    meta: { showNavigation: false },
    disable: true
  },
  ...farmaciaRoutes,
  ...remediosRoutes,
  ...boletimRoutes,
  ...entrevistasRoutes,
  {
    path: '/quiz',
    name: 'Quiz',
  }
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})


export default router
