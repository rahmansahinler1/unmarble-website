import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import routes from './router'
import './assets/main.css'
import vue3GoogleLogin from 'vue3-google-login'

function getAuthToken() {
  const cookieMatch = document.cookie.match(/authToken=([^;]+)/)
  return cookieMatch ? cookieMatch[1] : null
}

function isTokenValid(token) {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const exp = payload.exp
    const now = Math.floor(Date.now() / 1000)

    return exp > now
  } catch (error) {
    return false
  }
}

function clearAuthData() {
  const domain = import.meta.env.VITE_COOKIE_DOMAIN
  document.cookie = `authToken=; domain=${domain}; path=/; max-age=0`
}

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router }) => {
    // Pinia store
    const pinia = createPinia()
    app.use(pinia)

    // Head manager for meta tags
    const head = createHead()
    app.use(head)

    // Google Login (only on client side)
    if (!import.meta.env.SSR) {
      app.use(vue3GoogleLogin, {
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      })

      // Check auth token and redirect if needed
      const token = getAuthToken()
      if (token && isTokenValid(token)) {
        window.location.href = import.meta.env.VITE_APP_URL
      } else if (token) {
        clearAuthData()
      }
    }
  }
)
