
function SimuladorSoma(quantidadeNumeros) {
  this.quantidadeNumeros = quantidadeNumeros;
  this.numeros = [];
  this.soma = 0;
}


SimuladorSoma.prototype.obterNumeros = function() {
  for (let i = 0; i < this.quantidadeNumeros; i++) {
    let numero = parseFloat(prompt("Digite um número:"));
    this.numeros.push(numero);
    console.log("Número atual: " + numero);
  }
};


SimuladorSoma.prototype.calcularSoma = function() {
  this.soma = this.numeros.reduce((total, numero) => total + numero, 0);
  console.log("Soma parcial: " + this.soma);
};


SimuladorSoma.prototype.exibirResultado = function() {
  console.log("Números: " + this.numeros.join(", "));
  console.log("Soma total: " + this.soma);
  alert("Soma total: " + this.soma);
};


function iniciarSimulador() {
  let quantidade = 5; 
  let simulador = new SimuladorSoma(quantidade);
  
  simulador.obterNumeros();
  simulador.calcularSoma();
  simulador.exibirResultado();
}


iniciarSimulador();
