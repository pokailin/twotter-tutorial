<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ state.user.username }}</h1>
        <div v-if="state.user.isAdmin" class="user-profile__admin-badge">Admin</div>
        <div class="user-profile__follower-count">
          <strong>Followers: </strong> {{ state.followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import TwootItem from './TwootItem.vue';
import CreateTwootPanel from './CreateTwootPanel.vue';

export default {
  name: 'UserProfile',
  components: { TwootItem, CreateTwootPanel },
  setup() {
    const state = ref({
      followers: 0,
      user: {
        id: 1,
        username: '_PokaiLin',
        firstName: 'Pokai',
        lastName: 'Lin',
        email: 'pokailin@example.com',
        isAdmin: true,
        twoots: [
          { id: 1, content: 'Twotter is amazing!' },
          { id: 2, content: "Don't forget to subscribe to the earth is square!" },
        ],
      },
    });

    function addTwoot(newTwootContent) {
      const twoots = state.value.user.twoots;
      state.value.user.twoots = [...twoots, { id: twoots.length + 1, content: newTwootContent }];
    }

    return { state, addTwoot };
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 100%;
  padding: 50px 5%;

  .user-profile__user-panel {
    background-color: #fff;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-right: 50px;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #dfe3e8;

    h1 {
      margin: 0;
    }

    .user-profile__admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      margin-bottom: 5px;
      padding: 0 10px;
      font-weight: 600;
      letter-spacing: 0.25px;
    }
  }

  .user-profile__twoots-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>