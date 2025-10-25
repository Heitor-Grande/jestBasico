function retornarIdadePessoa(pessoa) {

    return pessoa.idade
}

function carregarPessoa(pessoa) {
    return pessoa
}

function isPessoa(pessoa) {

    return pessoa.isPessoa
}

function retornarListaDePessoas(listaDePessoas) {

    return listaDePessoas
}

//metodos para HTTP
function carregarPessoaHttp(req, res) {

    const pessoa = {
        nome: "Heitor Grande",
        idade: 21
    }

    return res.status(201).send(pessoa)
}

module.exports = {
    carregarPessoa,
    isPessoa,
    retornarListaDePessoas,
    retornarIdadePessoa,
    carregarPessoaHttp
}