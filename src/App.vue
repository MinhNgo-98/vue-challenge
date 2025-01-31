<template>
  <main class="main container">
    <h1 class="sr-only">Unser Krankenhaus</h1>
    <div class="main__top-area">
      <Logo />
      <EmployeeSection />
    </div>
    <div class="main__bottom-area">
      <ServiceSection />
      <Banner />
    </div>
  </main>
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
