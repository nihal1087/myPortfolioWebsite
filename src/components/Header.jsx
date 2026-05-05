import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolio.js";

const navItems = [
  { label: "Work", to: "/#projects" },
  { label: "Experience", to: "/#experience" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  function goHome() {
    navigate("/");
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button className="brand" type="button" onClick={goHome} aria-label="Go to homepage">
          <span className="brand__image-wrap">
            <img src={profile.avatarImage} alt="" className="brand__image" />
          </span>
          <span className="brand__copy">
            <span className="brand__name">{profile.shortName}</span>
            <span className="brand__role">Full-stack developer</span>
          </span>
        </button>

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link className="site-nav__link" key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
