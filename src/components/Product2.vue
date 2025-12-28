<template>
  <LegalConsentModal
    v-if="showConsentModal"
    @consent-given="handleConsentGiven"
    @consent-declined="handleConsentDeclined"
  />

  <section class="product-section">
    <div class="container">
      <div class="product-grid product-grid-reverse">
        <!-- Left: Content -->
        <div class="product-content">
          <div class="product-badge">AI Fashion</div>
          <h2 class="product-title">Create Your Gallery</h2>
          <p class="product-description">
            Build your personal fashion gallery with AI-powered designs. Experiment with different
            styles, colors, and combinations. Save your favorite looks and create a collection that
            truly represents your unique style and personality.
          </p>
          <button class="btn btn-product" @click="handleCreateNow">Create Now</button>
        </div>

        <!-- Right: Visual -->
        <div class="product-visual">
          <img
            src="/assets/product_image_2.webp"
            alt="Create Your Gallery Preview"
            class="product-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import googleAuthMixin from '@/mixins/googleAuth'
import LegalConsentModal from '@/components/LegalConsentModal.vue'
import useAuthStore from '@/stores/auth'

export default {
  name: 'Product2',
  components: {
    LegalConsentModal,
  },
  mixins: [googleAuthMixin],
  data() {
    return {
      showConsentModal: false,
    }
  },
  methods: {
    handleCreateNow() {
      const authStore = useAuthStore()
      if (!authStore.hasLegalConsent()) {
        this.showConsentModal = true
      } else {
        this.triggerGoogleLogin()
      }
    },
    handleConsentGiven(consentData) {
      const authStore = useAuthStore()
      authStore.setLegalConsent(consentData)
      this.showConsentModal = false
      this.triggerGoogleLogin()
    },
    handleConsentDeclined() {
      this.showConsentModal = false
    },
  },
}
</script>
