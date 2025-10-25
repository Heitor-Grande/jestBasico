const sum = require("./sum")

const a = 5
const b = 7


// test() -> cria um teste individual
test(`Testando Função de soma: ${a} + ${b}`, function () {

    // expect() -> Pega o valor da função testada para comparar com o valor de toBe()
    // toBe() -> Valor esperado da função testada
    expect(sum(a, b)).toBe(a + b)
})