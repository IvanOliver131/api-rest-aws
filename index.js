const pacientes = [
  {id: 1, nome: 'João', idade: 15},
  {id: 2, nome: 'Maria', idade: 20},
  {id: 3, nome: 'Luiz', idade: 25},
];

exports.handler = async (event) => {
  const { pacienteId } = event;
  const pacienteEcontrado = pacientes.find(
    paciente => paciente.id == pacienteId
  );
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(pacienteEcontrado)
  }

  return response;
}