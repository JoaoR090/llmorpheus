const idade: number = 20;
const nome = "João";

function podeEntrar(idade: number): boolean {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

while (idade > 0) {
  break;
}

const frutas = ["maçã", "banana", "laranja"];

for (const fruta of frutas) {
  console.log(fruta);
}

const pessoa = {
  nome: "João",
  idade: 20,
};

for (const chave in pessoa) {
  console.log(chave);
}

switch (nome) {
  case "João":
    console.log("Encontrado");
    break;

  default:
    console.log("Não encontrado");
}

const dobrar = (x: number) => x * 2;

const resultado = dobrar(10);
