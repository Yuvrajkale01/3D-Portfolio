import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Information Technology</h4>
                <h5>NMIMS University, Pune</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Information Technology with a
              CGPA of 8.2. Focused on Data Structures & Algorithms, Software
              Engineering, DBMS, and Computer Networks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Instructor</h4>
                <h5>Ajay Infotech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Mentored 20+ students in frontend development, teaching HTML, CSS,
              JavaScript, and React.js. Conducted hands-on coding sessions and
              guided students through end-to-end project development and
              deployment workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & AI/ML Engineer</h4>
                <h5>Independent Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building full-stack applications with Java Spring Boot, React.js,
              and MongoDB. Developing AI-driven systems including risk assessment
              models, forensic analysis tools, and predictive analytics
              pipelines using Python and Scikit-learn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
