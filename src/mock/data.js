import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dan Geddes | Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Dan Geddes Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Dan Geddes',
  subtitle: 'Junior Front-End Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  paragraphOne: 'I am a self taught Web Developer who wants to break into the tech industry. I am highly motivated, conscientious and very hard working. Proficient in HTML, CSS, JavaScript and React. I also have experience using Node.js, SQL and MongoDB as well as some Python, PHP and Java. ',
  paragraphTwo: 'My passion is in coding, building stylish web pages and learning new technologies. I have been learning to code for 2 years and have focused on front-end technologies the past year and completing the web-dev career path on Codecademy.',
  paragraphThree: 'My background is in carpentry which has given me many transferable skills including problem solving, self-management and team-working.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Design',
    info: 'Built with React, HTML, CSS and JavaScript. Uses a smooth scroll and utilises styled components.',
    info2: '',
    url: 'http://smoothscrolldesign.surge.sh/',
    repo: 'https://github.com/Daniel-Geddes/landing-page-smooth-scroll', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Pics',
    info: 'Built with React, HTML, CSS and JavaScript. Landing page.',
    info2: '',
    url: 'http://picslanding.surge.sh/',
    repo: 'https://github.com/Daniel-Geddes/landing-page-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Jamming',
    info: 'Built with React, HTML, CSS and JavaScript. Uses the Spotify API to add your favourite songs to playlists.',
    info2: '',
    url: 'http://jamming-with-dan.surge.sh/',
    repo: 'https://github.com/Daniel-Geddes/Jamming', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Ravenous',
    info: 'Built with React, HTML, CSS and JavaScript. Uses the Yelp API to search for restaurants.',
    info2: '',
    url: 'http://im-ravenous.surge.sh/',
    repo: 'https://github.com/Daniel-Geddes/Ravenous-React-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.jpg',
    title: 'My Day',
    info: 'HTML, CSS and JavaScript. A basic to-do-list app. You can prioritise tasks and tick them off.',
    info2: '',
    url: 'http://square-jeans.surge.sh/',
    repo: 'https://github.com/Daniel-Geddes/To-Do-List-App', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I am open to work and actively applying for positions in and around Hampshire. I am very keen to work so please let me know if you are interested in giving me a chance.',
  btn: '',
  email: 'dangeddes22@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dan-geddes-10b2a562/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Daniel-Geddes',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
