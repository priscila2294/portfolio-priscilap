import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, my name is",
  name: "Priscila Perez",
  subtitle: "I am a Web Developer",
  cta: "Get to know me!",
};

// ABOUT DATA
export const aboutData = {
  img: 'priscilap.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  // resume: '/Priscila-Perez-Resume21.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ca.png',
    title: 'RORSCHACH',
    info: 'React on Rails application built from scratch as a final capstone project for ECHO 2020 LEARN Academy cohort.',
    info2: 'Rorschach is an interactive platform that allows its users to select a random picture from an external API, write a description, post it, and vote on other users’ posts.',
    url: 'https://quiet-sea-29852.herokuapp.com/',
    repo: 'https://github.com/priscila2294/Rorschach', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'piglatin.png',
    title: 'PIG LATIN',
    info: 'React application built from scratch as a project for ECHO 2020 LEARN Academy cohort.',
    info2: 'This Pig Latin application allows its users to type sentences that will be dynamically translated into Pig Latin.',
    url: 'https://vigilant-poitras-7c725d.netlify.app/',
    repo: 'https://github.com/priscila2294/pig-latin-challenge-alan-alejandro-priscila', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'api.png',
    title: 'EXTERNAL API',
    info: 'React app built from scratch as a project for ECHO 2020 LEARN Academy cohort.',
    info2: 'This application fetches jokes and images from two external APIS',
    url: 'https://determined-lamarr-0c630b.netlify.app',
    repo: 'https://github.com/priscila2294/pig-latin-challenge-alan-alejandro-priscila', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'priscilap.developer94@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/priscilap-developer/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/priscila2294',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
