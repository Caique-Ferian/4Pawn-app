FROM node:16.14-alpine
WORKDIR /4pawn-backend
COPY package*.json /4pawn-backend/
RUN npm install 
COPY . /4pawn-backend/
EXPOSE 3001
RUN npm run build
CMD ["npm", "start"]