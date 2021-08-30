import { Component } from "react";

class GarrafaForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form action="post">
                <label htmlFor="id">Id:</label><input type="number" id="id" placeholder="Digite o Id"/>
                <label htmlFor="marca">Marca:</label><input type="text" id="marca" placeholder="Digite a Marca"/>
                <label htmlFor="tipo">Tipo:</label><input type="text" id="tipo" placeholder="Digite o Tipo"/>
                <input type="submit" value="Salvar"/>
            </form>
        );
    }
}
 
export default GarrafaForm;