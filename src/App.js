import { Component } from "react";
import "./App.css";
import CabecalhoTabela from "./components/CabecalhoTabela";
import FormPaciente from "./components/FormPaciente";
import ListaPacientes from "./components/ListaPacientes";
import Input from "./Input";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pacientes: [],
    };
  }

  criarPaciente(nome, peso, altura, gordura) {
    const novoPaciente = { nome, peso, altura, gordura };
    const novoArrayPacientes = [...this.state.pacientes, novoPaciente];
    const novoEstado = {
      pacientes: novoArrayPacientes,
    };
    this.setState(novoEstado);
  }

  deletarPaciente(index) {
    let arrayPacientes = this.state.pacientes;
    arrayPacientes.splice(index, 1);
    this.setState({ pacientes: arrayPacientes });
  }

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <div className="container">
            <h1 className="App_header_container_titulo">Aparecida Nutrição</h1>
          </div>
        </header>
        <div className="Tabela">
          <section className="container">
            <h2 className="Tabela_titulo">Meus pacientes</h2>
            <Input />
            <table>
              <CabecalhoTabela />
              <ListaPacientes
                pacientes={this.state.pacientes}
                apagarPaciente={this.deletarPaciente.bind(this)}
              />
            </table>
          </section>
        </div>

        <section className="container">
          <h2 className="Tabela_titulo">Adicionar novos pacientes</h2>
          <FormPaciente adicionarPaciente={this.criarPaciente.bind(this)} />
        </section>
      </div>
    );
  }
}

export default App;
