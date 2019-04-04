const arr = [1, 2, 3, 4, 5, 6];

const [ x, ...y ] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const usuario = {
  nome: 'Luiz Felipe',
  idade: 21,
  endereco: {
  cidade: 'BH',
  uf: 'MG',
  pais: 'Brasil',
  }
};

const usuario1 = {...usuario, nome: "Joao"};
const usuario2 = {...usuario, cidade: "SP"};

console.log(usuario, usuario1, usuario2);