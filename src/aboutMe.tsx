import "./home.css";
import "./aboutMe.css";
import India from "/indiaGate.png";
import Potato from "/potatoFritter.png";
import Solo from "/solo.png";
import PostedPic from "/posted.png";
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
        <div className="body-section">
          <div className="text-section-About">
            <div className="about-me-container">
              <h1 className="about-me-intro">A little bit about me: </h1>
            </div>
            <div className="summary">
              {" "}
              <p>
                {" "}
                My name is Maan Patel, and I am currently a second-year student
                at the University of California, Irvine, pursuing an Honors
                degree in Computer Science. I am passionate about leveraging
                both business consulting and technology solutions to creatively
                address complex problems in the industry.{" "}
              </p>{" "}
              <p>
                At the University of California, Irvine, I'm an active member of
                the Product @ UCI team, collaborating with business and computer
                science students to ideate, develop, and deliver innovative
                products. My role involves leveraging business consulting
                strategies to refine and customize products to meet client
                needs, ensuring their successful market positioning. As a
                software developer, I work in partnership with the marketing
                team and product managers to meet project requirements and
                deliver high-quality, customer-centric solutions.
              </p>{" "}
              <p>
                {" "}
                Beyond academics, I serve as a Resident Advisor within my
                housing community, collaborating with department heads in
                Information & Computer Sciences and Engineering to organize
                events that enable residents to expand their networks and
                explore research opportunities at UCI.{" "}
              </p>{" "}
              <p>
                {" "}
                In addition, I take the initiative to offer tutoring sessions
                for ICS 46, UCI's data structures and algorithms course. Due to
                a lack of budget for official tutoring services, I proactively
                launched my own free tutoring program to support students in
                mastering this critical subject. As a result, I helped students
                improve their grades by an average of 10%, and my program has
                grown to accommodate up to 15 students per session. Although it
                is still in its early stages, I am working on scaling this
                initiative to support other courses in the future.{" "}
              </p>{" "}
              <p>
                {" "}
                In my free time, I enjoy staying active through fitness,
                spending quality time with family, and traveling.{" "}
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
          <p>&copy; 2024 Maan Patel. All rights reserved.</p>
        </footer>
      </Provider>
    </>
  );
}

export default aboutMe;
