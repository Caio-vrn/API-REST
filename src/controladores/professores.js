let { identificador, instrutores } = require("../bancoDeDados")

const listagemDeProfessores = (req, res) => {
    return res.json(instrutores)
}

const obterInstrutor = (req, res) => {
    const { id } = req.params

    const professor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!professor) {
        return res.status(404).json({ mensagem: "instrutor não encontrado" })
    }

    return res.json(professor)
}

const cadastrarInstrutor = (req, res) => {
    const { nome, gmail, status } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: "o nome é obrigatorio" })
    }

    if (!gmail) {
        return res.status(400).json({ mensagem: "o gmail é obrigatorio" })
    }

    const cadastro = {
        id: identificador++,
        nome,
        gmail,
        status: status ?? true
    }

    instrutores.push(cadastro)

    return res.status(201).json(cadastro)
}

const alualizarInformacoes = (req, res) => {
    const { id } = req.params
    const { nome, gmail, status } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: "o nome é obrigatorio" })
    }

    if (!gmail) {
        return res.status(400).json({ mensagem: "o gmail é obrigatorio" })
    }

    const professor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    professor.nome = nome
    professor.gmail = gmail
    professor.status = status

    res.status(204).send()

}

const alualizarStatusInstrutor = (req, res) => {
    const { id } = req.params
    const { status } = req.body

    const professor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    professor.status = status

    res.status(204).send()

}

const excluirInstrutor = (req, res) => {
    const { id } = req.params

    const professor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!professor) {
        return res.status(404).json({ mensagem: "instrutor não encontrado" })
    }

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id)
    })

    res.status(204).send()
}



module.exports = {
    listagemDeProfessores,
    obterInstrutor,
    cadastrarInstrutor,
    alualizarInformacoes,
    alualizarStatusInstrutor,
    excluirInstrutor
}