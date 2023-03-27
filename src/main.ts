import 'uno.css'

// @ts-ignore
import uView from 'vk-uview-ui'
import { createSSRApp } from 'vue'

import store from '@/store'

import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(uView)
  return {
    app,
  }
}
