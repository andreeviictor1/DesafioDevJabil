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

### Evidências
1. Swagger da API <br />
  ![image](https://github.com/user-attachments/assets/a8f6ce84-7c00-4a54-8b1c-a0bb3665a655)
<br />


3. Tela de Login para Gerenciar os usuarios<br />
  ![image](https://github.com/user-attachments/assets/365f35b8-2354-47d3-b471-2c19924d6c8d)
<br />

2.1 Se ainda nao tem registro, clique em "Registrar" e preencha a tela<br />
  ![image](https://github.com/user-attachments/assets/8d055175-f10a-4208-bd35-9cc2e0294796)
  <br />

3. Tela principal<br />
![image](https://github.com/user-attachments/assets/70e456df-5044-42de-ae47-4d517258c911)
<br />
### 4. Mostrando Funcionalidades

#### 4.1 Opção -> Obter todos os Usuários

![image](https://github.com/user-attachments/assets/067c3fbd-fda7-4b1b-aed8-a8b40ad14390)


4.2 Opção -> Obter usuário por ID

![image](https://github.com/user-attachments/assets/5f3d38be-2a8a-444d-8de8-a89a7b5ac262)

![image](https://github.com/user-attachments/assets/1f09a8f2-2458-41d1-9c77-1c1584cee0cf)\

4.3 Opção -> Atualiza Usuário. id selecionado "5" <br />
![image](https://github.com/user-attachments/assets/b781d2ba-4e8e-4442-ae6b-891fa494b47f)

![image](https://github.com/user-attachments/assets/be50193a-da35-46d5-80a3-415b3dea111b)<br />

### Banco de dados
1. Estrutura do Database<br />

   
 ![image](https://github.com/user-attachments/assets/24b7cd25-b931-416d-ac05-7675e9478ff4)




