import React from 'react';
import './styles/source.scss';

import Pagina01 from './components/paginas/Pagina01';
import Pagina02 from './components/paginas/Pagina02';
import Pagina03 from './components/paginas/Pagina03';
import Pagina04 from './components/paginas/Pagina04';

function App() {
  let items = [
    {
      name: 'slide_uno'
    }
  ]
  return (
    <div className="App">
      <Pagina04/>
    </div>
  );
}

export default App;