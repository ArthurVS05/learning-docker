# Utiliser une image de base Node.js LTS basée sur Alpine
FROM node:lts-alpine

# Créer un dossier pour l'application
RUN mkdir /app

# Définir /app comme répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# 
RUN npm i

# Copier les fichiers du dossier src
COPY src src

# Commande par défaut pour démarrer l'application
CMD npm start

# Afin de tirer profit du cache de Docker on copie d'abord package.json et package-lock.json, on installe les paquets et enfin on copie le code source.
# De cette façon, Docker n'exécutera le npm i que si package.json a été modifié

# Pour compiler l'image depuis le terminal : 
# docker build -t express-docker .

# Un conteneur est un environnement isolé, pour accéder à une application sur un port particulier il faut spécifier que l'on veut l'exposer sur un port de la machine hôte.