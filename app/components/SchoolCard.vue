<script setup>
import { MapPin, Building } from 'lucide-vue-next';

defineProps({
  schoolName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  schoolType: {
    type: String,
    required: true
  }
});

defineEmits(['modify']);
</script>

<template>
  <section class="mt-[24px] pl-[16px] h-[144px] w-[343px] text-white flex flex-col justify-center bg-linear-to-r from-orange to-purple rounded-2xl">
    <span class="text-[20px] font-bold">{{ schoolName }}</span>
    <div class="text-[14px] flex gap-[4px] items-center">
      <MapPin class="w-[14px]"/>
      <span>{{ city }}</span>
      <Building class="w-[14px]"/>
      <span>{{ schoolType }}</span>
    </div>
    <button 
      class="bg-white text-black py-[8px] w-[87px] rounded-[1000px] mt-[16px] hover:bg-gray-100 transition-colors cursor-pointer"
      @click="$emit('modify')"
    >
      Modifier
    </button>
  </section>
</template>