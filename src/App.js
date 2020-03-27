import React from 'react';
import './styles/source.scss';

import Pagina01 from './components/paginas/Pagina01';

function App() {
  let items = [
    {
      name: 'slide_uno'
    }
  ]
  return (
    <div className="App">
      <Pagina01 />
    </div>
  );
}

export default App;