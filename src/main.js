import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import 'normalize.css'
import './style/index.scss'

createApp(App).use(store).mount('#app')
