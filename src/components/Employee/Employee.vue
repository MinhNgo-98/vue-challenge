<template>
  <li class="employee">
    <img :src="data.icon" :alt="`${data.name} Icon`"/>
    <span>{{ data.name }}</span>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Employee {
  name: string;
  icon: string;
};

defineProps<{
  data: Employee;
}>();
</script>

<style lang="scss" scoped>
@import './Employee.scss';
</style>