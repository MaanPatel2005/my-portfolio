import React, { useEffect, useState } from "react"; // Import hooks for state and effect
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
import { To, useNavigate } from "react-router-dom";
import linkedIn from "/linkedInPhoto.png";
import Github from "/githubLogo.png";
import ProfilePhoto from "/newpfp.png";
import "./home.css";
import DynamicTyping from "./dynamicTyping";

function Home() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleNavigation = (path: To) => {
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
                  value="projects"
                  onClick={() => handleNavigation("/Projects")}
                >
                  Projects <MenuItemCommand>⌘⇧R</MenuItemCommand>
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </div>

          <div className="TypeWriter">
            <DynamicTyping />
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
              <div className="dotted-line"></div>
              <p className="subtitle">Software Engineer | AI Enthusiast</p>
              <p className="description">
                I am a 3rd Year Honors Computer Science student at the
                University of California, Irvine. My passions include
                technology, coding, and solving complex problems. I enjoy
                building solutions that combine innovation and practicality to
                create meaningful impacts.
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
