# task-manager-api
API DE GERENCIAMENTO DE TAREFAS
- Criar uma API simples que permita o cadastro de usuários e o gerenciamento de suas tarefas. Cada usuário pode possui várias tarefas, e cada tarefa tem um status que representa seu progresso.


TECNOLOGIAS
- Node.js com Express
- Sequelize com MySQL (Não precisa usar migrations) 

ROTAS RELACIONADAS AO USUÁRIO
[POST]   /usuario        - Criar um novo usuário
[GET]    /usuarios       - Listar todos os usuários
[GET]    /usuario/:id    - Buscar um usuário por ID
[PUT]    /usuario/:id    - Atualizar um usuário (nome, email)
[DELETE] /usuario/:id	 - Remover um usuário

ROTAS RELACIONADAS A TAREFA
[POST]   /tarefa        - Criar uma nova tarefa (relacionada a um usuarioId)
[GET]    /tarefas       - Listar todas as tarefas
[GET]    /tarefa/:id    - Obter uma tarefa específica
[PUT]    /tarefa/:id    - Atualizar uma tarefa (título, descrição ou status)
[DELETE] /tarefa/:id    – Remover uma tarefa


IMPLEMENTAR PAGINAÇÃO E FILTRO PARA USUÁRIOS
Parâmetros de query:
  - page  (padrão: 1)
  - limit (padrão: 4)
  - nome  (filtrar usuários pelo nome)
  - email (filtrar usuários pelo email)

    Exemplo 1 (paginação): /usuarios?page=2&limit=5
    Exemplo 2 (filtro): /usuarios?nome=joao
    Exemplo 3 (filtro + paginação): /usuarios?page=1&limit=3&email=fulano@gmail.com


IMPLEMENTAR PAGINAÇÃO PARA TAREFAS
Parâmetros Query:
  - page  (padrão: 1)
  - limit (padrão: 4)
  - status (filtrar tarefas por status) - Valores permitidos: PENDENTE, EM_ANDAMENTO, CONCLUIDA

    Exemplo 1 (paginação): /tarefas?page=1&limit=4
    Exemplo 2 (filtro):  /tarefas?status=CONCLUIDA
    Exemplo 3 (ambos): /tarefas?page=2&limit=5&status=PENDENTE


ESTRUTURA DO MODELO DE USUÁRIO
CAMPOS - id, nome, email

ESTRUTURA DO MODELO DE TAREFA
CAMPOS -  id, titulo, descricao, status (valores: PENDENTE, EM_ANDAMENTO, CONCLUIDA), usuarioID


LINK DA DOCUMENTAÇÃO DO SEQUELIZE: https://sequelize.org/docs/v6/getting-started/

OBSERVAÇÃO
Apresentar o funcionamento do sistema pelo postman