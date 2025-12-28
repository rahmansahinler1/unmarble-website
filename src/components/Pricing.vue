<template>
  <LegalConsentModal
    v-if="showConsentModal"
    @consent-given="handleConsentGiven"
    @consent-declined="handleConsentDeclined"
  />

  <section class="pricing-section">
    <div class="container">
      <div class="pricing-header">
        <h2 class="pricing-title">Simple, Transparent Pricing</h2>
        <p class="pricing-subtitle">Choose the plan that works best for you</p>
      </div>

      <div class="pricing-cards">
        <!-- Trial Plan Card -->
        <div class="pricing-card">
          <div class="pricing-card-header">
            <h3 class="pricing-plan-name">Trial</h3>
            <p class="pricing-plan-subtitle">Try Unmarble and generate your first outfit design!</p>
          </div>
          <div class="pricing-price">
            <span class="pricing-amount">Free</span>
          </div>
          <p class="pricing-note">No credit card required</p>
          <ul class="pricing-features">
            <li class="pricing-feature">
              <svg class="pricing-checkmark" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>2 uploads</span>
            </li>
            <li class="pricing-feature">
              <svg class="pricing-checkmark" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>2 generations</span>
            </li>
          </ul>
          <button class="btn-pricing" @click="handleGetStarted">Get Started</button>
        </div>

        <!-- Premium Plan Card -->
        <div class="pricing-card pricing-card-featured">
          <div class="pricing-badge">Most Popular</div>
          <div class="pricing-card-header">
            <h3 class="pricing-plan-name">Premium</h3>
            <p class="pricing-plan-subtitle">Unlimited creativity for fashion enthusiasts. Cancel anytime!</p>
          </div>
          <div class="pricing-price">
            <span class="pricing-amount">$20</span>
            <span class="pricing-period">/month</span>
          </div>
          <p class="pricing-note">Cancel anytime, no commitments</p>
          <ul class="pricing-features">
            <li class="pricing-feature">
              <svg class="pricing-checkmark" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>20 uploads</span>
            </li>
            <li class="pricing-feature">
              <svg class="pricing-checkmark" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>20 generations</span>
            </li>
            <li class="pricing-feature">
              <svg class="pricing-checkmark" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Renews every month</span>
            </li>
            <li class="pricing-feature">
              <svg class="pricing-checkmark" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>High quality downloads</span>
            </li>
            <li class="pricing-feature">
              <svg class="pricing-checkmark" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Dedicated support</span>
            </li>
          </ul>
          <button class="btn-pricing btn-pricing-featured" @click="handleGetStarted">Get Started</button>
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
  name: 'Pricing',
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
    handleGetStarted() {
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

<style scoped>
.pricing-section {
  padding: 5rem 0;
  background-color: var(--color-bg);
}

.pricing-header {
  text-align: center;
  margin-bottom: 4rem;
}

.pricing-title {
  font-family: var(--font-family-base);
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.pricing-subtitle {
  font-family: var(--font-family-base);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-secondary);
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.pricing-card {
  background-color: white;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.pricing-card-featured {
  border: 2px solid var(--color-primary);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
  color: white;
  font-family: var(--font-family-base);
  font-size: 12px;
  font-weight: 600;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pricing-card-header {
  margin-bottom: 1.5rem;
}

.pricing-plan-name {
  font-family: var(--font-family-base);
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.pricing-plan-subtitle {
  font-family: var(--font-family-base);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-secondary);
}

.pricing-price {
  margin-bottom: 0.5rem;
  min-height: 60px;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.pricing-amount {
  font-family: var(--font-family-base);
  font-size: 48px;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1;
}

.pricing-period {
  font-family: var(--font-family-base);
  font-size: 16px;
  font-weight: 400;
  color: var(--color-secondary);
  line-height: 1;
}

.pricing-note {
  font-family: var(--font-family-base);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex: 1;
}

.pricing-feature {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-family: var(--font-family-base);
  font-size: 15px;
  font-weight: 400;
  color: var(--color-text);
}

.pricing-checkmark {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.btn-pricing {
  width: 100%;
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  font-family: var(--font-family-base);
  font-size: 14px;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-pricing:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 183, 237, 0.3);
}

.btn-pricing-featured {
  background-color: var(--color-primary);
  color: white;
}

.btn-pricing-featured:hover {
  background-color: #0095c7;
}

/* ================================
   Responsive Design - Tablet
================================ */

@media (max-width: 968px) {
  .pricing-section {
    padding: 4rem 0;
  }

  .pricing-title {
    font-size: 32px;
  }

  .pricing-subtitle {
    font-size: 16px;
  }

  .pricing-cards {
    gap: 1.5rem;
  }

  .pricing-card {
    padding: 2rem;
  }
}

/* ================================
   Responsive Design - Mobile
================================ */

@media (max-width: 768px) {
  .pricing-section {
    padding: 3rem 0;
  }

  .pricing-header {
    margin-bottom: 3rem;
  }

  .pricing-title {
    font-size: 28px;
  }

  .pricing-cards {
    grid-template-columns: 1fr;
    max-width: 400px;
  }

  .pricing-amount {
    font-size: 40px;
  }
}
</style>
