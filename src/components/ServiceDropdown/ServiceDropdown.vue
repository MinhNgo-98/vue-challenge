<template>
  <li class="service-dropdown">
    <Button
      class="service-dropdown__button"
      :class="{
        'service-dropdown__button--unavailable': !category.available
      }"
      :label="category.name"
      :ariaLabel="category.name"
      @click="toggleDropdown"
      :icon="category.children.length > 0"
    />

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
        @update-open="handleUpdateOpen"
        @select-category="$emit('select-category', $event)"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import Button from "@components/Button/Button.vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  category: any;
  openDropdowns: { [key: number]: number | null };
  level: number;
}>();

const emit = defineEmits(["update-open", "select-category"]);

const toggleDropdown = () => {
  if (props.category.children.length > 0) {
    const newOpen = props.openDropdowns[props.level] === props.category.id ? null : props.category.id;
    emit("update-open", props.level, newOpen);
  }

  emit("select-category", props.category);
};

const handleUpdateOpen = (level: number, categoryId: number | null) => {
  emit("update-open", level, categoryId);
};
</script>

<style lang="scss" scoped>
@import './ServiceDropdown.scss';
</style>
