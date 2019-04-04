const usuarios = [
  { nome: 'Luiz', idade: 23, empresa: 'Empresa 1' },
  { nome: 'Fraga', idade: 15, empresa: 'Empresa 1' },
  { nome: 'Victor', idade: 30, empresa: 'Empresa 2' },
];

const age = usuarios.map(usuario => usuario.idade);
const companyEmployee = usuarios.filter(usuario => usuario.empresa == "Empresa 1" && usuario.idade > 18);
const googleEmployee = usuarios.find(usuario => usuario.empresa == "Google");

usuarios.map(usuario => usuario.idade *= 2);
const usuariosNovos = usuarios.filter(usuario => usuario.idade <= 50);


console.log(age);
console.log(companyEmployee);
console.log(googleEmployee);
console.log(usuariosNovos);