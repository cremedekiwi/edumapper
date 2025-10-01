<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { MapPin, Star, Zap } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();

// Get school data from query parameters
const schoolData = ref({
  name: route.query.schoolName || 'Lycée',
  city: route.query.schoolCity || 'Paris',
  type: route.query.schoolType || 'Lycée Public',
  selectedClass: route.query.selectedClass || '',
  selectedBacType: route.query.selectedBacType || ''
});

// Compatibility data
const compatibilityData = ref({
  percentage: 0,
  level: '',
  reliability: 0
});

// Function to go back to the previous page
const goBack = () => {
  router.push('/');
};

// Generate a random compatibility estimate
const generateCompatibilityScore = () => {
  const percentage = Math.floor(Math.random() * 40) + 60; // Entre 60% et 99%
  let level = '';
  
  if (percentage >= 90) {
    level = 'Très élevées';
  } else if (percentage >= 80) {
    level = 'Élevées';
  } else if (percentage >= 70) {
    level = 'Moyennes';
  } else {
    level = 'Faibles';
  }
  
  const reliability = Math.floor(Math.random() * 2) + 4; // Entre 4 et 5 étoiles
  
  compatibilityData.value = {
    percentage,
    level,
    reliability
  };
};

// Initialize compatibility
onMounted(() => {
  generateCompatibilityScore();
});
</script>

<template>
  <div class="min-h-screen bg-beige/100">
    <!-- Header -->
    <header class="h-[60px] flex items-center justify-between px-[16px] bg-white shadow-sm">
      <img src="/assets/img/logo.png" class="h-[28px]" />
      <div class="w-[60px]"></div>
    </header>

    <main class="p-[16px]">
      <!-- School Information -->
      <div class="flex flex-col justify-center items-center bg-beige-30 rounded-2xl p-[16px] mb-[16px]">
        <div class="flex justify-center items-center gap-1 text-gris-60 text-[14px]">
          <h1>{{ schoolData.name }}</h1>
          <span class="text-gris-40">|</span>
          <MapPin class="w-[12px] h-[12px]" />
          <span>{{ schoolData.city }}</span>
        </div>
        <span class="text-gris-90 font-semibold text-[18px]">{{ schoolData.type }}</span>
      </div>

      <!-- Container for compatibility estimate -->
      <div class="bg-white rounded-2xl overflow-hidden shadow-sm">     
        <!-- Progress circle -->
        <div class="flex justify-center my-[20px]">
          <div class="relative w-[150px] h-[150px]">
            <!-- Background circle -->
            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#e5e7eb"
                stroke-width="6"
                fill="none"
              />
              <!-- Progress circle with gradient -->
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#gradient)"
                stroke-width="6"
                fill="none"
                stroke-linecap="round"
                :stroke-dasharray="314"
                :stroke-dashoffset="314 - (314 * compatibilityData.percentage / 100)"
                class="transition-all duration-1000 ease-out"
              />
              <!-- Definition of the gradient -->
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#FF7342;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#B176FF;stop-opacity:1" />
                </linearGradient>
              </defs>
            </svg>

            <!-- Central space for lightning icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <img 
                src="/assets/img/eclair.svg" 
                alt="Éclair" 
                class="w-[69px] h-[69px]"
              />
            </div>
          </div>
        </div>  

        <!-- Main score -->
        <div class="p-[24px] text-center">
          <div class="mb-[16px]">
            <div class="text-[20px] font-semibold text-gris-90">
              {{ compatibilityData.percentage }}% • {{ compatibilityData.level }}
            </div>
          </div>

          <!-- Reliability stars -->
          <div class="flex justify-center items-center mb-[20px] gap-2">
            <div class="text-[14px] text-gray-600">Fiabilité </div>
            <div class="flex justify-center items-center gap-[4px]">
              <Star 
                v-for="star in 5" 
                :key="star"
                :class="star <= compatibilityData.reliability ? 'text-gris-30 fill-current' : 'text-gray-300'"
                class="w-[13px] h-[13px]"
              />
            </div>
          </div>
          
          <!-- Disclaimer -->
          <div>
            <p class="text-[14px] text-gris-60">
              Cette estimation est fournie à titre indicatif et ne garantit en aucun cas la décision d'admission de l'établissement.
            </p>
          </div>
        </div>
      </div>

      <!-- Other school actions -->
      <div class="mt-[16px] flex gap-[12px]">
        <button @click="goBack" class="flex-1 bg-black border-none text-white py-[12px] rounded-2xl font-medium">
          Tester une autre formation
        </button>
      </div>
    </main>
  </div>
</template>