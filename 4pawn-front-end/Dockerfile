FROM node:16.14-alpine
WORKDIR /4pawn-frontend
COPY package*.json /4pawn-frontend/
RUN npm install
COPY . /4pawn-frontend/
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]