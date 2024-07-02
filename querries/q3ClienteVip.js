// Uma busca que retorna apenas os nomes dos clientes VIPs da loja (VIP = 1).
use ('lojadb')

db.vendas.find( { vip: 1 }, { 
    _id:0,
    vip:0,
    email:0,
    telefone:0,
    endereço:0,
    compras:0
})