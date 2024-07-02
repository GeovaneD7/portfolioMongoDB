use('lojadb') // Criação de qual banco de dados iremos utilizar

db.createCollection("vendas") // Cria e seleciona uma coleção para começar a povoar o BD

db.vendas.insertMany([ // Selecioona a coleão e insere os dados iniciais
	{   // Dados iniciais de João
        nome: "João",
        vip: 1,
        email: "joão@email.com",
        telefone: [99991111, 88881111]
    }, {   // Dados iniciais de Marcos
        nome: "Marcos",
        vip: 0,
        telefone: [99992222]
    }, {   // Dados iniciais de Maria
        nome: "Maria",
        vip: 1,
        email: "maria@email.com",
        telefone: [99993333, 88883333, 99883000]
    }
])