import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes:[
      {
          //  path : url 주소
          path: '/home',
          // component: url 주소로 갔을 때 표시될 컴포넌트
          component: Home,
      },
      {
        path: '/about',
        component: About,
      }
    ]
  });
