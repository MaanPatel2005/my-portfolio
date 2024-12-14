import { useState } from "react";
import "./App.css";
import linkedIn from "/linkedInPhoto.png";
import Github from "/githubLogo.png";
import ProfilePhoto from "/newpfp.png";
import { Tabs } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";

function App() {
  const [count, setCount] = useState(0);
  // This is the landing page, going to hop back in and add the other pages tomorrow
  return (
    <>
      <Provider>
        <div className="logo-container">
          <a href="https://www.linkedin.com/in/maanpatel111/" target="_blank">
            <img src={linkedIn} className="logo" alt="Vite logo" />
          </a>
          <a href="https://github.com/MaanPatel2005" target="_blank">
            <img src={Github} className="logo react" alt="React logo" />
          </a>
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

export default App;
