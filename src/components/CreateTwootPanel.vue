<template>
  <form
    class="create-twoot-panel"
    @submit.prevent="createNewTwoot"
    :class="{ '--exceeded-char-limit': exceededCharacterCount }"
  >
    <label for="newTwoot">
      <strong>New Twoot</strong>
      <span class="new-twoot__character-count">
        ({{ newTwootCharacterCount }}/{{ state.twootCharacterLimit }})
      </span>
    </label>
    <textarea id="newTwoot" rows="4" v-model="state.newTwootContent"></textarea>

    <p :class="{ 'exceeded-char-limit-message': exceededCharacterCount }" v-if="exceededCharacterCount">
      Twoots may not exceed 180 characters...
    </p>

    <div class="create-twoot-panel__submit">
      <div class="create-twoot-type">
        <label for="newTwootType"><strong>Type</strong></label>
        <select id="newTwootType" v-model="state.selectedTwootType">
          <option v-for="option in state.twootTypes" :key="option.value" :value="option.value">
            {{ option.name }}
          </option>
        </select>
      </div>

      <button :disabled="exceededCharacterCount">Twoot!</button>
    </div>
  </form>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'CreateTwootPanel',
  setup(_, context) {
    const state = ref({
      twootCharacterLimit: 180,
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        { value: 'instant', name: 'Instant Twoot' },
        { value: 'draft', name: 'Draft' },
      ],
    });

    const newTwootCharacterCount = computed(() => state.value.newTwootContent.length);
    const exceededCharacterCount = computed(
      () => state.value.newTwootContent.length > state.value.twootCharacterLimit
    );

    function createNewTwoot() {
      if (state.value.newTwootContent && state.value.selectedTwootType !== 'draft') {
        context.emit('add-twoot', state.value.newTwootContent);
        state.value.newTwootContent = '';
      }
    }

    return { state, newTwootCharacterCount, exceededCharacterCount, createNewTwoot };
  },
};
</script>

<style lang="scss" scoped>
.create-twoot-panel,
.create-twoot-type {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.create-twoot-panel label,
.create-twoot-type label {
  font-size: 0.8rem;
  color: #444;
  letter-spacing: 0.35px;
}

.create-twoot-panel {
  margin-right: 50px;
  padding-top: 20px;

  textarea {
    padding: 4px 8px;
  }

  &.--exceeded-character-count {
    textarea {
      color: red;
    }
  }

  .new-twoot__character-count {
    color: #888;
    font-size: 0.7rem;
  }

  .exceeded-char-limit-message {
    color: red;
    font-size: 0.65rem;
    margin: 0;
  }

  .create-twoot-panel__submit {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    button {
      padding: 5px 20px;
      margin: auto 0 0 0;
      border-radius: 5px;
      border: none;
      background-color: rebeccapurple;
      color: white;
      font-weight: 700;
      cursor: pointer;

      &:hover,
      &:active {
        background-color: rgb(118, 67, 168);
      }

      &:disabled {
        background-color: #ccc;
        cursor: auto;
      }
    }
  }
}
</style>