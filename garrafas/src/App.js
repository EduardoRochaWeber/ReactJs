import React, { Component } from 'react';
import './assets/css/App.css';
import GarrafaListCor from './components/garrafa-list/GarrafaListCor';
import GarrafaForm from './components/garrafa-form/GarrafaForm';
import GarrafaList from './components/garrafa-list/GarrafaList';

class App extends Component {
  list = [];
  list_color = [];

  constructor(){
    super();
    this.state = {
      list : this.list, 
      list_color : this.list_color
    }
  }

  create_color(model){
    this.list_color.push(model);
    this.setState({
      list_color : this.list_color
    })
  }

  create(model){
    this.list.push(model);
    this.setState({
      list : this.list
    })
  }

  delete(id){
    let item = this.list.findIndex(c => c.id === id);
    this.list.splice(item, 1);
    this.setState({
      list : this.list
    })
    console.log(this.state.list)
  }

  edit(id){
    let model = this.list.find(c => c.id === id);
    console.log(model);
    document.getElementById("id").value = model.id;
    document.getElementById("marca").value = model.marca;
    document.getElementById("tipo").value = model.tipo;
    //let model = {"id":this.id, "marca":this.marca, "tipo":this.tipo};
    //let item = this.list.find(c => c.id === id);
    
  }

  render(){
    return (
      <section>
        <h1>Lista de Garrafinhas</h1>
        <GarrafaListCor create_color = {this.create_color.bind(this)} />
        <GarrafaForm create = {this.create.bind(this)} list_color={this.state.list_color} />
        <br />
        <GarrafaList list={this.state.list} delete={this.delete.bind(this)} edit={this.edit.bind(this)} />
      </section>
    );
  }
}

export default App;
