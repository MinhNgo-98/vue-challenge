<template>
  <li class="service-dropdown">
    <!-- Main category button -->
    <Button
      class="service-dropdown__button"
      :class="{
        'service-dropdown__button--unavailable': !category.available
      }"
      :label="category.name"
      @click="toggleDropdown"
      :icon="category.children.length"
    />

    <!-- Subcategories (Only opens if it's the selected one at this level) -->
    <ul
      v-if="openDropdowns[level] === category.id && category.children.length"
      class="service-dropdown__submenu"
    >
      <ServiceDropdown
        v-for="child in category.children"
        :key="child.id"
        :category="child"
        :openDropdowns="openDropdowns"
        :level="level + 1"
        @update-open="$emit('update-open', level + 1, $event)"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import Button from "@components/Button/Button.vue";
import { defineProps, defineEmits } from "vue";

// Props
const props = defineProps<{
  category: any;
  openDropdowns: { [key: number]: number | null };
  level: number;
}>();

// Emit event to update open dropdown
const emit = defineEmits(["update-open"]);

const toggleDropdown = () => {
  const newOpen = props.openDropdowns[props.level] === props.category.id ? null : props.category.id;
  emit("update-open", props.level, newOpen);
};
</script>

<style lang="scss" scoped>
@import './ServiceDropdown.scss'
</style>
