#!/bin/bash

	

	echo "Verificando se os requisitos estão instalados..."
	
	if [ "$(dpkg --get-selections | grep 'default-jre' | wc -l)" = "0" ] ; then 
		
		echo "Instalando JRE..."
		
		echo
		
		sudo apt install default-jre -y 1> /dev/null 2> /dev/stdout
		
		sleep 15
		
		echo "JRE instalado"
		
		echo 

	fi
	
	if [ "$(ls -l | grep 'api-cras-default.jar' | wc -l)" = "0" ] ; then

		echo "Instalando a API..." 
	
		wget https://cdn.discordapp.com/attachments/817134413242433538/836412837076926504/api-cras-default.jar 1> /dev/null 2> /dev/stdout
	
		echo

		sleep 8


	fi

		echo "Executando a aplicação..."

		sleep 3

		java -jar api-cras-default.jar


	
