# Gerenciamento de Usuários

Este projeto é uma aplicação web simples de gerenciamento de usuários, construída com C# no backend e HTML/CSS com Bootstrap no frontend. A aplicação implementa autenticação JWT e documentação com Swagger.

## Requisitos

- .NET 5.0 ou superior
- Node.js (para instalação de pacotes, se necessário)
- Docker (opcional, para execução em contêineres)
- Postman (opcional, para consultar a API)

## Funcionalidades

- CRUD de Usuários:
  - Criação, leitura, atualização e exclusão de usuários.
  - Atributos de cada usuário:
    - Id (int, chave primária)
    - Nome (string, obrigatório)
    - Email (string, obrigatório, único)
    - Senha (string, obrigatória, armazenada de forma segura)
    - Data de Cadastro (DateTime, obrigatório)

## Estrutura do Projeto

- **Backend**: API RESTful em C#.
- **Frontend**: Interface de gerenciamento de usuarios utilizando HTML, CSS e Bootstrap.
- **Documentação**: Swagger para documentar a API.

## Instalação e Execução

### Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/andreeviictor1/GerenciadorUsuarios.git
   cd gerenciamento-usuarios/backend
   


2. Restaure as dependências:
    ```bash
    dotnet restore

3. Execute a aplicação:
    ```bash
    dotnet run

4. A API estará disponivel em: https://localhost:7005 ou http://localhost:5227



### Frontend

1. Navegue até a pasta do frontend:
    ```bash
    cd ../frontend

