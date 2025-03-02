___________________________________________| Rotas |_________________________________________________

O Front-end e o Back-End vão fazer **troca de informações** entre si, e o que permite ocorrer essas trocas são as **Rotas**.

Vamos fazer um cadastramento de usuários, então iremos receber uma requesição do Front-End e o Back-End envia uma resposta. Ou seja, uma rota é simplesmente a **comunicação entre o Front-End e o Back-End**, assim **mandando e recebendo informação**. Mas também é muito importante entender os métodos HTTP.


___________________________________________| Método HTTP |___________________________________________

Não dá pra eu simplesmente ir criando rotas sem falar o que ela vai fazer, por isso existe os métodos HTTP, então se eu quero uma rota que vai listar informações sobre seus dados, eu uso rotas do tipo **GET**, se eu quero criar algo utilizo a rota tipo **POST**, se eu quero editar várias informações eu utilizo a rota tipo **PUT**, se eu quero editar apenas uma coisa eu utilizo a rota **PATCH**, e se eu quero deletar algo eu utilizo a rota tipo **DELETE**. 

As 5 tipos de rota, sua explicação e seu exemplos:

1️⃣ **GET**     - Buscar informações / Ler sem editar   ➡️  Buscar a lista de usuários cadastrados.
2️⃣ **POST**    - Criar uma nova informação             ➡️  Criar um novo usuário.
3️⃣ **PUT**     - Atualizar tudo                        ➡️  Atualizar todos os dados de um usuário.
4️⃣ **PATCH**   - Atualizar uma parte                   ➡️  Atualizar só o e-mail do usuário.
5️⃣ **DELETE**  - Apagar | Remover                      ➡️  Apagar um usuário da lista.

• As rotas precisam de duas coisas:

1️⃣ Tipo de Rota | Método HTTP
2️⃣ Endereço