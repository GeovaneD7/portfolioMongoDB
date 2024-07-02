// Uma consulta que exiba as compras efetuadas por “Marcos”
use ('lojadb')

db.vendas.find( { "nome": "Marcos" } , {
    _id:0,
    vip:0,
    email:0,
    telefone:0,
    endereço:0
})
