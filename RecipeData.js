export const recipes = [
  {
    id: 1,
    image: require("./assets/images/recipe2.jpg"),
    videoUrl: "https://www.youtube.com/embed/CltUZnoUDFM?start=15&autoplay=0",
    title: "Klassiska kokosbollar",
    category: "Förrätter",
    description:
      "Försvinnande god klassiker. Lite starkt kaffe i smeten gör dem mer vuxna!",
    details: [
      "✓ Pasta med köttfärsås",
      "✓ Grekisk sallad",
      "✓ Carbonara",
      "✓ Tacos",
    ],
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    videoCourses: [
      { courseTitle: "Kött", courseContent: "Kött beskrivning", courseId: 1 },
      { courseTitle: "Fisk", courseContent: "Fisk beskrivning",  courseId: 2 },
      { courseTitle: "Korv", courseContent: "Korv beskrivning",  courseId: 3 },
    ],
  },
  {
    id: 2,
    image: require("./assets/images/recipe1.jpg"),
    videoUrl: "https://www.youtube.com/embed/TOYYHImHNNk?start=15&autoplay=0",
    title: "Recept 2",
    category: "Huvudrätt",
    description: "Detaljer för kort 2",
    details: ["Detalj 1", "Detalj 2"],
    aboutText: "Denna text beskriver recept 2.",
    videoCourses: [
      { courseTitle: "Grönsaker", courseContent: "Grönsaker beskrivning", courseId: 1 },
      { courseTitle: "Vegan", courseContent: "Vegan beskrivning", courseId: 2 },
      { courseTitle: "Dessert", courseContent: "Dessert beskrivning", courseId: 3 },
    ],
  },
  {
    id: 3,
    image: require("./assets/images/recipe2.jpg"),
    videoUrl: "https://www.youtube.com/embed/CltUZnoUDFM?start=15&autoplay=0",
    title: "Recept 3",
    category: "Dessert",
    description: "Detaljer för kort 3",
    details: ["Detalj 1", "Detalj 2", "Detalj 3"],
    aboutText: "Detta är information om recept 3.",
    videoCourses: [
      { courseTitle: "Fika", courseContent: "Fika beskrivning",  courseId: 1 },
      { courseTitle: "Soppa", courseContent: "Soppa beskrivning",  courseId: 2 },
      { courseTitle: "Kyckling", courseContent: "Kyckling beskrivning",  courseId: 3 },
    ],
  },
];
