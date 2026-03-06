import "./Navbar.css";

const NAV_LINKS = [
  { label: "PROJECTS", id: "projects" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "ABOUT", id: "about" },
];

export default function Navbar() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="pf-nav">
      <button className="pf-nav-brand" onClick={() => scrollTo("hero")}>
        MAAN PATEL &copy;2026
      </button>
      <ul className="pf-nav-links">
        {NAV_LINKS.map(({ label, id }) => (
          <li key={id}>
            <button className="pf-nav-link" onClick={() => scrollTo(id)}>
              {label}
            </button>
          </li>
        ))}
        <li>
          <a
            className="pf-nav-link"
            href="https://github.com/maanpatel2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB &#8599;
          </a>
        </li>
      </ul>
    </nav>
  );
}
