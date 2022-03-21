import React, { Component } from "react";
class Input extends Component {
  handlePesquisaNome(e) {
    var pacientesI = document.querySelectorAll(".paciente");
    if (e.target.value.length > 0) {
      for (var i = 0; i < pacientesI.length; i++) {
        var pacienteI = pacientesI[i];
        var tdNomed = pacienteI.querySelector(".Nome");
        var nome = tdNomed.textContent;
        var expressao = new RegExp(e.target.value, "i"); // Expressão Regular que pega o valor inserido no campo e "i" = Case Insensitive, não importa se tá em mniúsculo ou maiúsculo.

        if (!expressao.test(nome)) {
          // Você quer testar se no nome, vai ter um pedaço o que tem na Expressão Regular
          pacienteI.classList.add("invisivel");
        } else {
          pacienteI.classList.remove("invisivel");
        }
      }
    } else {
      for (var i = 0; i < pacientesI.length; i++) {
        var pacienteI = pacientesI[i];
        pacienteI.classList.remove("invisivel");
      }
    }
  }
  render() {
    return (
      <>
        <label htmlFor="filtrar-tabela">Pesquise por nome:</label>
        <input
          type="text"
          id="filtrar-tabela"
          placeholder="Digite um nome"
          name="filtro"
          onChange={this.handlePesquisaNome.bind(this)}
        />
      </>
    );
  }
}

export default Input;
