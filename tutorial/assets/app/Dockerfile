FROM node:lts

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /usr/src/app

RUN chown node:node .

USER node

COPY package.json pnpm-lock.yaml ./

RUN pnpm fetch --prod

COPY ./src ./src

RUN pnpm install -r --offline -P

EXPOSE 3000

CMD node ./src/app.js