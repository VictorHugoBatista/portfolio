import '../App.css';
import Monitor from '../layout/Monitor';
import BannerAsciiResponsive from "../components/banner-ascii-responsive";

function About() {
  return (
    <Monitor>
      <section className="monitor-screen-content">
        <div className="monitor-screen-jumbotron">
          <BannerAsciiResponsive texts={["Carreira", "Paixao", "Trajetoria", "Networking", "Conexao"]} />
        </div>

        <h2>Minha trajetória</h2>
        <h3>2010-2014: Definição de requisitos</h3>
        <p>Me apaixonei pelo desenvolvimento de software desde o meu primeiro contato, no curso de Ciência da Computação, em 2010. Desde então não deixei de escrever linhas de código.</p>

        <h3>2015:2020: Desenvolvimento</h3>
        <p>Saindo da faculdade, comecei a trabalhar com a criação de sites com Wordpress na Studio Visual. Aceitei o desafio sem ter qualquer experiência com PHP ou Wordpress, mas fazer parte de uma equipe com sede de conhecimento e evolução, logo estava dominando PHP, javascript e CSS e começamos a desafiar os limites do que desenvolvimento Wordpress significa: nós descobrimos o starter theme Sage (um tema Wordpress que já unia várias funcionalidades importantes que só era possível encontrar em frameworks mais modernos, como o Laravel).</p>
        <p>Pode imaginar como foi divertido aprender tudo isso e usar nos nossos projetos? É por isso que eu acredito que é impossível dar saltos consideráveis sem uma equipe crescendo junto.</p>
        <p>Eu lidei com vários sites institucionais com layout desafiadores (incluindo os sites da FMU, BSP, Serasa Experian dentre outros), ecommerces feitos com base no famoso plugin Woocommerce e alguns sistemas mais internos nessa empresa.</p>

        <h3>2020:2021: Testes</h3>
        <p>Meu próximo passo foi sair do ambiente Wordpress, embora eu continuasse trabalhando com PHP: mas dessa vez deixei as WPQueries para trás e passei a trabalhar em contato total com a SQL. Saí dos templates e passei a lidar com as rotas de um sistema MVC próprio da empresa. E por fim, com toda felicidade, finalmente comecei a trabalhar com o Vue (até hoje meu framework javascript favorito, juntamente com o VueX).</p>
        <p>Na i9XP, eu estive em contato com dois produtos de ecommerce da Unilever, principalmente fazendo integração das telas de carrinho e checkout com produtos de terceiros.</p>
        <p>Eu passei a trabalhar com metodologias ageis nesse momento, também passei a atuar em uma squad com escopo mais definido.</p>

        <h3>2021:2025: Deploy</h3>
        <p>A venda da i9XP para a então Via Varejo apresentou um grande desafio para mim: A nova missão foi cuidar do app banQi em ter experiência com desenvolvimento mobile. Além disso, se tretava de uma parte especialmente sensível do app: a funcionalidade de transferências Pix. Você não imagina meu frio na barriga no deploy da primeira demanda regulatória!</p>
        <p>Como nunca tive medo de código, logo eu já estava mais confiante no React Native e no framework Node interno, bem parecido com NestJS, diga-se de passagem. E olha só, aquela mesma pessoa com medo de trabalhar com PHP e Wordpress acabou por se tornar referência técnica!</p>
        <p>Conheci o Lean Kanban e passei a trabalhar sem as sprints, me adaptando à um novo fluxo de trabalho.</p>

        <h3>Futuro</h3>
        <p>Isso nos leva ao presente e ao futuro: me encontro estudando Java Spring, MongoDB e atualizando meu React web (esse portifólio é um desses exercícios, inclusive!).</p>
        <p>Só agora com a necessidade de olhar para trás para atualizar as minhas redes que percebi o tamanho do caminho que percorri para chegar até aqui. Além de muitas linhas de código escritas, muitos deploys feitos, muitos bugs resolvidos, também foram muitos clientes que tiveram sua experiência construída e melhorada pelos times com quem que tive a honra de fazer parte. Tenho muito à agredecer à cada um deles, pelo tanto que pude aprender, para além do que a faculdade ensina e pelas conexões estabelecidas.</p>
        <p>E agora, vamos para o próximo passo?</p>
        <p>Sinta-se livre para me procurar no meu <b><a href="https://www.linkedin.com/in/victorhugobatista">linkedin</a></b> o/</p>
      </section>
    </Monitor>
  );
}

export default About;
