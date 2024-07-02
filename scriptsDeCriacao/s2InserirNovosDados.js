use('lojadb') // Garante que estamos usando o BD correto
// updateOne é chamado para inserir um dado em cada página
db.vendas.updateOne({ nome: "João" }, {
    $set: { // o método $set é chamado para adicionar ao arquivo uma lista de objeto
        endereço: {
            rua: "Um",
            numero: 1000,
            complemento: "Apto 1 Bloco 1",
            cidade: "São Paulo",
            estado: "SP"
        }
    }
})
db.vendas.updateOne({ nome: "Marcos" }, {
    $set: {
        endereço: {
            rua: "Dois",
            numero: 4000,
            cidade: "Campinas",
            estado: "SP"
        }
    }
})
db.vendas.updateOne({ nome: "Maria" }, {
    $set: {
        endereço: {
            rua: "Três",
            numero: 3000,
            cidade: "Londrina",
            estado: "PR"
        }
    }
})