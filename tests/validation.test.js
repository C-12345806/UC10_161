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

});