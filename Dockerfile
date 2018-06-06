############################################################
# Dockerfile to build NodeJS 4 Installed Containers
# Based on Node:8.11.2
############################################################

FROM node:8.11.2

EXPOSE 3000

WORKDIR /app

# Install dependencies
RUN npm install -g forever 
RUN npm install

CMD ["npm", "start"]