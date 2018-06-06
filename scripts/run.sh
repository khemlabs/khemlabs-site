#!/bin/bash

# DO NOT MODIFY

bold=`tput bold`
normal=`tput sgr0`

if [ -z "$DEV_MODE" ] 
then 
	printf "\n${bold}==> ********** PROD MODE **********${normal} \n"
	printf "\n${bold}==> run forever ${normal} \n"
	forever --minUptime 1000 --spinSleepTime 1000 app.js
else
	printf "\n${bold}==> ********** DEV MODE **********${normal} \n"
	printf "\n${bold}==> RUN npm update... ${normal} \n"
	npm update
	printf "\n${bold}==> run forever ${normal} \n"
  forever -w -c "node --inspect" --minUptime 1000 app.js
fi
