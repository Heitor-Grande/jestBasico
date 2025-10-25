const app = require("./app")

const porta = process.env.PORT || 8080

app.listen(porta, function () {
    console.log("aplicação rodando em : http://localhost:" + porta)
})