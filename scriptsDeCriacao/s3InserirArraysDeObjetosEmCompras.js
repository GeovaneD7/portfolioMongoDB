use('lojadb')

db.vendas.updateOne({ nome: "João" }, {
    $set: {
        compras: [{
            produto: "notebook",
            valor: 3000.00,
            quantia: 1
        }]
    }
})
db.vendas.updateOne({ nome: "Marcos" }, {
    $set: {
        compras: [{
			produto: "caderno",
            valor: 20.00,
            quantia: 1
        }, {
        	produto: "caneta",
            valor: 3.00,
            quantia: 5
        }, {
            produto: "borracha",
            valor: 2.00,
            quantia: 2
        }]
    }
})
db.vendas.updateOne({ nome: "Maria" }, {
    $set: {
        compras: [{
        	produto: "tablet",
            valor: 2500.00,
            quantia: 1
        }, {
            produto: "capa para tablet",
            valor: 50.00,
            quantia: 1
        }]
    }
})