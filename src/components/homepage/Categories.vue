<template>
  <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <CategoriesCard
        :title="item.title"
        :count="item.count"
        :image="item.image"
        v-for="item in categories"
        :key="item.id"
        :id="item.id"
      />
    </div>
  </div>
</template>

<script setup>
import CategoriesCard from "../CategoriesCard.vue";
import { ref } from "vue";

const categories = ref([
  {
    id: 1,
    title: "Mobile UI Kit",
    count: 731,
    image: "src/assets/img/categories-1.jpg",
  },
  {
    id: 2,
    title: "Fonts",
    count: 657,
    image: "src/assets/img/categories-2.jpg",
  },
  {
    id: 3,
    title: "Icons set",
    count: 83559,
    image: "src/assets/img/categories-3.jpg",
  },
  {
    id: 4,
    title: "Website UI Kit",
    count: 4500,
    image: "src/assets/img/categories-4.jpg",
  },
]);
</script>

<style lang="scss" scoped></style>
