<template>
  <span class="icon">
    <component :is="iconComponent" v-if="iconComponent" class="icon" />
  </span>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue';

interface Icon {
  name: String
}

const props = defineProps<Icon>();

// Import all SVG icons
const icons = import.meta.glob('@assets/icons/*.svg', { eager: true });

const iconComponent = computed<Component | null>(() => {
  const path = `/src/assets/icons/${props.name}.svg`;
  return icons[path]?.default || null;
});
</script>

<style lang="scss" scoped>
@import './Icon.scss';
</style>