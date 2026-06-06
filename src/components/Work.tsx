import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => {
          setTranslateX();
          return `+=${translateX}`;
        },
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Digital Forensics & Incident Response</h4>
                  <p>Security / Full Stack</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, React, MongoDB, REST APIs</p>
            </div>
            <WorkImage image="/images/forensic.png" alt="Digital Forensics Tool" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>AI-Based Risk Assessment System</h4>
                  <p>AI / Machine Learning</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Scikit-learn, Pandas, NumPy</p>
            </div>
            <WorkImage image="/images/AI_Based_Risk_Assesment.png" alt="AI Risk Assessment" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Spotify Clone</h4>
                  <p>Frontend / Web App</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React.js, JavaScript, HTML5, CSS3</p>
            </div>
            <WorkImage image="/images/Spotify.png" alt="Spotify Clone" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>ML Classification Models</h4>
                  <p>Machine Learning</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, TensorFlow, Scikit-learn</p>
            </div>
            <WorkImage image="/images/stockmarket.png" alt="ML Models" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Microservices E-Commerce Platform</h4>
                  <p>Full Stack / Distributed Systems</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Java Spring Boot, React.js, MongoDB, Docker, Redis</p>
            </div>
            <WorkImage image="/images/E-commerse.png" alt="E-Commerce Platform" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>AI-Powered Resume Screening</h4>
                  <p>AI / NLP</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, NLP, FastAPI, React.js, MongoDB</p>
            </div>
            <WorkImage image="/images/AI_Resume.png" alt="Resume Screening System" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
