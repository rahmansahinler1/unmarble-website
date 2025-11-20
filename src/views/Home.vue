<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <Hero />
    <Example />
    <Product1 />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Example from '@/components/Example.vue'
import Product1 from '@/components/Product1.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Example,
    Product1,
    Footer,
  },
}
</script>

<style scoped></style>
