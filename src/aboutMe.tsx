import "./home.css";
import "./aboutMe.css";
import India from "/indiaGate.png";
import Potato from "/potatoFritter.png";
import Solo from "/solo.png";
import PostedPic from "/posted.png";
import { Provider } from "./components/ui/provider";
import { Button } from "./components/ui/button";

import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "./components/ui/menu";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DynamicTyping from "./dynamicTyping";
import { Tooltip } from "./components/ui/tooltip";

function aboutMe() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleNavigation = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <>
      <Provider>
        <div className="header">
          <div className="menu-container">
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
                  value="resume"
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
          <div className="typewriter-wrapper">
            <DynamicTyping />
          </div>
        </div>
        <div className="body-section">
          <div className="text-section-About">
            <div className="about-me-container">
              <h1 className="about-me-intro">A little bit about me: </h1>
            </div>
            <div className="summary">
              {" "}
              <p>
                {" "}
                My name is Maan Patel, and I am currently in my last year as a
                Computer Science student at the University of California,
                Irvine, with an expected graduation in June 2026. I maintain a
                3.78 GPA and am passionate about leveraging both business
                consulting and technology solutions to creatively address
                complex problems in the industry.{" "}
              </p>{" "}
              <p>
                At the University of California, Irvine, I serve as the
                Marketing Chair for AI@UCI, the largest AI club on campus. In
                this role, I direct all marketing and branding efforts to
                strengthen community impact and recognition, organizing events
                and workshops that bring together students passionate about
                artificial intelligence and machine learning. I'm also an active
                member of the Product @ UCI team, where I provide technical
                support to software engineers and marketing teams while
                leveraging my consulting expertise to bridge technical
                implementation with business objectives. I collaborate with
                cross-functional teams to ideate, develop, and deliver
                innovative products, ensuring solutions align with client needs
                and market demands.
              </p>{" "}
              <p>
                {" "}
                I have gained valuable industry experience through internships
                at Ernst & Young as an AI/Machine Learning Intern, where I
                designed and implemented NLP-powered dashboards and developed
                XGBoost-based classifiers that significantly improved
                operational efficiency. I also interned at Infosys in Bangalore,
                where I developed advanced robotics automation systems and
                implemented computer vision solutions for autonomous movement.
                Additionally, I worked as a Full Stack Developer at Commit The
                Change, building scalable donation tracking systems that
                increased food donations from 250k lbs to over 2M lbs.{" "}
              </p>{" "}
              <p>
                {" "}
                Beyond academics, I serve as a Resident Advisor within my
                housing community, collaborating with department heads in
                Information & Computer Sciences and Engineering to organize
                events that enable residents to expand their networks and
                explore research opportunities at UCI. I also work as a Learning
                Assistant for my school's algorithms course, where I help
                students master complex data structures and algorithmic
                concepts. Additionally, I take the initiative to offer tutoring
                sessions for ICS 46, UCI's data structures and algorithms
                course, helping students improve their grades by an average of
                10% through my free tutoring program.{" "}
              </p>{" "}
              <p>
                {" "}
                In my free time, I enjoy staying active through fitness, playing
                basketball, watching movies, spending quality time with family
                and friends, and traveling. I'm particularly passionate about
                technology, coding, and solving complex problems, and I enjoy
                building solutions that combine innovation and practicality to
                create meaningful impacts.{" "}
              </p>{" "}
            </div>
          </div>
          <div className="pictures-About">
            <div className="topPics">
              <img src={India} className="IndiaGate" alt="India Gate" />
              <img src={PostedPic} className="Posted" alt="Patvi Men" />
            </div>
            <div className="bottomPics">
              <img src={Solo} className="SoloPic" alt="Beach" />
              <img src={Potato} className="PotatoFrit" alt="Potato Fritter" />
            </div>
          </div>
        </div>
        <footer className="tailoredFooter">
          <p>&copy; 2025 Maan Patel. All rights reserved.</p>
        </footer>
      </Provider>
    </>
  );
}

export default aboutMe;
