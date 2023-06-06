import LNvideo from "../assets/lntrainingv.mp4";
import MedicineVideo from "../assets/medicinevideo.mp4";
import FlashVid from "../assets/flashvid.mp4";
import TypeVid from "../assets/typevideo.mp4";
import ShopVid from "../assets/ecommerce.mp4";

export const projectData = [
  {
    name: "Personal Trainer Company Site",
    desc: "A website for a personal trainer that features an Amazon-style shop front product page that utilizes the client's affiliate links. The website is fully responsive, ensuring a great user experience on various devices. I actively maintain and upgrade the project based on client requests to ensure optimal functionality and engagement for users.",
    link: "https://ln-training.com/",
    video: LNvideo,
  },
  {
    name: "E-Commerce Front-End Shop",
    desc: "This front-end project is a visually appealing web application that presents a design layout for an e-commerce store specializing in sneakers. It is fully responsive to provide a seamless user experience across various devices, ensuring that all assets are displayed correctly regardless of the screen size. The project incorporates reusable components that are both aesthetically pleasing and functional, facilitating efficient development and enabling their use in future projects. Key pages such as the login, registration, and checkout pages are thoughtfully included to provide a comprehensive shopping experience.",

    link: "https://game-3ffe5.web.app/",
    video: ShopVid,
  },
  {
    name: "Prescription Tracker Checklist",
    desc: "A web app that allows users to track their medication intake. The app features a checklist where users can enter the medication name and mark a checkbox to indicate if they have taken it for the day. To ensure data persistence and enable user interaction, I utilized React.js tools such as useState, useEffect, and localStorage. This empowers users to effortlessly monitor their medication history and progress, providing a convenient and user-friendly experience.",

    link: "https://medicine-tracker-710fa.web.app/",
    video: MedicineVideo,
  },
  {
    name: "Flashcard Studying Site",
    desc: "A comprehensive flashcard studying tool with complete CRUD functionality, empowering users to create, read, update, and delete flashcards. The tool utilizes local storage to save user data, ensuring seamless continuity of study sessions even after refreshing the website or exiting it. By incorporating these features, users can effectively manage their flashcards and effortlessly pick up where they left off in their study sessions.",
    link: "https://tylerpgen.github.io/flashcard-app/",
    video: FlashVid,
  },
  {
    name: "Typing Test Game",
    desc: "An interactive web game that utilizes a third-party API to generate random quotes for users to practice their typing skills. Leveraging JavaScript, I implemented functionality that dynamically changes the styles of various components, enhancing user engagement and interactivity. This allows users to have an immersive experience while typing out the quotes and improves their typing abilities in a fun and engaging way.",
    link: "https://tylerpgen.github.io/tyler-type/",
    video: TypeVid,
  },
];
