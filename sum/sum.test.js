const sum = require("./sum")

const a = 5
const b = 7


test(`Testando Função de soma: ${a} + ${b}`, function () {

    expect(sum(a, b)).toBe(a + b)
})