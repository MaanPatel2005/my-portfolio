import InSyncDash from "/InSyncDash.png";
// import Zot1 from "/ZotResearch1.png";
import UnibitesScreenshot2 from "/unibites2.png";
import MakapoScreenshot from "/makapo.png";
import AgentNative from "/gallery.jpg";
import "./home.css";
import Navbar from "./components/Navbar";
import TiltCard from "./components/TiltCard";
import { Provider } from "./components/ui/provider";

const GREETINGS = [
  "Привет",
  "Ciao",
  "नमस्ते",
  "Hola",
  "안녕하세요",
  "こんにちは",
  "Bonjour",
  "你好",
  "שלום",
  "Hej",
  "Olá",
  "Hallo",
  "مرحبا",
  "Hey, I'm Maan!",
];
const MARQUEE_ITEMS = [...GREETINGS, ...GREETINGS];

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
    title: "Software Engineering Intern",
    company: "Ernst & Young",
    duration: "Jun 2025 – Aug 2025",
    location: "Los Angeles, CA",
    description: [
      "Developed production XGBoost classifier using Python, Scikit-learn, and Azure ML to automate 10K+ weekly access requests.",
      "Built NLP tokenizer, tagger, and parser (spaCy, Pandas) to match RFP queries to proposals, reducing turnaround by 75%.",
      "Engineered compliance auditing pipeline using PySpark and Databricks, analyzing >3PB of data across $50M legal exposure.",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Azure ML",
      "spaCy",
      "PySpark",
      "Databricks",
      "Pandas",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company: "UC Irvine – ICS",
    duration: "Jan 2025 – Feb 2026",
    location: "Irvine, CA",
    description: [
      "Fine-tuned CodeBERT for Agile task allocation using PyTorch and HuggingFace Transformers on 400K tasks with 70% F1.",
      "Built Sentence Transformer and FAISS task-matching system, improving accuracy by 10% and cutting compute costs by 50%.",
      "Published peer-reviewed research at XP 2026 on scalable ML coordination patterns for distributed engineering organizations.",
    ],
    technologies: [
      "PyTorch",
      "HuggingFace",
      "CodeBERT",
      "FAISS",
      "AWS RDS",
      "MySQL",
      "Pandas",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Infosys",
    duration: "Jul 2024 – Sept 2024",
    location: "Bangalore, India",
    description: [
      "Developed computer vision navigation system using YOLOv5, PyTorch, and OpenCV for autonomous classroom robotics.",
      "Built pose-detection model using Linear SVM (Scikit-learn), achieving 80% recall with <100ms inference latency.",
      "Delivered AI observability pipeline integrating Python inference with Pygame to visualize real-time system throughput.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "YOLOv5",
      "OpenCV",
      "Scikit-learn",
      "Pygame",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Commit the Change",
    duration: "Oct 2023 – Jun 2024",
    location: "Irvine, CA",
    description: [
      "Handled 2M+ annual transactions by deploying Dockerized Node.js and React services on AWS EC2 with MySQL database.",
      "Developed 6 Node.js REST API endpoints and AWS Lambda functions for distributed microservices, cutting server load 15%.",
      "Maintained 99.9% uptime by deploying Dockerized REST APIs on AWS EC2 with Nginx reverse proxies and TLS encryption.",
    ],
    technologies: [
      "Node.js",
      "React.js",
      "Docker",
      "AWS EC2",
      "AWS Lambda",
      "MySQL",
      "GitHub Actions",
      "Nginx",
    ],
  },
];

function Home() {
  return (
    <Provider>
      <div className="portfolio-page">
        <Navbar />

        <section id="hero" className="pf-hero">
          <div className="pf-hero-headline">
            <h1 className="pf-hero-title">
              CRAFTING
              <br />
              AI-DRIVEN
              <br />
              EXPERIENCES.
            </h1>
          </div>
          <div className="pf-hero-rule-row">
            <span className="pf-hero-location">Based in Los Angeles, CA</span>
          </div>
        </section>

        <div className="pf-marquee">
          <div className="pf-marquee-track">
            {MARQUEE_ITEMS.map((word, i) => (
              <span key={i}>
                <span className="pf-mword">{word}</span>
                <span className="pf-msep">·</span>
              </span>
            ))}
          </div>
        </div>

        <div className="pf-stats">
          <div className="pf-stats-inner">
            <div className="pf-stat">
              <span className="pf-stat-num">3.80</span>
              <span className="pf-stat-label">GPA at UCI</span>
            </div>
            <div className="pf-stat-div" />
            <div className="pf-stat">
              <span className="pf-stat-num">3+</span>
              <span className="pf-stat-label">Internships</span>
            </div>
            <div className="pf-stat-div" />
            <div className="pf-stat">
              <span className="pf-stat-num">10+</span>
              <span className="pf-stat-label">Projects Shipped</span>
            </div>
            <div className="pf-stat-div" />
            <div className="pf-stat">
              <span className="pf-stat-num">2M+</span>
              <span className="pf-stat-label">lbs Food Donated</span>
            </div>
          </div>
        </div>

        <section id="about" className="pf-section pf-about">
          <span className="pf-label">ABOUT ME</span>
          <p className="pf-about-statement">
            I build AI-powered products end-to-end &mdash; from models and
            pipelines to interfaces that make data useful.
          </p>
          <p className="pf-about-body">
            I work at the intersection of machine learning and software
            engineering, shipping solutions that turn complex data into real
            decisions.
          </p>
          <div className="pf-principles">
            <div className="pf-principle">
              <div className="pf-principle-header">
                <span className="pf-principle-num">01</span>
                <span className="pf-principle-sep">&mdash;</span>
                <span className="pf-principle-name">Impact</span>
              </div>
              <p>
                Building things that make a measurable difference in the real
                world.
              </p>
            </div>
            <div className="pf-principle">
              <div className="pf-principle-header">
                <span className="pf-principle-num">02</span>
                <span className="pf-principle-sep">&mdash;</span>
                <span className="pf-principle-name">Clarity</span>
              </div>
              <p>Complex problems deserve elegant, understandable solutions.</p>
            </div>
            <div className="pf-principle">
              <div className="pf-principle-header">
                <span className="pf-principle-num">03</span>
                <span className="pf-principle-sep">&mdash;</span>
                <span className="pf-principle-name">Craft</span>
              </div>
              <p>Attention to detail at every layer of the stack.</p>
            </div>
          </div>
          <div className="pf-about-inner" style={{ marginTop: "3.5rem" }}>
            <div className="pf-about-text">
              <p>
                Final-year Computer Science student at UC Irvine, graduating
                June 2026. I focus on machine learning, NLP, and full-stack
                engineering&mdash;building systems that turn complex data into
                real decisions.
              </p>
              <p>
                Marketing Chair at AI@UCI. VP of Operations at Product@UCI,
                where I lead cross-functional teams bridging engineering,
                design, and business strategy. Published ML researcher at
                XP&nbsp;2026 on scalable coordination patterns for distributed
                engineering orgs.
              </p>
              <p>
                Previously: SWE Intern at Ernst &amp; Young (XGBoost classifier
                automating 10K+ weekly access requests; NLP pipeline cutting RFP
                turnaround by 75%; PySpark compliance pipeline across 3PB+ of
                data), SWE Intern at Infosys (YOLOv5 + PyTorch robotics
                navigation system, 80% recall at &lt;100ms), and Full Stack
                Developer at Commit the Change (AWS microservices handling 2M+
                annual transactions).
              </p>
              <p>
                Outside of work: basketball, film, travel, and an avid
                tiramis&ugrave; connoisseur.
              </p>
            </div>
            <div className="pf-about-photos">
              <img src="/pfp.JPG" className="pf-about-img" alt="Maan Patel" />
            </div>
          </div>
        </section>

        <section id="experience" className="pf-section pf-experience">
          <span className="pf-label">EXPERIENCE</span>
          <div className="pf-exp-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="pf-exp-card">
                <div className="pf-exp-dot" />
                <div className="pf-exp-head">
                  <span className="pf-exp-duration">{exp.duration}</span>
                  <div className="pf-exp-title-company">
                    {exp.title}
                    <span className="pf-exp-sep">·</span>
                    {exp.company}
                  </div>
                </div>
                <div className="pf-exp-line" />
                <ul className="pf-exp-desc">
                  {exp.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="pf-section pf-projects">
          <span className="pf-label">PROJECTS</span>
          <div className="pf-proj-list">
            <div className="pf-proj-card">
              <div className="pf-proj-text">
                <h3 className="pf-proj-name">Agent Native</h3>
                <p>
                  Engineered a Babel AST analysis engine to map React JSX to
                  agent actions, eliminating runtime execution latency. Built
                  stable TypeScript action IDs to prevent agent breakage during
                  UI refactors, removing DOM scraping fragility entirely.
                </p>
                <p>
                  Optimized Groq-hosted Llama 3.3 to map natural language to UI
                  actions, reducing prompt size by 70% via XGBoost pathing.
                  Integrated Transformers.js for on-device intent classification
                  and streamlined multi-page task automation.
                </p>
                <p>
                  Developed a UI integrating OpenAI Whisper and a React-based
                  action registry to ensure deterministic, state-synced
                  execution across agentic workflows.
                </p>
                <div className="pf-tech-tags">
                  {[
                    "React",
                    "Express.js",
                    "TypeScript",
                    "JavaScript",
                    "Llama 3.3",
                    "Groq",
                    "XGBoost",
                    "Transformers.js",
                    "OpenAI Whisper",
                    "MySQL",
                    "REST API",
                  ].map((t) => (
                    <span key={t} className="pf-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pf-proj-image">
                <TiltCard>
                  <div className="pf-proj-img-wrap">
                    <img src={AgentNative} alt="Agent Native" />
                  </div>
                </TiltCard>
              </div>
            </div>

            <div className="pf-proj-card pf-proj-card--reverse">
              <div className="pf-proj-text">
                <h3 className="pf-proj-name">Makapo Aquatics (Capstone)</h3>
                <p>
                  Led development of a full-stack web application enabling
                  real-time AI-assisted note capture for Paralympic rowing
                  coaches. Built frontend in React and TypeScript and backend
                  with Python, FastAPI, and AWS Lambda for note capture and data
                  recall.
                </p>
                <p>
                  Architected an audio processing pipeline with Python, Librosa,
                  and NumPy to transcribe voice recordings into training logs.
                  Applied a Deepseek wrapper to generate athlete-specific
                  insights from recordings, reducing manual documentation time
                  by 60%.
                </p>
                <div className="pf-tech-tags">
                  {[
                    "React",
                    "TypeScript",
                    "Python",
                    "FastAPI",
                    "AWS Lambda",
                    "Firebase",
                    "Librosa",
                    "Deepseek",
                  ].map((t) => (
                    <span key={t} className="pf-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pf-proj-image">
                <TiltCard>
                  <div className="pf-proj-img-wrap">
                    <img src={MakapoScreenshot} alt="Makapo Aquatics" />
                  </div>
                </TiltCard>
              </div>
            </div>

            <div className="pf-proj-card">
              <div className="pf-proj-text">
                <h3 className="pf-proj-name">
                  UniBites (3rd Place — Product Fellowship)
                </h3>
                <p>
                  Built a full-stack platform using React, Tailwind, and
                  Supabase for optimizing university dining hall feedback loops.
                  Utilized FastAPI and SQL to store and retrieve historical
                  data, and BeautifulSoup to webscrape daily meals.
                </p>
                <p>
                  Implemented secure authentication with JWT and Firebase,
                  supporting 30,000+ users. Engineered a data analytics pipeline
                  with Python, Pandas, and Plotly to transform raw feedback into
                  actionable insights for dining hall optimization.
                </p>
                <div className="pf-tech-tags">
                  {[
                    "React",
                    "Node.js",
                    "Firebase",
                    "Supabase",
                    "SQL",
                    "FastAPI",
                    "Python",
                    "Pandas",
                    "BeautifulSoup",
                    "JWT",
                  ].map((t) => (
                    <span key={t} className="pf-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pf-proj-image">
                <TiltCard>
                  <div className="pf-proj-img-wrap">
                    <img src={UnibitesScreenshot2} alt="Unibites" />
                  </div>
                </TiltCard>
              </div>
            </div>

            <div className="pf-proj-card pf-proj-card--reverse">
              <div className="pf-proj-text">
                <h3 className="pf-proj-name">InSync</h3>
                <p>
                  Developed an AI-driven application that analyzes transaction
                  data to classify purchases as authentic, fraudulent, or
                  suspicious. By examining spending patterns and transaction
                  frequency, the model achieves 90% accuracy in detecting
                  fraudulent purchases.
                </p>
                <p>
                  Built with RESTful APIs, React.js frontend, Node.js and
                  Firebase backend. Model trained on Kaggle datasets using
                  Pandas, Transformers, Hugging Face, and TensorFlow.
                </p>
                <div className="pf-tech-tags">
                  {[
                    "React.js",
                    "Node.js",
                    "Firebase",
                    "TensorFlow",
                    "Hugging Face",
                    "Python",
                  ].map((t) => (
                    <span key={t} className="pf-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pf-proj-image">
                <TiltCard>
                  <div className="pf-proj-img-wrap">
                    <img src={InSyncDash} alt="InSync Dashboard" />
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        <footer className="pf-footer">
          <span className="pf-footer-brand">Maan Patel</span>
          <span>2026 All rights reserved.</span>
          <a
            href="https://github.com/maanpatel2005"
            target="_blank"
            rel="noopener noreferrer"
            className="pf-footer-link"
          >
            GitHub
          </a>
        </footer>
      </div>
    </Provider>
  );
}

export default Home;
