let titulo = document.querySelector('h1)');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}

function exibirAlert() {
    alert('Eu Amo JS')
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Volta Reonda')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('28'));
    let segundoNumero = parseInt(prompt('72'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}