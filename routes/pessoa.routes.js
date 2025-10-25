const { carregarPessoaHttp } = require("../controllers/pessoa/pessoa.controller")

const routerPessoa = require("express").Router()

routerPessoa.get("/carregar/pessoa", carregarPessoaHttp)

module.exports = routerPessoa