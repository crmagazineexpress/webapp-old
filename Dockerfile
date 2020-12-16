# Imagem de Origem
FROM node:12.13-alpine

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /usr/src/app

# Adicionando `/app/node_modules/.bin` para o $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

EXPOSE 3000

# start app
CMD ["npm", "start"]
