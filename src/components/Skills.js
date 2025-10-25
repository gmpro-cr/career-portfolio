import React from 'react';

const Skills = () => {
  const technicalSkills = [
    'Financial Modeling & Analysis',
    'Risk Assessment & Management',
    'Credit Analysis',
    'Asset Reconstruction',
    'NPA Resolution',
    'Due Diligence',
    'Corporate Banking',
    'Product Management',
    'IBC Framework',
    'SARFAESI Act'
  ];

  const softSkills = [
    'Cross-functional Team Leadership',
    'Strategic Planning',
    'Client Relationship Management',
    'Financial Reporting',
    'Project Management',
    'Problem Solving',
    'Analytical Thinking',
    'Communication'
  ];

  const tools = [
    'Excel (Advanced)',
    'Financial Modeling Software',
    'CMA Preparation',
    'Banking Systems',
    'Documentation Tools',
    'Presentation Tools'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul className="skills-list">
              {softSkills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <ul className="skills-list">
              {tools.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
