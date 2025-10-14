function Footer() {
  return (
    <footer className="monitor-screen-footer">
      <ul className="horizontal-list">
        <li>© {new Date().getFullYear()}</li>
        <li>v0.3.0</li>
        <li>Desenhado por Victor Hugo Batista</li>
        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/victorhugobatista">LinkedIn</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://github.com/VictorHugoBatista">GitHub</a></li>
      </ul>
    </footer>
  );
};

export default Footer;