import { createRouter, createWebHistory } from 'vue-router'

const userName = 'adedayo';
const isUserLoggedIn = true;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import('../views/HomeView.vue'),
      meta: {title: 'Home', requiresAuth: false}
    },
    {
      path: `/${userName}`, //This goes to /userName
      name: `${userName}`,
      component:  () => import('../views/userportal/userPortalView.vue'),
      meta: {title: 'Adedayo', requiresAuth: true},
      children:[
        //Tasks
        {
          path: 'tasks',
          name: 'tasks',
          component: () => import('../views/userportal/tasks/TasksView.vue'),
          meta: {title: 'Tasks', requiresAuth: true},
          children: [
            {
              // Userhelp will be rendered inside User's <router-view>
              // when /user/:id/profile is matched
              path: '',
              name: 'tasksindx',
              component:  () => import('../views/userportal/tasks/TasksIndx.vue'),
              //
            },
            {
              // UserProfile will be rendered inside User's <router-view>
              // when /user/:id/profile is matched
              path: 'alltasks',
              name: 'alltasks',
              component: () => import('../views/userportal/tasks/AllTasks.vue') ,
            },
            {
              path: 'shopping-list',
              name: 'shoppling-list',
              component: () => import('../views/userportal/tasks/ShopList.vue'),
            },
            {
              path: 'wish-list',
              name: 'wish-list',
              component: () => import('../views/userportal/tasks/WishList.vue'),
            },
            {
              path: 'bought-items',
              name: 'bought-items',
              component: () => import('../views/userportal/tasks/BoughtItems.vue'),
            },
            {
              path: 'vault',
              name: 'vault',
              component: () => import('../views/userportal/tasks/Vault.vue'),
            },
            {
              path: 'my-schedule',
              name: 'my-schedule',
              component: () => import('../views/userportal/tasks/mySchedule.vue'),
            }
          ],
        },
        //Finances
        {
          path: 'finances',
          name: 'finances',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/userportal/finances/JobsView.vue'),
          meta: {title: 'Finances', requiresAuth: true},
          children: [
            {
              // UserProfile will be rendered inside User's <router-view>
              // when /user/:id/profile is matched
              path: '',
              name: 'JobsIndx',
              component:  () => import('../views/userportal/finances/JobsIndx.vue')
            },
            {
              path: 'worklog',
              name: 'worklog',
              component: () => import('../views/userportal/finances/worklog/WorklogView.vue'),
              meta: {
                title: 'Jobs Log',
              },
              children: [
                {
                  path: 'tabular',
                  name: 'Tabular',
                  component: () => import('../views/userportal/finances/worklog/TabularView.vue'),
                },
                {
                  path: 'graphical',
                  name: 'Graphical',
                  component: () => import('../views/userportal/finances/worklog/GraphicalView.vue')
                }
              ]
            },
            {
              // UserProfile will be rendered inside User's <router-view>
              // when /user/:id/profile is matched
              path: 'employers',
              name: 'employers',
              component: () => import('../views/userportal/finances/Employers.vue'),
            },
            // breakjobs,favjobs, availability
            {
              path: 'breakjobs',
              name: 'breakjobs',
              component: () => import('../views/userportal/finances/BreakJobs.vue'),
            },
            {
              path: 'favjobs',
              name: 'favjobs',
              component: () => import('../views/userportal/finances/FavJobs.vue'),
            },
            {
              path: 'my-schedule',
              name: 'my-schedule',
              component: () => import('../views/userportal/finances/MySchedule.vue'),
            },
            {
              path: 'transactions',
              name: 'transactions',
              component: () => import('../views/userportal/finances/transactions/TransactionsView.vue'),
              children: [
                {
                  // Userhelp will be rendered inside User's <router-view>
                  // when /user/:id/profile is matched
                  path: '',
                  name: 'transactionsindx',
                  component:  () => import('../views/userportal/finances/transactions/TransactionsIndx.vue'),
                  //
                },
                {
                  path: 'datasets',
                  name: 'datasets',
                  component: () => import('../views/userportal/finances/transactions/SetsView.vue')
                },
                {
                  path: 'currency-exchange',
                  name: 'currency-exchange',
                  component: () => import('../views/userportal/finances/transactions/CurrencyExchangeView.vue')
                },
              ]
            },
            {
              path: 'taxes',
              name: 'taxes',
              component: () => import('../views/userportal/finances/TaxFiling.vue'),
            }
          ],
        },
        //Assignments
        {
          path: 'assignments',
          name: 'assignments',
          component: () => import('../views/userportal/AssignmentsView.vue'),
          meta: {title: 'Assignments', requiresAuth: true}
        },
        //Schedule
        {
          path: 'schedule',
          name: 'schedule',
          component: () => import('../views/userportal/ScheduleView.vue'),
          meta: {title: 'Schedule', requiresAuth: true}
        },
        //Settings
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/userportal/SettingsView.vue'),
          meta: {title: 'Settings', requiresAuth: true}
        },
        //User Profile
        {
          path: 'user-profile',
          name: 'profile',
          component: () => import('../views/userportal/ProfileView.vue'),
          meta: {title: 'Hi Taiwo!', requiresAuth: true}
        },
      ]
    },
    //Help
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/helpView.vue'),
      meta: {title: 'Help', requiresAuth: true}
    },
    //Auth
    {
      path: '/auth', 
      name: 'auth',
      component:  () => import('../views/auth/AuthView.vue'),
      meta: {title: 'Auth', requiresAuth: false},
      children:[
        {
          path: '',
          name: 'authIndx',
          component: () => import('../views/auth/authIndx.vue'),
          meta: {title: 'Signed-out', requiresAuth: false}
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/logInView.vue'),
          meta: {title: 'Signed-out', requiresAuth: false}
        },
        {
          path: 'sign-up',
          name: 'sign-up',
          component: () => import('../views/auth/signUpView.vue'),
          meta: {title: 'Signed-up', requiresAuth: false}
        },
        {
          path: 'signedout',
          name: 'signedout',
          component: () => import('../views/auth/signedOutView.vue'),
          meta: {title: 'Signed-out', requiresAuth: false}
        }
      ]
    },
    //404 error
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/PageNotFound.vue'),
      meta: {title: 'Signed-out', requiresAuth: false}
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `WorkForce - ${to.meta.title}`;
  if (to.meta.requiresAuth) {
    if(isUserLoggedIn){
      next();
    } else{
      next("/auth/login")
    }
  } else {
    next();
  }
});

export default router
