/* Calcular média */
function calcularMedia() {
    const a = Math.abs(prompt("Digite um valor A:"));
    const b = Math.abs(prompt("Digite um valor B:"));
    const c = Math.abs(prompt("Digite um valor C:"));
    alert("Média: " + ((a + b + c) / 3));
}

/* Converter Celsius para Fahrenheit */
function converterCelsiusParaFahrenheit() {
    const celsius = Math.abs(prompt("Digite a temperatura em Celsius:"));
    alert(((celsius * (9 / 2)) + 32) + " graus Fahrenheit");
}

/* Calcular área de um retângulo */
function calcularAreaRetangulo() {
    const largura = Math.abs(prompt("Digite a largura:"));
    const altura = Math.abs(prompt("Digite a altura:"));
    alert("Área: " +largura * altura);
}

/* Calcular IMC */
function calcularImc() {
    const peso = Math.abs(prompt("Digite o peso:"));
    const altura = Math.abs(prompt("Digite a altura:"));
    alert("IMC: " + (peso / (altura * altura)));
}

/* Converter hora para minuto */
function converterHoraParaMinuto() {
    const hora = Math.abs(prompt("Digite a hora:"));
    alert(hora * 60 + " minutos");

}

/* Concatenar Nome e sobremome */
function concatenarNomeSobrenome() {
    const nome = prompt("Digite um Nome:");
    const sobremome = prompt("Digite um Sobrenome:");
    alert(nome + ' ' + sobremome);
}

/* Contar caracteres de ums string */
function contarCaracteresString() {
    const string = prompt("Digite uma String:");
    alert(string.length + " caracteres");
}

/* Converter uma string para letras maiúsculas */
function converteStringParaMaisuculas() {
    const string = prompt("Digite uma String:");
    alert(string.toUpperCase());
}

/* Extrair 3 primeiros caracters de uma string */
function estrairTresPrimeirosCaracteres() {
    const string = prompt("Digite uma String:")
    alert(string.slice(0, 3));
}

/* Substituir letras de uma string por:
A -> 4
I -> 1
E -> 3
O -> 0(zero)
S -> 5
*/
function substituirLetras() {
    let string = prompt("Digite uma String:");

    string = string.replace(/A/gi, "4");
    string = string.replace(/I/gi, "1");
    string = string.replace(/E/gi, "3");
    string = string.replace(/O/gi, "0");
    string = string.replace(/S/gi, "5");

    alert(string);
}


/* Evendo de clique aos botões */
// Adicionar o evento de clique ao botão
document.getElementById("botao-1").addEventListener('click', calcularMedia);
document.getElementById("botao-2").addEventListener('click', converterCelsiusParaFahrenheit);
document.getElementById("botao-3").addEventListener('click', calcularAreaRetangulo);
document.getElementById("botao-4").addEventListener('click', calcularImc);
document.getElementById("botao-5").addEventListener('click', converterHoraParaMinuto);
document.getElementById("botao-6").addEventListener('click', concatenarNomeSobrenome);
document.getElementById("botao-7").addEventListener('click', contarCaracteresString);
document.getElementById("botao-8").addEventListener('click', converteStringParaMaisuculas);
document.getElementById("botao-9").addEventListener('click', estrairTresPrimeirosCaracteres);
document.getElementById("botao-10").addEventListener('click', substituirLetras);
