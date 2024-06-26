import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/css/main.css'
import '@/assets/css/global.scss';
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
