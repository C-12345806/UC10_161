
/* ------ QUESTÃO 1 ------ */

function calcularAcrescimo(valor, percentual) {
    if (valor <= 0 || percentual < 0) {
        throw new Error("Dados inválidos");
    }

    return valor + (valor * percentual / 100);
}




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

function validarJogador(usuario, idade, pontuacao) {
    if (!usuario || usuario.trim() === "") {
        return false;
    }
    if (idade < 13 || idade > 80) {
        return false;
    }
    if (pontuacao < 0) {
        return false;
    }
    return true;
}


function calcularEntrega(valorCompra, distancia) {
    if (valorCompra < 0 || distancia < 0) {
        throw new Error("Valores inválidos");
    }
    if (valorCompra >= 300) {
        return 0;
    }
    if (distancia <= 5) {
        return 10;
    }
    return distancia * 2;
}


function converterRealParaDolar(valorReal, cotacao) {
    if (typeof valorReal !== "number" || typeof cotacao !== "number") {
        throw new Error("Os valores devem ser numéricos");
    }
    if (valorReal < 0 || cotacao <= 0) {
        throw new Error("Valores inválidos");
    }
    return valorReal / cotacao;
}





module.exports = {
    calcularAcrescimo,
    classificarDesempenho,
    validarJogador,
    calcularEntrega,
    converterRealParaDolar
};