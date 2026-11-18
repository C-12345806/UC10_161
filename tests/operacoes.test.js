const {
    calcularAcrescimo,
    classificarDesempenho,
    validarJogador,
    calcularEntrega,
    converterRealParaDolar,
    calcularPedido,
    validarTamanhoSenha,
    verificarDisponibilidade,
    calcularMediaFinal
} = require("../src/operacoes");

// QUESTÃO 1

describe("DESAFIO 1 - O Cofre dos Valores Seguros", () => {
    test("Deve calcular um acréscimo de 10%", () => {
        expect(calcularAcrescimo(200, 10)).toBe(220);
    });

    test("Deve calcular um acréscimo de 50%", () => {
    expect(calcularAcrescimo(100, 50)).toBe(150);
  });

  test("Deve retornar o valor inicial quando o percentual for 0", () => {
    expect(calcularAcrescimo (150, 0)).toBe(150);
  });

  test("Deve calcular um acréscimo de 20%", () => {
    expect(() => calcularAcrescimo(0, 20)).toThrow("Dados inválidos");
  });

});

  
describe("DESAFIO 2 - O Portal da Classificação", () => {
  test("Deve retornar 'Bom' para nota 8", () => {
    expect(classificarDesempenho (8)).toBe("Bom");
    
  });

});