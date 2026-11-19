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
//TESTE 1
    test("Deve calcular um acréscimo de 10%", () => {
        expect(calcularAcrescimo(200, 10)).toBe(220);
    });

//TESTE 2
    test("Deve calcular um acréscimo de 50%", () => {
    expect(calcularAcrescimo(100, 50)).toBe(150);
  });

//TESTE 3
  test("Deve retornar o valor inicial quando o percentual for 0", () => {
    expect(calcularAcrescimo (150, 0)).toBe(150);
  });

//TESTE 4
  test("Deve calcular um acréscimo de 20%", () => {
    expect(() => calcularAcrescimo(0, 20)).toThrow("Dados inválidos");
  });

});

  
describe("DESAFIO 2 - O Portal da Classificação", () => {

  //TESTE 1
  test("Deve retornar 'Bom' para nota 8", () => {
    expect(classificarDesempenho (8)).toBe("Bom");
    
  });

  //TESTE 2
  test("Deve retornar 'Regular' para nota 6", () => {
    expect(classificarDesempenho(6)).toBe("Regular");
  });

  //TESTE 3
  test("Deve retornar 'Excelente' para nota 10",  () => {
    expect(classificarDesempenho(10)).toBe("Excelente");
  });

  //TESTE 4
  test("Deve retornar 'Insuficiente' para nota 3", () => {
    expect(classificarDesempenho(3)).toBe("Insuficiente");
  });

  //TESTE 5
  test("Deve retornar 'Insuficiente' para nota 0", () => {
    expect(classificarDesempenho(0)).toBe("Insuficiente");
  });
  

//TESTE 6
  test("Deve retornar 'Nota inválida' para nota > 10", () => {
    expect(() => classificarDesempenho(11)).toThrow("Nota inválida");
   });


   //TESTE 7
   test("Deve retornar 'Insuficiente' para nota 4.9", () => {
    expect(classificarDesempenho(4.3)).toBe("Insuficiente");
   });
});


describe ("DESAFIO 3 - Testes da função validarJogador", () => {

  //TESTE 1
  test("Todos os dados são válidos", () => {
    expect(validarJogador("João", 20, 100)).toBe(true);
  });

  //TESTE 2
  test("O nome de usuário está vazio", () => {
    expect(validarJogador("", 18, 95)).toBe(false);
  });

  //TESTE 3
  test("O nome de usuário só tem espaços em branco", () => {
    expect(validarJogador("     ", 25, 90)).toBe(false);
  });

  //TESTE 4
  test("A idade está abaixo do limite permitido", () => {
    expect(validarJogador("Lucas", 11, 80)).toBe(false);
  });

  //TESTE 5
  test("A idade está acima do limite permitido", () => {
    expect(validarJogador("Caio", 85, 70)).toBe(false);
  });

  //TESTE 6
  test("A pontuação é negativa", () => {
    expect(validarJogador( "Marcos", 30, -10)).toBe(false);
  });

  //TESTE 7
  test("A pontuação é igual a zero", () => {
    expect(validarJogador("Ricardo", 22, 0)).toBe(true);
  });

  //TESTE 8
  test("A idade está exatamente no limite mínimo pernitido", () => {
    expect(validarJogador("Luciano", 13, 50)).toBe(true);
  });

  //TESTE 9
  test("A idade está exatamente no limite máximo permitido", () => {
    expect(validarJogador("Fernanda", 80, 60)).toBe(true);
  });

});


describe("DESAFIO 4 - O Transporte das Mercadorias", () => {

  //TESTE 1
  test("Deve calcular o valor da entrega corretamente", () => {
    expect(calcularEntrega(350, 10)).toBe(0);
  });   

  //TESTE 2
  test("Deve calcular o valor da entrega corretamente", () => {
    expect(calcularEntrega(100, 3)).toBe(10);
  });

  //TESTE 3
  test("Deve calcular o valor da entrega corretamente", () =>{
    expect(calcularEntrega(100, 8)).toBe(16);
  });

  //TESTE 4
  test("Deve calcular o valor da entrega corretamente", () => {
    expect(calcularEntrega(300, 5)).toBe(0);
  });

  //TESTE 5
  test("Deve calcular o valor da entrega corretamente", () => {
    expect(calcularEntrega(0, 5)).toBe(10);
  });

  //TESTE 6
  test("Deve lançar um erro para valores inválidos", () => {
    expect(() => calcularEntrega(-50, 10)).toThrow("Valores inválidos");
  });

  //TESTE 7
  test("Deve lançar um erro para valores inválidos", () => {
    expect(() => calcularEntrega(100, -2)).toThrow("Valores inválidos");
  });
});

describe("DESAFIO 5 - O Conversor de Moedas", () => {

  //TESTE 1
  test("Deve converter corretamente de Real para Dólar", () => {
    expect(converterRealParaDolar(100, 5)).toBe(20);
  });

  //TESTE 2
  test("Deve converter corretamente de Real para Dólar", () => {
    expect(converterRealParaDolar(250, 5)).toBe(50);
  });

  //TESTE 3
  test("Deve converter corretamente de Real para Dólar", () => {
    expect(converterRealParaDolar(0, 5)).toBe(0);
  });

  //TESTE 4
  test("Deve converter corretamente de Real para Dólar", () => {
    expect(converterRealParaDolar(100, 4)).toBe(25);
  });

  //TESTE 5
  test("Deve lançar um erro para valores inválidos", () => {
    expect(() => converterRealParaDolar("100", 5)).toThrow("Valores inválidos");
  });

  //TESTE 6
  test("Deve lançar um erro para valores inválidos", () => {
    expect(() => converterRealParaDolar(100, "5")).toThrow("Valores inválidos");
  });

  //TESTE 7
  test("Deve lançar um erro para valores inválidos", () => {
    expect(() => converterRealParaDolar(-50, 5)).toThrow("Valores inválidos");
  });

});