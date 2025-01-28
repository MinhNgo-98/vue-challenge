<template>
  <div id="app">
    <header></header>
    <main>
      <Logo />
      <EmployeeSection />
      <ServiceSection />
      <DisplaySection />
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
import DisplaySection from '@components/DisplaySection/DisplaySection.vue';
import Banner from '@components/Banner/Banner.vue';
</script>

<style scoped>
</style>
