import Vue from 'vue'
import Router from 'vue-router'

import Design from '@/components/Design'
import Photography from '@/components/Photography'
import Contact from '@/components/Contact'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Design
    },
    {
      path: '/Design',
      name: 'Design',
      component: Design
    },
    {
      path: '/Photography',
      name: 'Photography',
      component: Photography
    },    
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})
