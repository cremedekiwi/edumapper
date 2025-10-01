<script setup>
import { ref } from 'vue';
import { ChevronDown } from 'lucide-vue-next';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'À compléter'
  },
  options: {
    type: Array,
    default: () => []
  },
  secondaryOptions: {
    type: Array,
    default: () => []
  },
  selectedValue: {
    type: String,
    default: ''
  },
  selectedSecondaryValue: {
    type: String,
    default: ''
  },
  showChevron: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click', 'select', 'selectSecondary']);

const showOptions = ref(false);

const handleCardClick = () => {
  if (props.options.length > 0) {
    showOptions.value = !showOptions.value;
  }
  emit('click');
};

const selectOption = (option) => {
  emit('select', option);
};

const selectSecondaryOption = (option) => {
  emit('selectSecondary', option);
};

const getDisplayValue = () => {
  if (props.selectedValue && props.selectedSecondaryValue) {
    return `${props.selectedValue} ${props.selectedSecondaryValue}`;
  } else if (props.selectedValue) {
    return props.selectedValue;
  }
  return props.placeholder;
};
</script>

<template>
  <div class="w-[343px] md:w-[720px] bg-white mt-[16px] rounded-2xl px-[16px]">
    <div 
      class="h-[62px] flex items-center justify-between cursor-pointer"
      @click="handleCardClick"
    >
      <span>{{ label }}</span>
      <div class="flex items-center gap-[4px]">
        <span class="text-gris text-[14px]">
          {{ getDisplayValue() }}
        </span>
        <ChevronDown 
          v-if="options.length > 0 || showChevron"
          :class="{ 'rotate-180': showOptions }" 
          class="transition-transform" 
        />
      </div>
    </div>
    <div 
      v-if="showOptions && options.length > 0"
      class="flex flex-col gap-[8px]"
    >
      <!-- Section Classes -->
      <div class="flex flex-row flex-wrap gap-[8px]">
        <button
          v-for="option in options"
          :key="option.id"
          class="h-[36px] bg-gris-10 rounded-2xl px-[16px] flex items-center justify-center"
          :class="{ 
            'bg-white border-black font-medium border-1': selectedValue === option.name
          }"
          @click.stop="selectOption(option)"
        >
          {{ option.name }}
        </button>
      </div>

      <!-- Separator line -->
      <div 
        v-if="secondaryOptions.length > 0" 
        class="flex items-center my-[8px]"
      >
        <div class="flex-1 h-[1px] bg-gray-200"></div>
      </div>

      <!-- Section Bac Types -->
      <div v-if="secondaryOptions.length > 0" class="mb-[16px]">
        <div class="text-sm text-gray-600 px-[4px] mb-[4px]">Type de bac</div>
        <div class="flex flex-row flex-wrap gap-[8px]">
          <button
            v-for="option in secondaryOptions"
            :key="option.id"
            class="h-[36px] bg-gris-10 rounded-2xl px-[16px] flex items-center justify-center"
            :class="{ 
              'bg-white border-black font-medium border-1': selectedSecondaryValue === option.name
            }"
            @click.stop="selectSecondaryOption(option)"
          >
            {{ option.name }}
          </button>
        </div>
      </div>
    </div>
    
  </div>
</template>