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
    
    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  test("Verifica nome inválido", () => {
    //Passamos um nome inválido com apenas 1 caractere e guardamos o resultado na constante "result" 
    const result = validateLead({name: "L", email: "luiza@email.com"});
    expect(reult.errors)toContain("Informe seu nome (mínimo de 3 caracteres).")
  });
});
