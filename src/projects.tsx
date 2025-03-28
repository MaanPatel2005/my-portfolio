import React, { useState, useEffect } from "react";
import "./home.css";
import "./projects.css";
import InSyncDash from "/InSyncDash.png";
import InSyncTable from "/InSyncTable.png";
import WABI1 from "/WABI1.png";
import Zot1 from "/ZotResearch1.png";
import Zot2 from "/ZotResearch2.png";
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
import { HStack } from "@chakra-ui/react";
import DynamicTyping from "./dynamicTyping";
import { Tooltip } from "./components/ui/tooltip";

function Projects() {
  const navigate = useNavigate();
  const [insyncPage, setInsyncPage] = useState(1); // Separate state for InSync
  const [wabiPage, setWabiPage] = useState(1); // Separate state for WABI
  const [zotPage, setZotPage] = useState(1);

  // Log changes to insyncPage
  useEffect(() => {}, [insyncPage]);

  // Log changes to wabiPage
  useEffect(() => {}, [wabiPage]);

  const handleInsyncPageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent unintended scroll behavior
    setInsyncPage(page);
  };

  const handleWabiPageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault();
    setWabiPage(page);
  };

  const handleZotPageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault();
    setZotPage(page);
  };

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
        <div className="body-section-projects">
          <div className="Insync">
            <div className="Insync-Text">
              <h1>InSync</h1>
              <p>
                In an increasingly automated world, identifying fraudulent
                purchases can be a significant challenge for banks and
                companies. To address this issue, I developed an AI-driven
                application that analyzes transaction data to classify purchases
                as authentic, fraudulent, or suspicious. By examining spending
                patterns, transaction frequency, and other key variables, my
                model achieves an impressive 90% accuracy in detecting
                fraudulent purchases, empowering users to take swift action and
                reduce financial risks.
              </p>
              <p>
                For development, I used RESTful APIs to ensure seamless
                communication between the front end and backend. My model was
                trained on datasets sourced from Kaggle using Pandas,
                Transformers, Hugging Face, and TensorFlow to clean and process
                the data. The front end was built with React.js, while the
                backend leverages Node.js and Firebase. I also integrated user
                authentication, allowing personalized experiences and giving
                users access to tailored insights for effective decision-making.
              </p>
            </div>
            <div className="Rendering-Insync">
              <div className="Insync-Images">
                {insyncPage === 1 && (
                  <img
                    src={InSyncDash}
                    className="InSyncDash"
                    alt="InSync Dashboard"
                  />
                )}
                {insyncPage === 2 && (
                  <img
                    src={InSyncTable}
                    className="InSyncTable"
                    alt="InSync Table"
                  />
                )}
              </div>
              <div className="pagination-Insync">
                <HStack>
                  <Button
                    variant="outline"
                    onClick={(e) => handleInsyncPageChange(1, e)}
                    disabled={insyncPage === 1}
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    onClick={(e) => handleInsyncPageChange(2, e)}
                    disabled={insyncPage === 2}
                  >
                    2
                  </Button>
                </HStack>
              </div>
            </div>
          </div>

          <div className="ZotResearch">
            <div className="ZotResearch-Text">
              <h1>ZotResearch</h1>
              <p>
                Finding research opportunities at UCI can be a challenge for
                students, often requiring endless cold emails to professors,
                waiting weeks for responses, and facing uncertainty in their
                applications. I sought to simplify this process by creating an
                application designed to streamline the entire experience.
              </p>
              <p>
                I developed a website where professors can authenticate and
                directly post available research opportunities. This eliminates
                the need for students to search endlessly for professors who may
                or may not be accepting applications, providing them with a more
                efficient way to discover opportunities.{" "}
              </p>
              <p>
                I built the front end of the application using React.js, while
                leveraging Node.js and Firebase for the backend. My program
                enables users to create personalized portfolios directly on the
                website, making their information more accessible and
                streamlined for potential collaborators. The platform
                significantly reduces the time it takes for students to find and
                join a research lab, cutting the process from an average of
                three weeks to just about one week. Although the application is
                still in its early stages, I plan to scale it for a
                university-wide pitch in the near future.
              </p>
            </div>
            <div className="Rendering-ZotResearch">
              <div className="ZotResearch-Images">
                {zotPage === 1 && (
                  <img
                    src={Zot1}
                    className="ZotResearch1"
                    alt="Research Postings"
                  />
                )}
                {zotPage === 2 && (
                  <img
                    src={Zot2}
                    className="ZotResearch2"
                    alt="Research Dashboard"
                  />
                )}
              </div>
              <div className="pagination-Insync">
                <HStack>
                  <Button
                    variant="outline"
                    onClick={(e) => handleZotPageChange(1, e)}
                    disabled={zotPage === 1}
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    onClick={(e) => handleZotPageChange(2, e)}
                    disabled={zotPage === 2}
                  >
                    2
                  </Button>
                </HStack>
              </div>
            </div>
          </div>
        </div>
        <div className="WABI">
          <div className="WABI-Text">
            <h1>Workout Asistant & Buddy Identifier</h1>
            <p>
              Many college students neglect their physical health, despite its
              critical importance for long-term well-being. Building muscle and
              social connections at a young age can help prevent a range of
              medical / mental issues in the future. With this in mind, I
              developed WABI, a web application designed to inspire students to
              be more active in their communities and prioritize their physical
              health.
            </p>
            <p>
              WABI allows users to schedule workouts with friends or other
              community members, creating an environment of accountability and
              support. It also enables users to track their fitness progress by
              syncing with third-party health apps, providing a seamless
              experience for managing workouts. Additionally, I integrated a
              chat feature to facilitate communication and foster a sense of
              community among users.
            </p>
            <p>
              For the development, I utilized React.js and REFLEX for the front
              end, while leveraging Firebase and Next.js for the backend. The
              application received a runner-up award from REFLEX for its
              innovative use of their platform and is proudly featured on their
              website as a source code example. This code has been used over
              12,000 times, showcasing its broad impact and utility within the
              developer community.
            </p>
          </div>
          <div className="WABI-Rendering">
            <div className="WABI-Images">
              {wabiPage === 1 && (
                <img src={WABI1} className="WABI1" alt="First Wabi" />
              )}
            </div>
            <div className="pagination-WABI">
              <HStack>
                <Button
                  variant="outline"
                  onClick={(e) => handleWabiPageChange(1, e)}
                  disabled={wabiPage === 1}
                >
                  1
                </Button>
              </HStack>
            </div>
          </div>
        </div>
        <footer className="project-footer">
          <p>&copy; 2024 Maan Patel. All rights reserved.</p>
        </footer>
      </Provider>
    </>
  );
}

export default Projects;
