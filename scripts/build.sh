#!/bin/bash

# DO NOT MODIFY

bold=`tput bold`
normal=`tput sgr0`

# Khemlabs - Config script #
PORT_REDIS=${PORT_REDIS:-6379}
PORT_APP=${PORT_APP:-3000}

printf "\n${bold}==> ********** OVERWRITING .env FILE **********${normal} \n"
echo "PORT_REDIS=$PORT_REDIS" >> '.env'
echo "ENV_APP_FILE_PATH=./config/env/dev.env" >> '.env'
echo "PORT_APP=$PORT_APP" >> '.env'
echo ".env file created"

printf "\n${bold}==> ********** BUILDING AND RUNNING **********${normal} \n"
docker-compose -f dev.yml -f docker-compose.yml up -d --build