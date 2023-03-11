import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlansIndx from '../views/PlansIndx.vue'
import JobsIndx from '../views/jobs/JobsIndx.vue'
import AllJobs from '../views/jobs/AllJobs.vue'
import Tabular from '../views/jobs/worklog/TabularView.vue'
// import Graphical from '../views/jobs/worklog/GraphicalView.vue'

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
          // Userhelp will be rendered inside User's <router-view>
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
        },
        {
          path: 'taxfiling',
          name: 'taxfiling',
          component: () => import('../views/TaxFiling.vue'),
        },
        {
          path: 'wish-list',
          name: 'wish-list',
          component: () => import('../views/WishList.vue'),
        },
        {
          path: 'bought-items',
          name: 'bought-items',
          component: () => import('../views/BoughtItems.vue'),
        }
      ],
    },
    {
      path: '/jobs',
      name: 'jobs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/jobs/JobsView.vue'),
      meta: {title: 'Jobs Search Table'},
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          name: 'JobsIndx',
          component: JobsIndx
        },
        {
          path: 'worklog',
          name: 'worklog',
          component: () => import('../views/jobs/worklog/WorklogView.vue'),
          meta: {title: 'Work Log'},
          children: [
            {
              path: 'tabular',
              name: 'Tabular',
              component:  Tabular,
            },
            {
              path: 'graphical',
              name: 'Graphical',
              component: () => import('../views/jobs/worklog/GraphicalView.vue')
            }
          ]
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
          component: () => import('../views/jobs/SINJobs.vue'),
        },
        {
          path: 'cashjobs',
          name: 'cashjobs',
          component: () => import('../views/jobs/CashJobs.vue'),
        },
        {
          path: 'breakjobs',
          name: 'breakjobs',
          component: () => import('../views/jobs/BreakJobs.vue'),
        },
        {
          path: 'favjobs',
          name: 'favjobs',
          component: () => import('../views/jobs/FavJobs.vue'),
        },
        {
          path: 'availability',
          name: 'availability',
          component: () => import('../views/jobs/Availability.vue'),
        },
        {
          path: 'co-op',
          name: 'co-op',
          component: () => import('../views/jobs/Co-op.vue'),
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
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
      meta: {title: 'Settings'}
    },
    {
      path: '/user-profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: {title: 'Dashboard'}
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/helpView.vue'),
      meta: {title: 'Help'}
    },
    {
      path: '/signedout',
      name: 'signedout',
      component: () => import('../views/signedOutView.vue'),
      meta: {title: 'Signed-out'}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/logInView.vue'),
      meta: {title: 'Signed-out'}
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `WorkForce - ${to.meta.title}`;
  next();
});

export default router
