import React, {Component} from 'react';
import './styles/source.scss';

import Pagina01 from './components/paginas/Pagina01';
import Pagina02 from './components/paginas/Pagina02';
import Pagina03 from './components/paginas/Pagina03';
import Pagina04 from './components/paginas/Pagina04';
import Pagina05 from './components/paginas/Pagina05';
import Pagina06 from './components/paginas/Pagina06';
import Pagina07 from './components/paginas/Pagina07';
import Pagina08 from './components/paginas/Pagina08';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pagina: 1
    }
  }
  
  render(){
    return (
      <div className="App">
        <Pagina08/>
      </div>
    );
  }
  
}

export default App;