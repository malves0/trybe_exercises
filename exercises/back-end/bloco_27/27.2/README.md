# Node.js - Introdução

### Tecnologias:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="nodejs" width="70" height="40"/>


---

### Objetivos:

- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada parte do seu app;
- Melhorar manutenibilidade e reusabilidade do seu código.

---

### Exercícios:

Você vai desenvolver uma aplicação de busca de CEP. A aplicação fornecerá um serviço de busca e cadastro de CEPs em um banco de dados. Como bônus, ao invés de cadastrar novos CEPs manualmente, a aplicação consultará uma API externa para obter os dados do CEP desejado.
Utilize o banco de dados MySQL. Execute a seguinte query para criar o banco e a tabela:
~~~
CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL PRIMARY KEY,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL
);
~~~

1. Crie uma nova API utilizando o express
2. A aplicação deve ser um pacote Node.js
3. Utilize o express para gerenciar os endpoints da sua aplicação
4. A aplicação deve ter a rota `GET /ping` , que retorna o status `200 OK` e o seguinte JSON:
    ~~~
    { "message": "pong!" }
    ~~~
5. A aplicação deve escutar na porta 3000
6. Deve ser possível iniciar a aplicação através do comando `npm start` .
7. Crie o endpoint `GET /cep/:cep`
8. O endpoint deve receber, no parâmetro `:cep` , um número de CEP válido.
9. O CEP precisa conter 8 dígitos numéricos e pode ou não possui traço.
    - Dica Utilize o regex `\d{5}-?\d{3}` para validar o CEP.
10. Caso o CEP seja inválido, retorne o status `400 Bad Request` e o seguinte JSON:
    ~~~
    { "error": { "code": "invalidData", "message": "CEP inválido" } }
    ~~~
11. Caso o CEP seja válido, realize uma busca no banco de dados.
    - Caso o CEP não exista no banco de dados, retorne o status `404 Not Found` e o seguinte JSON:
    ~~~
    { "error": { "code": "notFound", "message": "CEP não encontrado" } }
    ~~~