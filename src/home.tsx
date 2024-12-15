// import { useState } from "react";
import "./home.css";
import linkedIn from "/linkedInPhoto.png";
import Github from "/githubLogo.png";
import ProfilePhoto from "/newpfp.png";
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

function Home() {
  // This is the landing page, going to hop back in and add the other pages tomorrow
  return (
    <>
      <Provider>
        <div className="header">
          <div className="accordianMenu">
            <MenuRoot>
              <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Home
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="new-txt-a">
                  Home <MenuItemCommand>⌘H</MenuItemCommand>
                </MenuItem>
                <MenuSeparator />
                <MenuItem value="new-file-a">
                  About Me <MenuItemCommand>⌘A</MenuItemCommand>
                </MenuItem>
                <MenuItem value="new-win-a">
                  Resume <MenuItemCommand>⌘⇧R</MenuItemCommand>
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </div>
          <div className="logo-container">
            <a href="https://www.linkedin.com/in/maanpatel111/" target="_blank">
              <img src={linkedIn} className="logo" alt="LinkedIn Logo" />
            </a>
            <a href="https://github.com/MaanPatel2005" target="_blank">
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
