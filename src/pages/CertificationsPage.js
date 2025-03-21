import React from 'react';
import SQL from './image/SQL.jpg';
import ML from './image/ML.jpg';
import './CertificationsPage.css';
import Bambari from './image/Bambari.jpg';
const certifications = [
  { name: "SQL", issuer: "lets upgred", image: SQL },
  { name: "Machin Larnine", issuer: "Intelshala", image: ML },
  { name: "softwre devloper intership", issuer: "Bambari", image: Bambari },
  // Add more certifications as needed
];

const CertificationsPage = () => {
  return (
    <div className="certifications">
      <h2>Certifications</h2>
      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img src={cert.image} alt={cert.name} className="certification-image" />
            <h3>{cert.name}</h3>
            <p>Issued by: {cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;
