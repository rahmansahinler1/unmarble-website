<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="container" style="padding: 4rem 3rem; flex: 1">
      <h1 style="margin-bottom: 2rem; color: var(--color-text)">Privacy Policy</h1>
      <div style="color: var(--color-secondary); line-height: 1.8; max-width: 800px">
        <p style="margin-bottom: 1rem; font-style: italic; color: var(--color-secondary)">
          Last updated: November 24, 2025
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Data Security</h2>
        <p style="margin-bottom: 1rem">
          Your privacy and security are our top priorities. All photos and images you upload to Unmarble are encrypted and stored securely. Your pictures cannot be accessed by anyone except you and are protected with industry-standard security measures.
        </p>
        <p style="margin-bottom: 1rem">
          We do not share, sell, or distribute your personal photos or generated images to third parties. Your fashion gallery and profile information remain private and under your complete control.
        </p>
        <ul style="margin-bottom: 1rem; margin-left: 1.5rem">
          <li style="margin-bottom: 0.5rem"><strong>Encryption:</strong> All images are encrypted both at rest (when stored) and in transit (when uploaded or downloaded) using industry-standard encryption protocols</li>
          <li style="margin-bottom: 0.5rem"><strong>Access Control:</strong> Only you can access your uploaded photos and generated images. No Unmarble employees, contractors, or third parties have access to your private gallery</li>
          <li style="margin-bottom: 0.5rem"><strong>Access Logging:</strong> We maintain secure access logs for security audits and abuse prevention, but these logs do not contain image content</li>
          <li style="margin-bottom: 0.5rem"><strong>Secure Authentication:</strong> We use Google OAuth for authentication, ensuring your account is protected by Google's enterprise-grade security infrastructure</li>
        </ul>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Data Collection</h2>
        <p style="margin-bottom: 1rem">
          We practice data minimization and only collect information necessary to provide our services. Here's exactly what we collect:
        </p>
        <ul style="margin-bottom: 1rem; margin-left: 1.5rem">
          <li style="margin-bottom: 0.5rem"><strong>Authentication Data:</strong> Your Google account information (name, email, profile picture) for account creation and login</li>
          <li style="margin-bottom: 0.5rem"><strong>Uploaded Images:</strong> Photos you choose to upload for outfit visualization (stored temporarily and encrypted)</li>
          <li style="margin-bottom: 0.5rem"><strong>Generated Images:</strong> AI-generated outfit visualizations created through our service</li>
          <li style="margin-bottom: 0.5rem"><strong>Usage Metrics:</strong> Timestamps of when you use the service, number of uploads, number of generations, and subscription tier</li>
          <li style="margin-bottom: 0.5rem"><strong>Technical Data:</strong> IP address, browser type, and device information for security and abuse prevention</li>
        </ul>
        <p style="margin-bottom: 1rem">
          <strong>What we do NOT collect:</strong> We do not use third-party analytics, tracking cookies, advertising networks, or data brokers. We do not sell, rent, or share your data with anyone. We do not analyze your images for marketing purposes or train AI models on your personal photos.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Data Retention Policy</h2>
        <p style="margin-bottom: 1rem">
          We retain your data only as long as necessary to provide our services and comply with legal obligations:
        </p>
        <ul style="margin-bottom: 1rem; margin-left: 1.5rem">
          <li style="margin-bottom: 0.5rem"><strong>Uploaded Images:</strong> Stored temporarily during your active session and automatically deleted within 30 days of upload or when you delete them from your gallery, whichever comes first</li>
          <li style="margin-bottom: 0.5rem"><strong>Generated Images:</strong> Stored in your private gallery until you delete them or close your account, with automatic deletion after 90 days of account inactivity</li>
          <li style="margin-bottom: 0.5rem"><strong>Account Data:</strong> Retained as long as your account is active. Deleted within 30 days of account closure unless required for legal compliance</li>
          <li style="margin-bottom: 0.5rem"><strong>Usage Logs:</strong> Kept for 90 days for security and abuse prevention, then automatically purged</li>
          <li style="margin-bottom: 0.5rem"><strong>Violation Records:</strong> For accounts terminated due to Terms of Service violations, we retain violation logs and associated content for 1 year for legal compliance and dispute resolution</li>
        </ul>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Open Source Transparency</h2>
        <p style="margin-bottom: 1rem">
          Unmarble is built on open source principles to ensure transparency and accountability:
        </p>
        <ul style="margin-bottom: 1rem; margin-left: 1.5rem">
          <li style="margin-bottom: 0.5rem"><strong>Public Code Repository:</strong> Our codebase is publicly available and auditable, allowing users and security researchers to verify our data handling practices</li>
          <li style="margin-bottom: 0.5rem"><strong>No Hidden Data Collection:</strong> You can review our source code to confirm that we only collect the data described in this policy</li>
          <li style="margin-bottom: 0.5rem"><strong>Community Accountability:</strong> Security researchers and developers can audit our code for vulnerabilities or privacy concerns</li>
          <li style="margin-bottom: 0.5rem"><strong>Transparent AI Processing:</strong> Our image generation prompts and AI safety configurations are visible in the public repository</li>
        </ul>
        <p style="margin-bottom: 1rem">
          This transparency ensures you can trust that we handle your data exactly as described in this policy.
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
import { useHead } from '@unhead/vue'
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
