<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="handleDecline">
    <div class="modal-container">
      <div class="modal-header">
        <h2>Legal Consent</h2>
        <p>To continue, confirm:</p>
      </div>

      <div class="modal-body">
        <ul class="consent-list">
          <li class="consent-item">
            You are <strong>18 years of age or older</strong>
          </li>
          <li class="consent-item">
            You will only upload <strong>photos of yourself</strong> and not images of other people without their explicit consent
          </li>
          <li class="consent-item">
            You will <strong>not generate sexual, explicit, or inappropriate content</strong> of any kind
          </li>
          <li class="consent-item">
            You understand that <strong>violations result in immediate account termination</strong> without refund
          </li>
          <li class="consent-item">
            You have read and agree to the
            <a href="/terms" target="_blank">Terms of Service</a> and
            <a href="/privacy" target="_blank">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div class="modal-footer">
        <button class="btn-decline" @click="handleDecline">Decline</button>
        <button class="btn-agree" @click="handleAgree">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LegalConsentModal',
  emits: ['consent-given', 'consent-declined'],
  setup(props, { emit }) {
    const isVisible = ref(true)

    const handleAgree = () => {
      isVisible.value = false
      emit('consent-given', {
        timestamp: new Date().toISOString(),
        agreed: true
      })
    }

    const handleDecline = () => {
      isVisible.value = false
      emit('consent-declined')
    }

    return {
      isVisible,
      handleAgree,
      handleDecline,
    }
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-container {
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.modal-header h2 {
  margin: 0 0 0.5rem 0;
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
}

.modal-header p {
  margin: 0;
  color: var(--color-secondary);
  font-size: 0.95rem;
}

.modal-body {
  padding: 2rem;
}

.consent-list {
  list-style: disc;
  padding-left: 1.5rem;
  margin: 0;
}

.consent-item {
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.consent-item:last-child {
  margin-bottom: 0;
}

.consent-item strong {
  font-weight: 600;
  color: var(--color-text);
}

.consent-item a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
}

.consent-item a:hover {
  text-decoration: underline;
}

.modal-footer {
  padding: 1rem 2rem 2rem 2rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  border-top: 1px solid #e0e0e0;
}

.btn-decline,
.btn-agree {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-decline {
  background-color: #f5f5f5;
  color: var(--color-secondary);
}

.btn-decline:hover {
  background-color: #e0e0e0;
}

.btn-agree {
  background-color: var(--color-primary);
  color: white;
}

.btn-agree:hover {
  background-color: #0099cc;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 183, 237, 0.3);
}

@media (max-width: 768px) {
  .modal-container {
    margin: 1rem;
  }

  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 1.5rem;
  }

  /* Reduce header font size */
  .modal-header h2 {
    font-size: 1.25rem;
  }

  /* Reduce subtitle font size */
  .modal-header p {
    font-size: 0.85rem;
  }

  /* Reduce consent items font size */
  .consent-item {
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .modal-footer {
    flex-direction: row;
    gap: 0.75rem;
  }

  .btn-decline,
  .btn-agree {
    width: auto;
    flex: 1;
    padding: 0.65rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
