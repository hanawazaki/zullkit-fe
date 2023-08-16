<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div
      class="container flex flex-wrap items-center justify-between mx-auto my-2"
    >
      <Logo />
      <UserInfo v-if="isLoggedIn" :user="user.data" />

      <AuthButton v-else />
      <NavigationLinks />
    </div>
  </nav>
</template>

<script setup>
import AuthButton from "./AuthButton.vue";
import Logo from "./Logo.vue";
import NavigationLinks from "./NavigationLinks.vue";
import UserInfo from "./UserInfo.vue";
import { useUserStore } from "../../stores/user";
import { ref, computed, onMounted } from "vue";

const userStore = useUserStore();
onMounted(() => {
  // userStore.fetchUser();
});

const isLoggedIn = computed(() => userStore.isLoggedIn);
const user = computed(() => userStore.user);
</script>
