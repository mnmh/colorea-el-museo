import React from 'react';
import './styles/source.scss';

import Pagina01 from './components/paginas/Pagina01';
import Pagina02 from './components/paginas/Pagina02';

function App() {
  let items = [
    {
      name: 'slide_uno'
    }
  ]
  return (
    <div className="App">
      <Pagina02 />
    </div>
  );
}

export default App;