<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <Hero />
    <Example />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Example from '@/components/Example.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Example,
    Footer,
  },
}
</script>

<style scoped></style>
