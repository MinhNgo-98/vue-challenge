<template>
  <section class="employee-section">
    <h2 class="employee-section__headline">
      Unsere Mitarbeiter
    </h2>
    <ul class="employee-section__list">
      <Employee
        v-for="(employee, index) of employees"
        v-bind:key="index"
        :data="employee"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import Employee from '@components/Employee/Employee.vue';
import employees from '@data/employees'

console.log(employees)
</script>

<style lang="scss" scoped>
@import './EmployeeSection.scss';
</style>
