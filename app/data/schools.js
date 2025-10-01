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
    name: "Lycée du bâtiment et des travaux publics",
    city: "Paris",
    type: "Lycée Technique"
  },
  {
    id: 8,
    name: "Lycée Saint-Nicolas",
    city: "Paris",
    type: "Lycée Polyvalent Privé"
  },
  {
    id: 9,
    name: "Lycée La Rochefoucauld",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 10,
    name: "Lycée de l'école technique supérieure du laboratoire",
    city: "Paris",
    type: "Lycée Technique Privé"
  },
  {
    id: 11,
    name: "Lycée Charles Péguy",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 12,
    name: "Lycée Sainte-Louise",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 13,
    name: "Lycée L'Ecole alsacienne",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 14,
    name: "Lycée ESAA-Ecole Boulle",
    city: "Paris",
    type: "Lycée Polyvalent"
  },
  {
    id: 15,
    name: "Lycée Paul Poiret",
    city: "Paris",
    type: "Lycée Polyvalent"
  },
  {
    id: 16,
    name: "Lycée Charlemagne",
    city: "Paris",
    type: "Lycée Public"
  },
  {
    id: 17,
    name: "Lycée Claude Monet",
    city: "Paris",
    type: "Lycée Public"
  },
  {
    id: 18,
    name: "Lycée Lucien de Hirsch",
    city: "Paris",
    type: "Lycée Privé"
  },
  {
    id: 19,
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