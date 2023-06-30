<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <NewItemCard
        :title="item.title"
        :description="item.description"
        :image="item.image"
        v-for="item in newItems"
        :key="item.id"
        :id="item.id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NewItemCard from "../NewItemCard.vue";

const newItems = ref([
  {
    id: 1,
    title: "Mobile UI Kit",
    description: "Mobile UI Kit",
    image: "src/assets/img/items-1.jpg",
  },
  {
    id: 2,
    title: "Online Doctor Consultation",
    description: "Website UI Kit",
    image: "src/assets/img/items-2.jpg",
  },
  {
    id: 3,
    title: "Banking Crypto",
    description: " Mobile UI Kit",
    image: "src/assets/img/items-3.jpg",
  },
]);
</script>

<style lang="scss" scoped></style>
