############################################################
# Dockerfile to build NodeJS 4 Installed Containers
# Based on Node:4.1.1
############################################################

FROM node:4.1.1

EXPOSE 3000

# Copy application folder and configurations
RUN mkdir -p /space/webapps/khemlabs-site
COPY . /space/webapps/khemlabs-site

# Install dependencies
WORKDIR /space/webapps/khemlabs-site/
RUN npm install

CMD ["node", "index.js"]
