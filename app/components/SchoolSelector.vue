<script setup>
import { ref, computed } from 'vue';
import { Search, X } from 'lucide-vue-next';

const props = defineProps({
  schools: {
    type: Array,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'select']);

const searchQuery = ref('');

// Filtrer les écoles selon la recherche
const filteredSchools = computed(() => {
  if (!searchQuery.value) return props.schools;
  
  return props.schools.filter(school => 
    school.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    school.city.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    school.type.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const selectSchool = (school) => {
  emit('select', school);
  searchQuery.value = '';
};

const closeModal = () => {
  emit('close');
  searchQuery.value = '';
};
</script>

<template>
  <!-- Overlay -->
  <div 
    v-if="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    @click="closeModal"
  >
    <!-- Modal -->
    <div 
      class="bg-white rounded-2xl w-full max-w-md max-h-[80vh] flex flex-col"
      @click.stop
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <h2 class="text-lg font-bold">Choisir un lycée</h2>
        <button 
          @click="closeModal"
          class="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Search -->
      <div class="p-4">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher par nom, ville ou type..."
            class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <!-- Results -->
      <div class="flex-1 overflow-y-auto p-4">
        <div v-if="filteredSchools.length === 0" class="text-center text-gray-500 py-8">
          Aucun lycée trouvé
        </div>
        
        <div v-else class="space-y-2">
          <button
            v-for="school in filteredSchools"
            :key="school.id"
            @click="selectSchool(school)"
            class="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
          >
            <div class="font-medium text-gray-900">{{ school.name }}</div>
            <div class="text-sm text-gray-500 flex items-center gap-2 mt-1">
              <span>{{ school.city }}</span>
              <span>•</span>
              <span>{{ school.type }}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>