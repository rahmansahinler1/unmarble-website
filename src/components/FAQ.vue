<template>
  <section class="faq-section">
    <div class="container">
      <!-- Header -->
      <div class="faq-header">
        <h2 class="faq-title">Frequently Asked Questions</h2>
      </div>

      <!-- FAQ Items -->
      <div class="faq-list">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="faq-item"
          @click="toggleQuestion(faq.id)"
        >
          <!-- Question -->
          <div class="faq-question">
            <span class="faq-question-text">{{ faq.question }}</span>
            <svg
              class="faq-chevron"
              :class="{ rotated: openQuestionId === faq.id }"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>

          <!-- Answer -->
          <div class="faq-answer" :class="{ open: openQuestionId === faq.id }">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      openQuestionId: 1, // First question open by default
      faqs: [
        {
          id: 1,
          question: 'What is Unmarble?',
          answer:
            'Unmarble is an AI-powered fashion visualization platform that allows you to see how different outfits look on you without physically trying them on. Simply upload your photo and clothing items to create realistic outfit combinations instantly.',
        },
        {
          id: 2,
          question: 'Is it paid?',
          answer:
            'Unmarble offers both free and paid plans. You can create your profile for free and try basic features. Premium plans unlock advanced features, higher resolution images, and more monthly credits for generating outfit combinations.',
        },
        {
          id: 3,
          question: 'How do I use it?',
          answer:
            'Getting started is simple: Sign up with Google, upload your photos, add clothing items you want to try, and click generate. Our AI will create realistic images showing how the outfits look on you in seconds.',
        },
        {
          id: 4,
          question: 'Can I store my pictures?',
          answer:
            'Yes! All your uploaded photos and generated outfit images are securely stored in your personal gallery. You can access, organize, and manage your collection anytime from your account dashboard.',
        },
        {
          id: 5,
          question: 'Can I try outfits on myself?',
          answer:
            "Absolutely! That's the core feature of Unmarble. Upload a photo of yourself and any clothing items, and our AI will generate realistic images showing exactly how those outfits would look on you.",
        },
        {
          id: 6,
          question: 'What kind of pictures should I upload?',
          answer:
            'For best results, upload clear, well-lit photos with good resolution. Your personal photos should show your full body or upper body clearly. Clothing images should have plain backgrounds and show the item clearly without obstructions.',
        },
      ],
    }
  },
  methods: {
    toggleQuestion(id) {
      // If clicking the already open question, close it
      // Otherwise, open the clicked question (closing any other)
      this.openQuestionId = this.openQuestionId === id ? null : id
    },
  },
}
</script>
