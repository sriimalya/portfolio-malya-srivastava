import chatAppPhoto from '../assets/images/Chat App.png';
import coinCollector from '../assets/images/coincollector.jpeg';
import bmiCalc from '../assets/images/bmicalc.png';

export const codeProjectsData = [
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
    name: "Coin Collector",
    description: "In this game the player navigates through an environment and collect coins.",
    technologies: ["Unity3D", "C#"],
    photoPath: coinCollector,
    github: "https://github.com/sriimalya/Coin-Collector",
    demo: "https://youtu.be/pNFaFmm1QyM?si=oovgsXYyFJutG4oN",
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
  }
];