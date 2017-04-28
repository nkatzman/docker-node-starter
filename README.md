# Docker node starter pack

## Prereqs

- [Docker](https://www.docker.com/community-edition)

## How to build docker
```
# Build docker container with specific tag, example: docker-testing
TAG=docker-testing
docker build -t docker-node-starter:$TAG .
```

This will build a docker container using the `Dockerfile`.

This creates a docker container with the name `docker-node-starter` and tags it with `docker-testing`

## How to run docker
```
TAG=docker-testing

# To run docker container with an interactive bash shell
docker run -i -t -v `pwd`:/workspace docker-node-starter:$TAG /bin/sh

# To run docker container with node repl
docker run -i -t docker-node-starter:$TAG node

# To just run the server. Should be accessible via port 8080 now
docker run -i -t -p 8080:8080 docker-node-starter:$TAG
```

##### Notes
- Using `-v` will mount the current directory into `/workspace` of the container so that you can develop locally on the computer and have it show up in the container

## Node.js
When you want a node module available with the service make sure to run `npm install --save node-module` so that it gets saved as a production dependency

## Eslint
Brought in a strict linter for the es6 standard. You can run linting by just running `npm test`

This is usefully just to a standard. It uses the `eslint-config-airbnb-base` linting standard which is pretty good.
