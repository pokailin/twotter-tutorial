<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div v-if="user.isAdmin" class="user-profile__admin-badge">Admin</div>
      <div class="user-profile__follower-count"><strong>Followers: </strong> {{ followers }}</div>
      <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot">
        <label for="newTwoot"><strong>New Twoot</strong></label>
        <textarea id="newTwoot" rows="4" v-model="newTwootContent"></textarea>

        <div class="user-profile__create-twoot-type">
          <label for="newTwootType"><strong>Type</strong></label>
          <select id="newTwootType" v-model="selectedTwootType">
            <option v-for="option in twootTypes" :key="option.value" :value="option.value">
              {{ option.name }}
            </option>
          </select>
        </div>

        <button>Twoot!</button>
      </form>
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
        @favorite="toggleFavorite"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from './TwootItem.vue';

export default {
  name: 'UserProfile',
  components: { TwootItem },
  data() {
    return {
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        { value: 'instant', name: 'Instant Twoot' },
        {
          value: 'draft',
          name: 'Draft',
        },
      ],
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
    };
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a new follower.`);
      }
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavorite(id) {
      console.log(`Favorited twoot #${id}`);
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft') {
        const twoots = this.user.twoots;
        this.user.twoots = [...twoots, { id: twoots.length + 1, content: this.newTwootContent }];
      }
      this.newTwootContent = '';
    },
  },
  mounted() {
    this.followUser();
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

    .user-profile__create-twoot,
    .user-profile__create-twoot-type {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .user-profile__create-twoot label,
    .user-profile__create-twoot-type label {
      font-size: 0.8rem;
      color: #444;
      letter-spacing: 0.35px;
    }

    .user-profile__create-twoot {
      border-top: 1px solid #dfe3e8;
      padding-top: 20px;
    }
  }

  .user-profile__twoots-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>