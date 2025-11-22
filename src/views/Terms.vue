<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="container" style="padding: 4rem 3rem; flex: 1">
      <h1 style="margin-bottom: 2rem; color: var(--color-text)">Terms of Service</h1>
      <div style="color: var(--color-secondary); line-height: 1.8; max-width: 800px">
        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">User Responsibility</h2>
        <p style="margin-bottom: 1rem">
          By using Unmarble, you agree to use the service responsibly and in accordance with all applicable laws. You are solely responsible for the content you upload, including photos and clothing images. You must have the right to use any images you upload to our platform.
        </p>
        <p style="margin-bottom: 1rem">
          You agree to use Unmarble only for personal, non-commercial fashion visualization purposes. Any unauthorized use, including commercial exploitation without explicit permission, is prohibited.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Prohibited Use</h2>
        <p style="margin-bottom: 1rem">
          The following activities are strictly prohibited on Unmarble:
        </p>
        <ul style="margin-bottom: 1rem; margin-left: 1.5rem">
          <li style="margin-bottom: 0.5rem">Creating, uploading, or generating harmful, offensive, or illegal content</li>
          <li style="margin-bottom: 0.5rem">Using the service to harass, impersonate, or harm others</li>
          <li style="margin-bottom: 0.5rem">Uploading images of other people without their explicit consent</li>
          <li style="margin-bottom: 0.5rem">Creating deepfakes or misleading content intended to deceive</li>
          <li style="margin-bottom: 0.5rem">Attempting to reverse engineer, hack, or compromise our security systems</li>
          <li style="margin-bottom: 0.5rem">Using the service for any illegal or unethical purposes</li>
        </ul>
        <p style="margin-bottom: 1rem">
          Violation of these terms may result in immediate account suspension or termination.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Data Security</h2>
        <p style="margin-bottom: 1rem">
          We take your security seriously. All uploaded photos are encrypted and stored securely. Your pictures cannot be accessed by unauthorized parties and are protected with industry-standard security protocols. Only you have access to your personal gallery and generated images.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Service Availability</h2>
        <p style="margin-bottom: 1rem">
          While we strive to provide reliable service, Unmarble is provided "as is" without warranties of any kind. We reserve the right to modify, suspend, or discontinue any part of the service at any time.
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
  name: 'Terms',
  components: {
    Navbar,
    Footer,
  },
  setup() {
    useHead({
      title: 'Terms of Service | Unmarble',
      meta: [
        {
          name: 'description',
          content: 'Unmarble Terms of Service - User responsibilities, prohibited use, data security, and service availability.',
        },
        {
          property: 'og:title',
          content: 'Terms of Service | Unmarble',
        },
        {
          property: 'og:description',
          content: 'Read Unmarble\'s Terms of Service to understand user responsibilities and service guidelines.',
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
