import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import navBar from '@/components/navBar/index.vue'

const app = createApp(App)

app.component('navBar', navBar)
app.use(router)
app.mount('#app')
