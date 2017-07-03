import Vue from 'vue'
import Router from 'vue-router'

import Design from '@/components/Design'
import Photography from '@/components/Photography'
import Contact from '@/components/Contact'
import About from '@/components/About'
 
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Design
    },
    {
      path: '/Design',
      component: Design
    },
    {
      path: '/Photography',
      component: Photography
    },    
    {
      path: '/Contact',
      component: Contact
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Detail/:type/:id',
      component: Detail
    }
  ]
})
