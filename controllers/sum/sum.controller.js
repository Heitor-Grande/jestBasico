function sum(a, b) {
    return a + b
}

function sumHttp(req, res) {

    const soma = req.body.a + req.body.b

    return res.status(201).send({
        soma: soma
    })
}

module.exports = { sum, sumHttp }