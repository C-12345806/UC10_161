
/* ------ QUESTÃO 1 ------ */

function calcularAcrescimo(valor, percentual) {
    if (valor <= 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }

    const acrescimo = valor * (percentual / 100);
    return valor + acrescimo;
}

module.exports = {
    calcularAcrescimo
};



/* ------ QUESTÃO 2 ------ */

function classificarDesempenho(nota) {
    if (nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }
    if (nota >= 9) {
        return "Excelente";
    }
    if (nota >= 7) {
        return "Bom";
    }
    if (nota >= 5) {
        return "Regular";
    }
    return "Insuficiente";
}


