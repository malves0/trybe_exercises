# Arquitetura de Software - Camada de Model

### Tecnologias:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="nodejs" width="70" height="40"/>

---

### Objetivos:

- Entender o funcionamento da camada de Model ;
- Delegar responsabilidades específicas para essa camada;
- Conectar sua aplicação com diferentes bancos de dados.

---

### Exercícios:

Você criará uma aplicação que faz CRUD ( C reate, R ead, U pdate e D elete) de usuários. A entidade que representa um usuário se chamará user .
Utilize a camada de Model que você acabou de estudar para realizar a interação da aplicação com o MongoDB .
Com isso em mente, prossiga para a realização dos exercícios:
1. Crie o endpoint `POST /user`
    1. Seu endpoint deve receber o seguinte conteúdo no body da request:
       ~~~
        {
          "firstName": "Calebe",
          "lastName": "Junior",
          "email": "calebe.junior@gmail.com",
          "password": "d496d5ea2442"
        }
        ~~~
    2. Todos os campos são obrigatórios;
    3. O campo `password` deve ser uma string de 6 ou mais caracteres;
    4. Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:
        ~~~
            {
              "error": true,
              "message": "O campo 'password' deve ter pelo menos 6 caracteres"
            }
       ~~~
    5. Caso o usuário seja criado com sucesso, retorne os campos `id` (e não `_id` ), `firstName` , `lastName` e `email` em JSON, no formato abaixo, com o status `201 Created`
    6. O campo `_id `deve ser renomeado para `id` , pois a nomenclatura `_id `trata-se de um detalhe de implementação do MongoDB e que, portanto, deve ser transparente para as demais camadas da aplicação. Dessa forma, ao migrar para um banco relacional, por exemplo, você não precisa alterar o nome de nenhum campo da sua entidade.
