import React, { useState, useEffect } from "react";
import "./home.css";
import "./projects.css";
import InSyncDash from "/InSyncDash.png";
import InSyncTable from "/InSyncTable.png";
import Zot1 from "/ZotResearch1.png";
import Zot2 from "/ZotResearch2.png";
import UnibitesScreenshot from "/unibites.png";
import UnibitesScreenshot2 from "/unibites2.png";
import MakapoScreenshot from "/makapo.png";
import TaskAllocationScreenshot from "/taskallocation.png";
import { Provider } from "./components/ui/provider";
import { Button } from "./components/ui/button";
import { HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TiltCard from "./components/TiltCard";

function Projects() {
  const [insyncPage, setInsyncPage] = useState(1);
  const [zotPage, setZotPage] = useState(1);
  const [unibitesPage, setUnibitesPage] = useState(1);
  const [aiTaskPage, setAiTaskPage] = useState(1);
  const [makapoPage, setMakapoPage] = useState(1);

  // Log changes to insyncPage
  useEffect(() => {}, [insyncPage]);

  const handleInsyncPageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent unintended scroll behavior
    setInsyncPage(page);
  };

  const handleZotPageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault();
    setZotPage(page);
  };

  const handleUnibitesPageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault();
    setUnibitesPage(page);
  };

  const handleAiTaskPageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault();
    setAiTaskPage(page);
  };

  const handleMakapoPageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault();
    setMakapoPage(page);
  };

  return (
    <>
      <Provider>
        <Navbar />
        <div style={{ paddingTop: "var(--nav-height, 60px)" }}>
          <div className="body-section-projects">
            <div className="AI-Task-Allocation">
              <div className="AI-Task-Allocation-Text">
                <h1>AI-Assisted Task Allocation</h1>
                <p>
                  Built an AI-driven task allocation system using the TAWOS
                  dataset, achieving 73.96% alignment with project manager
                  decisions via CodeBERT embeddings and cosine similarity
                  scoring.
                </p>
                <p>
                  Designed a modular pipeline for task similarity modeling and
                  ranking, supporting flexible ML experimentation. Improved task
                  assignment quality by 45% through sentiment analysis and code
                  quality ratings to gauge developer comfort and fit.
                </p>
                <p>Technologies Used: Python, PyTorch, AWS RDS, MySQL</p>
              </div>
              <TiltCard className="project-img-tilt">
                <div className="AI-Task-Allocation-Rendering">
                  <div className="AI-Task-Allocation-Images">
                    {aiTaskPage === 1 && (
                      <img
                        src={TaskAllocationScreenshot}
                        className="TaskAllocationScreenshot"
                        alt="AI Task Allocation Dashboard"
                      />
                    )}
                  </div>
                  <div className="pagination-AI-Task-Allocation">
                    <HStack>
                      <Button
                        variant="outline"
                        onClick={(e) => handleAiTaskPageChange(1, e)}
                        disabled={aiTaskPage === 1}
                      >
                        1
                      </Button>
                    </HStack>
                  </div>
                </div>
              </TiltCard>
            </div>
            <div className="Makapo-Aquatics">
              <div className="Makapo-Aquatics-Text">
                <h1>Makapo Aquatics Project</h1>
                <p>
                  Developed a HIPAA-compliant web platform for Makapo,
                  streamlining athlete training documentation and secure data
                  storage using AWS RDS, STS, and encrypted MySQL, reducing
                  manual logging time by 60% and enabling 65% user scalability.
                </p>
                <p>
                  Integrated AI-powered tools to convert speech into structured
                  training notes via media tokenization and natural language
                  processing, boosting documentation accuracy by 45%.
                </p>
                <p>
                  Technologies Used: AWS RDS, MySQL, Google Cloud Services,
                  Tailwind, Firebase Auth, Docker
                </p>
              </div>
              <TiltCard className="project-img-tilt">
                <div className="Makapo-Aquatics-Rendering">
                  <div className="Makapo-Aquatics-Images">
                    {makapoPage === 1 && (
                      <img
                        src={MakapoScreenshot}
                        className="MakapoScreenshot"
                        alt="Makapo Aquatics Platform"
                      />
                    )}
                  </div>
                  <div className="pagination-Makapo-Aquatics">
                    <HStack>
                      <Button
                        variant="outline"
                        onClick={(e) => handleMakapoPageChange(1, e)}
                        disabled={makapoPage === 1}
                      >
                        1
                      </Button>
                    </HStack>
                  </div>
                </div>
              </TiltCard>
            </div>

            <div className="Unibites">
              <div className="Unibites-Text">
                <h1>Unibites</h1>
                <p>
                  Designed and launched Unibites, a scalable food access
                  platform used by 1,000+ daily users across a 30,000-student
                  campus, reducing food waste by 25% through real-time event
                  aggregation and intuitive meal discovery.
                </p>
                <p>
                  Led product design and user validation efforts by conducting
                  22 user interviews, wireframing in Figma, and iterating on
                  prototypes to align the platform with student needs and usage
                  patterns.
                </p>
                <p>
                  Technologies Used: Figma, User Research, Agile Development,
                  MVP Strategy, React.js, Node.js, Supabase, Webscraping
                </p>
              </div>
              <TiltCard className="project-img-tilt">
                <div className="Unibites-Rendering">
                  <div className="Unibites-Images">
                    {unibitesPage === 1 && (
                      <img
                        src={UnibitesScreenshot2}
                        className="UnibitesScreenshot2"
                        alt="Unibites Dashboard"
                      />
                    )}
                    {unibitesPage === 2 && (
                      <img
                        src={UnibitesScreenshot}
                        className="UnibitesScreenshot"
                        alt="Unibites Platform"
                      />
                    )}
                  </div>
                  <div className="pagination-Unibites">
                    <HStack>
                      <Button
                        variant="outline"
                        onClick={(e) => handleUnibitesPageChange(1, e)}
                        disabled={unibitesPage === 1}
                      >
                        1
                      </Button>
                      <Button
                        variant="outline"
                        onClick={(e) => handleUnibitesPageChange(2, e)}
                        disabled={unibitesPage === 2}
                      >
                        2
                      </Button>
                    </HStack>
                  </div>
                </div>
              </TiltCard>
            </div>

            <div className="Insync">
              <div className="Insync-Text">
                <h1>InSync</h1>
                <p>
                  In an increasingly automated world, identifying fraudulent
                  purchases can be a significant challenge for banks and
                  companies. To address this issue, I developed an AI-driven
                  application that analyzes transaction data to classify
                  purchases as authentic, fraudulent, or suspicious. By
                  examining spending patterns, transaction frequency, and other
                  key variables, my model achieves an impressive 90% accuracy in
                  detecting fraudulent purchases, empowering users to take swift
                  action and reduce financial risks.
                </p>
                <p>
                  For development, I used RESTful APIs to ensure seamless
                  communication between the front end and backend. My model was
                  trained on datasets sourced from Kaggle using Pandas,
                  Transformers, Hugging Face, and TensorFlow to clean and
                  process the data. The front end was built with React.js, while
                  the backend leverages Node.js and Firebase. I also integrated
                  user authentication, allowing personalized experiences and
                  giving users access to tailored insights for effective
                  decision-making.
                </p>
              </div>
              <TiltCard className="project-img-tilt">
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
              </TiltCard>
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
                  directly post available research opportunities. This
                  eliminates the need for students to search endlessly for
                  professors who may or may not be accepting applications,
                  providing them with a more efficient way to discover
                  opportunities.{" "}
                </p>
                <p>
                  I built the front end of the application using React.js, while
                  leveraging Node.js and Firebase for the backend. My program
                  enables users to create personalized portfolios directly on
                  the website, making their information more accessible and
                  streamlined for potential collaborators. The platform
                  significantly reduces the time it takes for students to find
                  and join a research lab, cutting the process from an average
                  of three weeks to just about one week. Although the
                  application is still in its early stages, I plan to scale it
                  for a university-wide pitch in the near future.
                </p>
              </div>
              <TiltCard className="project-img-tilt">
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
              </TiltCard>
            </div>
          </div>
        </div>
        {/* end paddingTop wrapper */}

        <footer className="project-footer">
          <p>&copy; 2025 Maan Patel. All rights reserved.</p>
        </footer>
      </Provider>
    </>
  );
}

export default Projects;
