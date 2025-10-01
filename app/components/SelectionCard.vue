<script setup>
import { ChevronDown } from 'lucide-vue-next';

defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'À compléter'
  }
});

defineEmits(['click']);
</script>

<template>
  <section 
    class="w-[343px] h-[62px] bg-white flex items-center justify-between px-[16px] rounded-2xl mt-[16px] cursor-pointer hover:bg-gray-50 transition-colors"
    @click="$emit('click')"
  >
    <span>{{ label }}</span>
    <div class="flex items-center gap-[4px]">
      <span class="text-gris text-[14px]">{{ placeholder }}</span>
      <ChevronDown />
    </div>
  </section>
</template>