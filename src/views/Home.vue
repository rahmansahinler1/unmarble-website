<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <Hero />
    <Example />
    <Product1 />
    <Product2 />
    <FAQ />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Example from '@/components/Example.vue'
import Product1 from '@/components/Product1.vue'
import Product2 from '@/components/Product2.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Example,
    Product1,
    Product2,
    FAQ,
    Footer,
  },
}
</script>

<style scoped></style>
