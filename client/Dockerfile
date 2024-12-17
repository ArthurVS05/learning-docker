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

# Copier les fichiers de configuration nécessaires 
# COPY vite.config.js ./
COPY . .

# Copier les répertoires src et public
# COPY src ./src
# COPY public ./public
# COPY index.html ./


# Exposer le port 8080 pour que l'application soit accessible
EXPOSE 8080

# Commande pour démarrer l'application en mode développement (via Vite, si c'est le cas)
CMD ["npm", "run", "dev"]

