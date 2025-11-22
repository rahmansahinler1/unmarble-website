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
import { useHead } from '@vueuse/head'
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
  setup() {
    useHead({
      title: 'Unmarble - AI-Powered Virtual Try-On | Try Clothes with AI',
      meta: [
        {
          name: 'description',
          content: 'See yourself in different outfits with Unmarble\'s AI-powered virtual try-on. Upload your photos and clothes, create your gallery, and design new looks instantly. No editing skills needed.',
        },
        {
          property: 'og:title',
          content: 'Unmarble - AI-Powered Virtual Try-On | Try Clothes with AI',
        },
        {
          property: 'og:description',
          content: 'See yourself in different outfits with Unmarble\'s AI-powered virtual try-on. Upload your photos and clothes, create your gallery, and design new looks instantly.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: '/assets/og-image.webp',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Unmarble - AI-Powered Virtual Try-On',
        },
        {
          name: 'twitter:description',
          content: 'See yourself in different outfits with AI. Upload photos, try on clothes virtually, and create your perfect look.',
        },
        {
          name: 'keywords',
          content: 'AI virtual try-on, outfit generator, AI fashion, virtual clothing, try clothes online, AI outfit visualization, fashion AI, virtual wardrobe',
        },
      ],
    })
  },
}
</script>

<style scoped></style>
