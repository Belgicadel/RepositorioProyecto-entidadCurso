FROM node:lts
WORKDIR /app
# COPY package.json and package-lock.json files
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .

RUN npm install

RUN npx prisma generate


# Run and expose the server on port 3002
EXPOSE 3000

# A command to start the server
# RUN npx prisma migrate dev --name init
ENTRYPOINT [ "npm","run" ,"start:migrate:prod" ]


