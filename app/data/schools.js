export const schools = [
  {
    id: 1,
    name: "Lycée Etienne Dolet",
    city: "Paris",
    type: "Lycée Public"
  },
  {
    id: 2,
    name: "Lycée Charles de Foucauld",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 3,
    name: "Lycée Guillaume Tirel",
    city: "Paris",
    type: "Lycée Polyvalent"
  },
  {
    id: 4,
    name: "Lycée l'Initiative",
    city: "Paris",
    type: "Lycée Polyvalent"
  },
  {
    id: 5,
    name: "Lycée Saint Jean de Montmartre",
    city: "Paris",
    type: "Lycée Polyvalent Privé"
  },
  {
    id: 6,
    name: "Lycée Pascal",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 7,
    name: "Lycée Saint-Nicolas",
    city: "Paris",
    type: "Lycée Polyvalent Privé"
  },
  {
    id: 8,
    name: "Lycée La Rochefoucauld",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 9,
    name: "Lycée Charles Péguy",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 10,
    name: "Lycée Sainte-Louise",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 11,
    name: "Lycée L'Ecole alsacienne",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 12,
    name: "Lycée ESAA-Ecole Boulle",
    city: "Paris",
    type: "Lycée Polyvalent"
  },
  {
    id: 13,
    name: "Lycée Paul Poiret",
    city: "Paris",
    type: "Lycée Polyvalent"
  },
  {
    id: 14,
    name: "Lycée Charlemagne",
    city: "Paris",
    type: "Lycée Public"
  },
  {
    id: 15,
    name: "Lycée Claude Monet",
    city: "Paris",
    type: "Lycée Public"
  },
  {
    id: 16,
    name: "Lycée Lucien de Hirsch",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 17,
    name: "Lycée Saint-Michel de Picpus",
    city: "Paris",
    type: "Lycée Privé"
  }
];

// Types de lycées disponibles
export const schoolTypes = [
  "Lycée Public",
  "Lycée Privé", 
  "Lycée Polyvalent",
  "Lycée Polyvalent Privé",
  "Lycée Technique",
  "Lycée Technique Privé"
];

// Fonction pour filtrer les écoles par type
export const filterSchoolsByType = (type) => {
  return schools.filter(school => school.type === type);
};

// Fonction pour chercher une école par nom
export const findSchoolByName = (name) => {
  return schools.find(school => 
    school.name.toLowerCase().includes(name.toLowerCase())
  );
};

// Classes disponibles
export const classes = [
  { id: 1, name: "Seconde", level: "2nde" },
  { id: 2, name: "Première", level: "1ère" },
  { id: 3, name: "Terminale", level: "Tale" }
];

// Types de bac disponibles
export const bacTypes = [
  { id: 1, name: "Général", description: "Baccalauréat général" },
  { id: 2, name: "Technologique", description: "Baccalauréat technologique" },
  { id: 3, name: "Professionnel", description: "Baccalauréat professionnel" }
];

// Fonction pour sélectionner une école aléatoire
export const getRandomSchool = () => {
  const randomIndex = Math.floor(Math.random() * schools.length);
  return schools[randomIndex];
};