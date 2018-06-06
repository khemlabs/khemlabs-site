#!/bin/bash

# DO NOT MODIFY

bold=`tput bold`
normal=`tput sgr0`

printf "\n${bold}==> ********** RECREATING AND RUNNING **********${normal} \n"
docker-compose -f dev.yml -f docker-compose.yml up -d