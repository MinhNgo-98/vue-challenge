<template>
  <li class="employee">
    <Icon :name="data.icon" />
    <span>{{ data.name }}</span>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Icon from '@components/Icon/Icon.vue';

interface Employee {
  name: string;
  icon: string;
}

defineProps<{
  data: Employee;
}>();
</script>

<style lang="scss" scoped>
@import './Employee.scss';
</style>