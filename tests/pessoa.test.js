const { retornarIdadePessoa, retornarListaDePessoas, carregarPessoa, isPessoa } = require("../controllers/pessoa/pessoa.controller")

let totalDeTestesNesteArquivo = 0

// Before e After Each
beforeEach(function () {
    //roda sempre antes de CADA teste começar.
    totalDeTestesNesteArquivo = totalDeTestesNesteArquivo + 1
})

afterEach(function () {
    //roda sempre depois de CADA teste finalizado.
    console.log(`Total de Testes neste arquivo: ` + totalDeTestesNesteArquivo)
})


//Matchers básicos
describe("Testando modulo Pessoa", function () {

    test("Retornando idade da pessoa", function () {

        const pessoa = {
            pessoa: "Heitor Grande",
            idade: 21
        }
        //obs: o toBe() espera o mesmo tipo de valor 21 === 21 e não 21 === "21"
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
            isPessoa: true
        }
        //obs: toBeTruthy() espera que o resultado sempre seja true
        expect(isPessoa(pessoa)).toBeTruthy()
    })

    test("Conferindo Objeto na Lista(array)", function () {

        const listaDePessoas = [
            { nome: "Heitor Grande", idade: 21 },
            { nome: "Sara Cristina", idade: 19 },
            { nome: "Alessandro Antunes", idade: 50 }
        ]

        const pessoa = { nome: "Heitor Grande", idade: 21 }
        //obs: toContainEqual(item) compara se eu tenho meu objeto dentro do meu array
        expect(retornarListaDePessoas(listaDePessoas)).toContainEqual(pessoa)
    })


    test("Conferindo item na Lista(array)", function () {

        const listaDePessoas = ["Heitor", "Felipe", "Guilherme"]

        const pessoa = "Heitor"
        //obs: toContain(item) compara se eu tenho meu item dentro do meu array
        expect(retornarListaDePessoas(listaDePessoas)).toContain(pessoa)
    })
})