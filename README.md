Todos os scripts foram feitos para rodarem dentro do terminal mongosh configurado para um self-host. 
Talvez seja necessário fazer alguns ajustes para rodar em servidores remotos.

Apenas um adendo relacionado a nomenclatura dada aos scripts:
Eu sei que não é uma boa prática nomear os scripts da forma em que eu fiz, mas foi a maneira ao qual eu
achei para que a ordem dos scripts ficassem na mesma ordem ao qual foi pedido ao trabalho.

---

Detalhes do Roteiro da Aula Pratica:

**Objetivos:** 
Criar e manipular um banco de dados não relacional no MongoDB.

**Atividade proposta:**
Criar um banco de dados no MongoDB Compass, inserir e atualizar documentos em uma collection.

---


**Procedimentos para a realização da atividade Nº 1:**
*Nesta atividade você deverá criar um banco de dados no MongoDB Compass chamado de “lojadb”. Ele será utilizado no contexto de uma loja, onde você deverá cadastrar documentos referentes a vendas efetuadas pela loja.* 

Etapa 1: 
- Crie o banco de dados, e em seguida realize a criação de uma collection “vendas”. 
- Agora insira os seguintes dados conforme o conhecimento adquirido nas aulas, utilizando o comando “insert” pela Shell do mongodb, ou graficamente pelo Compass:
	- Inicialmente, vamos inserir apenas os dados básicos dos clientes que realizaram compras na loja. Para isso, utilize as informações na tabela a seguir. Note que o campo telefone deverá ser adicionado como uma Array.


| NOME   | CLIENTE VIP<br>(1 - SIM / 0 - NÃO) | EMAIL           | TELEFONE                        |
| ------ | ---------------------------------- | --------------- | ------------------------------- |
| João   | 1                                  | joao@email.com  | 9999-1111, 8888-1111            |
| Marcos | 0                                  |                 | 9999-2222                       |
| Maria  | 1                                  | maria@email.com | 9999-3333, 8888-3333, 9988-3000 |
*(Note que como estamos falando de um banco de dados não relacional, nós não temos uma estrutura definida. Então cada cliente não precisa necessariamente ter os mesmos campos. Por exemplo, o cliente Marcos não tem e-mail, portanto o campo e-mail não precisa ser adicionado em sua entrada. Além disso, veja que os três clientes têm quantidades diferentes de telefones.)*



**Etapa 2: Vamos continuar o processo de inserção de dados que iniciamos na etapa anterior. Para isso, você terá de ATUALIZAR documentos já presentes na collection.** 

-  Vamos adicionar o endereço de cada cliente conforme a tabela a seguir. O endereço deverá ser inserido como um campo do tipo Objeto, separando dentro dele a rua, número, complemento, cidade e estado. 


| NOME   | ENDEREÇO                                   |
| ------ | ------------------------------------------ |
| João   | Rua Um, 1000, Apto 1 Bloco 1. São Paulo/SP |
| Marcos | Rua Dois, 4000. Campinas/SP                |
| Maria  | Rua Três, 3000. Londrina/PR                |



- Por fim, vamos adicionar os dados das compras efetuadas por cada cliente. Os dados das compras deverão ser adicionados nos mesmos documentos com as informações dos clientes. Um outro detalhe é que agora você irá utilizar o conceito de Arrays de Objetos no campo “compras”. 


| NOME   | COMPRAS                                                                                                                                                                                                   |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| João   | Nome do produto: notebook <br>Preço: R$ 5000,00 <br>Quantidade: 1                                                                                                                                         |
| Marcos | Nome do produto: Caderno <br>Preço: R$ 20,00 <br>Quantidade: 1 <br><br>Nome do produto: Caneta<br>Preço: R$ 3,00 <br>Quantidade: 5 <br><br>Nome do produto: Borracha <br>Preço: R$ 2,00 <br>Quantidade: 2 |
| Maria  | Nome do produto: Tablet <br>Preço: R$ 2500,00 <br>Quantidade: 1 <br><br>Nome do produto: Capa para tablet <br>Preço: R$ 50,00 <br>Quantidade: 1                                                           |


---

**Procedimentos para a realização da atividade Nº 2:** 
*Realizar pesquisas e consultas em um banco de dados não relacional (MongoDB)*

Para cada consulta que realizar, informe o comando correto:

- Realize uma consulta que retorne todos os documentos da collection.
- Realize uma consulta que localize as informações da cliente “Maria”.
- Realize uma busca que retorna os clientes VIPs da loja (VIP = 1). Retorne apenas o campo “nome” de cada um.
- Realize uma consulta que exiba as compras efetuadas por “Marcos”.
- Realize uma consulta que retorne todos os nomes de produtos comprados por todos os clientes. *Nesta consulta em específico, utilize a linha de comando do MongoDB.*

---

**Resultados da aula prática:**

É esperado que ao término da prática o aluno saiba desenvolver bancos de dados não relacionais orientados a documentos utilizando o MongoDB, incluindo a criação de collections e inserção/atualização de documentos, bem como a realização de consultas à base de dados.
