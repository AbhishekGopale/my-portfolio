import React from 'react';
import './ProjectsPage.css';
import myImage from './image/online-exams.jpg'; 
import myImage2 from './image/dragon.png'; 
import myImage3 from './image/eCommerce.jpg'; 

const projects = [
  {
    title: "Test your skill",  // Fixed the typo here (from 'sill' to 'skill')
    description: "A web app built with PHP and SQL.",
    image: myImage,
    link: "https://abhiexam.42web.io/?i=1",
    buttonText: "Start Exam",  // Custom button text
  },
  {
    title: "Dragon Game",
    description: "the gmae billd on html,css,js play for fun.",
    image: myImage2,
    link: "https://abhishekgopale.github.io/dragon-game/",
    buttonText: "Play Game",  // Custom button text
  },
  {
    title: "Digital Market Place",
    description: "Developed a full-stack e-commerce platform enabling users to browse, add products, and manage inventory. Technologies used: React.js (Front-end), Node.js with Express.js (Backend), MongoDB (Database), JWT Authentication. Achievements: Successfully implemented user authentication, dynamic product management, and a secure shopping experience.",
    image: myImage3,
    buttonText: null,  // No button for this project
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && project.buttonText && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="project-button">{project.buttonText}</button>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;