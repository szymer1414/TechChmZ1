# Etap 1: Budowanie aplikacji
FROM node:alpine AS builder-platform
WORKDIR /app
COPY skrypt.js package.json ./
RUN npm install --production

# Etap 2: Uruchamianie aplikacji
FROM node:alpine
COPY --from=builder-platform /app /app
WORKDIR /app
ENTRYPOINT ["node", "skrypt.js"]
#Szymon Prygiel