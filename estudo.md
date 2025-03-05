___________________________________________| Rotas |_______________________________________________

O Front-end e o Back-End vão fazer **troca de informações** entre si, e o que permite ocorrer essas trocas são as ***Rotas***.

Vamos fazer um cadastramento de usuários, então iremos receber uma requesição do Front-End e o Back-End envia uma resposta. Ou seja, uma rota é simplesmente a **comunicação entre o Front-End e o Back-End**, assim **mandando e recebendo informação**. Mas também é muito importante entender os métodos HTTP.







___________________________________________| Método HTTP |_________________________________________

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





_________________________________________| Request (REC) -- Response (RES) |_______________________

**REQ (REQUESIÇÃO - REQUEST)**

• O **requerimento**, ou **request**, é tudo o que o Front-End (ou algum cliente, tipo o navegador ou Postman) manda pro Back-End.

Dentro de um **request** tem:

- 🔗 **URL**: o endereço da rota (ex: `/usuarios`)
- 🔧 **Método HTTP**: o tipo de ação (GET, POST, PUT, PATCH ou DELETE)
- 📝 **Headers**: informações extras (tipo de dado, autorização, etc.)
- 📦 **Body** (Corpo): os dados enviados (geralmente em POST ou PUT)

📌 **Exemplo de Request (Cadastro de Usuário)**
<!-- POST /usuarios { "nome": "João", "email": "joao@email.com" } -->



**RES (RESPOSTA - RESPONSE)**

• A **resposta**, ou **response**, é o que o Back-End te devolve depois de receber e processar seu ***request***.

Na resposta, o servidor coloca:

- ✅ O status (se deu certo ou errado) - exemplo: 200 (OK), 404 (Não encontrado)
- 📦 O conteúdo (os dados que você pediu ou uma mensagem de confirmação)






________________________________________| Porta do Servidor |______________________________________

Todo servidor precisa saber **onde ele vai ficar escutando as requisições**. Isso é feito escolhendo uma **porta**.

• Exemplo:

```javascript 

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
```

🚀 **O que é o Nodemon?**

O Nodemon é uma ferramenta que serve para reiniciar automaticamente o servidor toda vez que alguma alteração no código é salva.

Isso facilita muito o desenvolvimento, porque você não precisa ficar parando e rodando o servidor manualmente toda hora.

### $ `node --watch {node_do_arquivo}`
É um comando nativo do Node.js para reiniciar automaticamente o servidor.

| Comando        | O que faz                                      | Precisa instalar? |
|----------------|-----------------------------_------------------|-------------------|
| `node --watch` | Observa mudanças em arquivos `.js` e reinicia  | ❌ Não            |
| `nodemon`      | Observa qualquer tipo de arquivo e reinicia    | ✅ Sim            | 



________________________________________| Localhost |______________________________________________

- Normalmente os sites vão acessar os endereços com o método get, mas se eu tivesse uma rota do tipo post, não iria dar certo. **(Nesta parte eu estava estudando com apenas uma rota utilizando o método GET)**. Por conta disso, precisamos instalar uma ferramenta para auxiliar a leitura das respostas: ***Thunder Client***

1️⃣ Escolhemos qual método vamos usar
2️⃣ Colocamos o endereço que no caso será: **https://localhost:3000/usuarios**
3️⃣ Clicamos em send para criar

📝 **Sempre que fizermos alguma alteração teriamos que reiniciar o servidor, mas executando o comando ***node --watch {nome do arquivo que está rodando o servidor}***





________________________________________| Requests |_______________________________________________

• Existem 3 formas de se enviar dados do Front-End para o Back-End através das **Requests (RES)**:


1️⃣ **Query Params**: É quando colocamos informações na URL **depois de um ?** como por exemplo:

https://www.google.com/search?**q=action+figure+itachi**

📝 Mas essa não é a melhor forma pra utilizar por exemplo **quando o usuário vai logar no site** ou **quando ele vai colocar as informações do cartão de crédito**, não é ***nada seguro***. Ele é mais usado pra **pesquisas**, pra informações ***não*** **relevantes**

-------------------------/

2️⃣ **Route Params**: É quando eu quero utilizar **uma informação específica**, sempre uma informação só. Eu quero editar apenas o usuário 2, quero pesquisar um filme específico.

-------------------------/

3️⃣ **Body Params**: É enviar informações pelo Body, **posso enviar tudo que eu quiser**, como ***informações importantes*** como dados do usuário, ou quando são ***MUITAS informações***, é o **melhor** método pra se utilizar dos três.





________________________________________| HTTP Status |____________________________________________

- Além dos métodos HTTP, temos os **Status HTTP** ou os **status de resposta**. Além de eu responder com uma mensagem de OK, ***mais importante*** que a mensagem é o ***código***. É **pelo código** que o Back-End e o Front-End vão enteder que está tudo certo. 

📝 O Front-End e o Back-End trocam informações com as rotas, no final eles vão saber o que aconteceu um com o outro através do código.

• **Status:**

Faixa	|    Significado	       |    Exemplo                                                  | 
________|__________________________|_____________________________________________________________|
1xx	    |    📢 Informativo	       |    O servidor recebeu e está processando                    |
2xx	    |    ✅ Sucesso	          |    A requisição deu certo                                   |
3xx	    |    🔀 Redirecionamento   |	O cliente precisa buscar em outro lugar                  |
4xx	    |    ❌ Erro do cliente	  |    O cliente fez algo errado (Front-End)                    |
5xx	    |    ❌ Erro do servidor   |	O servidor tentou, mas deu ruim do lado dele (Back-End)  |

---------------------------------------------------------------------------------------------------

Código  |    Nome                         |    Quando usar?
________|_________________________________|__________________________________________________________
200     |    ✅ OK                        |    Quando deu tudo certo (exemplo: buscar lista de usuários).
201     |    ✅ Created                   |    Quando algo novo foi criado (exemplo: cadastrar usuário).
204     |    ✅ No Content                |    Quando deu certo, mas não tem nada pra devolver (exemplo: deletar usuário).
400     |    ❌ Bad Request               |    Quando o cliente mandou uma requisição errada (falta de campo obrigatório, formato inválido, etc.).
401     |    ❌ Unauthorized              |    Quando precisa de autenticação e o cliente não mandou (exemplo: área que exige login).
403     |    ❌ Forbidden                 |    Quando o cliente não tem permissão (mesmo autenticado, não pode acessar aquele recurso).
404     |    ❌ Not Found                 |    Quando a rota ou o recurso solicitado não existe.
500     |    ❌ Internal Server Error     |    Quando o servidor encontrou um erro inesperado (bug ou falha interna).


____________________________________________| MongoDB |____________________________________________

• Iremos 

user: gabriewl 
password: databasepassword