<template>
  <UserProfile />
</template>

<script>
import UserProfile from './components/UserProfile.vue';

export default {
  components: { UserProfile },
  methods: {
    followUser() {
      this.followers++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
</style>
