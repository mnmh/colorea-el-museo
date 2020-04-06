import React, {Component} from 'react';
import './styles/source.scss';

import next from './img/nav/next.png';
import prev from './img/nav/prev.png';

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
    let block = <Pagina01 />
    if(this.state.pagina == 2) block = <Pagina02/>
    else if(this.state.pagina == 3) block = <Pagina03/>
    else if(this.state.pagina == 4) block = <Pagina04/>
    else if(this.state.pagina == 5) block = <Pagina05/>
    else if(this.state.pagina == 6) block = <Pagina06/>
    
    
    
    return (
      <div className="App">
        
        {block}

        <div className="nav">
          <div
            className={(this.state.pagina > 1) ? 'prev active' : 'prev'}
          >
            <div
              className="icon"
              style={{backgroundImage: `url(${prev})`}}
            ></div>
            <div className="name">Anterior</div>
          </div>


          <div
            className={(this.state.pagina < 8) ? 'next active' : 'next'}
          >
            <div
              className="icon"
              style={{backgroundImage: `url(${next})`}}
            ></div>
            <div className="name">Siguiente</div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;