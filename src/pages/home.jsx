import { Link } from "react-router";

import '../App.css';
import Monitor from '../layout/Monitor';
import BannerAsciiResponsive from "../components/banner-ascii-responsive";

function Home() {
  return (
    <Monitor>
      <section className="monitor-screen-content">
        <div className="monitor-screen-jumbotron">
          <BannerAsciiResponsive texts={["Tecnologia", "Node", "Software", "React", "Solucao", "Qualidade", "Fullstack"]} />
        </div>

        <h2>Resumo</h2>
        <p>Sou um desenvolvedor full stack com 10 anos de experiência, minhas principais competências são:</p>
        <ul>
          <li>Linguagens de programação: JavaScript, TypeScript, PHP, Java</li>
          <li>Frontend: ReactJS, React Native, VueJS, Angular 2+, SASS, CSS, HTML</li>
          <li>Backend: NestJS, Express, Laravel, Spring Boot</li>
          <li>Devops: Docker, Kubernetes, AWS</li>
          <li>Conceitos: Programação Orientada à Objetos, Programação Funcional, Microsserviços, MVC, DDD</li>
          <li>Automação de testes: testes unitários e end to end usando Chai e Jest</li>
          <li>Bancos de dados: MySQL, Postgres, MongoDB, Databricks</li>
          <li>Observabilidade: Kibana, Grafana, Dynatrace</li>
          <li>Idiomas: Inglês intermediário</li>
        </ul>
        <p>Mas não tenho medo de código! Comecei a programar em PHP sem saber a linguagem e tive sucesso na minha aventura, como você pode ver na <Link to="/minha-trajetoria">minha trajetória completa</Link>!</p>
        <p>Veja meus projetos <Link to="/projects">aqui</Link></p>
        <p>Entre em contato pelo <a target="_blank" href="https://www.linkedin.com/in/victorhugobatista">Linkedin</a></p>
        <p>Perfil do <a target="_blank" href="https://github.com/VictorHugoBatista">github</a></p>
      </section>
    </Monitor>
  );
}

export default Home;
