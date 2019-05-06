import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Imagen from './Imagen';
import './../css/App.css';

class App extends Component {
  render() {
    return(
      <div className="app">

          {/* ***** Componente: Header ***** */}
          <Header
                  titulo='Clima React'
          ></Header>

          {/* ***** Componente: Formulario ***** */}
          <Formulario></Formulario>

          {/* ***** Componente: Imagen ***** */}
          <div className="row">
              <div className="col-md-4 centro">
                <Imagen></Imagen>
              </div>
              <div className="col-md-4 centro">
                <h1 className='tamaño'>ReactJS</h1>
              </div>
          </div>
      </div>
    )
  }
}

/*
function App() {
  return (
    
  );
}
*/

export default App;
