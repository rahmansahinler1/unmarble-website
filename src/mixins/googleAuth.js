import { googleAuthCodeLogin } from 'vue3-google-login'
import useAuthStore from '@/stores/auth'

export default {
  methods: {
    async triggerGoogleLogin() {
      try {
        const response = await googleAuthCodeLogin()

        if (response.code) {
          const authStore = useAuthStore()
          const result = await authStore.handleGoogleAuth(response.code)

          if (result.success) {
            window.location.href = import.meta.env.VITE_APP_URL
          } else {
            console.error('Login failed:', result.error)
            alert('Login failed: ' + result.error)
          }
        }
      } catch (error) {
        console.error('Google OAuth error:', error)
        alert('Google login was cancelled or failed.')
      }
    },
  },
}
