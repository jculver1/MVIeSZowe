FROM node:8-alpine

# USER root

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk add --no-cache --virtual .gyp \
  python \
  make \
  g++

RUN echo "Install NPM AND YARN and some essentials deps"
RUN apk --no-cache add \
  nodejs-npm \
  curl \
  yarn \
  tar \
  gzip \
  bash \
  git \
  unzip \
  wget \
  openssh-client \
  openssh \
  sudo

# RUN yarn add lerna
RUN npm install --global lerna

RUN node -v
RUN npm -v
RUN yarn -v
# RUN lerna -v

RUN npm rebuild node-sass --force

# RUN ls
# COPY ./**/* ./
# RUN ls

# RUN yarn install --verbose
# RUN ls

EXPOSE 3000
CMD [ "npm", "start" ]
# CMD [ "yarn", "start-dev" ]
