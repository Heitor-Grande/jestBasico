const { carregarPessoaHttp } = require("../controllers/pessoa/pessoa")

const routerPessoa = require("express").Router()

routerPessoa.get("/carregar/pessoa", carregarPessoaHttp)

module.exports = routerPessoa