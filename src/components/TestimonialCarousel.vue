<template>
  <div class="testimonial-carousel">
    <!-- Profile Avatars -->
    <div class="testimonial-avatars">
      <button
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        :class="['avatar-button', { active: activeTestimonialId === testimonial.id }]"
        @click="selectTestimonial(testimonial.id)"
        :aria-label="`View testimonial from ${testimonial.name}`"
      >
        <img :src="testimonial.avatar" :alt="testimonial.name" />
      </button>
    </div>

    <!-- Rating and Quote Content -->
    <div class="testimonial-content">
      <!-- Star Rating Section -->
      <div class="testimonial-rating">
        <div class="stars">
          <span v-for="i in 5" :key="i" class="star-icon">★</span>
        </div>
        <span class="rating-text">5.0</span>
      </div>

      <!-- Quote Display -->
      <div class="testimonial-quote">
        <p :key="activeTestimonial.id">"{{ activeTestimonial.quote }}"</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCarousel',
  data() {
    return {
      activeTestimonialId: 2,
      testimonials: [
        {
          id: 1,
          name: 'Sarah M.',
          avatar: '/assets/testimonials/avatar1.svg',
          quote: 'Very realistic',
          rating: 5.0,
        },
        {
          id: 2,
          name: 'Michael R.',
          avatar: '/assets/testimonials/avatar2.svg',
          quote: "I've used it to decide buying my jacket. It was very helpful.",
          rating: 5.0,
        },
        {
          id: 3,
          name: 'Emma L.',
          avatar: '/assets/testimonials/avatar3.svg',
          quote: 'Very helpful tool for my mockups',
          rating: 5.0,
        },
      ],
    }
  },
  computed: {
    activeTestimonial() {
      return this.testimonials.find((t) => t.id === this.activeTestimonialId) || this.testimonials[1]
    },
  },
  methods: {
    selectTestimonial(id) {
      this.activeTestimonialId = id
    },
  },
}
</script>
