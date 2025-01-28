<template>
  <section class="display-section">
    <h2>Dienstleistung auswählen</h2>
    <p>
      {{ data }}
    </p>
  </section>
</template>

<script setup lang="ts">
import data from '@src/data/categories.js';

console.log(JSON.stringify(data));
</script>

<style lang="scss" scoped>
@import './DisplaySection.scss'
</style>
