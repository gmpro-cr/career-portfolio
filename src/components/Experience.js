import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Yes Bank Limited",
      position: "Assistant Vice President",
      duration: "April 2022 - Present",
      responsibilities: [
        "Develop and offer financial products tailored to corporate clients with turnover 250 Cr to 1500 Cr",
        "Working on preparing FB/NFBTL product proposals including CMA, WC and facility assessments",
        "Collaborate with cross-functional teams (Credit, Legal, Trade, Forex) to offer suitable products",
        "Identify and prioritize new market opportunities by leveraging internal and external networks",
        "Managing NPA product portfolio of corporate stressed accounts and maximize dues collection",
        "Develop financial plans/models to forecast and optimize recovery outcomes for stressed accounts",
        "Collaborate with legal, compliance on frameworks like IBC, SARFAESI and debt restructuring"
      ]
    },
    {
      company: "HDFC Bank Limited",
      position: "Manager",
      duration: "January 2020 - April 2022",
      responsibilities: [
        "Identify potential delinquent cases and work on resolution and minimizing probability of default",
        "Formulating restructuring plan and calculate additional funding needs according to projected financials",
        "Working on analysing financing proposals and evaluate minimum additional funding required",
        "Creating sector specific financials for projects in sectors like real estate, energy and hotels",
        "Interacting with business, credit and recovery teams for the region of Maharashtra and Goa"
      ]
    },
    {
      company: "Suraksha Asset Reconstruction Ltd.",
      position: "Operations Manager",
      duration: "October 2017 - January 2020",
      responsibilities: [
        "Analysing the financial health and recovery potential of NPA accounts offered for sale by banks",
        "Liaising with bank officials and legal team for acquisition and resolution process of accounts",
        "Handling of NPA cases in several sectors with total AUM of more than Rs. 500 Cr",
        "Analysis of funding proposals by making financial projections and valuing the security offered",
        "Working on due diligence and loan documentation for cases having ticket size more than Rs. 50 Cr",
        "Responsible for financial due diligence and Insolvency Process of Jaypee Infratech Limited (JIL)",
        "Involved in drafting of Resolution Plan and making financial models of the debt laden company"
      ]
    },
    {
      company: "Tata Trusts - Ministry of Water and Sanitation",
      position: "Consultant",
      duration: "May 2017 - Sept 2017",
      responsibilities: [
        "Responsible for catalysing the existing process to complete the work within the set deadline",
        "Reporting to CEO of ZP, Tata trusts Managers and to the Ministry on progress in the Campaign",
        "Setting up a system of extension officers, BRCs CRCs to speed up the process of MIS entries",
        "Within 2 months Dhule district crossed 8 others from last position in number of IHHLs",
        "Initiated process to build Hand wash Station in 1200 schools with the help of Rotary Club"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="company-name">{exp.company}</h3>
                <div className="experience-meta">
                  <h4 className="position">{exp.position}</h4>
                  <span className="duration">{exp.duration}</span>
                </div>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
