// Uma consulta que localize as informações da cliente “Maria”.
use ('lojadb')

db.vendas.find({nome:"Maria"})