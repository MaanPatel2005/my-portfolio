import "./home.css";
import "./aboutMe.css";
import linkedIn from "/linkedInPhoto.png"; // Ensure this is in the public folder
import Github from "/githubLogo.png"; // Ensure this is in the public folder
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
                  onClick={() => handleNavigation("/Resume")}
                >
                  Resume <MenuItemCommand>⌘⇧R</MenuItemCommand>
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </div>
          <div className="logo-container">
            <a
              href="https://www.linkedin.com/in/maanpatel111/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} className="logo" alt="LinkedIn Logo" />
            </a>
            <a
              href="https://github.com/MaanPatel2005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} className="logo" alt="GitHub Logo" />
            </a>
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
              <p></p>{" "}
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
        <footer>
          <p>&copy; 2024 Maan Patel. All rights reserved.</p>
        </footer>
      </Provider>
    </>
  );
}

export default aboutMe;
