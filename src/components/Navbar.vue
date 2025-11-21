<template>
  <nav class="navbar navbar-light" :class="{ scrolled: isScrolled }">
    <!-- Mobile menu backdrop -->
    <div
      v-if="isMenuOpen"
      class="navbar-backdrop"
      @click="closeMenu"
    ></div>

    <div class="container">
      <div class="navbar-content">
        <div class="navbar-left">
          <router-link to="/" class="navbar-brand" @click="handleLogoClick">
            <img
              ref="logo"
              src="/assets/logo-small.svg"
              alt="Unmarble Logo"
              class="navbar-logo"
            />
          </router-link>

          <div class="navbar-menu" :class="{ active: isMenuOpen }">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#example" class="nav-link" @click.prevent="scrollToSection('example')">Example</a>
              </li>
              <li class="nav-item">
                <a href="#product" class="nav-link" @click.prevent="scrollToSection('product')">Product</a>
              </li>
              <li class="nav-item">
                <a href="#faq" class="nav-link" @click.prevent="scrollToSection('faq')">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <button class="btn btn-primary navbar-cta" @click="handleTryForFree">
          Try For Free
        </button>

        <button class="navbar-toggler" @click="toggleMenu" aria-label="Toggle navigation">
          <span v-if="!isMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    handleLogoClick(event) {
      // Add pulse animation to logo
      const logo = this.$refs.logo
      if (logo) {
        logo.classList.add('pulse-animation')
        // Remove animation class after animation completes
        setTimeout(() => {
          logo.classList.remove('pulse-animation')
        }, 500)
      }

      // Scroll to hero section
      this.scrollToSection('hero')
    },
    handleTryForFree() {
      // Trigger Google OAuth by scrolling to CTA button
      const ctaButton = document.querySelector('.hero-cta button')
      if (ctaButton) {
        ctaButton.scrollIntoView({ behavior: 'smooth', block: 'center' })
        // Optional: auto-click after scroll
        setTimeout(() => ctaButton.focus(), 500)
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      // Lock/unlock body scroll when menu is open
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    },
    scrollToSection(sectionId) {
      // Close mobile menu
      this.closeMenu()

      // Check if we're on the home page
      if (this.$route.path !== '/') {
        // Navigate to home page first, then scroll
        this.$router.push(`/#${sectionId}`).then(() => {
          // Wait for DOM to update, then scroll
          this.$nextTick(() => {
            this.performScroll(sectionId)
          })
        })
      } else {
        // Already on home page, just scroll
        this.performScroll(sectionId)
        // Update URL hash
        window.history.pushState(null, '', `#${sectionId}`)
      }
    },
    performScroll(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    },
    handleResize() {
      // Close menu on desktop resize
      if (window.innerWidth > 1024) {
        this.closeMenu()
      }
    },
  },
}
</script>
