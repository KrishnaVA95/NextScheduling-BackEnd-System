
# <h1 style="text-align: center; color:#b2d9f7;">NextScheduling, com TypeORM e express</h1>

<div>
    <img align="center" alt="Krishna-Node" height="30" width="40" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg">
    <img align="center" alt="Krishna-PSQL" height="30" width="40" src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg">
     <img align="center" alt="Krishna-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
</div>

# <h1 style="text-align: center; color:#b2d9f7;">Index</h1>

* [Introdução](#introdução)
* [Repositório_local](#repositório_local)
* [Base_URL](#base_url)
* [Endpoints_Success](#endpoints_success)
* [User](#user)
* [Login](#login)
* [Contact](#contact)
* [Endpoints_Error](#endpoints_error)
* [Libs](#libs)



# <h1 style="text-align: center; color:#b2d9f7;">Introdução</h1>
<p style="letter-spacing: 2px; line-height: 200%;  text-align: justify;">
O sistema NextScheduling é um software desenvolvido em node.js e gerencia atividades de uma agenda. Sendo assim, o objetivo foi criar uma API para manipular os conteúdos e as regras de negócio de usuário e seus contatos.
</p>


# <h1 style="text-align: center; color:#b2d9f7;">Repositório_local</h1>
<p>1- Clone o repositório</p>
<p>2- Deve ter instalado o banco de dados PostgreSQL</p>
<p>3-Crie um banco de dados em PostgreSQL</p>
<p>4-Crie o arquivo .env e adicione as variáveis de ambiente necessárias. Formato DATABASE_URL:</p>

```
postgresql://USERDOPC:SENHA@localhost:5423/SUADABASE
```

<p>5-Instale a node modules</p>

```
npm
```

<p>6-Rode o servidor</p>

```
npm run dev
```

**[⬆ Back to Index](#index)**

# <h1 style="text-align: center; color:#b2d9f7;">Base_URL</h1>
```
localhost:3000
```

**[⬆ Back to Index](#index)**

# <h1 style="text-align: center; color:#b2d9f7;">Endpoints_Success</h1>

# <h2 style="text-align: center; color:#b2d9f7;">User</h2>



# <h3 style="color:#b2d9f7;">Criar usuários</h3>

```
/users
```

###### POST 

Corpo de requisição:
```json
{
	"name": "User",
	"email": "user@mail.com",
	"password": "1234",
	"phone": "48999999999"
}
```


Resposta do servidor: 
`status 201 Created`

```json
{
	"id": "99e61fa9-3009-4fe9-b1e7-a5f9bc077f83",
	"name": "User",
	"email": "user@mail.com",
	"created_at": "2023-07-26T15:46:17.175Z",
	"phone": "48999999999"
}
```

# <h3 style="color:#b2d9f7;">Listagem de usuários</h3>

```
/users
```

###### GET -  todos os usuários podem listar

Não é necessario corpo de requisição:


Resposta do servidor: 
`status 200 OK`

```json
[
	{
		"id": "99e61fa9-3009-4fe9-b1e7-a5f9bc077f83",
		"name": "User",
		"email": "user@mail.com",
		"created_at": "2023-07-26T15:46:17.175Z",
		"phone": "48999999999"
	}
]
```



# <h3 style="color:#b2d9f7;">Atualizar usuário</h3>

```
/users/:id
```

###### PATCH 

Corpo de requisição:
```json
{
	"name": "User 01",
	"email": "user01@mail.com"
}
```


Resposta do servidor: 
`status 200 OK`

```json
{
	"id": "99e61fa9-3009-4fe9-b1e7-a5f9bc077f83",
	"name": "User 01",
	"email": "user01@mail.com",
	"created_at": "2023-07-26T15:46:17.175Z",
	"phone": "48999999999"
}
```


# <h3 style="color:#b2d9f7;">Delete  usuário</h3>

```
/users/:id
```

###### DELETE -  todos os usuários podem listar

Não é necessario corpo de requisição:


Resposta do servidor: 
`status 204 No Content`

**[⬆ Back to Index](#index)**


# <h2 style="text-align: center; color:#b2d9f7;">Login</h2>

```
/login
```
###### POST 

Corpo de requisição:
```json
{
	"email": "user01@mail.com",
	"password": "1234"
}
```

Resposta do servidor: 
`status 200 OK`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlVzZXIgMDEiLCJpYXQiOjE2OTAzNzczNjUsImV4cCI6MTY5MDM4MDk2NSwic3ViIjoiOTllNjFmYTktMzAwOS00ZmU5LWIxZTctYTVmOWJjMDc3ZjgzIn0.59KXC6cj2vcOaF67ahMVZ_Ug4gXTJGnO-ngG9LSRTvA"
}
```

**[⬆ Back to Index](#index)**

# <h2 style="text-align: center; color:#b2d9f7;">Contact</h2>


# <h3 style="color:#b2d9f7;">Criar contato</h3>

```
/contacts
```

###### POST - Somente usuário autenticado


Corpo de requisição:
```json
{
	"name": "Contact",
	"email": "contact@mail.com",
	"phone": "48000000000"
}
```


Resposta do servidor: 
`status 201 Created`

```json
{
	"id": "4293cff0-4cf8-4a93-a5ff-5fd92e17535c",
	"name": "Contact",
	"email": "contact@mail.com",
	"created_at": "2023-07-26T16:19:00.809Z",
	"phone": "48000000000"
}
```

# <h3 style="color:#b2d9f7;">Listar contatos de um usuário</h3>

```
/contacts
```

###### GET - Somente usuário autenticado

Não é necessario corpo de requisição:


Resposta do servidor: 
`status 200 OK`

```json
[
	{
		"id": "1591f7fe-e4be-4fae-8a93-37a882ac7280",
		"name": "Contact02",
		"email": "contact02@mail.com",
		"created_at": "2023-07-26T16:20:16.679Z",
		"phone": "48000000000"
	},
	{
		"id": "4293cff0-4cf8-4a93-a5ff-5fd92e17535c",
		"name": "Contact01",
		"email": "contact01@mail.com",
		"created_at": "2023-07-26T16:19:00.809Z",
		"phone": "48000000000"
	}
]
```



# <h3 style="color:#b2d9f7;">Atualizar contato</h3>

```
/contacts/:id
```

###### PATCH - Somente usuário autenticado, que criou o contato

Corpo de requisição:
```json
{
	"name": "Contact01",
	"email": "contact01@mail.com"
}
```


Resposta do servidor: 
`status 200 OK`

```json
{
	"id": "4293cff0-4cf8-4a93-a5ff-5fd92e17535c",
	"name": "Contact01",
	"email": "contact01@mail.com",
	"created_at": "2023-07-26T16:19:00.809Z",
	"phone": "48000000000"
}
```


# <h3 style="color:#b2d9f7;">Delete  contato</h3>

```
/contacts/:id
```

###### DELETE -  Somente usuário autenticado, que criou o contato

Não é necessario corpo de requisição:

Resposta do servidor: 
`status 204 No Content`

**[⬆ Back to Index](#index)**

# <h1 style="text-align: center; color:#b2d9f7;">Endpoints_Error</h1>

# <h3 style="color:#b2d9f7;">casos de erro user:</h3>
`POST`
certifique-se de que o campo de requisição cumpri os requisitos. 
Resposta do servidor: 
`400 Bab Request`
```json
{
	"message": {
		"name": [
			"Required"
		],
		"email": [
			"Required"
		],
		"password": [
			"Required"
		],
		"phone": [
			"Required"
		]
	}
}
```

`PATCH | DELETE`
Necessario token de autenticação.
Resposta do servidor: 
`401 Unauthorized`
```json
{
	"message": "invalid token"
}
```

`DELETE | PATCH`
certifique-se de que o usuário seja ele mesmo. 
Resposta do servidor: 
`403 Forbidden`
```json
{
	"message": "Insufficient permission"
}
```

# <h3 style="color:#b2d9f7;">casos de erro contact:</h3>

`GET | PATCH | POST | DELETE`
Necessario token de autenticação.
Resposta do servidor: 
`401 Unauthorized`
```json
{
	"message": "invalid token"
}
```

`POST | PATCH`
certifique-se de que o campo email, seja único. 
Resposta do servidor: 
`500 Internal server error`
```json
{
	"message": "internal server error"
}
```



`POST`
certifique-se de que o campo de requisição cumpri os requisitos. 
Resposta do servidor: 
`400 Bab Request`
```json
{
	"message": {
		"name": [
			"Required"
		],
		"email": [
			"Required"
		],
		"phone": [
			"Required"
		]
	}
}
```


`PATCH | DELETE`
certifique-se de que o o contato exista. 
Resposta do servidor: 
`404`
```json
{
	"message": "contact not found"

}
```

**[⬆ Back to Index](#index)**

# <h1 style="text-align: center; color:#b2d9f7;">Libs</h1>
<ul>
	<li>bcryptjs</li>
	<li>dotenv</li>
	<li>express</li>
	<li>express-async-errors</li>
	<li>jsonwebtoken</li>
	<li>pg</li>
	<li>zod</li>
	<li>typeorm</li>
	<li>ts-node</li>
	<li>reflect-metadata</li>
</ul>

**[⬆ Back to Index](#index)**
