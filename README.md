# 📌 task-manager-api
API DE GERENCIAMENTO DE TAREFAS
- API simples que permite o cadastro de usuários e o gerenciamento de suas tarefas.

🚀 TECNOLOGIAS
- Node.js com Express
- Sequelize com MySQL 

👤 ROTAS RELACIONADAS AO USUÁRIO
[POST]   /usuario           - Criar um novo usuário
[GET]    /usuarios          - Listar todos os usuários
[GET]    /usuariosTarefas   - Lista usuários e suas tarefas
[GET]    /usuario/:id       - Buscar um usuário por ID
[PUT]    /usuario/:id       - Atualizar um usuário (nome, email)
[DELETE] /usuario/:id	      - Remover um usuário

📋 ROTAS RELACIONADAS A TAREFA
[POST]   /tarefa            - Criar uma nova tarefa (relacionada a um usuarioId)
[GET]    /tarefas           - Listar todas as tarefas
[GET]    /tarefa/:id        - Obter uma tarefa específica
[PUT]    /tarefa/:id        - Atualizar uma tarefa (título, descrição ou status)
[DELETE] /tarefa/:id        – Remover uma tarefa


🔍 Paginação e Filtros

👤 Usuários
A rota de listagem de usuários (GET /usuarios) suporta paginação e filtros via parâmetros de query:

Parâmetros disponíveis:
page — Página atual (padrão: 1)
limit — Quantidade de registros por página (padrão: 4)
nome — Filtra usuários pelo nome (busca parcial)
email — Filtra usuários pelo e-mail (busca parcial)

Exemplos de uso:
Paginação:
GET /usuarios?page=2&limit=5

Filtro por nome:
GET /usuarios?nome=joao

Filtro por e-mail com paginação:
GET /usuarios?page=1&limit=3&email=fulano@gmail.com


📋 Tarefas
A rota de listagem de tarefas (GET /tarefas) também suporta paginação e filtro por status.

Parâmetros disponíveis:
page — Página atual (padrão: 1)
limit — Quantidade de registros por página (padrão: 4)
status — Filtra tarefas pelo status

Valores permitidos: PENDENTE, EM_ANDAMENTO, CONCLUIDA

Exemplos de uso:
Paginação:
GET /tarefas?page=1&limit=4

Filtro por status:
GET /tarefas?status=CONCLUIDA

Filtro com paginação:
GET /tarefas?page=2&limit=5&status=PENDENTE


