import { Link } from 'react-router-dom';

import '../App.css';

import Monitor from '../layout/monitor';

function Home() {
  return (
    <Monitor>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/about">About</Link> |{' '}
        </nav>
      </div>
    </Monitor>
  );
}

export default Home;
