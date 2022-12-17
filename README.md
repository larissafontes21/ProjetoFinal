# PROJETO SAIBA MULHER

![image](https://user-images.githubusercontent.com/106103717/208212257-3965d5ac-7d32-4e21-8ebd-279e5bb6ecbe.png)

# Introdução

O projeto saiba mulher surgiu como trabalho de conclusão do curso de desenvolvimento backend da {Reprograma} com o objetivo de:
- Informar sobre violência contra a mulher de forma fácil 
- Conectar mulheres em situação de violência/vulnerabilidade com Ongs de apoio, através da API Saiba Mulher

# Por dentro da API
![image](https://user-images.githubusercontent.com/106103717/208213110-7d2743c8-858a-41bc-9c49-6ba45b51eb70.png)

FUNÇÃO:
- Registrar Ongs e suas Atividades
- Filtrar por área (Ensino / Abrigo / Psicólogo / Jurídico…) e retornar todas as ongs que fornecem o serviço desejado

SCHEMAS:  <i> coleções de objetos dentro do banco de dados </i>, 
dividimos em 2 coleções:

- ONGS

>   {
    _id: ID
    nome: String,
    representante: String,
    email: String,
    endereco: String,
    telefone: String,    
    site: String,
    area: [String, String],
    descricao: String,
}

- ATIVIDADES

> {
    _id: ID
    atividade: String,
    atendimentoOnline: Boolean,
    descricao: String,
		site: String
  }

Cada coleção tem as suas respectivas rotas do CRUD (Create, Read, Update, Delete), segue documentação:

# Documentação
![image](https://user-images.githubusercontent.com/106103717/208214571-b1821949-f203-4655-b6cf-75df5c1fd07a.png)

# Principais Tecnologias Utilizadas

Postman / Nodejs / MongoDB - Banco de Dados


> <i> "Toda vez que uma mulher se defende, sem nem perceber que isso é possível, sem qualquer pretensão, ela defende todas as mulheres." - Maya Angelou </i>

Acesse o Notion do projeto  https://general-boa-135.notion.site/Saiba-Mulher-107a9205374f47cabc95a51d14815d68

LinkedIn: https://www.linkedin.com/in/larissafontes21/

Desenvolvido com 🔥
