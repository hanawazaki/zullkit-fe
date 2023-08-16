<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
      {{ categoryName.name }} Items
    </h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4" v-if="newItems.length">
      <NewItemCard
        :title="item.name"
        :description="item.subtitle"
        :image="item.thumbnails"
        v-for="item in newItems"
        :key="item.id"
        :id="item.id"
      />
    </div>
    <div v-else class="flex justify-center items-center mt-5">
      <h1 class="font-semibold monoscape">Data kosong</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import NewItemCard from "@/components/categories/Items.vue";
import axios from "axios";

const newItems = ref([]);
const route = useRoute();

const categoryName = ref("");

const getItems = async () => {
  try {
    const response = await axios.get(
      `http://zullkit-backend-main.test/api/categories?id=${route.params.id}&show_product=1`
    );
    newItems.value = response.data.data.products;
    categoryName.value = response.data.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getItems();
});
</script>

<style lang="scss" scoped></style>
