const nome = "João";
const idade = 20;

const pessoa = {
  nome: "João",
  idade: 20,
};

function podeEntrar(idade: number): boolean {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0.0; i < 3; i++) {
  console.log(i);
}

while (idade > 0) {
  break;
}

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
