# 🚀 NodeJS-MongoDB-Express - API SIMPLES

![image](https://media.giphy.com/media/pY9Jl3pyTd6U6GZ4IT/giphy.gif)

### Consolidando os meus estudos de NodeJS, Express e MongoDB ao fazer a criação de um CRUD simples.

<br>

> ⚠️ O CRUD é um acrônimo para Create, Read, Update e Delete. São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose aqui estão algumas formas de fazer :


| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| `C` REATE | insertOne() | create() |
| `R` EAD | find() | find() / findOne() |
| `U` PDATE | updateOne() |  updateOne() |
| `D` ELETE | deleteOne() | deleteOne() |

<br>

# 🧠 Contexto

O objetivo foi criar uma API simples para cadastro de pessoas. 

  - Rodando o projeto localmente 
  - Tecnologias Utilizadas
  - Arquitetura
  - Requisitos, endpoints e operações
  - Dados
  - Saudações

<br>

# ⚙️ Rodando o projeto localmente
Siga os passos e inclua as informações abaixo:

| Passo     | Comando/informação       |
| --------- | ----------- |
| Faça o fork  | `botão de forkar` |
| ou Faça o clone  | `git clone` |
| Instale as dependências   | `npm i` |
| Crie seu .env e inclua as variáveis e os valores   | `DB_USER` / `DB_PASSWORD`|
| utilize o script de start    | `npm start` |

## OBS.: As variáveis `DB_USER` e `DB_USER` irão substituir o usuário e senha da sua URL gerada no mongoDB Atlas quando for conectar a aplicação ao banco. 

<br>

 # <img align="center" alt="Lizz-Mongodb" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"> MongoDB Atlas

 ### Banco onde os dados ficam armazenados na `collection person`  (mostrando a persistência dos dados) 
<br>

![image](https://media.giphy.com/media/dBdPx68IpS79LpGFTb/giphy.gif)

<br>

# 🛠️ Tecnologias Utilizadas

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MongoDb Atlas` |Banco de dados orientado a documentos e interface na nuvem para verificar se os dados foram persistidos|
| `Postman` | Interface gráfica para realizar os testes manuais das chamadas|

  
<br> 

# 📁 Arquitetura

```
 📁 NodeJS-MongoDB-Express-API SIMPLES
   |
   |
   | - 📁 models
   |      |- 📑 Person.js
   |
   | - 📁 routes
   |         |- 📑 personRoutes.js 
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 LICENSE
   |- 📑 index.js
   |- 📑 package-lock.json
   |- 📑 package.json

```


# 🔃 Requisitos, endpoints e operações


GET
-   **"/person"** Deverá retornar todas as persoas cadastradas
-   **"/person/[ID]"** Deverá retornar uma pessoas cadastrada específica por id

POST
-   **"/person"** Deverá inserir dados de um apessoa no banco de dados


PATCH
-   **"/person/[ID]"** Deverá alterar informação específica dentro da intidade person por id específico e retorna o objeto alterado

DELETE
-   **"/person/[ID]"** Deverá deletar uma pessoa cadastrada e retornar uma mensagem de sucesso

<br>

# ![Postman](./image/img.png) Postman

### Rotas foram testadas no postman http://localhost:3000/person
<br>

![image](https://media.giphy.com/media/1C7HlfLtQOlvF1pD7G/giphy.gif)

<br>

#	📊 Dados requeridos

### 🙎‍♀️ PERSON
- id: autogerado e obrigatório (gerado pelo banco de dados)
- name: texto e obrigatório
- salary: número e obrigatório
- approved: boolean e obrigatório

✔️ RETORNO DA API
```
[
    {
        "_id": "61ba290afcfe81f8c9110a07",
        "name": "Elisabete A.",
        "salary": 1500,
        "approved": true,
        "__v": 0
    }
]
```
<br>

# 😎 Próximos passos para estudar

- Uma API completa com arquitetura MVC
- Código limpo (utilização de princípios como DRY, KISS, SOLID)
- Testes (unitários, e2e, etc)

---

<br>

# 👋 Saudações, Eli!

_Caso queira contribuir com meu projeto, será totalmente bem-vindx!!!_
_Qualquer dúvida ou sugestão, chama no contatinho!_


 <img src="https://i.picasion.com/pic91/8dd880c47cfc761e805745c941097adb.gif" alt="Gif Yeah" width="200">

### Vamos nos conectar!

- [LinkedIn](https://www.linkedin.com/in/elisabete-a-santos/)
- [GitHub](https://github.com/elisabetealves)

<br>

### Feito com 💜 por Elisabete Alves

<br> 
    
# 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).