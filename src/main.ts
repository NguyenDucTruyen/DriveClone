import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import Root from './Root.vue'
import router from './router'
import './assets/scss/main.scss'
import {install} from '@/plugins/index.ts'

const app = createApp(Root)

const pinia = createPinia()
app
.use(router)
.use(pinia)
.use(install)

router.isReady().then(() => {
  app.mount('#root')
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) 
  app.component(key, component)