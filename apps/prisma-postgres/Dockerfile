FROM node:18

WORKDIR /apps/prisma-postgres

COPY ./dist/apps/prisma-postgres .
# COPY ./node_modules ./node_modules
# COPY ./bc-package.json ./package.json
COPY ./package.json .
COPY ./package-lock.json .
COPY ./apps/prisma-postgres/src/prisma ./prisma/
COPY ./dataset/ ./dataset/
COPY ./dataset/ ./apps/dataset/

ENV SERVER_PORT=3050
EXPOSE ${PORT}

# RUN add --no-cache zlib1g-dev
# RUN add --no-cache nodejs

RUN npm install --force
# RUN apt-get update -y && apt-get install -y openssl
RUN npm install -g prisma
CMD prisma generate
# CMD npx npx prisma migrate dev --name "init"

CMD node ./main.js
