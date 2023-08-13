import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueFormElement from './VueFormElement'

const app = createApp(App)
app.use(VueFormElement)
app.mount('#app')