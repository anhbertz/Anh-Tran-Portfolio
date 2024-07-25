import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    madison,
    sim,
    mineSweeper,
    chessAI,
    enigma,
    travelAdviosr,
    sixDegree,
    google,
    aws,
    c,
    cs,
    cpp,
    junit,
    nextjs,
    python,
    r,
    sanity,
    sql,
    tableau,
    unity,
    portfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "CS",
      icon: cs,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "JUnit",
      icon: junit,
    },
    {
      name: "NextJS",
      icon: nextjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "Sanity",
      icon: sanity,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "Unity",
      icon: unity,
    },
 
 
  ];
  
  const experiences = [
    {
      title: "Database Researcher",
      company_name: "University of Wisconsin-Madison",
      icon: madison,
      iconBg: "#383E56",
      date: "June 2023 - December 2023",
      points: [
        "Utilized the Parquet file format specification as a reference for understanding encoding mechanisms",
        "Analyzed and compared encoding techniques (like delta encoding for time-series) for data storage and retrieval performance by replicating them in C++",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "She Inspires Me",
      icon: sim,
      iconBg: "#AAA6C3",
      date: "April 2024 – Present",
      points: [
        "Translated detailed Figma designs into a highly responsive website using Next.js and SCSS",
        "Designed and implemented an admin panel to efficiently manage and organize the website’s content and operations",
        "Developed and integrated C# APIs used for dynamically updating website's content with data provided through a MySQL database"
      ],
    },
  ];
  
  const educations = [
    {
      name:
        "University of Wisconsin-Madison",
      degree: "Bachelor of Science",
      major: "Computer Science",
      gpa: "3.64",
      image: madison,
    },
  ];

  const certificates = [
    {
      name:
        "Google Data Analytics Specialization",
      date: "May 2024",
      image: google,
    },
  ];
  
  const projects = [
    {
      name: "Enigma Machine Simulator",
      description:
        "An Enigma Machine Simulator using Java, SQL, and AWS RDS, incorporating dynamic UI interactions with JavaScript and comprehensive encryption algorithm design. Collaborated in an agile team to ensure robust design and implementation through continuous integration and JUnit testing.",
      tags: [
        {
          name: "HTML, JS, CSS",
          color: "blue-text-gradient",
        },
        {
          name: "AWS RDS",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: enigma,
      source_code_link: "https://github.com/anhttran166/Enigma-Machine-Simulator",
    },
    {
      name: "Six Degrees of Wikipedia",
      description:
        "An interactive game that maps the shortest path between two Wikipedia articles using Dijkstra’s Algorithm and JSoup for data scraping. Enhanced user experience with a JavaFX interface, ensuring robust deployment with 100% JUnit code coverage.",
      tags: [
        {
          name: "JavaFX",
          color: "blue-text-gradient",
        },
        {
          name: "FXML",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
        {
          name: "JUnit",
          color: "pink-text-gradient",
        },
      ],
      image: sixDegree,
      source_code_link: "https://github.com/anhttran166/Six-Degrees-of-Wikipedia",
    },
    {
      name: "VR Battle Chess AI",
      description:
        "A Chess AI in Unity using advanced algorithms like Monte Carlo Tree Search and Minimax, optimizing VR settings for realistic gameplay. Improved AI difficulty based on user feedback, ensuring a challenging yet accessible game experience.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: chessAI,
      source_code_link: "https://github.com/anhttran166/chessAI",
    },
    {
      name: "Travel Advisor App",
      description:
        "Developed and deployed an advanced Travel Advisor App utilizing Google Maps, incorporating features like geolocation, place search, and data fetching for restaurants, hotels, and attractions using Rapid APIs.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Rapid API",
          color: "green-text-gradient",
        },
        {
          name: "Travel Advisor API",
          color: "green-text-gradient",
        },
        {
          name: "Open Weather API",
          color: "green-text-gradient",
        },
      ],
      image: travelAdviosr,
      source_code_link: "https://github.com/anhttran166/TravelAdvisorApp",
    },
    {
      name: "MineSweeper Simulator",
      description:
        "A MineSweeper game with a GUI that emulates the Windows XP version, implementing Depth First Search on an adjacency matrix to evaluate user clicks and gameplay dynamics.",
      tags: [
        {
          name: "JavaFX",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: mineSweeper,
      source_code_link: "https://github.com/anhttran166/MineSweeper",
    },
    {
      name: "Online Portfolio",
      description:
        "A personal website using HTML, CSS, JavaScript, and React, featuring a responsive design that includes a portfolio of past projects and a blog to discuss web development topics.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "blue-text-gradient",
        },
        {
          name: "React JS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/anhttran166/Anh-Tran-Portfolio",
    },
  ];
  
  export { services, technologies, experiences, educations, projects, certificates};