import { Component } from "react";

class GarrafaForm extends Component {
  id;
  color;
  name;
  list_garrafa_color;

  constructor(props) {
    super(props);
    this.list_garrafa_color = props.list_color;
  }

  handlerInputId(event) {
    this.id = event.target.value;
    event.stopPropagation();
  }

  handlerAlterColor(event) {
    this.color = event.target.value;
    console.log(this.color);
    event.stopPropagation();
  }

  handlerAlterName(event) {
    this.name = event.target.value;
    event.stopPropagation();
  }

  handlerSubmitName(event) {
    event.preventDefault();
    event.stopPropagation();
    let dic = { "id":this.id, "color": this.color, "name": this.name };
    this.props.create(dic);
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handlerSubmitName.bind(this)}>
          <label>Id:</label>
          <input
            type="number"
            id="id"
            placeholder="Digite o Id"
            onChange={this.handlerInputId.bind(this)}
          />
          <label>Nome da garrafa: </label>
          <input
            type="text"
            id="name"
            placeholder="Digite um nome"
            onChange={this.handlerAlterName.bind(this)}
          />
          <label>Cor: </label>
          <select
            type="text"
            id="alterColorSelect"
            onChange={this.handlerAlterColor.bind(this)}
            defaultValue="-1"
          >
            <option id="alterColorOption" value="-1" disabled>
              Selecione
            </option>
            {this.list_garrafa_color.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
          <button type="submit">Salvar</button>
        </form>
      </section>
    );
  }
}
 
export default GarrafaForm;