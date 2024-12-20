// Import necessary dependencies and components
import "./App.css";
import Home from "./home";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Default route "/" redirects to "/Home" */}
          <Route path="/" element={<Navigate to="/Home" />} />

          {/* Other routes */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
