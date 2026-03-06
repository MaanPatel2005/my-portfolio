import "./home.css";
import "./aboutMe.css";
import India from "/indiaGate.png";
import Potato from "/potatoFritter.png";
import Solo from "/solo.png";
import PostedPic from "/posted.png";
import { Provider } from "./components/ui/provider";
import Navbar from "./components/Navbar";

function aboutMe() {
  return (
    <>
      <Provider>
        <Navbar />
        <div style={{ paddingTop: "var(--nav-height, 60px)" }}>
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
                  artificial intelligence and machine learning. I'm also an
                  active member of the Product @ UCI team, where I provide
                  technical support to software engineers and marketing teams
                  while leveraging my consulting expertise to bridge technical
                  implementation with business objectives. I collaborate with
                  cross-functional teams to ideate, develop, and deliver
                  innovative products, ensuring solutions align with client
                  needs and market demands.
                </p>{" "}
                <p>
                  {" "}
                  I have gained valuable industry experience through internships
                  at Ernst & Young as an AI/Machine Learning Intern, where I
                  designed and implemented NLP-powered dashboards and developed
                  XGBoost-based classifiers that significantly improved
                  operational efficiency. I also interned at Infosys in
                  Bangalore, where I developed advanced robotics automation
                  systems and implemented computer vision solutions for
                  autonomous movement. Additionally, I worked as a Full Stack
                  Developer at Commit The Change, building scalable donation
                  tracking systems that increased food donations from 250k lbs
                  to over 2M lbs.{" "}
                </p>{" "}
                <p>
                  {" "}
                  Beyond academics, I serve as a Resident Advisor within my
                  housing community, collaborating with department heads in
                  Information & Computer Sciences and Engineering to organize
                  events that enable residents to expand their networks and
                  explore research opportunities at UCI. I also work as a
                  Learning Assistant for my school's algorithms course, where I
                  help students master complex data structures and algorithmic
                  concepts. Additionally, I take the initiative to offer
                  tutoring sessions for ICS 46, UCI's data structures and
                  algorithms course, helping students improve their grades by an
                  average of 10% through my free tutoring program.{" "}
                </p>{" "}
                <p>
                  {" "}
                  In my free time, I enjoy staying active through fitness,
                  playing basketball, watching movies, spending quality time
                  with family and friends, and traveling. I'm particularly
                  passionate about technology, coding, and solving complex
                  problems, and I enjoy building solutions that combine
                  innovation and practicality to create meaningful impacts.{" "}
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
        </div>
        {/* end paddingTop wrapper */}
        <footer className="hp-footer">
          <span className="hp-footer-brand">Maan Patel</span>
          <span>&copy; 2025 All rights reserved.</span>
          <a
            href="https://github.com/maanpatel2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hp-footer-link"
          >
            GitHub ↗
          </a>
        </footer>
      </Provider>
    </>
  );
}

export default aboutMe;
