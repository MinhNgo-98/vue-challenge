<template>
  <section class="service-section">
    <h2>Dienstleistungen</h2>

    <ul class="service-section-dropdown">
      <ServiceDropdown
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :openDropdowns="openDropdowns"
        :level="1"
        @update-open="updateOpenDropdown"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ServiceDropdown from "@components/ServiceDropdown/ServiceDropdown.vue";
import categories from "@src/data/categories.js";

// Global state to track open dropdowns at each level
const openDropdowns = ref<{ [key: number]: number | null }>({});

// Function to update open dropdowns
const updateOpenDropdown = (level: number, categoryId: number | null) => {
  openDropdowns.value[level] = categoryId;
};
</script>

<style scoped>
@import "./ServiceSection.scss";

.service-section-dropdown {
  list-style: none;
  padding: 0;
}
</style>
