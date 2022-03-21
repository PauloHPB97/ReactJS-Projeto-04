import React, { Component } from "react";
import { ReactComponent as DeleteSVG } from "../assets/img/delete-icon.svg";

class Paciente extends Component {
  calcimc(peso, altura, gordura) {
    let imc = 0;

    function validaPeso(peso) {
      if (peso > 0 && peso <= 300) {
        return true;
      }
      return false;
    }

    function validaAltura(altura) {
      if (altura > 0 && altura <= 3) {
        return true;
      }
      return false;
    }

    function validaGordura(gordura) {
      if (gordura >= 0 && gordura <= 100) {
        return true;
      }
      return false;
    }

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);
    let gorduraValida = validaGordura(gordura);

    if (!pesoValido) {
      return (imc = "[Erro] Peso inválido!");
    } else if (!alturaValida) {
      return (imc = "[Erro] Altura inválida!");
    } else if (!gorduraValida) {
      return (imc = "[Erro] Gordura inválida!");
    } else {
      imc = peso / (altura * altura);
      return imc.toFixed(2);
    }
  }

  apagar(event) {
    const indice = this.props.id;
    let evento = event.target.parentNode;
    let eventoPai = evento.parentNode;
    eventoPai.parentNode.classList.add("fadeOut");
    setTimeout(() => {
      eventoPai.parentNode.classList.remove("fadeOut");
      this.props.apagarPaciente(indice);
    }, 500);
  }

  render() {
    return (
      <>
        <td className="Id">{this.props.id}</td>
        <td className="Nome">{this.props.nome}</td>
        <td className="Peso">{this.props.peso}</td>
        <td className="Altura">{this.props.altura}</td>
        <td className="Gordura">{this.props.gordura}</td>
        <td className="Imc">
          {this.calcimc(this.props.peso, this.props.altura, this.props.gordura)}
        </td>
        <td className="Deletar">
          <DeleteSVG onClick={this.apagar.bind(this)} />
        </td>
      </>
    );
  }
}

export default Paciente;
