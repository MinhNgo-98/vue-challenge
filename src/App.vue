<template>
  <div id="app">
    <header></header>
    <main class="container">
      <Logo />
      <EmployeeSection />
      <ServiceSection />
    </main>
    <footer>
      <Banner />
    </footer>
  </div>
</template>

<script setup lang="ts">
import Logo from '@components/Logo/Logo.vue'
import EmployeeSection from '@components/EmployeeSection/EmployeeSection.vue';
import ServiceSection from '@components/ServiceSection/ServiceSection.vue';
import Banner from '@components/Banner/Banner.vue';
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
