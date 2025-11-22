<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <PricingComponent />
    <Footer />
  </div>
</template>

<script>
import { useHead } from '@unhead/vue'
import Navbar from '@/components/Navbar.vue'
import PricingComponent from '@/components/Pricing.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Pricing',
  components: {
    Navbar,
    PricingComponent,
    Footer,
  },
  setup() {
    useHead({
      title: 'Pricing - Choose Your Plan | Unmarble',
      meta: [
        {
          name: 'description',
          content: 'Simple, transparent pricing for Unmarble AI virtual try-on. Start with a free trial or upgrade to Premium for unlimited outfit generations.',
        },
        {
          property: 'og:title',
          content: 'Pricing - Choose Your Plan | Unmarble',
        },
        {
          property: 'og:description',
          content: 'Explore Unmarble pricing plans. Try for free or subscribe to Premium for more uploads, generations, and premium features.',
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
          content: 'Pricing - Choose Your Plan | Unmarble',
        },
        {
          name: 'twitter:description',
          content: 'Simple pricing for AI outfit visualization. Free trial available.',
        },
        {
          name: 'keywords',
          content: 'AI virtual try-on pricing, outfit generator plans, AI fashion subscription, virtual clothing pricing',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
      ],
    })
  },
}
</script>

<style scoped></style>
