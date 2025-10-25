import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am <strong>Gaurav Mahale</strong>, a 32-year-old finance professional with extensive experience 
              in corporate banking, asset reconstruction, and financial product management. Currently serving as 
              Assistant Vice President at Yes Bank Limited, I specialize in emerging local corporates and 
              stressed asset management.
            </p>
            <p>
              With a PGDM from IIM Sirmaur and a strong technical background in Electronics and Telecommunication, 
              I bring a unique blend of analytical skills and strategic thinking to financial solutions. My expertise 
              spans across product management, risk assessment, NPA resolution, and cross-functional team collaboration.
            </p>
            <p>
              I have successfully managed corporate accounts with turnovers ranging from 250 Cr to 1500 Cr, 
              developed financial models for stressed asset recovery, and played key roles in major restructuring 
              projects including the Jaypee Infratech Limited resolution plan.
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> mahalegaurav.k@gmail.com</p>
              <p><strong>Phone:</strong> +91 9923540336</p>
              <p><strong>Location:</strong> Maharashtra, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
