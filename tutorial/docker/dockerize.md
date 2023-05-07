Docker is a platform for building, shipping, and running applications using containers, which are lightweight, self-contained packages that contain all the necessary code and dependencies.

To create a docker image you need a Dockerfile defining what base image to use and which commands to run.
Create a new file in the app directory with the name "Dockerfile".
Here is a template for the file:
```
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
```

You can then build the image like this:
```plain
docker build -t test .
```{{exec}}

Then run it like this:
```plain
docker run -itd --rm --name test -p 3000:3000 test
```{{exec}}

Now when you visit the [public URL]({{TRAFFIC_HOST1_3000}}) again you should see the application running but this time in a docker container. You can use this image to easily deploy your application to any cloud provider.