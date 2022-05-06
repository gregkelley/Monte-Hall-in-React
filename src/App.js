import React from 'react'
import Header from './compontents/Layout/Header';

import './App.css';
import Doors from './compontents/Layout/doors/Doors';

function App() {
  return (
    <React.Fragment>
    <div className='divwrap'>
      <Header />
      <Doors />
      </div>
    </React.Fragment>
  );
}

export default App;
