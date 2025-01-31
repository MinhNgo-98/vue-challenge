<template>
  <button
    class="button"
    :class="[buttonClasses, { active: isActive }]"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <slot>
      <span class="button__content">
        <span v-if="label" class="button__label-wrapper font-medium">
          <slot name="custom-label">
            {{ label }}
          </slot>
        </span>
        <span v-if="icon" class="button__icon-wrapper">
          <Icon name="arrow-up" />
        </span>
      </span>
    </slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed, ref } from 'vue';
import Icon from '@components/Icon/icon.vue';

interface Button {
  label?: string;
  ariaLabel?: string;
  type?: '' | 'primary';
  icon?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Button>(), {
  label: '',
  ariaLabel: '',
  type: '',
  icon: false,
  disabled: false,
});

const isActive = ref(false);

const buttonClasses = computed(() => ({
  [`button--${props.type}`]: true,
  'button--disabled': props.disabled,
}));

const handleClick = () => {
  if (!props.disabled) {
    isActive.value = !isActive.value;
  }
};
</script>

<style lang="scss" scoped>
@import './Button.scss';
</style>
