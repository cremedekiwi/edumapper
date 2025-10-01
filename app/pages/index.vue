<script setup>
import { ref, onMounted, computed } from 'vue';
import SchoolCard from '~/components/SchoolCard.vue';
import SelectionCard from '~/components/SelectionCard.vue';
import SchoolSelector from '~/components/SchoolSelector.vue';
import { classes, bacTypes, getRandomSchool, schools } from '~/data/schools.js';

const selectedClass = ref('');
const selectedBacType = ref('');
const currentSchool = ref(null);
const showSchoolSelector = ref(false);

// Select a school randomly when the component is mounted
onMounted(() => {
  currentSchool.value = getRandomSchool();
});

// Handler for class selection
const handleClassSelection = (selectedOption) => {
  selectedClass.value = selectedOption.name;
};

// Handler for bac type selection
const handleBacTypeSelection = (selectedOption) => {
  selectedBacType.value = selectedOption.name;
};

// Open the school selector
const handleModifySchool = () => {
  showSchoolSelector.value = true;
};

// Handler for school selection
const handleSchoolSelection = (school) => {
  currentSchool.value = school;
  showSchoolSelector.value = false;
};

// Close the school selector
const handleCloseSchoolSelector = () => {
  showSchoolSelector.value = false;
};

// Computed property to check if both class choices are made
const bothClassChoicesMade = computed(() => {
  return selectedClass.value && selectedBacType.value;
});

// CSS classes for the confirm button
const confirmButtonClasses = computed(() => {
  if (bothClassChoicesMade.value) {
    return 'bg-black text-white py-[20px] px-[20px] w-[343px] rounded-[1000px] mt-[16px] hover:bg-gray-800 transition-all duration-300 shadow-lg';
  }
  return 'bg-white text-gris py-[16px] w-[124px] rounded-[1000px] mt-[32px] transition-all duration-300';
});

// Function to navigate to the estimation page
const handleConfirm = () => {
  if (bothClassChoicesMade.value && currentSchool.value) {
    navigateTo({
      path: '/estimation',
      query: {
        schoolName: currentSchool.value.name,
        schoolCity: currentSchool.value.city,
        schoolType: currentSchool.value.type,
        selectedClass: selectedClass.value,
        selectedBacType: selectedBacType.value
      }
    });
  }
};
</script>

<template>
  <div>
    <header class="h-[60px] flex items-center ">
      <img src="assets/img/logo.png" class="h-[28px] pl-[24px]" />
    </header>
    
    <main class="flex flex-col items-center bg-beige/100" style="height: calc(100vh - 60px)">
      <!-- Actual School Card -->
      <SchoolCard 
        v-if="currentSchool"
        :school-name="currentSchool.name"
        :city="currentSchool.city"
        :school-type="currentSchool.type"
        @modify="handleModifySchool"
      />

      <!-- Selection Card for Class and Bac Type -->
      <SelectionCard 
        label="Classe" 
        :options="classes"
        :secondary-options="bacTypes"
        :selected-value="selectedClass"
        :selected-secondary-value="selectedBacType"
        @select="handleClassSelection"
        @select-secondary="handleBacTypeSelection"
      />

      <!-- Selection Cards for Specialties and Grades -->
      <SelectionCard 
        label="Spécialités"
        :show-chevron="true"
      />

      <!-- Selection Card for Grades -->
      <SelectionCard 
        label="Notes"
        :show-chevron="true"
      />

      <!-- Confirm / Continue Button -->
      <button :class="confirmButtonClasses" @click="handleConfirm">
        {{ bothClassChoicesMade ? 'Continuer' : 'Confirmer' }}
      </button>
    </main>

    <!-- School Selector -->
    <SchoolSelector 
      :schools="schools"
      :is-visible="showSchoolSelector"
      @select="handleSchoolSelection"
      @close="handleCloseSchoolSelector"
    />
  </div>
</template>