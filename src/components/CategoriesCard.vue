<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <RouterLink :to="{ name: 'category-items', params: { id: props.id } }">
        <div class="m-4 overflow-hidden rounded-xl">
          <img
            :alt="props / title"
            class="block w-full h-auto"
            :src="props.image"
          />
        </div>
      </RouterLink>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <RouterLink
            class="font-semibold text-black no-underline hover:underline"
            :to="{ name: 'category-items', params: { id: props.id } }"
          >
            {{ props.title }}
          </RouterLink>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline">
          {{ props.count }} items
        </span>
      </header>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
