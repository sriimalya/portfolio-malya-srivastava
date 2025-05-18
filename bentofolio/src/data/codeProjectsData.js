import chatAppPhoto from '../assets/images/Chat App.png';
import coinCollector from '../assets/images/coincollector.jpeg';
import bmiCalc from '../assets/images/bmicalc.png';
import quizApp from '../assets/images/QuizzApp.png';
import taskManager from '../assets/images/taskManager.png';
import EventListing from '../assets/images/Event Listing.png';

export const codeProjectsData = [
  {
    name: "Sydney Events Scraper",
    description: "A Next.js web app with server-side scraping (Puppeteer), real-time event updates, and email-based ticketing—all connected to PostgreSQL via Prisma.",
    technologies: ["Next.js", "Typescript", "Puppeteer", "PostgreSQL", "Prisma"],
    photoPath: EventListing,
    github: "https://github.com/sriimalya/louder-scrape-sydney-events",
    demo: "https://louder-scrape-sydney-events.vercel.app/",
    featured: true
  },
  {
    name: "Winsock Chatroom",
    description: "Interactive Multi-Client Chat Application Leveraging C++ Socket Programming",
    technologies: ["C++", "Winsock"],
    photoPath: chatAppPhoto,
    github: "https://github.com/sriimalya/winsock-chatroom",
    demo: null,
    featured: true
  },
  {
    name: "Task Manager",
    description: "A simple task manager that allows users to add, edit, delete and search the tasks.",
    technologies: ["React", "CSS", "Redux Toolkit"],
    photoPath: taskManager,
    github: "https://github.com/sriimalya/task-manager-redux-toolkit",
    featured: true
  },
  {
    name: "Quiz App",
    description: "A simple React-based quiz app that evaluates user answers and displays the final score upon completion.",
    technologies: ["CSS", "React"],
    photoPath: quizApp,
    github: "https://github.com/sriimalya/quizz-app",
    featured: true
  },
  {
    name: "BMI Calculator",
    description: "A web app that calculates and displays Body Mass Index (BMI)",
    technologies: ["HTML", "CSS", "JavaScript"],
    photoPath: bmiCalc,
    github: "https://github.com/sriimalya/JS-Projects/tree/main/2-BMI%20Calculator",
    demo: "https://sriimalya.github.io/JS-Projects/2-BMI%20Calculator/index.html",
    featured: true
  },
  {
    name: "Coin Collector",
    description: "In this game the player navigates through an environment and collect coins.",
    technologies: ["Unity3D", "C#"],
    photoPath: coinCollector,
    github: "https://github.com/sriimalya/Coin-Collector",
    demo: "https://youtu.be/pNFaFmm1QyM?si=oovgsXYyFJutG4oN",
    featured: true
  },
];