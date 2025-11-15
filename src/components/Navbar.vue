<template>
  <nav class="navbar navbar-light" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-left">
          <router-link to="/" class="navbar-brand">
            <img src="/assets/logo-small.svg" alt="Unmarble Logo" class="navbar-logo" />
          </router-link>

          <div class="navbar-menu">
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
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
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
  },
}
</script>
