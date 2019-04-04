const empresa = {
  nome: 'Empresa 1',
  endereco: {
    cidade: 'BH',
    estado: 'MG',
  }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

const usuario = {
  nome: "Luiz",
  idade: 21,
}

function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;

}

console.log(mostraInfo(usuario));