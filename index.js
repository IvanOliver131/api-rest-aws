const moment = require('moment');

const pacientes = [
  {id: 1, nome: 'João', dataNascimento: '2000-07-28'},
  {id: 2, nome: 'Maria', dataNascimento: '1998-05-08'},
  {id: 3, nome: 'Luiz', dataNascimento: '1996-02-25'},
];

function buscarPaciente (id) {
  return pacientes.find((paciente) => paciente.id === id)
}

function calcularIdade (paciente) {
  const hoje = moment();
  const dataNascimento = moment(paciente.dataNascimento, 'YYYY-MM-DD');

  return hoje.diff(dataNascimento, 'years')
}

exports.handler = async (event) => {
  console.log('Paciente informado: ' + event.pacienteId);
   
  let pacienteEncontrado;

  if (event.pacienteId) {
    pacienteEncontrado = buscarPaciente(event.pacienteId);
    pacienteEncontrado.idade = calcularIdade(pacienteEncontrado)
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(pacienteEcontrado)
  }

  return response;
}