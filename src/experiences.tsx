import React from "react";
import "./home.css";
import "./experiences.css";
import { Provider } from "./components/ui/provider";
import Navbar from "./components/Navbar";

interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "AI / Machine Learning Intern",
    company: "Ernst & Young",
    duration: "June 2025 - August 2025",
    location: "Los Angeles, CA",
    description: [
      "Designed and implemented a dashboard that applies natural language processing to extract requirements and generate draft RFP responses, reducing turnaround time by 75% and minimizing manual input by 60%.",
      "Performing quality checks on work products to confirm that EY clients receive high quality deliverables.",
      "Proactively and effectively communicating project and task status and outputs to various stakeholders.",
      "Developing strong relationships among team members and building productive working relationships with clients to deliver exceptional client service.",
      "Utilizing technology to continually learn and develop skills in discovery, digital forensics and forensic data analytics.",
      "Collaborating with team members to think critically and assist in the development and integration of enhanced policies, processes and technologies that will address clients’ needs.",
    ],
    technologies: [
      "SQL",
      "React.js",
      "Node.js",
      "Microsoft Azure",
      "PowerBI",
      "Tableau",
      "Python",
      "PySpark",
      "Scikit Learn",
    ],
  },
  {
    title: "AI Engineering Intern",
    company: "Infosys",
    duration: "Jul 2024 - Sept 2024",
    location: "Bangalore, IND",
    description: [
      "Developed and deployed advanced robotics automation systems to enhance the interactivity and effectiveness of classroom learning environments. Created proof of concept to generate $50,000 USD in investments into the project.",
      "Leveraged computer vision solutions and machine learning to design and implement autonomous movement for a robot based on the calculations of cost maps, and the optimization of least-cost paths using pathfinding algorithms.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "YOLOv5",
      "TensorFlow",
      "OpenCV",
      "Git",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Commit The Change",
    duration: "Oct 2023 - Jun 2024",
    location: "Irvine, CA",
    description: [
      "Built a scalable donation tracking website for Feeding Pets of the Homeless, increasing food donations from 250k lbs to +2M lbs by automating data workflows and notification management to donors.",
      "Developed 6 custom RESTful API endpoints and a PostgreSQL database from scratch, deployed on AWS EC2 and RDS to ensure reliable access and efficient data retrieval.",
    ],
    technologies: [
      "RESTful API",
      "React.js",
      "Figma",
      "HTML/CSS",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Postman",
      "Git",
      "AWS",
    ],
  },
];

const Experiences: React.FC = () => {
  return (
    <>
      <Provider>
        <Navbar />
        <div style={{ paddingTop: "var(--nav-height, 60px)" }}>
          <div className="experiences-container">
            <h1 className="experiences-title">Professional Experience</h1>

            <div className="experiences-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <div className="title-line">
                      <h2>{exp.title}</h2>
                      <span className="location">{exp.location}</span>
                    </div>
                    <div className="company-line">
                      <h3>{exp.company}</h3>
                      <span className="duration">{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="experience-description">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>

                  <div className="technologies">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* end paddingTop wrapper */}
        <footer className="hp-footer">
          <span className="hp-footer-brand">Maan Patel</span>
          <span>&copy; 2025 All rights reserved.</span>
          <a
            href="https://github.com/maanpatel2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hp-footer-link"
          >
            GitHub ↗
          </a>
        </footer>
      </Provider>
    </>
  );
};

export default Experiences;
