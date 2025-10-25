import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Apollo Tyres Valuation Analysis",
      category: "Financial Analysis",
      description: "Comprehensive DCF valuation of Apollo Tyres with buy recommendation for undervalued shares",
      technologies: ["DCF Modeling", "Financial Analysis", "Equity Valuation"],
      highlights: [
        "Conducted thorough discounted cash flow analysis",
        "Analyzed financial statements and market conditions",
        "Provided strategic investment recommendation"
      ]
    },
    {
      title: "Jaypee Infratech Limited Resolution Plan",
      category: "Corporate Restructuring",
      description: "Led financial due diligence and resolution planning for debt-laden real estate company under IBC framework",
      technologies: ["IBC Framework", "Financial Modeling", "Due Diligence"],
      highlights: [
        "Managed resolution process with selection as highest bidder",
        "Drafted comprehensive resolution plan with financial models",
        "Coordinated between EOI submission to CoC voting process",
        "Successfully optimized resolution plan structure"
      ]
    },
    {
      title: "Comparative Performance Analysis: Dabur vs Marico",
      category: "Financial Comparison",
      description: "In-depth comparative analysis using multiple financial ratios and valuation metrics",
      technologies: ["DuPont Analysis", "EVA", "P/B Ratio", "P/E Ratio"],
      highlights: [
        "Applied DuPont framework for ROE decomposition",
        "Calculated Economic Value Added (EVA) for both companies",
        "Comparative valuation using price-based ratios",
        "Strategic recommendations based on financial performance"
      ]
    },
    {
      title: "Electric Bike Market Research",
      category: "Market Research",
      description: "Customer research and market viability analysis for electric bike project in Pune",
      technologies: ["Market Research", "Customer Interviews", "Viability Analysis"],
      highlights: [
        "Interviewed 100+ potential customers across 3 categories",
        "Analyzed market viability resulting in project selection",
        "Comprehensive market assessment for electric mobility sector"
      ]
    },
    {
      title: "Swachh Bharat Mission - Dhule District",
      category: "Government Project",
      description: "Catalyzed IHHL construction process and improved district ranking in Swachh Bharat Mission",
      technologies: ["Project Management", "MIS Systems", "Process Optimization"],
      highlights: [
        "Improved Dhule district ranking from last to top 8 in 2 months",
        "Set up extension officer system for daily data updates",
        "Initiated hand wash station construction in 1200 schools",
        "Coordinated with Rotary Club for implementation"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Academic Projects & Key Achievements</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                <h4>Technologies/Methods:</h4>
                <ul className="tech-list">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx} className="tech-item">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="project-highlights">
                <h4>Key Highlights:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
