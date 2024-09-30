# Usar uma imagem base oficial do Node.js 
FROM node:14-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todo o código do projeto para o diretório de trabalho
COPY . .

# Expor a porta em que a aplicação vai rodar (geralmente porta 3000 ou outra)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
