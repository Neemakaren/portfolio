import {Agro, Blog, JobBoard, Ecommerce, FindMe, Beauty, Furniture, Petopia} from '../assets'



export const projects = [
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "Beauty-Salon",
    Technology: [
      "React",
      "Vite",
      "Tailwind",
      "Github",
      "Json Server",
      "React-Router-Dom",
      "Appwrite",
    ],
    profileUrl: Beauty,
    purpose:
      "This app is for hairdressers to directly interact with clients. I used Appwrite for Auth and to implement a chat section where a client gets to choose which services they require and directly engage with the stylists that specialize in that service. The app also has a shopping section that they get to pick beauty products they prefer to be used and can then be deliveredto them. This app will enable clients to get services wherever they want it.",
    link: "https://github.com/Neemakaren/organic-farm-app",
    view: "https://job-board-beta-two.vercel.app/",
  },
  {
    id: "recZkNf2kwmdBcqd0",
    name: "Job Board App",
    Technology: [
      "React",
      "Vite",
      "Tailwind",
      "Github",
      "Json Server",
      "React-Router-Dom",
    ],
    profileUrl: JobBoard,
    purpose:
      "designed the overall look of this app and brought it to life using tailwind css and also made it fully responsive across multiple devices. I implemented the abilty to filter through several listings inorder to find particular ones. I also implemented a json file inorder to mimic a real api call and displayed the data. The app has several pages that you can seemlessly look through using React Router Dom. Also intergrated a currency converter.",
    link: "https://github.com/Neemakaren/job-finder",
    view: "https://job-board-beta-two.vercel.app/",
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "Blog App",
    Technology: [
      "React",
      "Vite",
      "Tailwind",
      "Github",
      "React-Redux",
      "React-Router-Dom, React-Icons, Axios",
    ],
    profileUrl: Blog,
    purpose:
      "Blog application that fully maintains state using Redux Toolkit. You can edit post add likes using emojis. The app fetches posts and authors displaying them individually on click",
    link: "https://github.com/Neemakaren/blog-app",
    view: "https://job-board-beta-two.vercel.app/",
  },
  {
    id: "rec5NBwZ5zCD9nfF1",
    name: "Furniture-Store",
    Technology: [
      "React",
      "Vite",
      "Tailwind",
      "Github",
      "React-Router-Dom",
      "context",
      "figma",
    ],
    profileUrl: Furniture,
    purpose:
      "A furniture store app that maintains state with react context. It has a multi layer filter for the diffrent products available. ",
    link: "https://github.com/Neemakaren/job-finder",
    view: "https://job-board-beta-two.vercel.app/",
  },
  // {
  //   id: 'rec5NBwZ5zCD9nfF2',
  //   name: "Ecommerce",
  //   Technology: ['React', 'Vite', 'Tailwind', 'Github', 'axios', 'React-Router-Dom', 'context'],
  //   profileUrl: Ecommerce,
  //   purpose: 'An Ecommerce app that manages state with React Context. Client has the ability to search for particular products, add to cart, remove from cart and persist state using local storage.',
  //   link: 'https://github.com/Neemakaren/job-finder'
  // },
  {
    id: "rec5NBwZ5zCD9nfF3",
    name: "Petopia",
    Technology: ["React", "Vite", "Tailwind", "Github", "Figma"],
    profileUrl: Petopia,
    purpose:
      "This a figma design that I brought to life using React and tailwind css",
    link: "https://github.com/Neemakaren/job-finder",
    view: "https://job-board-beta-two.vercel.app/",
  },
];