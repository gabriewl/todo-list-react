import express from "express"; // Aqui estamos importando as funcionalidades da biblioteca express, mas antes instalamos usando os comandos no terminal.

import { PrismaClient } from "@prisma/client"; // Aqui estou todas importanto as funções do prisma.

const prisma = new PrismaClient(); // Aqui está guardando todas as funções, através dela que conseguiremos utilizar

const app = express(); // Na documentação é recomendado que crie uma variável (normalmente chamada de app), e dentro dessa variável criar uma função, e assim teremos acesso as funcionalidades do express.

app.use(express.json()); // Essa linha é precisa pois em algum momento se precisarmos receber dados em json, ele não irá conseguir ler sem essa função.

const PORT = 3000;

app.post("/usuarios", async (req, res) => {
  //Criando os usuários (ela é assincrona pois tem uma promessa na função, que no caso é pegar dados de algum lugar que não é dentro do javascript, no caso é pegar os dados dentro do banco de dados).

  // users.push(req.body) ->  Pega os dados que chegaram na requisição (req.body) e adiciona dentro dessa lista users

  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).json(req.body);
});

// Esta é uma rota usando o métoo HTTP "Get", para Ler alguma informação do endereço "Usuários". Pode ser usada várias rotas para o mesmo endereço, mas com métodos HTTP diferentes.
app.get("/usuarios", async (req, res) => {
  let users = [];

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age
      }
    })
  } else {
    users = await prisma.user.findMany(); //Find é procurar, Many é todos
  }

  res.status(200).json(users); // res.send() é uma função do Express que serve para enviar uma resposta para o cliente.
});

app.put("/usuarios/:id", async (req, res) => {
  //Criando os usuários (ela é assincrona pois tem uma promessa na função, que no caso é pegar dados de algum lugar que não é dentro do javascript, no caso é pegar os dados dentro do banco de dados). o : significa que é uma variável, posso colocar o que eu quiser.

  // users.push(req.body) ->  Pega os dados que chegaram na requisição (req.body) e adiciona dentro dessa lista users

  // console.log(req)

  await prisma.user.update({
    //Prisma, atualize esse usuário, esse usuário é o usuário que estou mandando aqui (/usuarios/:id), e essas informações (email:  req.body.email, name:  req.body.name, age:  req.body.age) vão ser as novas informações deles.
    where: {
      id: req.params.id,
    },

    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).json(req.body);
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Usuário Deletado ✅" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost${PORT}`);
}); // Essa função abre o servidor, o comando para rodar no terminal é: (node {nome do arquivo onde está a função de abrir o servidor} server.js)
