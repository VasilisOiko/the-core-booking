# techonologies Node, react, nextjs, tailwind, typescript
# the-core-react-tailwind
# docker build -t react-nextjs-tailwind .
FROM alpine:latest

RUN apk update
RUN apk upgrade
RUN apk add nodejs-current npm
RUN apk add git
WORKDIR /home/app

RUN apk add --no-cache tzdata
RUN apk add --no-cache su-exec
RUN set -ex && apk --no-cache add sudo
  
ENV TZ="Europe/Athens"
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true
ENV NODE_ENV=development
ENV CI=true

WORKDIR /home/app