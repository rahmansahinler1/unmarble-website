<template>
  <section id="product" class="product-section">
    <div class="container">
      <div class="product-grid">
        <!-- Left: Content -->
        <div class="product-content">
          <div class="product-badge">Ease of Use</div>
          <h2 class="product-title">One Click Design</h2>
          <p class="product-description">
            Design your outlook in just one click. No need for design knowledge. No need for 3D
            modeling. Let AI help you to design your very realistic outfit in just seconds with one
            click.
          </p>
          <button class="btn btn-product" @click="triggerGoogleLogin">Try Unmarble</button>
        </div>

        <!-- Right: Image -->
        <div class="product-visual">
          <img
            src="/assets/product_image_1.webp"
            alt="One Click Design Preview"
            class="product-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import googleAuthMixin from '@/mixins/googleAuth'

export default {
  name: 'Product1',
  mixins: [googleAuthMixin],
}
</script>
