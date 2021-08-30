import { Component } from "react";

const garrafas = [
    {"Id":1, "Marca":"Tupperware","Tipo":"Geral"}
    ,{"Id":2, "Marca":"asd","Tipo":"aaaaaaa"}
];
class GarrafaList extends Component {

    render() { 
        return (
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Marca</th>
                    <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        garrafas.map( (c,i) => {
                        return (
                        <tr key={i}>
                            <td>{c.Id}</td>
                            <td>{c.Marca}</td>
                            <td>{c.Tipo}</td>
                        </tr>
                        )
                    })
                    }
                    
                </tbody>
            </table>
        );
    }
}
 
export default GarrafaList;