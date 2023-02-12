import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// EventBus
// import mitt from 'mitt'

// const emitter = mitt()

// app.config.globalProperties.emitter = emitter





