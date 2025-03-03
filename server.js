import express from "express"; // Aqui estamos inportando as funcionalidades da biblioteca express, mas antes instalamos usando os comandos no terminal.

const app = express(); // Na documentação é recomendado que crie uma variável (normalmente chamada de app), e dentro dessa variável criar uma função, e assim teremos acesso as funcionalidades do express.

app.use (express.json()) // Essa linha é precisa pois em algum momento se precisarmos receber dados em json, ele não irá conseguir ler sem essa função.

const PORT = 3000;

const users = [];

app.post("/usuarios", (req, res) => {  //Criando os usuários

  users.push(req.body) // Pega os dados que chegaram na requisição (req.body) e adiciona dentro dessa lista users

  res.status(201).json(req.body)

});

// Esta é uma rota usando o métoo HTTP "Get", para Ler alguma informação do endereço "Usuários". Pode ser usada várias rotas para o mesmo endereço, mas com métodos HTTP diferentes.
app.get("/usuarios", (req, res) => {
  res.status(200).json(users) // res.send() é uma função do Express que serve para enviar uma resposta para o cliente.
});



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost${PORT}`);
}); // Essa função abre o servidor, o comando para rodar no terminal é: (node {nome do arquivo onde está a função de abrir o servidor} server.js)