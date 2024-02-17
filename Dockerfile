FROM node:18

EXPOSE 3000
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install
RUN npm build
CMD ["npm", "start"]
