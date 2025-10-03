import Header from './Header';
import Footer from './Footer';

function Monitor(props) {
  return (
    <div className="monitor">
      <div className="monitor-screen crt">
        <div className="monitor-screen-inner">
          <main className="monitor-screen-container">
            <Header />
            {props.children}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Monitor;
