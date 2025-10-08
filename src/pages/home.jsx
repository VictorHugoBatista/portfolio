import { Link } from "react-router";

import '../App.css';
import Monitor from '../layout/Monitor';
import BannerAsciiResponsive from "../components/banner-ascii-responsive";
import photograph from "../images/photograth.png"

function Home() {
  return (
    <Monitor>
      <section className="monitor-screen-content">
        <div className="monitor-screen-jumbotron">
          <BannerAsciiResponsive texts={["Tecnologia", "Experiencia", "Software", "Metodologia", "Equipe", "Solucao", "Cliente", "Qualidade", "Fullstack"]} />
        </div>

        <div className="media">
          <div className="media-image">
            <img src={photograph} alt="Victor Hugo Batista" />
          </div>
          <div className="media-content">
            <h2>Resumo</h2>
            <p>Sou um desenvolvedor full stack com 10 anos de experiência, minhas principais competências são:</p>
            <ul>
              <li><b>Linguagens de programação</b>: JavaScript, TypeScript, PHP, Java</li>
              <li><b>Frontend</b>: ReactJS, React Native, VueJS, Angular 2+, SASS, CSS, HTML</li>
              <li><b>Backend</b>: NestJS, Express, Laravel, Spring Boot</li>
              <li><b>Devops</b>: Docker, Kubernetes, AWS</li>
              <li><b>Conceitos</b>: Programação Orientada à Objetos, Programação Funcional, Microsserviços, MVC, DDD</li>
              <li><b>Automação de testes</b>: testes unitários e end to end usando Chai e Jest</li>
              <li><b>Bancos de dados</b>: MySQL, Postgres, MongoDB, Databricks</li>
              <li><b>Observabilidade</b>: Kibana, Grafana, Dynatrace</li>
              <li><b>Idiomas</b>: Inglês intermediário</li>
            </ul>
            <p>Mas não tenho medo de código! Comecei a programar em PHP sem saber a linguagem e ingressei no React Native sem estudo prévio e tive sucesso na nas duas tentativas, como você pode ver na <Link to="/minha-trajetoria">minha trajetória completa</Link>!</p>
            {/* <p>Veja meus projetos <Link to="/projects">aqui</Link></p> */}
            <p>Entre em contato pelo <a target="_blank" href="https://www.linkedin.com/in/victorhugobatista">Linkedin</a></p>
            <p>Perfil do <a target="_blank" href="https://github.com/VictorHugoBatista">GitHub</a></p>
          </div>
        </div>
        <h2>Curiosidades</h2>
        <ul>
          <li>Tenho uma pequena coleção de cubos mágicos</li>
          <li>Para mim,  não há vida sem música</li>
          <li>Sou vegetariano (mas não vou te obrigar à deixar de comer carne :v)</li>
          <li>Descubra :P</li>
        </ul>
      </section>
    </Monitor>
  );
}

export default Home;
