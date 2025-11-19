<template>
  <section id="example" class="example-section">
    <div class="container">
      <div class="example-white-container">
        <div class="example-content">
          <!-- Section Header -->
          <div class="example-header">
            <h2 class="text-header">Design Without Limits</h2>
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
    }
  },
  computed: {
    outcomeImagePath() {
      return `/assets/example/${this.selectedGender}-body${this.selectedBody}-legs${this.selectedLegs}-shoes${this.selectedShoes}.webp`
    },
  },
  methods: {
    selectGender(gender) {
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
      this.selectedBody = bodyNumber
    },
    selectLegs(legsNumber) {
      this.selectedLegs = legsNumber
    },
    selectShoes(shoesNumber) {
      this.selectedShoes = shoesNumber
    },
    handleImageError(event) {
      console.error('Failed to load image:', this.outcomeImagePath)
      // Optionally set a fallback image
      // event.target.src = '/assets/placeholder.webp'
    },
  },
}
</script>
