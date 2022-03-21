import React, { Component } from "react";
import CabecalhoTabela from "./CabecalhoTabela";
import ArrayDePacientes from "./ClassePaciente";
import ListaPacientes from "./ListaPacientes";
class TabelaDePacientes extends Component {
  constructor() {
    super();
    this.state = {
      pacientes: []
    }
  }

  

  render() {
    return (
      <table>
      </table>
    );
  }
}

export default TabelaDePacientes;

// function classificacaoIMC(imc) {
//   let resultado = "";

//   if (imc < 18.5) {
//     return (resultado = "Abaixo do Peso");
//   } else if (imc >= 18.5 && imc < 25) {
//     return (resultado = "Peso Normal");
//   } else if (imc >= 25 && imc < 30) {
//     return (resultado = "Sobrepeso");
//   } else if (imc >= 30 && imc < 35) {
//     return (resultado = "Obesidade Grau I");
//   } else if (imc >= 35 && imc < 40) {
//     return (resultado = "Obesidade Grau II");
//   } else if (imc >= 40) {
//     return (resultado = "Obesidade Mórbida");
//   } else {
//     return (resultado = "[ERRO] Classificação Indisponível");
//   }
// }

// const paciente1 = new ClassePaciente(1, "Paulo", 100, 2.0, 10);
// const paciente2 = new ClassePaciente(2, "João", 80, 1.72, 40);
// const paciente3 = new ClassePaciente(3, "Erica", 54, 1.64, 14);
// const paciente4 = new ClassePaciente(4, "Douglas", 75, 1.73, 24);
// const paciente5 = new ClassePaciente(5, "Tatiana", 46, 1.55, 19);
