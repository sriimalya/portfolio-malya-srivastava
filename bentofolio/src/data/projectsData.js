import chatAppPhoto from '../assets/images/Chat App.png';
import coinCollector from '../assets/images/coincollector.jpeg';
import bmiCalc from '../assets/images/bmicalc.png';

export const projectsData = [
  {
    name: "Winsock Chatroom",
    description: "A chatroom application using C++ socket programming.",
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
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio website built with React and Tailwind CSS",
    technologies: ["React", "Tailwind CSS", "React Router"],
    photoPath: bmiCalc, // Replace with actual image
    github: "https://github.com/sriimalya/portfolio",
    demo: "https://malyasrivastava.com",
    featured: false
  },
  {
    name: "Weather App",
    description: "A weather application that shows current weather and forecasts.",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    photoPath: bmiCalc, // Replace with actual image
    github: "https://github.com/sriimalya/weather-app",
    demo: "https://weather-app-malya.vercel.app",
    featured: false
  },
  {
    name: "Task Manager",
    description: "A full-stack task management application with authentication.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    photoPath: bmiCalc, // Replace with actual image
    github: "https://github.com/sriimalya/task-manager",
    demo: "https://task-manager-malya.vercel.app",
    featured: false
  }
];