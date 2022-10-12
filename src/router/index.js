import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlansIndx from '../views/PlansIndx.vue'
import JobsIndx from '../views/JobsIndx.vue'
import AllJobs from '../views/AllJobs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/plans',
      name: 'plans',
      component: () => import('../views/PlansView.vue'),
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          name: 'plansindx',
          component: PlansIndx,
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'allplans',
          name: 'allplans',
          component: () => import('../views/AllPlans.vue') ,
        },
        {
          path: 'shopping-list',
          name: 'shoppling-list',
          component: () => import('../views/ShopList.vue'),
        }
      ],
    },
    {
      path: '/jobs',
      name: 'jobs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/JobsView.vue'),
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          name: 'JobsIndx',
          component: JobsIndx,
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'alljobs',
          name: 'alljobs',
          component: AllJobs,
        },
        {
          path: 'sinjobs',
          name: 'sinjobs',
          component: () => import('../views/SINJobs.vue'),
        },
        {
          path: 'cashjobs',
          name: 'cashjobs',
          component: () => import('../views/CashJobs.vue'),
        },
        {
          path: 'breakjobs',
          name: 'breakjobs',
          component: () => import('../views/BreakJobs.vue'),
        },
        {
          path: 'favjobs',
          name: 'favjobs',
          component: () => import('../views/FavJobs.vue'),
        },
        {
          path: 'availability',
          name: 'availability',
          component: () => import('../views/Availability.vue'),
        },
        {
          path: 'co-op',
          name: 'co-op',
          component: () => import('../views/Co-op.vue'),
        }
      ],
    },
    {
      path: '/worklog',
      name: 'worklog',
      component: () => import('../views/WorklogView.vue')
    },
    {
      path: '/assignments',
      name: 'assignments',
      component: () => import('../views/AssignmentsView.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/NotificationsView.vue')
    }
  ]
})

export default router
