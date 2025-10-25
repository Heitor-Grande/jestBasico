const express = require("express")
const routerPessoa = require("./routes/pessoa.routes")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", function (req, res) {

    return res.status(201).send({
        message: "sucesso ao consultar api"
    })
})

app.use("/pessoa", routerPessoa)

module.exports = app