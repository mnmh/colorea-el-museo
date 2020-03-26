import React from 'react';
import './styles/source.scss';

import backImg from './png/RENDER_06.png'

import Background from './components/Background';
import DrawingBoard from './components/DrawingBoard';

function App() {
  return (
    <div className="App">
      <Background img={backImg}/>
      <DrawingBoard />
    </div>
  );
}

export default App;