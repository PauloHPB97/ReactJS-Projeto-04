import React, { Component } from "react";
class FormPaciente extends Component {
  constructor(props) {
    super(props);
    this.nome = "";
    this.peso = "";
    this.altura = "";
    this.gordura = "";
  }

  _handleMudancaNome(evento) {
    evento.stopPropagation();
    this.nome = evento.target.value;
  }
  _handleMudancaPeso(evento) {
    evento.stopPropagation();
    this.peso = evento.target.value;
  }

  _handleMudancaAltura(evento) {
    evento.stopPropagation();
    this.altura = evento.target.value;
  }

  _handleMudancaGordura(evento) {
    evento.stopPropagation();
    this.gordura = evento.target.value;
  }

  _criarPaciente(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.adicionarPaciente(
      this.nome,
      this.peso,
      this.altura,
      this.gordura
    );
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarPaciente.bind(this)}>
        <div className="grupo">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            className="campo"
            type={"text"}
            onChange={this._handleMudancaNome.bind(this)}
          ></input>
        </div>
        <div className="grupo">
          <label htmlFor="peso">Peso:</label>
          <input
            id="peso"
            className="campo"
            type={"text"}
            onChange={this._handleMudancaPeso.bind(this)}
          ></input>
        </div>
        <div className="grupo">
          <label htmlFor="altura">Altura:</label>
          <input
            id="altura"
            className="campo"
            type={"text"}
            onChange={this._handleMudancaAltura.bind(this)}
          ></input>
        </div>
        <div className="grupo">
          <label htmlFor="gordura">% de Gordura:</label>
          <input
            id="gordura"
            className="campo"
            type={"text"}
            onChange={this._handleMudancaGordura.bind(this)}
          ></input>
        </div>

        <button className="btn-form">Adicionar</button>
      </form>
    );
  }
}

export default FormPaciente;
