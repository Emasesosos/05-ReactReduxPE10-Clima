import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from './Error';
import Clima from './Clima';
import Imagen from './Imagen';
import './../css/App.css';

class App extends Component {

  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState) {
    /*
    console.log('Props');
    console.log(prevProps);
    console.log('state');
    console.log(prevState);
    */
   if(prevState.consulta !== this.state.consulta) {
     this.consultarApi();
   }
    
  }

  componentDidMount() {
    this.setState({
      error: false
    })
  }

  consultarApi = () => {
    const { ciudad, pais } = this.state.consulta;
    // console.log(ciudad);
    // console.log(pais;
    if(!ciudad || !pais) return null;

    // ***** Leer la url y agregar el api key
    const appId = '1e6c661872ef0f8b23ef9b0c7fb48912';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    // console.log(url);

    // ***** Query con fetch API
    fetch(url)
      .then(respuesta => {
        // console.log(respuesta);
        return respuesta.json();
      })
      .then(datos => {
        // console.log(datos);
        this.setState({
          resultado: datos,
        })
      })
      .catch(error => {
        console.log(error);
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
      // console.log('Todo correcto');
      this.setState({
        consulta: respuesta,
        error: false,
      })
    }
  }

  render() {

    const {error} = this.state;
    // console.log(error);
    const { cod } = this.state.resultado;

    let resultado;

    if(error) {
       /* ***** Componente: Error ***** */
      resultado = <Error 
                          mensaje="Ambos campos son obligatorios"
                  ></Error>
    } else if (cod === "404") {
      resultado = <Error
                          mensaje="Ciudad no encontrada"
                  ></Error>
    } else {
      /* ***** Componente: Clima ***** */
      resultado = <Clima
                          resultado = {this.state.resultado}
                  ></Clima>
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
