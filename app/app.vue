<script setup>
import { ref, onMounted } from 'vue';
import SchoolCard from '~/components/SchoolCard.vue';
import SelectionCard from '~/components/SelectionCard.vue';
import SchoolSelector from '~/components/SchoolSelector.vue';
import { classes, bacTypes, getRandomSchool, schools } from '~/data/schools.js';

const selectedClass = ref('');
const selectedBacType = ref('');
const currentSchool = ref(null);
const showSchoolSelector = ref(false);

// Sélectionner une école aléatoire au montage du composant
onMounted(() => {
  currentSchool.value = getRandomSchool();
});

const handleClassSelection = (selectedOption) => {
  selectedClass.value = selectedOption.name;
  console.log('Classe sélectionnée:', selectedOption);
};

const handleBacTypeSelection = (selectedOption) => {
  selectedBacType.value = selectedOption.name;
  console.log('Type de bac sélectionné:', selectedOption);
};

const handleModifySchool = () => {
  showSchoolSelector.value = true;
};

const handleSchoolSelection = (school) => {
  currentSchool.value = school;
  showSchoolSelector.value = false;
  console.log('Lycée sélectionné:', school);
};

const handleCloseSchoolSelector = () => {
  showSchoolSelector.value = false;
};
</script>

<template>
  <header class="h-[60px] flex items-center ">
    <img src="assets/img/logo.png" class="h-[28px] pl-[12px]" />
  </header>
    <main class="h-screen flex flex-col items-center bg-beige/100">
    <SchoolCard 
      v-if="currentSchool"
      :school-name="currentSchool.name"
      :city="currentSchool.city"
      :school-type="currentSchool.type"
      @modify="handleModifySchool"
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
    />
    <SelectionCard 
      label="Notes" 
    />
    <button class="bg-white text-gris py-[16px] w-[124px] rounded-[1000px] mt-[16px]">Confirmer</button>
  </main>

  <!-- School Selector Modal -->
  <SchoolSelector 
    :schools="schools"
    :is-visible="showSchoolSelector"
    @select="handleSchoolSelection"
    @close="handleCloseSchoolSelector"
  />
</template>
