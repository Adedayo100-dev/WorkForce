import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import('../views/HomeView.vue'),
      meta: {title: 'Home'}
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/tasks/TasksView.vue'),
      meta: {title: 'Tasks'},
      children: [
        {
          // Userhelp will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          name: 'tasksindx',
          component:  () => import('../views/tasks/TasksIndx.vue'),
          //
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'alltasks',
          name: 'alltasks',
          component: () => import('../views/tasks/AllTasks.vue') ,
        },
        {
          path: 'shopping-list',
          name: 'shoppling-list',
          component: () => import('../views/tasks/ShopList.vue'),
        },
        {
          path: 'taxfiling',
          name: 'taxfiling',
          component: () => import('../views/tasks/TaxFiling.vue'),
        },
        {
          path: 'wish-list',
          name: 'wish-list',
          component: () => import('../views/tasks/WishList.vue'),
        },
        {
          path: 'bought-items',
          name: 'bought-items',
          component: () => import('../views/tasks/BoughtItems.vue'),
        },
        {
          path: 'vault',
          name: 'vault',
          component: () => import('../views/tasks/Vault.vue'),
        }
      ],
    },
    {
      path: '/finance',
      name: 'finance',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/finance/JobsView.vue'),
      meta: {title: 'Jobs Search Table'},
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          name: 'JobsIndx',
          component:  () => import('../views/finance/JobsIndx.vue')
        },
        {
          path: 'worklog',
          name: 'worklog',
          component: () => import('../views/finance/worklog/WorklogView.vue'),
          meta: {title: 'Work Log'},
          children: [
            {
              path: 'tabular',
              name: 'Tabular',
              component: () => import('../views/finance/worklog/TabularView.vue'),
            },
            {
              path: 'graphical',
              name: 'Graphical',
              component: () => import('../views/finance/worklog/GraphicalView.vue')
            }
          ]
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'employers',
          name: 'employers',
          component: () => import('../views/finance/Employers.vue'),
        },
        {
          path: 'sinjobs',
          name: 'sinjobs',
          component: () => import('../views/finance/SINJobs.vue'),
        },
        {
          path: 'cashjobs',
          name: 'cashjobs',
          component: () => import('../views/finance/CashJobs.vue'),
        },
        {
          path: 'breakjobs',
          name: 'breakjobs',
          component: () => import('../views/finance/BreakJobs.vue'),
        },
        {
          path: 'favjobs',
          name: 'favjobs',
          component: () => import('../views/finance/FavJobs.vue'),
        },
        {
          path: 'availability',
          name: 'availability',
          component: () => import('../views/finance/Availability.vue'),
        },
        {
          path: 'co-op',
          name: 'co-op',
          component: () => import('../views/finance/Co-op.vue'),
        },
        {
          path: 'transactions',
          name: 'transactions',
          component: () => import('../views/finance/TransactionsView.vue'),
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
