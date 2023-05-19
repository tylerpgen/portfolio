import LNSS from "../assets/lntrainingss.jpg";
import MT from "../assets/mt.jpg";
import FS from "../assets/flashcardsite.jpg";
import TG from "../assets/typingtest.jpg";
export const projectData = [
  {
    name: "Personal Trainer Company Site",
    desc: "A website for a personal trainer that features an Amazon-style shop front product page that utilizes the client's affiliate links. The website is fully responsive, ensuring a great user experience on various devices. I actively maintain and upgrade the project based on client requests to ensure optimal functionality and engagement for users.",
    image: LNSS,
    link: "https://ln-training.com/",
  },
  {
    name: "Prescription Tracker Checklist",
    desc: "A web app that allows users to track their medication intake. The app features a checklist where users can enter the medication name and mark a checkbox to indicate if they have taken it for the day. To ensure data persistence and enable user interaction, I utilized React.js tools such as useState, useEffect, and localStorage. This empowers users to effortlessly monitor their medication history and progress, providing a convenient and user-friendly experience.",
    image: MT,
    link: "https://medicine-tracker-710fa.web.app/",
  },
  {
    name: "Flashcard Studying Site",
    desc: "A comprehensive flashcard studying tool with complete CRUD functionality, empowering users to create, read, update, and delete flashcards. The tool utilizes local storage to save user data, ensuring seamless continuity of study sessions even after refreshing the website or exiting it. By incorporating these features, users can effectively manage their flashcards and effortlessly pick up where they left off in their study sessions.",
    image: FS,
    link: "https://tylerpgen.github.io/flashcard-app/",
  },
  {
    name: "Typing Test Game",
    desc: "An interactive web game that utilizes a third-party API to generate random quotes for users to practice their typing skills. Leveraging JavaScript, I implemented functionality that dynamically changes the styles of various components, enhancing user engagement and interactivity. This allows users to have an immersive experience while typing out the quotes and improves their typing abilities in a fun and engaging way.",
    image: TG,
    link: "https://tylerpgen.github.io/tyler-type/",
  },
];
