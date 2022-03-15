<template>
  <div class="user-profile">
    <h1 class="user-profile__username">@{{ user.username }}</h1>
    <div class="user-profile__follower-count"><strong>Followers: </strong> {{ followers }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: '_PokaiLin',
        firstName: 'Pokai',
        lastName: 'Lin',
        email: 'pokailin@example.com',
        isAdmin: true,
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
  },
  mounted() {
    this.followUser();
  },
};
</script>

<style>
</style>