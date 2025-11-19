<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-grid">
        <!-- Left Content -->
        <div class="hero-content">
          <div class="badge bg-white text-dark mb-2 hero-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              class="bi bi-star-fill me-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
            #1 Realistic AI Outfit Generator
          </div>
          <h1 class="text-header">Try Clothes with AI</h1>

          <p class="text-second mt-3">See yourself in different outfits.</p>

          <p class="text-third">
            Upload your photos and clothes, create your gallery, and design new looks on yourself.
            No editing skills needed.
          </p>

          <!-- Social Proof Carousel -->
          <TestimonialCarousel />

          <!-- CTA -->
          <div class="hero-cta-wrapper mt-4 mt-md-5 d-flex align-items-center gap-4">
            <GoogleLogin :callback="handleGoogleLogin">
              <button class="btn btn-google btn-lg">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  class="google-icon"
                >
                  <path
                    d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                    fill="#4285F4"
                  />
                  <path
                    d="M9.003 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"
                    fill="#34A853"
                  />
                  <path
                    d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>
            </GoogleLogin>
            <p class="hero-free-text d-flex align-items-center mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill me-1"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>
              Create your profile with 0$
            </p>
          </div>
        </div>

        <!-- Right Visuals -->
        <div class="hero-visuals">
          <div class="mockup-grid">
            <!-- Large main image -->
            <div class="mockup-card mockup-large">
              <img
                src="/assets/generated-kadin.webp"
                alt="AI Generated Outfit - Woman"
                class="mockup-image"
              />
            </div>

            <!-- Small images staggered -->
            <div class="mockup-small-row">
              <div class="mockup-card mockup-small">
                <img
                  src="/assets/generated-hirka.webp"
                  alt="AI Generated Outfit - Cardigan"
                  class="mockup-image"
                />
              </div>
              <div class="mockup-card mockup-small">
                <img
                  src="/assets/generated-etek.webp"
                  alt="AI Generated Outfit - Skirt"
                  class="mockup-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { GoogleLogin } from 'vue3-google-login'
import { mapStores } from 'pinia'
import useAuthStore from '@/stores/auth'
import TestimonialCarousel from '@/components/TestimonialCarousel.vue'

export default {
  name: 'Hero',
  components: {
    GoogleLogin,
    TestimonialCarousel,
  },
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    async handleGoogleLogin(response) {
      if (response.code) {
        const result = await this.authStore.handleGoogleAuth(response.code)

        if (result.success) {
          window.location.href = import.meta.env.VITE_APP_URL
        } else {
          console.error('Login failed:', result.error)
          alert('Login failed: ' + result.error)
        }
      } else if (response.error) {
        console.error('Google OAuth error:', response.error)
        alert('Google login was cancelled or failed.')
      }
    },
  },
}
</script>
