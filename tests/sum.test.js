const app = require("../app")
const { sum } = require("../controllers/sum/sum.controller")
const request = require("supertest")

const a = 5
const b = 7


// test() -> cria um teste individual
test(`Testando Função de soma: ${a} + ${b}`, function () {

    // expect() -> Pega o valor da função testada para comparar com o valor de toBe()
    // toBe() -> Valor esperado da função testada
    expect(sum(a, b)).toBe(a + b)
})

describe("Testando sum.routes.js", function () {

    test("POST /soma/somar esperado a soma de A e B", async function () {
        const a = 11
        const b = 23

        const resposta = await request(app).post("/soma/somar").send({
            a: a,
            b: b
        })

        expect(resposta.statusCode).toBe(201)
        expect(a + b).toBe(resposta.body.soma)
    })
})