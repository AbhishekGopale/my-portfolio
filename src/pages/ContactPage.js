import React from 'react';
import './ContactPage.css';

// Importing the logos from online sources
const phoneIcon = "https://img.icons8.com/ios-filled/50/000000/phone.png";
const emailIcon = "https://img.icons8.com/ios-filled/50/000000/email.png";
const linkedinIcon = "https://img.icons8.com/ios-filled/50/000000/linkedin.png";
const githubIcon = "https://img.icons8.com/ios-filled/50/000000/github.png";
const codeshifterIcon = "https://img.icons8.com/ios-filled/50/000000/code.png";
const haerranIcon = "https://img.icons8.com/ios-filled/50/000000/website.png";

const ContactPage = () => {
  return (
    <div className="contact">
      <h2>Contact Information</h2>

      {/* Contact Information Table */}
      <table className="contact-table">
        <tbody>
          <tr>
            <td>
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <span>+91 9821512117</span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <span>gopaleabhishek21@gmail.com</span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.linkedin.com/in/abhishek-gopale-7b16a3278/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
                <span>LinkedIn Profile</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://github.com/AbhishekGopale" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="contact-icon" />
                <span>GitHub Profile</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.codechef.com/users/gopaleabhishek" target="_blank" rel="noopener noreferrer">
                <img src={codeshifterIcon} alt="CodeShifter" className="contact-icon" />
                <span>CodeShifter Profile</span>
              </a>
            </td>
          </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default ContactPage;