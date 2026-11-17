
// FUNÇÕES

/* ------ QUESTÃO 1 ------ */

function calcularAcrescimo(valor, percentual) {
    if (valor <= 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }
    const acrescimo = valor * (percentual / 100);
    return valor + acrescimo;
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

/* ------ QUESTÃO 3 ------ */

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

/* ------ QUESTÃO 4 ------ */

function calcularEntrega(valorCompra, distancia) {
    if (valorCompra < 0 || distancia < 0) {
        throw new Error("Valores inválidos");
    }
    if (valorCompra >= 300) {
        return 0;
    }

/* ------ QUESTÃO 5 ------ */

function converterRealParaDolar(valorReal, cotacao) {
    if (typeof valorReal !== "number" || typeof cotacao !== "number") {
        throw new Error("Os valores devem ser numéricos");
    }
    if (valorReal < 0 || cotacao <= 0) {
        throw new Error("Valores inválidos");
    }
    return valorReal / cotacao;
}

/* ------ QUESTÃO 6 ------ */

function calcularPedido(quantidade, precoUnitario) {
    if (quantidade <= 0 || precoUnitario < 0) {
        throw new Error("Dados inválidos");
    }
    return quantidade * precoUnitario;
}

// TESTE A

test("deve calcular o valor total corretamente", () => {
    expect(calcularPedido(4, 20)).toBe(80);
});


// TESTE B

test("deve retornar zero quando o preço for zero", () => {
    expect(calcularPedido(3, 0)).toBe(0);
});


// TESTE C

test("deve lançar erro quando a quantidade for zero", () => {
    expect(() => calcularPedido(0, 10))
        .toThrow("Dados inválidos");
});


// TESTE D

test("deve calcular o pedido com preço negativo", () => {
    expect(calcularPedido(2, -5)).toBe(-10);
});


/* ------ QUESTÃO 7 ------ */

function validarTamanhoSenha(senha) {
    if (senha.length < 6 || senha.length > 12) {
        return false;
    }
    return true;
}

// TESTE A

test("deve aceitar senha com 6 caracteres", () => {
    expect(validarTamanhoSenha("abc123")).toBe(true);
});


// TESTE B

test("deve rejeitar senha com 5 caracteres", () => {
    expect(validarTamanhoSenha("abc12")).toBe(false);
});


// TESTE C

test("deve rejeitar senha com 12 caracteres", () => {
    expect(validarTamanhoSenha("abc123456789")).toBe(false);
});

// TESTE D

test("deve aceitar senha com 10 caracteres", () => {
    expect(validarTamanhoSenha("abc1234567")).toBe(true);
});

// TESTE E

test("deve rejeitar senha com 13 caracteres", () => {
    expect(validarTamanhoSenha("abc1234567890")).toBe(false);
});


/* ------ QUESTÃO 8 ------ */

function verificarDisponibilidade(estoque, quantidade) {
    if (quantidade <= 0) {
        throw new Error("Quantidade inválida");
    }

    if (estoque < 0) {
        throw new Error("Estoque inválido");
    }
    if (quantidade > estoque) {
        return "Estoque insuficiente";
    }
    return "Retirada autorizada";
}

// TESTE A

test("deve autorizar retirada quando há estoque suficiente", () => {
    expect(verificarDisponibilidade(20, 5))
        .toBe("Retirada autorizada");
});

// TESTE B

test("deve informar estoque insuficiente", () => {
    expect(verificarDisponibilidade(5, 10))
        .toBe("Estoque insuficiente");
});

// TESTE C

test("deve autorizar retirada de toda a quantidade disponível", () => {
    expect(verificarDisponibilidade(10, 10))
        .toBe("Retirada autorizada");
});

// TESTE D

test("deve informar estoque insuficiente para quantidade zero", () => {
    expect(verificarDisponibilidade(10, 0))
        .toBe("Estoque insuficiente");
});

// TESTE E

test("deve lançar erro para estoque negativo", () => {
    expect(() => verificarDisponibilidade(-5, 2))
        .toThrow("Estoque inválido");
});


// TESTE F

test("deve lançar erro para quantidade negativa", () => {
    expect(() => verificarDisponibilidade(10, -3))
        .toThrow("Quantidade inválida");
});


/* ------ QUESTÃO 9 ------ */

function calcularMediaFinal(nota1, nota2) {
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        throw new Error("Notas inválidas");
    }
    return (nota1 + nota2) / 2;
}

// TESTE 1

test("deve calcular a média corretamente", () => {
    expect(calcularMediaFinal(6, 8)).toBe(7);
});


// TESTE 2

test("deve retornar média máxima", () => {
    expect(calcularMediaFinal(10, 10)).toBe(10);
});


// TESTE 3

test("deve calcular média com nota zero", () => {
    expect(calcularMediaFinal(0, 8)).toBe(4);
});

// TESTE 4

test("deve rejeitar nota negativa", () => {
    expect(() => calcularMediaFinal(-2, 8))
        .toThrow("Notas inválidas");
});


// TESTE 5

test("deve rejeitar nota superior a 10", () => {
    expect(() => calcularMediaFinal(8, 12))
        .toThrow("Notas inválidas");
});

