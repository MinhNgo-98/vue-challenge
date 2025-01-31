<template>
  <section class="service-section">
    <div class="service-section-menu">
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

    <div class="service-section-display-panel">
      <div v-if="selectedCategory" class="service-section-display-panel__content">
        <div class="service-section-display-panel__content-wrapper">
          <h3 class="service-section-display-panel__headline font-large">
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
          v-if="selectedCategory.price && selectedCategory.available"
          class="service-section-display-panel__button"
          label="Termin vereinbaren"
          aria-label="Klicken um Termin zu vereinbaren"
          type="primary"
          @click="logServiceId(selectedCategory.id)"
        />
      </div>
      <div v-else class="service-section-display-panel__placeholder">
        <span class="service-section-display-panel__headline font-large">
          Dienstleistung wählen
        </span>
      </div>
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

const updateOpenDropdown = (level: number, categoryId: number | null) => {
  if (categoryId === null) {
    const updatedOpenDropdowns = { ...openDropdowns.value };
    for (let l = level; l <= Object.keys(updatedOpenDropdowns).length; l++) {
      updatedOpenDropdowns[l] = null;
    }
    openDropdowns.value = updatedOpenDropdowns;
  } else {
    openDropdowns.value = { ...openDropdowns.value, [level]: categoryId };
  }
};

// Handle category selection
const selectCategory = (category: any) => {
  selectedCategory.value = category;
};

// Log ID of selected service
const logServiceId = (id: number) => {
  console.log(`Sie haben einen Termin für den Service ${id} vereinbart. \n Vielen Dank!`)
} 
</script>

<style lang="scss" scoped>
@import "./ServiceSection.scss";
</style>
