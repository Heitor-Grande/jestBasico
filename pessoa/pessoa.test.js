const { retornarIdadePessoa, retornarListaDePessoas, carregarPessoa, isPessoa } = require("./pessoa")

//Matchers básicos
describe("Testando modulo Pessoa", function () {

    test("Retornando idade da pessoa", function () {

        const pessoa = {
            pessoa: "Heitor Grande",
            idade: 21
        }
        //obs: o toBe() espera o mesmo tipo de valor 21 === 21 e não 21 === '21'
        expect(retornarIdadePessoa(pessoa)).toBe(21)
    })

    test("Retornando pessoa", function () {

        const pessoa = {
            pessoa: "Heitor Grande",
            idade: 21
        }

        const pessoaEsperada = {
            pessoa: "Heitor Grande",
            idade: 21
        }
        //obs: toEqual() compara objeto com objeto ou lista de objeto com lista de objeto(array)
        expect([carregarPessoa(pessoa)]).toEqual([pessoaEsperada])
    })

    test("Conferindo se é pessoa", function () {

        const pessoa = {
            isPessoa: false
        }
        //obs: toBeTruthy() espera que o resultado sempre seja true
        expect(pessoa).toBeTruthy()
    })
})