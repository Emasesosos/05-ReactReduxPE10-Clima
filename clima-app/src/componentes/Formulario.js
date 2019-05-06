import React, { Component } from 'react';

class Formulario extends Component {

    /* ***** Validar Formulario ***** */
    
    // ***** Crear los refs
    ciudadRef = React.createRef();
    paisRef = React.createRef();
    
    buscarClima = (e) => {
        e.preventDefault();
        // ***** Leer los refs y crear el objeto
        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value,
        }
        console.log(respuesta);
        // ***** Enviar por props
        // ***** Opcional resetear el form
    }

    /* ***** Validar Formulario ***** */

    render() {
        return(
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form action="" onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.ciudadRef} id="ciudad" type="text"/>
                                <label htmlFor="ciudad">Ciudad: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef} name="" id="">
                                    <option value="" defaultValue>Elige un País</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">México</option>
                                    <option value="PE">Peru</option>
                                </select>
                                <label htmlFor="pais">País: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Formulario;