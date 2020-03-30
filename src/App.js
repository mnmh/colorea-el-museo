import React from 'react';
import './styles/source.scss';

import Pagina01 from './components/paginas/Pagina01';
import Pagina02 from './components/paginas/Pagina02';
import Pagina03 from './components/paginas/Pagina03';
import Pagina04 from './components/paginas/Pagina04';
import Pagina05 from './components/paginas/Pagina05';

function App() {
  let items = [
    {
      name: 'slide_uno'
    }
  ]
  return (
    <div className="App">
      <Pagina05/>
    </div>
  );
}

export default App;