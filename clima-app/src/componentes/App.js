import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from './Error';
import Imagen from './Imagen';
import './../css/App.css';

class App extends Component {

  state = {
    error: ''
  }

  componentDidMount() {
    this.setState({
      error: false
    })
  }

  datosConsulta = respuesta => {
    // console.log(respuesta);
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      // console.log('Hay errores');
      this.setState({
        error: true,
      })
    } else {
      console.log('Todo correcto');
    }
  }

  render() {

    const error = this.state.error;
    console.log(error);
    let resultado;

    if(error) {
       /* ***** Componente: Error ***** */
      resultado = <Error 
                          mensaje="Ambos campos son obligatorios"
                  ></Error>
    }

    return(
      <div className="app">

          {/* ***** Componente: Header ***** */}
          <Header
                  titulo='Clima React'
          ></Header>

          {/* ***** Componente: Formulario ***** */}
          <Formulario
                      datosConsulta={this.datosConsulta}
          ></Formulario>
          {resultado}
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
