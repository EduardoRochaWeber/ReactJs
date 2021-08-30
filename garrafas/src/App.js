import { Component } from 'react';
import './App.css';
import GarrafaForm from './components/GarrafaForm';
import GarrafaList from './components/GarrafaList';

class App extends Component {
  render(){
    return (
      <section>
        <h1>Lista de Garrafinhas</h1>
        <GarrafaForm/><br/>
        <GarrafaList/>
      </section>
    );
  }
}

export default App;
