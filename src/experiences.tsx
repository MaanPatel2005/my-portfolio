import React from "react";
import "./experiences.css";
import "./home.css";
import { Provider } from "./components/ui/provider";
import { Button } from "./components/ui/button";
import { FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "./components/ui/menu";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "./components/ui/tooltip";
import DynamicTyping from "./dynamicTyping";

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
    title: "Incoming Technology Intern",
    company: "Ernst & Young (EY)",
    duration: "Jun 2025",
    location: "Los Angeles, CA",
    description: [
      "Executing technical tasks related to detecting, preventing and responding to legal and compliance risks that corporations face.",
      "Performing quality checks on work products to confirm that EY clients receive high quality deliverables.",
      "Proactively and effectively communicating project and task status and outputs to various stakeholders.",
      "Developing strong relationships among team members and building productive working relationships with clients to deliver exceptional client service.",
      "Utilizing technology to continually learn and develop skills in discovery, digital forensics and forensic data analytics.",
      "Collaborating with team members to think critically and assist in the development and integration of enhanced policies, processes and technologies that will address clients’ needs.",
    ],
    technologies: ["Python", "SQL", "Git"],
  },
  {
    title: "UROP Researcher",
    company: "UC Irvine Informatics Department",
    duration: "Jan 2025 - Present",
    location: "Irvine, CA",
    description: [
      "Integrating AI into Agile Methodologies by optimizing task based allocation.",
      "Utilizing Python and sentiment analysis to compare past tasks to present ones to find out who the task should be assigned to.",
      "Optimizing time to allocate tasks by over 20%.",
    ],
    technologies: ["Python", "MySQL", "AWS", "Git"],
  },
  {
    title: "Software Engineer",
    company: "Product @ UCI",
    duration: "Jan 2025 - Present",
    location: "Irvine, CA",
    description: [
      "Leading the development of UniBites, a B2B web application that organizes customer feedback on university dining hall offerings to help dining halls to cut costs and reduce food waste to promote sustainability. Applying Product Lifecycle Management principles to enhance scalability, user adoption, and long-term maintainability.",
      "Implementing a robust backend API and a responsive UI to improve UI/UX and overall user engagement. Ensuring secure user access through authentication, integrating authorization mechanisms to protect user data and enhance system security.",
      "Conducted and synthesized insights from 40+ user interviews, addressing the needs of a 30,000+ user base by refining features and optimizing usability.",
    ],
    technologies: ["Supabase", "React Native", "SQL", "Figma", "Docker", "Git"],
  },
  {
    title: "AI Engineering Intern ",
    company: "Infosys",
    duration: "Jul 2024 - Aug 2024",
    location: "Bangalore, India",
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
    title: "Full Stack Developer ",
    company: "Commit the Change",
    duration: "Oct 2023 - Jun 2024",
    location: "Irvine, CA",
    description: [
      "Architected a scalable website for an NPO, Feeding Pets of the Homeless, driving a donation increase from 250k lbs to over 2 million through the automation of data entry and retrieval processes.",
      "Constructed the RESTful API from scratch; designed an intuitive UI/UX using React.js, improving user engagement by 25% through the use of Figma for wire framing and design consistency.",
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
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Provider>
        <div className="header">
          <div className="accordianMenu">
            <MenuRoot>
              <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Menu
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem
                  value="home"
                  onClick={() => handleNavigation("/Home")}
                >
                  Home <MenuItemCommand>⌘H</MenuItemCommand>
                </MenuItem>
                <MenuSeparator />
                <MenuItem
                  value="about-me"
                  onClick={() => handleNavigation("/AboutMe")}
                >
                  About Me <MenuItemCommand>⌘A</MenuItemCommand>
                </MenuItem>
                <MenuItem
                  value="projects"
                  onClick={() => handleNavigation("/Projects")}
                >
                  Projects <MenuItemCommand>⌘⇧R</MenuItemCommand>
                </MenuItem>
                <MenuItem
                  value="experiences"
                  onClick={() => handleNavigation("/Experiences")}
                >
                  Experiences <MenuItemCommand>⌘E</MenuItemCommand>
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </div>

          <div className="TypeWriter">
            <DynamicTyping />
          </div>

          <div className="logo-container">
            <Tooltip content="Resume">
              <a
                href="https://docs.google.com/document/d/1fpMcvnFWumCQRYrS1OAorTpvs-jO6Kn5x6ly_YYssdg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreffer"
              >
                <FaFileAlt className="logo" />
              </a>
            </Tooltip>
            <Tooltip content="LinkedIn">
              <a
                href="https://www.linkedin.com/in/maanpatel111/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="logo" />
              </a>
            </Tooltip>
            <Tooltip content="GitHub">
              <a
                href="https://github.com/MaanPatel2005"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="logo" />
              </a>
            </Tooltip>
          </div>
        </div>

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
        <footer className="project-footer">
          <p>&copy; 2024 Maan Patel. All rights reserved.</p>
        </footer>
      </Provider>
    </>
  );
};

export default Experiences;
