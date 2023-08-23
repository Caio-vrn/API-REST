const express = require("express")
const rotas = express()
const professores = require("./controladores/professores")

rotas.get("/professores", professores.listagemDeProfessores)
rotas.get("/professores/:id", professores.obterInstrutor)
rotas.post("/professores", professores.cadastrarInstrutor)
rotas.put("/professores/:id", professores.alualizarInformacoes)
rotas.patch("/professores/:id/status", professores.alualizarStatusInstrutor)
rotas.delete("/professores/:id", professores.excluirInstrutor)

module.exports = rotas