import '../App.css';

import Monitor from '../layout/Monitor';

import BannerAsciiResponsive from "../components/banner-ascii-responsive";

function Home() {
  return (
    <Monitor>
      <header className="monitor-screen-title">
        <h1>Victor Hugo Batista</h1>
      </header>
      <section className="monitor-screen-content">
        <div className="monitor-screen-jumbotron">
          <BannerAsciiResponsive texts={["Tecnologia", "Software", "Solucao", "Qualidade", "Fullstack"]} />
        </div>

        <h2>Meu ciclo</h2>
        <h3>2010-2014: Definição de requisitos</h3>
        <p>Me apaixonei pelo desenvolvimento de software desde o meu primeiro contato, no curso de Ciência da Computação, em 2010. Desde então não deixei de escrever linhas de código.</p>

        <h3>2015:2020: Desenvolvimento</h3>
        <p>Saindo da faculdade, comecei a trabalhar com a criação de sites com Wordpress na Studio Visual, fazendo parte de uma equipe com sede de conhecimento e evolução, logo estava dominando PHP, javascript e CSS e começamos a desafiar os limites do que desenvolvimento Wordpress significa: nós descobrimos o starter theme Sage: um tema Wordpress que já unia várias features importantes do Laravel, como o SASS e os templates Blade. Pode imaginar como foi divertido aprender tudo isso e usar nos nossos projetos?</p>
        <p>Nessa empresa eu lidei com vários sites institucionais com layout desafiadores (incluindo os sites da FMU, BSP, Serasa Experian dentre outros), ecommerces feitos com base no famoso plugin Woocommerce e alguns sistemas mais internos.</p>

        <h3>2020:2021: Testes</h3>
        <p>Meu próximo passo foi sair do ambiente Wordpress, embora eu continuasse no PHP: mas dessa vez deixei as WPQueries para trás e passei a trabalhar integralmente em contato com a SQL. Saí dos templates e passei a lidar com as rotas de um sistema MVC. E por fim, finalmente comecei a trabalhar com o Vue (até hoje meu framework javascript favorito).</p>
        <p>Na i9XP, eu estive em contato com dois produtos de ecommerce da Unilever, fazendo integração das telas de carrinho e checkout com produtos de terceiros.</p>
        <p>Eu passei a trabalhar com metodologias ageis nesse momento, também passei a atuar em uma squad com escopo mais definido.</p>

        <h3>2021:2025: Deploy</h3>
        <p>A venda da i9XP para a então Via Varejo apresentou um grande desafio para mim. A nova missão foi cuidar do app banQi, mas uma parte especialmente sensível do app. A funcionalidade de Pix. Você não imagina meu frio na barriga no deploy da primeira demanda regulatória!</p>
        <p>Como nunca tive medo de código, logo eu já estava mais confiante no React Native e no framework Node interno, bem parecido com NestJS, diga-se de passagem.</p>
        <p>Conheci o Lean Kanban e passei a trabalhar sem as sprints que havia me acostumado por um ano.</p>

        <h3>Futuro</h3>
        <p>Isso me leva ao presente e ao futuro. Atualmente me encontro estudando Java Spring e atualizando meu React web, mas como sempre, não tenho medo de código.</p>
        <p>Só agora que me vi obrigado à olhar para trás e atualizar as minhas redes que percebi o tamanho do caminho que percorri para chegar até aqui. Foram muitas linhas de código escritas, muitos deploys feitos, muitos bugs resolvidos, mas, além disso, muitos clientes que tiveram sua experiência construída e melhorada pelos times que tive a honra de fazer parte. Tenho muito à agredecer à cada um deles, pelo tanto que pude aprender, para além do que a faculdade ensina e pelas conexões estabelecidas.</p>
        <p>E agora, vamos para o próximo passo?</p>
        <p>Sinta-se livre para me procurar no mei <b><a href="https://www.linkedin.com/in/victorhugobatista">linkedin</a></b> o/</p>
      </section>
      <footer className="monitor-screen-footer">
        <ul>
          <li>Beta v0.1</li>
          <li>Desenhado por Victor Hugo Batista</li>
          <li><a about="blank" href="https://www.linkedin.com/in/victorhugobatista">LinkedIn</a></li>
          <li><a about="blank" href="https://github.com/VictorHugoBatista">GitHub</a></li>
        </ul>
      </footer>
    </Monitor>
  );
}

export default Home;
