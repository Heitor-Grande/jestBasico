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

module.exports = {
    carregarPessoa,
    isPessoa,
    retornarListaDePessoas,
    retornarIdadePessoa
}