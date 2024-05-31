import {     
  css,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  redux,
  vite,
  booki,
  argentBank,
  kasa,
  ohmyfood,
  sophieBluel,
  cnrs,
  openclassroom,
  thales,
 } from "../assets";

const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "skill",
    title: "Compétences",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "experience",
    title: "Experiences"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Booki",
    image: booki,
    description: "Création d'une page d'accueil pour un site de voyage en utilisant seulement en HTML et CSS, à partir de maquettes Figma. Mise en place de la notion d'interface responsive.",
    tags: [
      "HTML",
      "CSS",
    ],
    code_link: "https://github.com/lduverger/Booki"
  },
  {
    name: "OhMyFood",
    image: ohmyfood,
    description: "Création d'un site pour répertorier les menus d'un restaurant. Apprentissage du préprocesseur SASS, afin de mieux structurer et optimiser le CSS tout en créant des animations.",
    tags: [
      "SASS",
      "HTML",
    ],
    code_link: "https://github.com/lduverger/ohmyfood"
  },
  {
    name: "Portfolio Sophie Bluel",
    image: sophieBluel,
    description: "Création d'une page web dynamique à partir d'une maquette Figma et en utilisant Javascript. Communication avec une API.",
    tags: [
      "JS",
    ],
    code_link: "https://github.com/lduverger/Portfolio-architecte-sophie-bluel"
  },
  {
    name: "Kasa",
    image: kasa,
    description: "Création d'une application Front-end de location immobilière en utilisant React. Premier projet avec React à partir d'une maquette Figma.",
    tags: [
      "React",
    ],
    code_link: "https://github.com/lduverger/Kasa"
  },
  {
    name: "ArgentBank",
    image: argentBank,
    description: "Développement Front-end d'une application bancaire en utilisant React et Redux. Il a fallut recréer l'application en React à partir de fichier HTML, mettre en place Redux pour le partage des données entre les composants et mettre une authentification ",
    tags: [
      "React",
      "Redux Toolkit",
    ],
    code_link: "https://github.com/lduverger/ArgentBank"
  },
];

const technos = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Vite",
    icon: vite,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Etudiant Intégrateur Web",
    company: "Openclassroom",
    icon: openclassroom,
    iconBg: "#383E56",
    date: "Septembre 2023 - Maintenant",
    points: [
      "Apprentissage des bases en développement web (HTML, CSS)",
      "Apprentissage de JS",
      "Création d'application avec React",
    ],
  },
  {
    title: "Ingénieur d'études",
    company: "CNRS",
    icon: cnrs,
    iconBg: "#C5EAE7",
    date: "Mai 2022 - Mai 2023",
    points: [
      "Développement en Java",
      "Prototype d'agent JADE",
    ],
  },
  {
    title: "Ingénieur IVVQ",
    company: "Thales",
    icon: thales,
    iconBg: "#E6DEDD",
    date: "Avril 2018 - Janvier 2022",
    points: [
      "Tests fonctionnels",
      "Gestion des faits techniques",
      "Rédaction de fiches de tests",
    ],
  },
]

export {navLinks, projects, technos, experiences};