<template>
  <div id="app">
    <nav>
      <div class="navigation__logo">Twotter</div>
      <div class="navigation__user">{{ user.username }}</div>
    </nav>
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from './components/UserProfile.vue';

export default {
  name: 'App',
  components: { UserProfile },
  data() {
    return {
      user: {
        username: '_PokaiLin',
      },
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  background-color: #f3f5fa;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: rebeccapurple;
    color: white;

    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }

    .navigation__user {
      font-weight: bold;
    }
  }
}
</style>
