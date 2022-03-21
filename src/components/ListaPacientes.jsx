import React, { Component } from "react";
import Paciente from "./Paciente";

class ListaPacientes extends Component {
  render() {
    return (
      <tbody>
        {this.props.pacientes.map((paciente, index) => {
          return (
            <tr key={index} className={"paciente"}>
              <Paciente
                id={index}
                apagarPaciente={this.props.apagarPaciente}
                nome={paciente.nome}
                peso={paciente.peso}
                altura={paciente.altura}
                gordura={paciente.gordura}
              />
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default ListaPacientes;