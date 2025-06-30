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
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
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
    portfolio,
    gatech
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
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    // {
    //   title: "Frontend Developer",
    //   icon: web,
    // },
    // {
    //   title: "Backend Developer",
    //   icon: creator,
    // },
    // {
    //   title: "Full Stack Developer",
    //   icon: backend,
    // },
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
      title: "Full Stack Developer",
      company_name: "She Inspires Me",
      icon: sim,
      iconBg: "#AAA6C3",
      date: "April 2024 – Present",
      points: [
        "Created a multi-page, responsive company landing page by translating Figma designs using Next.js and SCSS",
        "Designed and implemented an admin panel that allows non-technical team members to contribute to the website content management without needing to dive into source code, reducing content update time by 70%",
        "Developed and integrated 10+ C# APIs used for updating website’s content with data provided through a MySQL database, allowing for dynamic content loading and storage",
        "Implemented and optimized MySQL database schema to efficiently store user data, donations, and content management system data, ensuring scalability and maintaining data integrity across the platform, managing data for 10,000+ users",
      ],
    },
    {
      title: "Database Researcher",
      company_name: "University of Wisconsin-Madison",
      icon: madison,
      iconBg: "#383E56",
      date: "June 2023 - December 2023",
      points: [
        "Utilized the column-oriented Parquet file format specification for understanding encoding mechanisms for large data compression and retrieval", 
        "Analyzed and compared Parquet capabilities on encoding techniques like delta encoding for time-series for data storage and retrieval by implementing them in C++",
        "Developed comprehensive test suites leveraging Arrow’s testing framework to validate Parquet file operations, data encoding mechanisms, and query processing functionality while ensuring robust error handling",
      ],
    },
    
  ];
  
  const educations = [
    {
      name: "Georgia Institute of Technology",
      time: "Jan 2025 - Present",
      degree: "Master of Science",
      major: "Computer Science",
      gpa: "4.0",
      image: gatech,
    },
    {
      name: "University of Wisconsin-Madison",
      time: "Sep 2021 - Dec 2023",
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
        "An Enigma Machine Simulator using Java, SQL, and AWS RDS, incorporating dynamic UI interactions with JavaScript and comprehensive encryption algorithm design. Collaborated in an agile team to ensure strong design and implementation through continuous integration and JUnit testing.",
      tags: [
        {
          name: "HTML, JS, CSS",
        },
        {
          name: "AWS RDS",
        },
        {
          name: "Docker",
        },
        {
          name: "Java",
        },
      ],
      image: enigma,
      source_code_link: "https://github.com/anhbertz/Enigma-Machine-Simulator",
    },
    {
      name: "Six Degrees of Wikipedia",
      description:
        "An interactive game that maps the shortest path between two Wikipedia articles using Dijkstra’s Algorithm. Used JSoup for data scraping. Enhanced user experience with a JavaFX interface, ensuring robust deployment with 100% JUnit code coverage.",
      tags: [
        {
          name: "JavaFX",
        },
        {
          name: "FXML",
        },
        {
          name: "Java",
        },
        {
          name: "JUnit",
        },
      ],
      image: sixDegree,
      source_code_link: "https://github.com/anhbertz/Six-Degrees-of-Wikipedia",
    },
    {
      name: "VR Battle Chess AI",
      description:
        "A Chess AI in Unity using advanced algorithms like Monte Carlo Tree Search and Minimax. Configured VR settings for realistic gameplay. Adaptable AI difficulty based on user skill, ensuring a challenging yet accessible game experience.",
      tags: [
        {
          name: "C#",
        },
        {
          name: "Unity",
        },
      ],
      image: chessAI,
      source_code_link: "https://github.com/anhbertz/chessAI",
    },
    {
      name: "Travel Advisor App",
      description:
        "Developed an advanced Travel Advisor App utilizing Google Maps, incorporating features like geolocation, place search, and data fetching for restaurants, hotels, and attractions using Rapid APIs.",
      tags: [
        {
          name: "JavaScript",
        },
        {
          name: "HTML",
        },
        {
          name: "Rapid API",
        },
        {
          name: "Travel Advisor API",
        },
        {
          name: "Open Weather API",
        },
      ],
      image: travelAdviosr,
      source_code_link: "https://github.com/anhbertz/TravelAdvisorApp",
    },
    {
      name: "MineSweeper Simulator",
      description:
        "A MineSweeper game with a GUI that emulates the Windows XP version, implementing Depth First Search on an adjacency matrix to evaluate user clicks and gameplay dynamics.",
      tags: [
        {
          name: "JavaFX",
        },
        {
          name: "Java",
        },
      ],
      image: mineSweeper,
      source_code_link: "https://github.com/anhbertz/MineSweeper",
    },
    {
      name: "Online Portfolio",
      description:
        "A personal website using HTML, CSS, JavaScript, and React, featuring a responsive design that includes a portfolio of past projects and a blog to discuss web development topics.",
      tags: [
        {
          name: "Vite",
        },
        {
          name: "TailwindCSS",
        },
        {
          name: "Three.js",
        },
        {
          name: "React JS",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/anhbertz/Anh-Tran-Portfolio",
    },
  ];
  
  export { services, technologies, experiences, educations, projects, certificates};