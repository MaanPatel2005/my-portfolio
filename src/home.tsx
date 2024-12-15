import "./home.css";
import linkedIn from "/linkedInPhoto.png"; // Make sure this is in the public folder
import Github from "/githubLogo.png"; // Make sure this is in the public folder
import ProfilePhoto from "/newpfp.png"; // Make sure this is in the public folder
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

function Home() {
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
        <div className="App">
          <div className="content">
            <div className="photo-frame">
              <img
                src={ProfilePhoto}
                alt="My Profile"
                className="profile-photo"
              />
            </div>
            <div className="text-section">
              <h1 className="name">Hey, I'm Maan!</h1>
              <div className="dotted-line"></div>{" "}
              {/* Dotted line between photo and name */}
              <p className="subtitle">Software Engineer | AI Enthusiast</p>
              <p className="description">
                3rd Year Honors Computer Science at University of California,
                Irvine. Passionate about technology, coding, and solving complex
                problems.
              </p>
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

export default Home;
