<template>
  <section class="service-section">
    <div class="sevice-section-menu">
      <h2 class="service-section-menu__headline font-large">
        Dienstleistungen
      </h2>
      <ul class="service-section-menu__dropdown">
        <ServiceDropdown
          v-for="category in categories"
          :key="category.id"
          :category="category"
          :openDropdowns="openDropdowns"
          :level="1"
          @update-open="updateOpenDropdown"
          @select-category="selectCategory"
        />
      </ul>
    </div>

    <div class="service-section-display-panel" v-if="selectedCategory">
      <div class="service-section-display-panel__content">
        <h3 class="service-section-display-panel__headline font-medium">
          {{ selectedCategory.name }}
        </h3>
        <p class="service-section-display-panel__description font-regular">
          {{ selectedCategory.description }}
        </p>
        <span class="service-section-display-panel__price font-regular" v-if="selectedCategory.price !== null">
          Preis: <strong>{{ selectedCategory.price }} €</strong>
        </span>
      </div>
      <Button
        class="service-section-display-panel__button"
        label="Termin vereinbaren"
        aria-label="Klicken um Termin zu vereinbaren"
        type="primary"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ServiceDropdown from "@components/ServiceDropdown/ServiceDropdown.vue";
import Button from '@components/Button/Button.vue';
import categories from "@data/categories.js";

const openDropdowns = ref<{ [key: number]: number | null }>({});
const selectedCategory = ref<any>(null);

// Update open dropdowns
const updateOpenDropdown = (level: number, categoryId: number | null) => {
  openDropdowns.value = { ...openDropdowns.value, [level]: categoryId };
};

// Handle category selection
const selectCategory = (category: any) => {
  selectedCategory.value = category;
};
</script>

<style lang="scss" scoped>
@import "./ServiceSection.scss";
</style>
