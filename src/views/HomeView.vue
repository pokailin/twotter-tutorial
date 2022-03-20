<template>
  <div class="home">
    <h1>Home</h1>
    <div class="users-list">
      <ul>
        <router-link
          v-for="user in users"
          :key="user.id"
          :to="{ name: 'UserProfile', params: { userId: user.id } }"
        >
          <li>
            {{ user.username }}
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { users } from '@/assets/users';
export default {
  name: 'HomeView',
  setup() {
    return {
      users,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;
}

.users-list {
  ul {
    list-style: none;
  }
}
</style>