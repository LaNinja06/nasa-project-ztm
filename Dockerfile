FROM node:lts-alpine

# set working directory to /app
WORKDIR /app

COPY package*.json ./

# Copy over the client package files and install dependencies
COPY client/package*.json client/
RUN npm run install-client --omit=dev

# Copy over the server package files and install dependencies
COPY server/package*.json server/
RUN npm run install-server --omit=dev

# Build the client app
COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

USER node

CMD [ "npm", "start", "--prefix", "server"]

EXPOSE 8000