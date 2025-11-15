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
                <a href="#example" class="nav-link" @click="closeMenu">Example</a>
              </li>
              <li class="nav-item">
                <a href="#faq" class="nav-link" @click="closeMenu">FAQ</a>
              </li>
              <li class="nav-item">
                <a href="#pricing" class="nav-link" @click="closeMenu">Pricing</a>
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
    handleLogoClick() {
      // Add pulse animation to logo
      const logo = this.$refs.logo
      if (logo) {
        logo.classList.add('pulse-animation')
        // Remove animation class after animation completes
        setTimeout(() => {
          logo.classList.remove('pulse-animation')
        }, 500)
      }
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
    handleResize() {
      // Close menu on desktop resize
      if (window.innerWidth > 1024) {
        this.closeMenu()
      }
    },
  },
}
</script>
