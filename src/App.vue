<template>
  <UserProfile />
</template>

<script>
import UserProfile from './components/UserProfile.vue';

export default {
  name: 'App',
  components: { UserProfile },
  methods: {
    followUser() {
      this.followers++;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
</style>
