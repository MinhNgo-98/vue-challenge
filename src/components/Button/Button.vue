<template>
  <button
    class="button"
    :class="buttonClasses"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-label="ariaLabel"
    @click="action"
  >
    <slot>
      <span class="button__content">
        <span v-if="label" class="button__label-wrapper">
          <slot name="custom-label">
            {{ label }}
          </slot>
        </span>
        <span v-if="icon" class="button__icon-wrapper">
          <ArrowIcon />
        </span>
      </span>
    </slot>
  </button>
</template>

<script setup lang="ts">
import {
  defineProps, withDefaults, computed
} from 'vue';

import ArrowIcon from '@assets/icons/arrow-up.svg';

interface Button {
  label: string,
  ariaLabel: string,
  type: '' | 'primary',
  icon: boolean,
  disabled: boolean
}

const props = withDefaults(defineProps<Button>(), {
  label: '',
  ariaLabel: '',
  type: 'primary',
  icon: false,
  disabled: false,
});

const buttonClasses = computed(() => ({
  [`button--${props.type}`]: true,
  'button--disabled': props.disabled,
}));
</script>

<style lang="scss" scoped>
@import './Button.scss';
</style>
