import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "PGDM",
      institution: "Indian Institute of Management Sirmaur",
      year: "2017",
      score: "CGPA: 5.60",
      achievements: [
        "Specialized in Finance and Strategic Management",
        "Member of Cultural Committee",
        "Arranged guest lecture by Senior President of Mankind Pharma Ltd. attended by 60 students",
        "Moderated panel discussion by Associate VP, GM of Sun Pharma and Works head at Marico"
      ]
    },
    {
      degree: "B.E (ETC) - Electronics and Telecommunication",
      institution: "Smt. Kashibai Navale College of Engineering, Pune",
      year: "2015",
      score: "55%",
      achievements: [
        "Strong foundation in technical and analytical skills",
        "Developed problem-solving and mathematical competencies"
      ]
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "S.P. College, Pune",
      year: "2010",
      score: "70%",
      achievements: [
        "Focus on Science stream with Mathematics"
      ]
    },
    {
      degree: "High School (10th)",
      institution: "G.S. Highschool, Amalner, Jalgaon",
      year: "2008",
      score: "90%",
      achievements: [
        "Within Top 10 of 200 in class 10th examination",
        "Secured 147 out of 150 marks in mathematics",
        "Ranked consistently among Top 10 out of 200 students for 10 years from 1st to 10th Standard"
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3 className="degree">{edu.degree}</h3>
                <div className="education-meta">
                  <h4 className="institution">{edu.institution}</h4>
                  <div className="year-score">
                    <span className="year">{edu.year}</span>
                    <span className="score">{edu.score}</span>
                  </div>
                </div>
              </div>
              <ul className="achievements">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
