import { Link } from "react-router";

function Header() {
    return (
      <header className="monitor-screen-main-header">
        <div className="monitor-screen-title">
          <h1>Victor Hugo Batista</h1>
        </div>
        <nav class="monitor-screen-top-nav">
          <ul className="horizontal-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/minha-trajetoria">Minha trajetória</Link></li>
            <li><Link to="/projects">Projetos</Link></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/victorhugobatista">Linkedin</a></li>
            <li><a target="_blank" href="https://github.com/VictorHugoBatista">Github</a></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;
