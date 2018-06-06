#!/bin/bash

# DO NOT MODIFY

bold=`tput bold`
normal=`tput sgr0`

# Khemlabs - Config script #

printf "\n${bold}==> ********** STOPPING **********${normal} \n"
docker-compose stop
