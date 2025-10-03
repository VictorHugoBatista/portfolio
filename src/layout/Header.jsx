import { Link } from "react-router";

function Header() {
    return (
      <header className="monitor-screen-main-header">
        <div className="monitor-screen-title">
          <h1>Victor Hugo Batista</h1>
        </div>
        <nav class="monitor-screen-top-nav">
          <ul className="horizontal-list">
            <li><Link to="/">Meu ciclo</Link></li>
            <li><Link to="/projects">Projetos</Link></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;
