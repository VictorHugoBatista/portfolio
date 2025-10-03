import './App.css';

import GoogleFontLoader from 'react-google-font';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Bitcount',
            weights: [400, '400i'],
          },
          {
            font: 'Bitcount Single',
            weights: [400, 700],
          },
          {
            font: 'Doto',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
