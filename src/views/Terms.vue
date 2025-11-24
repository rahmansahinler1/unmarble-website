<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="container" style="padding: 4rem 3rem; flex: 1">
      <h1 style="margin-bottom: 2rem; color: var(--color-text)">Terms of Service</h1>
      <div style="color: var(--color-secondary); line-height: 1.8; max-width: 800px">
        <p style="margin-bottom: 1rem; font-style: italic; color: var(--color-secondary)">
          Last updated: November 24, 2025
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Age Restriction</h2>
        <p style="margin-bottom: 1rem">
          Unmarble is intended for users who are 18 years of age or older. By creating an account and using our service, you represent and warrant that you are at least 18 years old. We reserve the right to request age verification documentation at any time, and accounts that cannot verify age eligibility will be terminated immediately.
        </p>
        <p style="margin-bottom: 1rem">
          If we discover that a user under the age of 18 has created an account, we will immediately terminate the account and delete all associated data.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">User Responsibility</h2>
        <p style="margin-bottom: 1rem">
          By using Unmarble, you agree to use the service responsibly and in accordance with all applicable laws. You are solely responsible for the content you upload, including photos and clothing images. You must have the right to use any images you upload to our platform.
        </p>
        <p style="margin-bottom: 1rem">
          You agree to use Unmarble only for personal, non-commercial fashion visualization purposes. Any unauthorized use, including commercial exploitation without explicit permission, is prohibited.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Prohibited Use</h2>
        <p style="margin-bottom: 1rem">
          The following activities are strictly prohibited on Unmarble and will result in immediate account termination:
        </p>
        <ul style="margin-bottom: 1rem; margin-left: 1.5rem">
          <li style="margin-bottom: 0.5rem"><strong>Sexual or Explicit Content:</strong> Generating, uploading, or attempting to create nudity, sexual content, pornographic material, or any form of explicit imagery</li>
          <li style="margin-bottom: 0.5rem"><strong>Inappropriate Clothing Visualization:</strong> Generating transparent clothing, see-through garments, revealing outfits, underwear, lingerie, or any sexually suggestive clothing items</li>
          <li style="margin-bottom: 0.5rem"><strong>Unauthorized Image Use:</strong> Uploading images of other people without their explicit written consent. You may only upload photos of yourself</li>
          <li style="margin-bottom: 0.5rem"><strong>Deepfakes and Impersonation:</strong> Creating deepfakes of public figures, celebrities, or any other individuals, or using the service to impersonate others</li>
          <li style="margin-bottom: 0.5rem"><strong>Bypassing Safety Filters:</strong> Attempting to circumvent, disable, or bypass our content safety filters or AI moderation systems</li>
          <li style="margin-bottom: 0.5rem"><strong>Escort or Dating Services:</strong> Using the service to create content for escort services, dating profiles, or any form of adult entertainment</li>
          <li style="margin-bottom: 0.5rem"><strong>Harmful Content:</strong> Creating, uploading, or generating content that is violent, hateful, harassing, threatening, or promotes illegal activities</li>
          <li style="margin-bottom: 0.5rem"><strong>Commercial Misuse:</strong> Using the service for unauthorized commercial purposes, mass content generation, or reselling generated images without explicit permission</li>
          <li style="margin-bottom: 0.5rem"><strong>System Abuse:</strong> Attempting to reverse engineer, hack, compromise our security systems, or engage in any form of automated abuse</li>
        </ul>
        <p style="margin-bottom: 1rem">
          <strong>Violation of these terms will result in immediate account suspension or termination without refund.</strong> We maintain a zero-tolerance policy for prohibited content and behavior.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Enforcement Mechanisms</h2>
        <p style="margin-bottom: 1rem">
          We employ multiple layers of automated and manual enforcement to ensure compliance with our Terms of Service:
        </p>
        <ul style="margin-bottom: 1rem; margin-left: 1.5rem">
          <li style="margin-bottom: 0.5rem"><strong>Automated Content Filtering:</strong> All uploaded images and generated content are processed through Google Gemini 2.5 Flash's enterprise-grade AI safety filters, which automatically detect and block inappropriate content</li>
          <li style="margin-bottom: 0.5rem"><strong>Real-Time Blocking:</strong> Unsafe content is rejected immediately at the API level before any processing occurs. Failed attempts are logged for compliance monitoring</li>
          <li style="margin-bottom: 0.5rem"><strong>Violation Tracking:</strong> All content policy violations are logged with timestamps, user identifiers, and violation details for regulatory compliance and abuse prevention</li>
          <li style="margin-bottom: 0.5rem"><strong>Three-Strike Policy:</strong> Users who attempt to violate content policies will receive up to three warnings before permanent account termination. Severe violations (explicit sexual content, child safety) result in immediate permanent bans</li>
          <li style="margin-bottom: 0.5rem"><strong>Account Termination:</strong> Banned accounts lose all access immediately, forfeit any remaining credits or subscription time, and receive no refunds</li>
          <li style="margin-bottom: 0.5rem"><strong>IP and Device Bans:</strong> Repeat offenders may be permanently banned by IP address and device fingerprint to prevent account recreation</li>
          <li style="margin-bottom: 0.5rem"><strong>Age Verification:</strong> We reserve the right to request government-issued ID verification at any time. Failure to provide verification results in account suspension</li>
        </ul>
        <p style="margin-bottom: 1rem">
          Our enforcement is proactive, automated, and non-negotiable. We cannot and do not disable safety protections under any circumstances.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">AI Safety Technology</h2>
        <p style="margin-bottom: 1rem">
          Unmarble is powered by <strong>Google Gemini 2.5 Flash Image</strong>, Google's state-of-the-art AI model with enterprise-grade safety features built directly into the technology:
        </p>
        <ul style="margin-bottom: 1rem; margin-left: 1.5rem">
          <li style="margin-bottom: 0.5rem"><strong>Four Harm Categories:</strong> The model actively filters content across Sexually Explicit, Harassment, Hate Speech, and Dangerous Content categories</li>
          <li style="margin-bottom: 0.5rem"><strong>Dual-Layer Protection:</strong> Content is filtered at both input (uploaded images) and output (generated images) stages, ensuring comprehensive safety coverage</li>
          <li style="margin-bottom: 0.5rem"><strong>Non-Adjustable Core Protections:</strong> Child safety and explicit content filters are hardcoded into the model and cannot be disabled, bypassed, or adjusted by developers or users</li>
          <li style="margin-bottom: 0.5rem"><strong>SynthID Watermarking:</strong> All generated images contain invisible digital watermarks identifying them as AI-generated content, providing traceability and accountability</li>
          <li style="margin-bottom: 0.5rem"><strong>Prompt-Level Safety:</strong> Our generation prompts include explicit safety constraints that prohibit the creation of NSFW, explicit, or inappropriate content</li>
          <li style="margin-bottom: 0.5rem"><strong>Google's Safety Standards:</strong> We inherit Google's industry-leading content safety standards, including extensive dataset filtering, red teaming, and continuous safety evaluations</li>
        </ul>
        <p style="margin-bottom: 1rem">
          This technology makes it technically impossible to generate prohibited content through our platform. Safety filtering happens automatically at the AI model level, not as an optional add-on.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Reporting Violations</h2>
        <p style="margin-bottom: 1rem">
          If you encounter content or behavior that violates our Terms of Service, please report it immediately:
        </p>
        <ul style="margin-bottom: 1rem; margin-left: 1.5rem">
          <li style="margin-bottom: 0.5rem"><strong>Email:</strong> support@unmarble.com</li>
          <li style="margin-bottom: 0.5rem"><strong>Response Time:</strong> All reports are investigated within 24-48 hours</li>
          <li style="margin-bottom: 0.5rem"><strong>Required Information:</strong> User identifier, timestamp, description of violation, and any supporting evidence</li>
        </ul>
        <p style="margin-bottom: 1rem">
          We take all reports seriously and will take appropriate action against accounts found in violation of our policies. Reporters will be notified of the outcome when appropriate.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Data Security</h2>
        <p style="margin-bottom: 1rem">
          We take your security seriously. All uploaded photos are encrypted and stored securely. Your pictures cannot be accessed by unauthorized parties and are protected with industry-standard security protocols. Only you have access to your personal gallery and generated images.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Service Availability</h2>
        <p style="margin-bottom: 1rem">
          While we strive to provide reliable service, Unmarble is provided "as is" without warranties of any kind. We reserve the right to modify, suspend, or discontinue any part of the service at any time.
        </p>

        <h2 style="color: var(--color-text); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem">Refund Policy</h2>
        <p style="margin-bottom: 1rem">
          We offer digital subscription services through our platform. Since our product provides instant access to features after purchase, refunds are handled under the guidelines below.
        </p>

        <h3 style="color: var(--color-text); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.25rem">Subscriptions</h3>
        <p style="margin-bottom: 1rem">
          You may request a refund within 7 days of your initial subscription purchase if you are not satisfied with the service. Refund requests made after 7 days, or after extensive usage, may not be eligible.
        </p>
        <p style="margin-bottom: 1rem">
          <strong>For EU customers:</strong> In accordance with EU Consumer Rights Directive, you have a 14-day right of withdrawal. However, by using the service and consuming generation credits, you acknowledge that you lose the right of withdrawal for the digital content consumed.
        </p>

        <h3 style="color: var(--color-text); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.25rem">Renewals</h3>
        <p style="margin-bottom: 1rem">
          Subscription renewals are non-refundable. You may cancel your subscription at any time, and you will continue to have access until the end of your current billing period.
        </p>

        <h3 style="color: var(--color-text); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.25rem">Technical Failures</h3>
        <p style="margin-bottom: 1rem">
          If our system fails to process your generation requests due to technical issues on our end, the affected credits will be restored to your account promptly.
        </p>

        <h3 style="color: var(--color-text); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.25rem">Accidental Charges</h3>
        <p style="margin-bottom: 1rem">
          If you believe you were charged by mistake, you may request a refund review.
        </p>

        <h3 style="color: var(--color-text); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.25rem">Non-Refundable Items</h3>
        <p style="margin-bottom: 0.5rem">The following are not eligible for refunds:</p>
        <ul style="margin-bottom: 1rem; margin-left: 1.5rem">
          <li style="margin-bottom: 0.5rem">Generation credits that have been successfully used to create AI outfit visualizations</li>
          <li style="margin-bottom: 0.5rem">Completed AI generations, regardless of satisfaction with visual results</li>
          <li style="margin-bottom: 0.5rem">Promotional credits, bonus credits, or free trial offers</li>
          <li style="margin-bottom: 0.5rem">Subscriptions after the applicable refund window (7 or 14 days)</li>
          <li style="margin-bottom: 0.5rem">Purchases from accounts terminated for Terms of Service violations</li>
        </ul>

        <h3 style="color: var(--color-text); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.25rem">How to Request a Refund</h3>
        <p style="margin-bottom: 1rem">
          All payment and refund inquiries are processed by our payment partner Paddle.com, acting as our Merchant of Record. For any refund request, please contact Paddle directly at: <a href="mailto:help@paddle.com" style="color: var(--color-accent); text-decoration: none">help@paddle.com</a>
        </p>
        <p style="margin-bottom: 1rem">
          Please allow 5-10 business days for approved refunds to appear in your account, depending on your payment provider.
        </p>

        <h3 style="color: var(--color-text); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.25rem">Cancellations</h3>
        <p style="margin-bottom: 1rem">
          You can cancel your subscription at any time inside your account. Cancellation prevents future charges but does not refund previous payments.
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
