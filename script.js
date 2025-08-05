// Variáveis
let contador = 0;
let mensagemDiv = document.getElementById("mensagem");

// Condicional para mostrar mensagem com base no horário
let hora = new Date().getHours();
if (hora < 12) {
  mensagemDiv.textContent = "Bom dia!";
} else if (hora < 18) {
  mensagemDiv.textContent = "Boa tarde!";
} else {
  mensagemDiv.textContent = "Boa noite!";
}

// Função para verificar se número é par
function verificarPar() {
  let numero = parseInt(document.getElementById("numeroInput").value);
  if (isNaN(numero)) {
    alert("Por favor, insira um número válido.");
    return;
  }

  if (numero % 2 === 0) {
    alert(`${numero} é par.`);
  } else {
    alert(`${numero} é ímpar.`);
  }
}

// Função para incrementar o contador e atualizar o DOM
function incrementar() {
  contador++;
  document.getElementById("contador").textContent = `Contador: ${contador}`;
}

// Função para zerar o contador
function zerarContador() {
  contador = 0;
  document.getElementById("contador").textContent = `Contador: ${contador}`;
}


// Loop for - Exibir os 5 primeiros números pares no console
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Número par (for):", i);
  }
}

// Loop while - Contar até 5
let i = 1;
while (i <= 5) {
  console.log("Contando (while):", i);
  i++;
}