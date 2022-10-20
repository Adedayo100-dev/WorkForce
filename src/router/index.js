import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlansIndx from '../views/PlansIndx.vue'
import JobsIndx from '../views/JobsIndx.vue'
import AllJobs from '../views/AllJobs.vue'
// import WorkLog from '../views/WorklogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {title: 'Home'}
    },
    {
      path: '/plans',
      name: 'plans',
      component: () => import('../views/PlansView.vue'),
      meta: {title: 'Plans'},
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
      meta: {title: 'Jobs Search Table'},
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          name: 'JobsIndx',
          component: JobsIndx,
        },
        {
          path: 'worklog',
          name: 'worklog',
          component: () => import('../views/WorklogView.vue'),
          meta: {title: 'Worklog'}
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
      path: '/assignments',
      name: 'assignments',
      component: () => import('../views/AssignmentsView.vue'),
      meta: {title: 'Assignments'}
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/NotificationsView.vue'),
      meta: {title: 'Notifications'}
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `WorkForce - ${to.meta.title}`;
  next();
});

export default router
