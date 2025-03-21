import React from 'react';
import './ResumePage.css';

const ResumePage = () => {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <p>Here is my professional resume. Feel free to download it.</p>
      {/* Link to the PDF in the public folder */}
      <a href="/pdf/resume.pdf" download>Download Resume</a>
    </div>
  );
};

export default ResumePage;