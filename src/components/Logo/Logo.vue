<template>
  <img
    class="logo"
    :src="logo"
    alt="Krankenhaus Logo"
  />
</template>

<script setup lang="ts">
import logo from '@assets/logo.jpg'
</script>

<style lang="scss" scoped>
@import './Logo.scss';
</style>