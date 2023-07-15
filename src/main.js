import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { formatNum, formatNumFloat } from './mixins/toLocaleString.js'
import DateRangeIcon from './components/icons/IconDateRange.vue'
// App & Router
import App from './App.vue'
import router from './router'
// Stylesheet
import './assets/styles.css'


const pinia = createPinia()
const app = createApp(App)

app.component('DateRangeIcon', DateRangeIcon)

app.config.globalProperties = {
    ...app.config.globalProperties,
    $formatNum: formatNum,
    $formatNumFloat: formatNumFloat
};

app.use(router)
app.use(pinia)

app.mount('#app')

