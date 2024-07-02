// Uma consulta que retorne todos os nomes de produtos comprados por todos os clientes.
use('lojadb')

db.vendas.aggregate([
    {   // Descontrói a array de objetos em documentos individuais
        $unwind: "$compras"
    }, {   // Agrupa os documentos novamente e obtém todos os valores do campo desejado
        $group: { 
            _id: null, 
            valores: { $addToSet: "$compras.produto" }
        }
    }
])