var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#msg");

function crip() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    outInput.value = resultCripto;

}

function descrip() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    outInput.value = resultDescripto;
}

function copiar() {
    outInput.select();
    document.execCommand('copy');
    limparSaida();
    limparEntrada();
}

function limparSaida() {
    outInput.value = "";
}

function limparEntrada() {
    textInput.value = "";
}
