import { Component } from "react";
import { ReactComponent as DeleteSvg } from "../../assets/img/delete.svg"
import { ReactComponent as EditSvg } from "../../assets/img/edit.svg"


class GarrafaList extends Component {
  id;
  name;
  color;
  constructor(props) {
    super(props);
    this.list_garrafa_color = props.list_color;
    this.list_garrafa_name = props.list;
  }

  delete(id, event){
    event.stopPropagation();
    this.props.delete(id);
  }

  edit(id, event){
    event.stopPropagation();
    this.props.edit(id);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {this.list_garrafa_name.map((c, i) =>  
              <tr key={i}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.color}</td>
                <td>
                  <DeleteSvg title="Deletar item" onClick={this.delete.bind(this, c.id)} />
                </td>
                <td>
                  <EditSvg title="Editar item" onClick={this.edit.bind(this, c.id)} />
                </td>
              </tr>
          )}
        </tbody>
      </table>
    );
  }
}
 
export default GarrafaList;