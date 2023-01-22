# API básica para gerenciamento de candidaturas pessoais a vagas de empregos

## Rotas
---
#### Inserir um _job_: **POST /job**
Formato do _body_ da requisição:
``` javascript
{
    position: 'Full stack developer',
    company: 'Itarget Tecnologia',
    salary: 7000
}
```
---
#### Listar _jobs_: **GET /jobs**
Formato da resposta da requisição:
``` javascript
[
    {
        id: 1,
        position: Front-end developer,
        company: 'SoftExpert',
        salary: 7000,
        summoned: false
    },
    {
        id: 2,
        position: Back-end developer,
        company: 'Oowlish',
        salary: 7500,
        summoned: true
    }
]
```
---
#### Listar _jobs_ filtrados por cargo: **GET /match**
Formato da _query_ da requisição:
``` javascript
{
    letters: 'front-end'
}
```
Formato da resposta da requisição:
``` javascript
[
    {
        id: 1,
        position: Front-end developer,
        company: 'Pumatronix',
        salary: 7000,
        summoned: false
    },
    {
        id: 2,
        position: Front-end developer,
        company: 'Samsung Brasil',
        salary: 6500,
        summoned: false
    }
]
```
---
#### Assinalar recebimento de convite para entrevista relativa a um _job_: **PATCH /summoned/:id**
---
#### Apagar um _job_: **DELETE /erase/:id**
---