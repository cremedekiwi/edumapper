<script setup>
import SchoolCard from '~/components/SchoolCard.vue';
import SelectionCard from '~/components/SelectionCard.vue';
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
      @click="() => console.log('Classe clicked')"
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
