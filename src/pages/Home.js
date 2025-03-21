import React from 'react';
import './Home.css'; // Add styling here
import myImage from './image/my_image.jpeg'; // Import image directly

const Home = () => {
  return (
    <div className="home">
      {/* Left side - Profile Image */}
      <div className="home-left">
        <img src={myImage} alt="Profile" className="profile-image" />
      </div>

      {/* Right side - Text & Skills */}
      <div className="home-right">
        <h1>Hi, I'm Abhishek Gopale</h1>
        <p>Welcome to My Portfolio, a web developer passionate about building dynamic web applications.</p>

        {/* Skills and Programming Languages Section */}
        <div className="skills-section">
          <h2>Skills</h2>
          <ul>
            <li>Full Stack Development</li>
            <li>Web Designing (HTML, CSS, Bootstrap, Tailwind CSS)</li>
            <li>API Development</li>
            <li>Version Control (Git, GitHub)</li>
            <li>Problem Solving and DSA</li>
          </ul>
        </div>

        <div className="languages-section">
          <h2>Programming Languages</h2>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
