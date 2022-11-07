import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Jason Otter | Software Engineer", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "",
  name: "Jason Otter",
  subtitle: "I'm a Software Engineer",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "",
  paragraphOne:
    "I'm from Orange County, CA and a CSUF alumnus. I enjoy learning about the web and game development. I focus on web technologies (mostly Javascript) but will try projects in other disciplines when I'm feeling up to the challenge.",
  paragraphTwo:
    "I will work within your budget and provide equal value. If you need a website or developer for your next project. Look no futher.",
  paragraphThree:
    "To find out more about how I can help you and your business, please feel free to send me an email and I will respond as soon as I can.",
  resume: "", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "twitter-showcase-search-demo.gif",
    title: "Twitter Showcase",
    info: "An application for searching Twitter built with React and Node",
    info2: "",
    url: "https://papaya-jalebi-21db43.netlify.app/",
    repo: "https://github.com/j-otterbox/twitter-showcase", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "swapi-demo2.gif",
    title: "Star Wars API",
    info: "An application for searching information on the Star Wars universe built with React",
    info2: "",
    url: "https://aesthetic-sfogliatella-5a6c09.netlify.app/",
    repo: "https://github.com/j-otterbox/star-wars-api", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "snake-game-demo3.gif",
    title: "Snake App",
    info: "Classic Snake game written in JavaScript, HTML and CSS",
    info2: "",
    url: "https://j-otterbox.github.io/js-snake/",
    repo: "https://github.com/j-otterbox/js-snake", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/j_otterbox",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/jason-otter/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/j-otterbox",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
