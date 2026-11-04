// Importação de módulos
const {validateLead} = require("../src/validation");

// Agrupamento de testes de função validateLead()
describe("Testes unitários da função validateLead()", () => {
  
  test("Verifica o nome", () => {
    // Passando o nome e um e-mail válido para satisfazer a regra da função
    const result = validateLead({ 
      name: "Luiza", 
      email: "luiza@email.com" 
    });
    
    console.log(result);
    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0); 
  });

  test("Verifica se o cadastro completo é válido", () => {
    // Passando todos os campos preenchidos corretamente
    const result = validateLead({ 
      name: "Maria Silva", 
      email: "maria@gmail.com",
      phone: "27999999999",
      interest: "Online"
    });

    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0); 
  });

  test("Verifica se o nome possui menos de 3 caracteres", () => {
    // Passando um nome muito curto
    const result = validateLead({ 
      name: "Lu", 
      email: "luiza@email.com"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Informe seu nome (mínimo de 2 caracteres)."); 
  });

  test("Verifica se o nome contém apenas espaços em branco", () => {
    // Passando um nome com espaços vazios
    const result = validateLead({ 
      name: "     ", 
      email: "luiza@email.com"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Informe seu nome (mínimo de 2 caracteres)."); 
  });

  test("Verifica se o nome possui um tipo incorreto", () => {
    // Passando um número no campo nome
    const result = validateLead({ 
      name: 12345, 
      email: "luiza@email.com"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Informe seu nome (mínimo de 2 caracteres)."); 
  });

  test("Verifica se o e-mail está sem o símbolo @", () => {
    // Passando um e-mail sem @
    const result = validateLead({ 
      name: "Luiza", 
      email: "anaemail.com"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Informe um e-mail válido."); 
  });

  test("Verifica se o e-mail está incompleto, sem domínio e sem ponto", () => {
    // Passando um e-mail incompleto
    const result = validateLead({ 
      name: "Luiza", 
      email: "email@email"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Informe um e-mail válido."); 
  });

  test("Verifica se o e-mail possui um tipo incorreto", () => {
    // Passando um número no campo e-mail
    const result = validateLead({ 
      name: "Luiza", 
      email: 12345
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Informe um e-mail válido."); 
  });

  test("Verifica se o telefone possui um tipo incorreto", () => {
    // Passando um número no campo telefone
    const result = validateLead({ 
      name: "Luiza", 
      email: "luiza@email.com",
      phone: 123456789
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Preencha o telefone corretamente."); 
  });

  test("Verifica se a modalidade de interesse é inválida", () => {
    // Passando uma modalidade que não existe na lista permitida
    const result = validateLead({ 
      name: "Luiza", 
      email: "luiza@email.com",
      interest: "Semipresencial"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Selecione uma modalidade válida."); 
  });

  test("Verifica se a modalidade diferencia letras maiúsculas e minúsculas", () => {
    // Passando a modalidade com a primeira letra minúscula
    const result = validateLead({ 
      name: "Luiza", 
      email: "luiza@email.com",
      interest: "online"
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Selecione uma modalidade válida."); 
  });
});