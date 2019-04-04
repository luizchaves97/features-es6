// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);
console.log(arr);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Luiz', idade: 21 };
const mostraIdade = usuario => ( usuario.idade );
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Luiz";
const idade = 23;
const mostraUsuario = (nome = 'Luiz', idade = 18) => ({ nome, idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = () => {
 return new Promise((resolve, reject) => resolve());
}