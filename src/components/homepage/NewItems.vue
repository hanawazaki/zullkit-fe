<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <NewItemCard
        :title="item.name"
        :description="item.subtitle"
        :image="item.thumbnails"
        v-for="item in newItems"
        :key="item.id"
        :id="item.id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import NewItemCard from "../NewItemCard.vue";
import axios from "axios";

const newItems = ref([]);

const getItems = async () => {
  try {
    const response = await axios.get(
      "http://zullkit-backend-main.test/api/products?limit=3"
    );
    newItems.value = response.data.data.data;
    // console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getItems();
});
</script>

<style lang="scss" scoped></style>
