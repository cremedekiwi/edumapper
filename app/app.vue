<script setup>
import { ref } from 'vue';
import SchoolCard from '~/components/SchoolCard.vue';
import SelectionCard from '~/components/SelectionCard.vue';
import { classes, bacTypes } from '~/data/schools.js';

const selectedClass = ref('');
const selectedBacType = ref('');

const handleClassSelection = (selectedOption) => {
  selectedClass.value = selectedOption.name;
  console.log('Classe sélectionnée:', selectedOption);
};

const handleBacTypeSelection = (selectedOption) => {
  selectedBacType.value = selectedOption.name;
  console.log('Type de bac sélectionné:', selectedOption);
};
</script>

<template>
  <header class="h-[60px] flex items-center ">
    <img src="assets/img/logo.png" class="h-[28px] pl-[12px]" />
  </header>
  <main class="h-screen flex flex-col items-center bg-beige/100">
    <SchoolCard 
      school-name="Lycée Gaston Berger"
      city="Lille"
      school-type="Lycée Public"
      @modify="() => console.log('Modifier clicked')"
    />
    
    <SelectionCard 
      label="Classe" 
      :options="classes"
      :secondary-options="bacTypes"
      :selected-value="selectedClass"
      :selected-secondary-value="selectedBacType"
      @select="handleClassSelection"
      @select-secondary="handleBacTypeSelection"
    />
    <SelectionCard 
      label="Spécialités" 
      @click="() => console.log('Spécialités clicked')"
    />
    <SelectionCard 
      label="Notes" 
      @click="() => console.log('Notes clicked')"
    />
    <button class="bg-white text-gris py-[16px] w-[124px] rounded-[1000px] mt-[16px]">Confirmer</button>
  </main>
</template>
