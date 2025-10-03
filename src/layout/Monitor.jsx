import { Link } from "react-router";

function Monitor(props) {
  return (
    <div className="monitor">
      <div className="monitor-screen crt">
        <div className="monitor-screen-inner">
          <main className="monitor-screen-container">
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
            {props.children}
            <footer className="monitor-screen-footer">
              <ul className="horizontal-list">
                <li>Beta v0.1</li>
                <li>Desenhado por Victor Hugo Batista</li>
                <li><a about="blank" href="https://www.linkedin.com/in/victorhugobatista">LinkedIn</a></li>
                <li><a about="blank" href="https://github.com/VictorHugoBatista">GitHub</a></li>
              </ul>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Monitor;
