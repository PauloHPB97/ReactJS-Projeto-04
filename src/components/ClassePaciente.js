export default class ArrayDePacientes {
  constructor() {
    this.pacientes = [];
    this._inscritos = [];
  }

  adicionarPaciente(id, nome, peso, altura, gordura) {
    const novoPaciente = new ClassePaciente(id, nome, peso, altura, gordura);
    this.pacientes.push(novoPaciente);
  }

  apagarPaciente(id) {
    this.pacientes.splice(id, 1);
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desiscrver(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.pacientes);
    });
  }
}

class ClassePaciente {
  constructor(id, nome, peso, altura, gordura) {
    this.id = id;
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.gordura = gordura;
  }
}
