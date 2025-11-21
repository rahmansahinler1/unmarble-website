<template>
  <section id="example" class="example-section">
    <div class="container">
      <div class="example-white-container">
        <div class="example-content">
          <!-- Section Header -->
          <div class="example-header">
            <h2 class="example-title">Design Without Limits</h2>
            <p class="example-description">See how every outfit looks on you in seconds</p>
          </div>

          <div class="example-grid">
          <!-- Left Column: Selectors -->
          <div class="example-selectors">
            <!-- Gender Selector -->
            <div class="selector-row">
              <button
                v-for="gender in ['woman', 'man']"
                :key="gender"
                class="clothing-item"
                :class="{ active: selectedGender === gender, smaller: selectedGender !== gender }"
                @click="selectGender(gender)"
              >
                <div class="item-image">
                  <img :src="`/assets/example/items/${gender}.webp`" :alt="gender" />
                </div>
              </button>
            </div>

            <!-- Body Clothing Selector -->
            <div class="selector-row">
              <button
                v-for="body in clothingOptions[selectedGender].body"
                :key="body"
                class="clothing-item"
                :class="{ active: selectedBody === body, smaller: selectedBody !== body }"
                @click="selectBody(body)"
              >
                <div class="item-image">
                  <img :src="`/assets/example/items/${selectedGender}-body${body}.webp`" :alt="`Body ${body}`" />
                </div>
              </button>
            </div>

            <!-- Leg Clothing Selector -->
            <div class="selector-row">
              <button
                v-for="legs in clothingOptions[selectedGender].legs"
                :key="legs"
                class="clothing-item"
                :class="{ active: selectedLegs === legs, smaller: selectedLegs !== legs }"
                @click="selectLegs(legs)"
              >
                <div class="item-image">
                  <img :src="`/assets/example/items/${selectedGender}-legs${legs}.webp`" :alt="`Legs ${legs}`" />
                </div>
              </button>
            </div>

            <!-- Shoes Selector -->
            <div class="selector-row">
              <button
                v-for="shoes in clothingOptions[selectedGender].shoes"
                :key="shoes"
                class="clothing-item"
                :class="{ active: selectedShoes === shoes, smaller: selectedShoes !== shoes }"
                @click="selectShoes(shoes)"
              >
                <div class="item-image">
                  <img :src="`/assets/example/items/${selectedGender}-shoes${shoes}.webp`" :alt="`Shoes ${shoes}`" />
                </div>
              </button>
            </div>
          </div>

          <!-- Arrow -->
          <div class="example-arrow">
            <img src="/assets/arrow-right.svg" alt="Arrow" class="arrow-icon" />
          </div>

          <!-- Right Column: Outcome Preview -->
          <div class="example-preview">
            <div class="preview-container">
              <div class="preview-image-wrapper">
                <img
                  :src="outcomeImagePath"
                  :alt="`${selectedGender} outfit combination`"
                  class="preview-image"
                  @error="handleImageError"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Example',
  mounted() {
    // Start auto-rotation when component mounts
    this.startAutoRotation()
  },
  beforeUnmount() {
    // Clean up interval when component unmounts
    this.stopAutoRotation()
  },
  data() {
    return {
      selectedGender: 'woman',
      selectedBody: '1',
      selectedLegs: '1',
      selectedShoes: '1',
      lastSelections: {
        man: { body: '1', legs: '1', shoes: '1' },
        woman: { body: '1', legs: '1', shoes: '1' },
      },
      clothingOptions: {
        man: {
          body: ['1', '2', '3'],
          legs: ['1', '2', '3'],
          shoes: ['1', '2', '3'],
        },
        woman: {
          body: ['1', '2', '3'],
          legs: ['1', '2', '3'],
          shoes: ['1', '2', '3'],
        },
      },
      isAutoRotating: false,
      rotationInterval: null,
    }
  },
  computed: {
    outcomeImagePath() {
      return `/assets/example/${this.selectedGender}-body${this.selectedBody}-legs${this.selectedLegs}-shoes${this.selectedShoes}.webp`
    },
  },
  methods: {
    selectGender(gender) {
      // Stop auto-rotation when user interacts
      this.stopAutoRotation()

      // Save current selections to lastSelections
      this.lastSelections[this.selectedGender] = {
        body: this.selectedBody,
        legs: this.selectedLegs,
        shoes: this.selectedShoes,
      }

      // Switch gender
      this.selectedGender = gender

      // Restore last selections for new gender
      this.selectedBody = this.lastSelections[gender].body
      this.selectedLegs = this.lastSelections[gender].legs
      this.selectedShoes = this.lastSelections[gender].shoes
    },
    selectBody(bodyNumber) {
      // Stop auto-rotation when user interacts
      this.stopAutoRotation()
      this.selectedBody = bodyNumber
    },
    selectLegs(legsNumber) {
      // Stop auto-rotation when user interacts
      this.stopAutoRotation()
      this.selectedLegs = legsNumber
    },
    selectShoes(shoesNumber) {
      // Stop auto-rotation when user interacts
      this.stopAutoRotation()
      this.selectedShoes = shoesNumber
    },
    handleImageError(event) {
      console.error('Failed to load image:', this.outcomeImagePath)
      // Optionally set a fallback image
      // event.target.src = '/assets/placeholder.webp'
    },
    startAutoRotation() {
      this.isAutoRotating = true

      this.rotationInterval = setInterval(() => {
        // Randomly select gender (50/50 chance)
        const genders = ['woman', 'man']
        const randomGender = genders[Math.floor(Math.random() * genders.length)]

        // Randomly select clothing items
        const randomBody = this.clothingOptions[randomGender].body[
          Math.floor(Math.random() * this.clothingOptions[randomGender].body.length)
        ]
        const randomLegs = this.clothingOptions[randomGender].legs[
          Math.floor(Math.random() * this.clothingOptions[randomGender].legs.length)
        ]
        const randomShoes = this.clothingOptions[randomGender].shoes[
          Math.floor(Math.random() * this.clothingOptions[randomGender].shoes.length)
        ]

        // Apply selections (without triggering stopAutoRotation)
        if (randomGender !== this.selectedGender) {
          // Save current selections before switching
          this.lastSelections[this.selectedGender] = {
            body: this.selectedBody,
            legs: this.selectedLegs,
            shoes: this.selectedShoes,
          }
        }

        this.selectedGender = randomGender
        this.selectedBody = randomBody
        this.selectedLegs = randomLegs
        this.selectedShoes = randomShoes
      }, 3000) // Change every 3 seconds
    },
    stopAutoRotation() {
      if (this.rotationInterval) {
        clearInterval(this.rotationInterval)
        this.rotationInterval = null
      }
      this.isAutoRotating = false
    },
  },
}
</script>
