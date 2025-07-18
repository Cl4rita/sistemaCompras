Projeto de Modelagem
Este projeto consiste em uma aplicação web full-stack, desenvolvida com frontend em HTML/CSS/JavaScript e backend em Node.js. O sistema é especializado no cadastro e gerenciamento de produtos, transações comerciais e usuários, além de oferecer recursos avançados como geração de relatórios e visualização de dados através de gráficos.

Funcionalidades
Cadastro e consulta de produtos
Gestão de compras e vendas
Administração de usuários
Visualização de relatórios e gráficos analíticos
Arquitetura modular dividida em pastas front/ e back/
Integração com banco de dados (configurável via .env)
Pré-requisitos
Node.js npm Banco de dados (MySQL) Git

Instalação
Clone o repositório: bash git clone https://github.com/Cl4rita/sistemaCompras
Acesse a pasta do projeto: bash cd sistemaCompras
Instale as dependências: bash npm install
Configure o arquivo .env:

Crie o arquivo .env na raiz do projeto com as variáveis de ambiente de conexão com o banco de dados, por exemplo: env DB_HOST = 'localhost' DB_USER = 'root' DB_PASS = 'senai' DB_NAME = 'compras_db' PORT = 3000 DB_PORT = 3306

Execução
Para rodar o backend em desenvolvimento: bash node backend/index.js
Acesso ao Frontend
Abra qualquer arquivo .html que se localiza na pasta frontend
Estrutura de Pastas sistemaCompras/ │ ├── back/ # Código backend (Node.js) ├── frontend/ # Páginas e scripts frontend ├── .env # Variáveis de ambiente └── package.json # Dependências e scripts

Scripts úteis
npm install – Instala as dependências node backend/index.js – Executa o backend

Desenvolvedora
Ana Clara Furtado

Licença
Este projeto está licenciado sob a licença MIT.