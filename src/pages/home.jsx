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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis magni ducimus vero voluptate tempore eum ex deserunt accusamus, harum ab temporibus pariatur cum officiis, ullam minima voluptatem doloremque id dolorum!</p>
        <p>Voluptas iste magni aliquam voluptatem id odio dolores, excepturi, autem earum architecto, dolor beatae! Atque ipsam nam nisi, commodi repudiandae rerum, expedita fuga ad, maxime inventore explicabo tempore tempora quas.</p>
        <p>Ex dolorum incidunt commodi at repellat suscipit! Maxime necessitatibus quidem repellendus vitae tenetur sunt explicabo? Hic quo necessitatibus voluptatum, autem sapiente ea voluptas. Inventore, asperiores deleniti veniam necessitatibus pariatur nihil.</p>
        <p>Pariatur iusto voluptates eveniet ullam delectus? Rem tempore optio minima officia, hic veritatis neque totam deleniti soluta doloribus nisi laudantium? Magni recusandae consequuntur officia, quaerat harum porro mollitia officiis quisquam.</p>
        <p>Saepe, ipsum maxime pariatur nisi ab molestiae omnis similique dolorem debitis nobis! Eveniet non expedita cum commodi doloribus quo a temporibus, reprehenderit architecto at, alias, omnis eos minus debitis sapiente.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis magni ducimus vero voluptate tempore eum ex deserunt accusamus, harum ab temporibus pariatur cum officiis, ullam minima voluptatem doloremque id dolorum!</p>
        <p>Voluptas iste magni aliquam voluptatem id odio dolores, excepturi, autem earum architecto, dolor beatae! Atque ipsam nam nisi, commodi repudiandae rerum, expedita fuga ad, maxime inventore explicabo tempore tempora quas.</p>
        <p>Ex dolorum incidunt commodi at repellat suscipit! Maxime necessitatibus quidem repellendus vitae tenetur sunt explicabo? Hic quo necessitatibus voluptatum, autem sapiente ea voluptas. Inventore, asperiores deleniti veniam necessitatibus pariatur nihil.</p>
        <p>Pariatur iusto voluptates eveniet ullam delectus? Rem tempore optio minima officia, hic veritatis neque totam deleniti soluta doloribus nisi laudantium? Magni recusandae consequuntur officia, quaerat harum porro mollitia officiis quisquam.</p>
        <p>Saepe, ipsum maxime pariatur nisi ab molestiae omnis similique dolorem debitis nobis! Eveniet non expedita cum commodi doloribus quo a temporibus, reprehenderit architecto at, alias, omnis eos minus debitis sapiente.</p>
      </section>
      <footer className="monitor-screen-footer">
        <ul>
          <li>Desenhado por Victor Hugo Batista</li>
          <li><a about="blank" href="https://www.linkedin.com/in/victorhugobatista">LinkedIn</a></li>
          <li><a about="blank" href="https://github.com/VictorHugoBatista">GitHub</a></li>
        </ul>
      </footer>
    </Monitor>
  );
}

export default Home;
