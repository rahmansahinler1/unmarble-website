<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="container" style="padding: 4rem 3rem; flex: 1">
      <h1 style="margin-bottom: 2rem; color: var(--color-text)">Privacy Policy</h1>
      <div style="color: var(--color-secondary); line-height: 1.8; max-width: 800px">
        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Data Security</h2>
        <p style="margin-bottom: 1rem">
          Your privacy and security are our top priorities. All photos and images you upload to Unmarble are encrypted and stored securely. Your pictures cannot be accessed by anyone except you and are protected with industry-standard security measures.
        </p>
        <p style="margin-bottom: 1rem">
          We do not share, sell, or distribute your personal photos or generated images to third parties. Your fashion gallery and profile information remain private and under your complete control.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Data Collection</h2>
        <p style="margin-bottom: 1rem">
          We collect only the information necessary to provide our services, including your Google account information for authentication and the photos you choose to upload for outfit visualization.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Your Rights</h2>
        <p style="margin-bottom: 1rem">
          You have the right to access, modify, or delete your data at any time through your account settings. You can also request a complete copy of your data or account deletion by contacting our support team.
        </p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Privacy',
  components: {
    Navbar,
    Footer,
  },
  setup() {
    useHead({
      title: 'Privacy Policy | Unmarble',
      meta: [
        {
          name: 'description',
          content: 'Unmarble Privacy Policy - Learn how we protect your data and ensure your photos are encrypted and stored securely.',
        },
        {
          property: 'og:title',
          content: 'Privacy Policy | Unmarble',
        },
        {
          property: 'og:description',
          content: 'Your privacy and security are our top priorities. Learn how Unmarble protects your personal photos and data.',
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
