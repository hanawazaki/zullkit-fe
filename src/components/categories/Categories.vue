<template>
  <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">All Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <CategoriesCard
        v-for="item in categories"
        :title="item.name"
        :count="item.products_count"
        :image="item.thumbnails"
        :key="item.id"
        :id="item.id"
      />
    </div>
  </div>
</template>

<script setup>
import CategoriesCard from "../CategoriesCard.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const categories = ref([]);

const getCategories = async () => {
  try {
    const response = await axios.get(
      "http://zullkit-backend-main.test/api/categories"
    );
    categories.value = response.data.data.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getCategories();
});
</script>

<style lang="scss" scoped></style>
