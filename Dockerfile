FROM public.ecr.aws/i3c5v1i2/node:18

EXPOSE 3000
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
