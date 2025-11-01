<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" class="navbar-brand">
          <img src="/assets/logo-small.svg" alt="Unmarble Logo" class="navbar-logo" />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">☰</span>
        </button>

        <div class="navbar-menu" :class="{ active: isMenuOpen }">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#example" class="nav-link">Example</a>
            </li>
            <li class="nav-item">
              <a href="#faq" class="nav-link">FAQ</a>
            </li>
            <li class="nav-item">
              <a href="#pricing" class="nav-link">Pricing</a>
            </li>
          </ul>
        </div>

        <button class="btn btn-primary navbar-cta" @click="handleTryForFree">
          Try For Free
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
      isMenuOpen: false,
    }
  },
  methods: {
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
    },
  },
}
</script>
